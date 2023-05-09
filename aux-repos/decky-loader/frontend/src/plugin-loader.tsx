import { ConfirmModal, ModalRoot, Patch, QuickAccessTab, Router, showModal, sleep } from 'decky-frontend-lib';
import { FC, lazy } from 'react';
import { FaCog, FaExclamationCircle, FaPlug } from 'react-icons/fa';

import { DeckyState, DeckyStateContextProvider, useDeckyState } from './components/DeckyState';
import LegacyPlugin from './components/LegacyPlugin';
import { deinitFilepickerPatches, initFilepickerPatches } from './components/modals/filepicker/patches';
import PluginInstallModal from './components/modals/PluginInstallModal';
import NotificationBadge from './components/NotificationBadge';
import PluginView from './components/PluginView';
import WithSuspense from './components/WithSuspense';
import Logger from './logger';
import { Plugin } from './plugin';
import RouterHook from './router-hook';
import { deinitSteamFixes, initSteamFixes } from './steamfixes';
import { checkForUpdates } from './store';
import TabsHook from './tabs-hook';
import OldTabsHook from './tabs-hook.old';
import Toaster from './toaster';
import { VerInfo, callUpdaterMethod } from './updater';
import { getSetting } from './utils/settings';

const StorePage = lazy(() => import('./components/store/Store'));
const SettingsPage = lazy(() => import('./components/settings'));

const FilePicker = lazy(() => import('./components/modals/filepicker'));

class PluginLoader extends Logger {
  private plugins: Plugin[] = [];
  private tabsHook: TabsHook | OldTabsHook = document.title == 'SP' ? new OldTabsHook() : new TabsHook();
  // private windowHook: WindowHook = new WindowHook();
  private routerHook: RouterHook = new RouterHook();
  public toaster: Toaster = new Toaster();
  private deckyState: DeckyState = new DeckyState();

  private reloadLock: boolean = false;
  // stores a list of plugin names which requested to be reloaded
  private pluginReloadQueue: { name: string; version?: string }[] = [];

  private focusWorkaroundPatch?: Patch;

  constructor() {
    super(PluginLoader.name);
    this.tabsHook.init();
    this.log('Initialized');

    const TabBadge = () => {
      const { updates, hasLoaderUpdate } = useDeckyState();
      return <NotificationBadge show={(updates && updates.size > 0) || hasLoaderUpdate} />;
    };

    this.tabsHook.add({
      id: QuickAccessTab.Decky,
      title: null,
      content: (
        <DeckyStateContextProvider deckyState={this.deckyState}>
          <PluginView />
        </DeckyStateContextProvider>
      ),
      icon: (
        <DeckyStateContextProvider deckyState={this.deckyState}>
          <FaPlug />
          <TabBadge />
        </DeckyStateContextProvider>
      ),
    });

    this.routerHook.addRoute('/decky/store', () => (
      <WithSuspense route={true}>
        <StorePage />
      </WithSuspense>
    ));
    this.routerHook.addRoute('/decky/settings', () => {
      return (
        <DeckyStateContextProvider deckyState={this.deckyState}>
          <WithSuspense route={true}>
            <SettingsPage />
          </WithSuspense>
        </DeckyStateContextProvider>
      );
    });

    initSteamFixes();

    initFilepickerPatches();

    this.updateVersion();
  }

  public async updateVersion() {
    const versionInfo = (await callUpdaterMethod('get_version')).result as VerInfo;
    this.deckyState.setVersionInfo(versionInfo);

    return versionInfo;
  }

  public async notifyUpdates() {
    const versionInfo = await this.updateVersion();
    if (versionInfo?.remote && versionInfo?.remote?.tag_name != versionInfo?.current) {
      this.toaster.toast({
        title: 'Decky',
        body: `Update to ${versionInfo?.remote?.tag_name} available!`,
        onClick: () => Router.Navigate('/decky/settings'),
      });
      this.deckyState.setHasLoaderUpdate(true);
    }
    await sleep(7000);
    await this.notifyPluginUpdates();
  }

  public async checkPluginUpdates() {
    const updates = await checkForUpdates(this.plugins);
    this.deckyState.setUpdates(updates);
    return updates;
  }

  public async notifyPluginUpdates() {
    const updates = await this.checkPluginUpdates();
    if (updates?.size > 0) {
      this.toaster.toast({
        title: 'Decky',
        body: `Updates available for ${updates.size} plugin${updates.size > 1 ? 's' : ''}!`,
        onClick: () => Router.Navigate('/decky/settings/plugins'),
      });
    }
  }

  public addPluginInstallPrompt(artifact: string, version: string, request_id: string, hash: string) {
    showModal(
      <PluginInstallModal
        artifact={artifact}
        version={version}
        hash={hash}
        onOK={() => this.callServerMethod('confirm_plugin_install', { request_id })}
        onCancel={() => this.callServerMethod('cancel_plugin_install', { request_id })}
      />,
    );
  }

  public uninstallPlugin(name: string) {
    showModal(
      <ConfirmModal
        onOK={async () => {
          await this.callServerMethod('uninstall_plugin', { name });
        }}
        onCancel={() => {
          // do nothing
        }}
        strTitle={`Uninstall ${name}`}
        strOKButtonText={'Uninstall'}
      >
        Are you sure you want to uninstall {name}?
      </ConfirmModal>,
    );
  }

  public hasPlugin(name: string) {
    return Boolean(this.plugins.find((plugin) => plugin.name == name));
  }

  public dismountAll() {
    for (const plugin of this.plugins) {
      this.log(`Dismounting ${plugin.name}`);
      plugin.onDismount?.();
    }
  }

  public init() {
    getSetting('developer.enabled', false).then((val) => {
      if (val) import('./developer').then((developer) => developer.startup());
    });

    //* Grab and set plugin order
    getSetting<string[]>('pluginOrder', []).then((pluginOrder) => {
      console.log(pluginOrder);
      this.deckyState.setPluginOrder(pluginOrder);
    });
  }

  public deinit() {
    this.routerHook.removeRoute('/decky/store');
    this.routerHook.removeRoute('/decky/settings');
    deinitSteamFixes();
    deinitFilepickerPatches();
    this.focusWorkaroundPatch?.unpatch();
  }

  public unloadPlugin(name: string) {
    console.log('Plugin List: ', this.plugins);
    const plugin = this.plugins.find((plugin) => plugin.name === name || plugin.name === name.replace('$LEGACY_', ''));
    plugin?.onDismount?.();
    this.plugins = this.plugins.filter((p) => p !== plugin);
    this.deckyState.setPlugins(this.plugins);
  }

  public async importPlugin(name: string, version?: string | undefined) {
    if (this.reloadLock) {
      this.log('Reload currently in progress, adding to queue', name);
      this.pluginReloadQueue.push({ name, version: version });
      return;
    }

    try {
      this.reloadLock = true;
      this.log(`Trying to load ${name}`);

      this.unloadPlugin(name);

      if (name.startsWith('$LEGACY_')) {
        await this.importLegacyPlugin(name.replace('$LEGACY_', ''));
      } else {
        await this.importReactPlugin(name, version);
      }

      this.deckyState.setPlugins(this.plugins);
      this.log(`Loaded ${name}`);
    } catch (e) {
      throw e;
    } finally {
      this.reloadLock = false;
      const nextPlugin = this.pluginReloadQueue.shift();
      if (nextPlugin) {
        this.importPlugin(nextPlugin.name, nextPlugin.version);
      }
    }
  }

  private async importReactPlugin(name: string, version?: string) {
    let res = await fetch(`http://127.0.0.1:1337/plugins/${name}/frontend_bundle`, {
      credentials: 'include',
      headers: {
        Authentication: window.deckyAuthToken,
      },
    });
    if (res.ok) {
      try {
        let plugin_export = await eval(await res.text());
        let plugin = plugin_export(this.createPluginAPI(name));
        this.plugins.push({
          ...plugin,
          name: name,
          version: version,
        });
      } catch (e) {
        this.error('Error loading plugin ' + name, e);
        const TheError: FC<{}> = () => (
          <>
            Error:{' '}
            <pre>
              <code>{e instanceof Error ? e.stack : JSON.stringify(e)}</code>
            </pre>
            <>
              Please go to <FaCog style={{ display: 'inline' }} /> in the Decky menu if you need to uninstall this
              plugin.
            </>
          </>
        );
        this.plugins.push({
          name: name,
          version: version,
          content: <TheError />,
          icon: <FaExclamationCircle />,
        });
        this.toaster.toast({ title: 'Error loading ' + name, body: '' + e, icon: <FaExclamationCircle /> });
      }
    } else throw new Error(`${name} frontend_bundle not OK`);
  }

  private async importLegacyPlugin(name: string) {
    const url = `http://127.0.0.1:1337/plugins/load_main/${name}`;
    this.plugins.push({
      name: name,
      icon: <FaPlug />,
      content: <LegacyPlugin url={url} />,
    });
  }

  async callServerMethod(methodName: string, args = {}) {
    const response = await fetch(`http://127.0.0.1:1337/methods/${methodName}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authentication: window.deckyAuthToken,
      },
      body: JSON.stringify(args),
    });

    return response.json();
  }

  openFilePicker(
    startPath: string,
    includeFiles?: boolean,
    regex?: RegExp,
  ): Promise<{ path: string; realpath: string }> {
    return new Promise((resolve, reject) => {
      const Content = ({ closeModal }: { closeModal?: () => void }) => (
        // Purposely outside of the FilePicker component as lazy-loaded ModalRoots don't focus correctly
        <ModalRoot
          onCancel={() => {
            reject('User canceled');
            closeModal?.();
          }}
        >
          <WithSuspense>
            <FilePicker
              startPath={startPath}
              includeFiles={includeFiles}
              regex={regex}
              onSubmit={resolve}
              closeModal={closeModal}
            />
          </WithSuspense>
        </ModalRoot>
      );
      showModal(<Content />);
    });
  }

  createPluginAPI(pluginName: string) {
    return {
      routerHook: this.routerHook,
      toaster: this.toaster,
      callServerMethod: this.callServerMethod,
      openFilePicker: this.openFilePicker,
      async callPluginMethod(methodName: string, args = {}) {
        const response = await fetch(`http://127.0.0.1:1337/plugins/${pluginName}/methods/${methodName}`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authentication: window.deckyAuthToken,
          },
          body: JSON.stringify({
            args,
          }),
        });

        return response.json();
      },
      fetchNoCors(url: string, request: any = {}) {
        let args = { method: 'POST', headers: {} };
        const req = { ...args, ...request, url, data: request.body };
        req?.body && delete req.body;
        return this.callServerMethod('http_request', req);
      },
      executeInTab(tab: string, runAsync: boolean, code: string) {
        return this.callServerMethod('execute_in_tab', {
          tab,
          run_async: runAsync,
          code,
        });
      },
      injectCssIntoTab(tab: string, style: string) {
        return this.callServerMethod('inject_css_into_tab', {
          tab,
          style,
        });
      },
      removeCssFromTab(tab: string, cssId: any) {
        return this.callServerMethod('remove_css_from_tab', {
          tab,
          css_id: cssId,
        });
      },
    };
  }
}

export default PluginLoader;
