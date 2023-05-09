# Yuzu is a Nintendo Switch emulator.

Website: https://yuzu-emu.org/

Github: https://github.com/yuzu-emu/yuzu-mainline

Github Releases: https://github.com/yuzu-emu/yuzu-mainline/releases

Compatibility List: https://yuzu-emu.org/game/

Quickstart guide: https://yuzu-emu.org/help/quickstart/

***


# Yuzu Table of Contents

1. [Getting Started with Yuzu](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#getting-started-with-yuzu)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#configuration)
      - [How to Update Yuzu](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-update-yuzu)
      - [How to Launch Yuzu in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-launch-yuzu-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#file-formats)
      - [How to Manage DLC and Updates](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-manage-dlc-and-updates)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#hotkeys)
      - [Known Issues](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#known-issues)

2. [Common Pitfalls](#common-pitfalls)
      - [Why is Mario Kart 8 stuck on the Mii selection screen?](#why-is-mario-kart-8-stuck-on-the-mii-selection-screen)

2. [Yuzu Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-tips-and-tricks)
      - [How to Configure Gyro](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-configure-gyro)
      - [How to Optimize Performance (Power Tools)](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-optimize-performance-power-tools)
      - [How to Configure Multiplayer](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-configure-multiplayer)
      - [How to Install Mods](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#how-to-install-mods)
      - [Special Characters](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#special-characters)
      - [Special Game Configurations](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#special-game-configurations)


***

# Getting Started with Yuzu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

In order to play Nintendo Switch games on Yuzu, you will need a `prod.keys` file to decrypt your ROMs. The `title.keys` file is auto-generated. You will need to continue to keep your `prod.keys` up to date as new Nintendo Switch firmware releases. 

If you play a Nintendo Switch game with Miis (for example - Mario Kart 8 Deluxe), you will need firmware files. 

Read Yuzu's Quick Start guide to learn how to dump Nintendo Switch keys, firmware, and ROMs: https://yuzu-emu.org/help/quickstart/. 

Place your ROMs in `Emulation/roms/switch`. Read the [Configuration](#configuration) section to learn more about Yuzu and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your Nintendo Switch ROMs:

* `EmulationStation-DE`
* `Nintendo Switch - Yuzu` 
* `Emulators`


***

## Configuration:
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

* Type of Emulator: AppImage
* Executable Location: `/home/deck/Applications/yuzu.AppImage`
* Config Location: `/home/deck/.config/yuzu/`
* Default storage Location: `/home/deck/.share/local/yuzu/`
* Persistent Storage: `Emulation/storage/yuzu`
  * Contains: `dump`, `load`, `nand`, `screenshots`, `sdmc`, and `tas`
* ROMs: `Emulation/roms/switch/`
* Firmware: `Emulation/bios/yuzu/firmware/`
* Keys: `Emulation/bios/yuzu/keys/`
* Saves:
  * Symlink: `Emulation/saves/yuzu/`
  * Target: `Emulation/storage/yuzu/nand/user/save/`

**Note:** `~/.local` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  

### Works with:
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Yuzu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

**How to Update Yuzu**

* Run `Update Emulators & Tools` in `EmuDeck`
* Run through the `EmuDeck` install on your desktop
* Manual file replacement of `Yuzu`
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#how-to-swap-out-appimages-and-binaries for instructions. 
*  Run through the `EmuDeck` install with a fresh download from https://www.emudeck.com/ 

**IMPORTANT:** Prior to version 0.17.5 of Emudeck, we used the Flatpak version of Yuzu. This was installed from the discover store. We have since moved away from this release for performance reasons, and usability reasons (menus not opening).  When updating to Emudeck 0.17.5 or later your data will be migrated from the flatpak location to the appimage location. During this time, your nand (installed data) will also be migrated to the Emulation/storage/yuzu folder.

If you happened to use the Appimage at a prior time, and you have data in its data paths, you will be prompted about which one to keep. The data will be backed up, and your choice will be used.

***

## How to Launch Yuzu in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

**How to Launch Yuzu in Desktop Mode**

* Launch `yuzu EmuDeck` from the `Applications Launcher` (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `yuzu.sh`
* Launch the AppImage in `/home/deck/Applications/Yuzu.AppImage`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager` 

***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

* .kp 
* .nca 
* .nro 
* .nso 
* .nsp 
* .xci

***

## How to Manage DLC and Updates
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

DLC and Updates are installed directly through the Yuzu menu. 

**Quick Tutorial**

1. In Desktop Mode, open Yuzu
2. Click `File`
3. Click `Install Files to NAND..`
   * <img src="https://user-images.githubusercontent.com/108900299/221684457-9e642cec-06bc-4acb-b6ba-ec7acf8b3539.png" height="300">
4. (Optional) If your DLC or update files are on your SD Card, your path is: `/run/media/...`. To navigate here, click `Computer` on the left, open the `/` folder, open the `run` folder, then the `media` folder, and follow the path to the files on your SD Card. 
5. Your DLC or update files are now installed

**IMPORTANT:** Do not keep your DLC or update files in the `Emulation/roms/switch` folder. Steam ROM Manager will parse your updates and DLC and create broken shortcuts. After installing your DLC or updates, you can discard them or save them for Ryujinx. 

Ryujinx expects your DLC and update files to stay permanently in a folder, either in a folder of your choice, or in `Emulation/storage/ryujinx/patchesAndDlc`. For further detail, read: https://github.com/dragoonDorise/EmuDeck/wiki/ryujinx#how-to-manage-dlc-and-updates. 


***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Combo hotkeys have been mapped for this emulator.

| Hotkey       | Yuzu                  |
|--------------|-----------------------|
| Menu / Full Screen | `Select` + `R3`       |
| Docked Mode  | `Start` + `DPAD Up`   |
| GPU Accuracy | `Start` + `DPAD Down` |
| Filter       | `Start` + `DPAD Left` |
| Pause        | `Select` + `A`        |
| Fast Forward | `Select` + `R2`       |
| Exit | `Select` + `Start`|

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

## Known Issues
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

* Files with special characters in the name will not launch from shortcuts created by Steam ROM Manager in Steam or EmulationStation-DE. Rename your ROMs if they contain any of the following characters.
     * Known Cases: 
         * `é` in Pokémon
         * `'` in Link's Awakening
* The 3.4.6 SteamOS Stable Update on March 13th updated Mesa to 23.1. Some games may be affected. 
     * Known Issues: 
         * Super Mario 3D World has flicking textures in snow levels. 
     * Recommended Workarounds:
         * Use the Yuzu Flatpak
         * Test older Yuzu versions
     * Date added to this page: March 14th, 2023
* Yuzu Mainline 1296 merged YFC 1.5. Recent versions of Yuzu may have some stability issues or regressions. 
     * Recommended Versions: 
         * Mainline 1295: https://github.com/yuzu-emu/yuzu-mainline/releases/tag/mainline-0-1295
     * Date added to this page: January 19th, 2023
* Shin Megami Tensei V may have some performance regressions in recent versions of Yuzu. 
     * Recommended Versions: 
         * Mainline 1069: https://github.com/yuzu-emu/yuzu-mainline/releases/tag/mainline-0-1069
     * Date added to this page: January 19th, 2023
* Pokemon Legends Arceus may have some crashes in recent versions of Yuzu.
     * Recommended Versions: 
         * Mainline 984: https://github.com/yuzu-emu/yuzu-mainline/releases/download/mainline-0-984/yuzu-20220414-0d81d4395.AppImage
     * Date added to this page: Jun 16, 2022



***

# Common Pitfalls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)


***

## Why is Mario Kart 8 stuck on the Mii selection screen?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Dump and use your firmware-NAND and keys from your console following Yuzu's [quickstart guide](https://yuzu-emu.org/help/quickstart/). 

The firmware must contain Mii data. Without it, the game will get stuck on the Mii selection screen.

Reference Image: <img src="https://user-images.githubusercontent.com/108900299/229313988-00e1529b-636d-43bf-989b-49c44ba82a10.png" height="300">

Once you have dumped your firmware with the proper Mii data, you will be able to proceed through the Mii selection menu.  

***

# Yuzu Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

***

## How to Configure Gyro
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Gyro for Yuzu requires SteamDeckGyroDSU. SteamDeckGyroDSU can be installed via EmuDeck in the `Tools & Stuff` menu, or it can be installed manually.

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/203438190-68cd4120-c416-4af0-a48f-069afeebe7f5.png" height="400"> 

**How to Install SteamDeckGyroDSU:** https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-steamdeckgyrodsu

***

## How to Optimize Performance (Power Tools)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

**Prerequisites**

* Decky Loader and Power Tools
  * Power Tools can be installed via EmuDeck in the `Tools & Stuff` menu, or it can be installed manually
     * **Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/203443895-be44fb04-e855-4cdf-a45e-23e339ac5fc9.png" height="400"> 
     * Although this screen does not explicitly state Decky Loader, Decky Loader is included in this installation
  *  **Step by Step Instructions on How to Install Power Tools:** https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-power-tools-and-deckyloader

***

**Recommended Settings**
* Power Tools: Turn SMT off     
  * Open the `QAM` ("..." button), select the `Socket` icon, select `POWERTOOLS`, turn off `SMT`
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160535-d57e2ecf-c4dc-499a-9682-16183000aff7.png" height="200">
  * (Optional) Use the `Persistent` toggle to set these settings on a per-game basis
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207163585-3e3cb3a0-486e-4bf5-bbcd-b44e2f431b28.png" height="200">
* Steam Deck Performance Menu: Set Manual GPU Clock Control to 1200 frequency
  * Open the `QAM` ("..." button), select the `Battery` icon, enable `Advance View`, scroll down, enable `Manual GPU Clock Control`, and set it to `1200` 
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160899-88b5f89c-788d-480e-ba89-de9435d0b454.png" height="200">
  * Toggle per game profiles
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160776-07742e76-a082-4a91-b05f-193a42288662.png" height="200">
* **IMPORTANT:** Some Nintendo Switch games will not perform well regardless and will require the Yuzu team to improve compatibility 
  * In some cases, these games may have workarounds through modifying settings or applying patches or mods. Search on Google for your respective game, and see if these workarounds exist
  * Check the Yuzu Compatibility List: https://yuzu-emu.org/game/

***

## How to Configure Multiplayer
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Multiplayer for Yuzu is configured out of the box, no additional configuration is needed. 

You may need to set the `Controller Order` in the Steam QAM (`...` button). 

***
## How to Install Mods
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

**Mod Resources**

_This list is not comprehensive_

* Yuzu Mods: https://yuzu-emu.org/wiki/switch-mods/
  * This is not an exhaustive list of mods available for Yuzu
  * Alternate link: https://github.com/yuzu-emu/yuzu/wiki/Switch-Mods
* Yuzu Mod Instructions: https://yuzu-emu.org/help/feature/game-modding/
* GameBanana Mods: https://gamebanana.com/
  * Search by game name
* Nexus Mods: https://www.nexusmods.com/
  * Search by game name
* GBAtemp: https://gbatemp.net/forums/nintendo-switch.283/?prefix_id=56
  * Use https://gbatemp.net/search/?type=post to search
      * Sort by `ROM Hack` in the prefixes list and `Nintendo Switch` in the `Search in forums` list
      * To narrow search results, use the `Search titles only` toggle
* SweetFX: http://sfx.thelazy.net/games/
  * Search by game name
* theboy181
  * 1: Github Collection: https://github.com/theboy181/switch-ptchtxt-mods
  * 2: Github Collection: https://github.com/theboy181/switch-cheat-mods
  * 3: theboy181's Discord: https://linktr.ee/theboy181

***

**Preface**

Read Yuzu's instructions on how to install mods here: https://yuzu-emu.org/help/feature/game-modding/

The folder structure of a mod is important. It should generally look like the following:

```
mod_directory
  - exefs
  - romfs
  - romfs_ext
```

***

**Tutorial**

1. In Desktop Mode, open Yuzu
2. Right click a game you intend on modding
3. Click `Open Mod Data Location`
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/201798674-bdc115fd-b6f9-465f-a9d3-39374e756a97.png" height="300">
4. Place your mod folder in the opened folder
   1. You may need to extract the mod first
   2. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/201798900-ec578de7-de6f-45f7-b5a4-dfc2fd82b4c3.png" height="300">
5. In Yuzu, right click the same game, open `Properties`, click the `Add-Ons` tab
6. Check the box to the left of your mod(s)
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/201799059-bd2e8a1a-0549-47ea-9d7b-1b5b75807f8d.png" height="300">
7. Your mod is now installed

***

## Special Characters 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Files with special characters in the ROM name will not launch from steam. Rename your ROMs and remove the special character.

Known **Cases**:
* `é` in `Pokémon`
* `'` in `The Legend of Zelda: Link's Awakening`

If you used Steam ROM Manager previously, re-run Steam ROM Manager after renaming your ROMs. 

***

## Special Game Configurations
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/yuzu#yuzu-table-of-contents)

Some games will take additional setup, requiring mods or an extensive alteration of settings. The EmuDeck Community Creations page collects these configurations in one centralized location. 

You can submit or view special game configurations here: https://github.com/dragoonDorise/EmuDeck/wiki/community-creations#yuzu-nintendo-switch

**Current List of Special Game Configurations**

* The Legend of Zelda: Link's Awakening


***