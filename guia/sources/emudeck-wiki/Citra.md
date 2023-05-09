# Citra is a Nintendo 3DS Emulator.

Website: https://citra-emu.org/

Github: https://github.com/citra-emu/citra

Compatibility List: https://citra-emu.org/game/

***

# Citra Table of Contents

1. [Getting Started with Citra](https://github.com/dragoonDorise/EmuDeck/wiki/citra#getting-started-with-citra)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/citra#configuration)
      - [How to Update Citra](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-update-citra)
      - [How to Launch Citra in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-launch-citra-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/citra#file-formats)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/citra#hotkeys)

2. [Common Pitfalls](#common-pitfalls)
      - [Why did my game suddenly stop working?](#why-did-my-game-suddenly-stop-working)

2. [Citra Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-tips-and-tricks)
      - [How to Configure Gyro](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-configure-gyro)
      - [How to Optimize Performance (Power Tools)](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-optimize-performance-power-tools)
      - [How to Install Custom Textures](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-install-custom-textures)
      - [How to Install Custom Textures](https://github.com/dragoonDorise/EmuDeck/wiki/citra#how-to-install-custom-textures)
      - [How to Configure Bottom Screen as PiP](#how-to-configure-bottom-screen-as-pip)
      - [How to Configure Bottom Screen With Opacity](#how-to-configure-bottom-screen-with-opacity)

***

# Getting Started with Citra
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

Citra is a fairly straight-forward emulator to set up. Place your ROMs in `Emulation/roms/n3ds` or `Emulation/roms/3ds`. No additional setup is required if you are using decrypted ROMs. Read the [Configuration](#configuration) section to learn more about Citra and its folder locations. The [Configuration](#configuration) section covers where to place your `aes_keys.txt` if you are using encrypted ROMs. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your Citra ROMs:

* `EmulationStation-DE`
* `Nintendo 3DS - Citra` 
* `Emulators`


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/org.citra_emu.citra`
* ROM location: `Emulation/roms/3ds` or `Emulation/roms/n3ds`
* `aes_keys.txt` location: `/home/deck/.var/app/org.citra_emu.citra/data/citra-emu/sysdata/` 
   * _Only necessary if the 3DS ROM is encrypted_
   * If the `sysdata` folder does not exist, create it. 
* Saves Location:
   * Symlink: `Emulation/saves/citra/saves`
   * Target: `/home/deck/.var/app/org.citra_emu.citra/data/citra-emu/sdmc`
* Savestates Location:
   * Symlink: `Emulation/saves/citra/states/`
   * Target: `/home/deck/.var/app/org.citra_emu.citra/data/citra-emu/states`

**Note:** `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click `Show Hidden Files` to see these folders.

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Citra
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

**How to Update Citra**

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`


***

## How to Launch Citra in Desktop Mode

**How to Launch Citra in Desktop Mode**

* Launch `Citra` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `citra.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

* .3ds 
* .3dsx 
* .app 
* .axf 
* .cci 
* .cxi 
* .elf

**IMPORTANT:** 
* `.cia` can only be used if you install it through Citra. **Do not** place your `.cia` ROMs in either the `Emulation/roms/3ds` or the `Emulation/roms/n3ds` folders. The .cia file format **is not** compatible with Steam ROM Manager and EmulationStation-DE.

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

# Hotkeys

Citra comes with a Steam Input profile for Hotkeys. Activate the Steam Input profile by clicking the `Game Controller` icon in `Game Mode`, change the template to `Emudeck - Citra 3DS`. The hotkeys below can only be used if you have the Steam Input profile active.

|        Hotkey        |                 Citra                 |
|:--------------------:|:-------------------------------------:|
| Full Screen Toggle   | `L4`                                  |
| Layout Toggle        | `L5`                                  |
| Swap Screens         | `R4`                                  |
| Quit                 | Long Press `R5`                       |
| Save State           | Left Trackpad Touch Menu              |
| Load State           | Left Trackpad Touch Menu              |
| Fast Forward         | Left Trackpad Touch Menu              |
| Pause                | Left Trackpad Touch Menu              |
| Exit                 | `Double Tap` Left Trackpad Touch Menu |
| Full Screen          | Left Trackpad Touch Menu              |
| Swap Screens         | Left Trackpad Touch Menu              |
| Change Screen Layout | Left Trackpad Touch Menu              |

For a tutorial on how to select Steam Input Profiles, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile.

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

# Common Pitfalls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

***

## Why did my game suddenly stop working? 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

A recent update to some back-end changes may cause some crashing with games that were working previously. To fix this issue, you will need to delete the `shaders` folder.

**Here's How**

1. In Desktop Mode, open `/home/deck/.var/app/org.citra_emu.citra/data/citra-emu`
   * `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click `Show Hidden Files` to see these folders
2. Delete the `shaders` folder
3. Try your game again

This should be a one-time fix and your games should work again moving forward. 

***

# Citra Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

***

## How to Configure Gyro
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

Gyro for Citra requires SteamDeckGyroDSU. SteamDeckGyroDSU can be installed via EmuDeck in the `Tools & Stuff` menu, or it can be installed manually.

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/203438190-68cd4120-c416-4af0-a48f-069afeebe7f5.png" height="400"> 

**How to Install SteamDeckGyroDSU:** https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-steamdeckgyrodsu

***

## How to Optimize Performance (Power Tools)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

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
* **IMPORTANT:** Some 3DS games will not perform well regardless and will require the Citra team to improve compatibility
  * In some cases, these games may have workarounds through modifying settings or applying patches or mods. Search on Google for your respective game, and see if these workarounds exist
  * Check the Citra Compatibility List: https://citra-emu.org/game/

***

## How to Install Custom Textures
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

Here's how to install custom textures for Citra:

1. Open the Citra emulator. Click `Emulation` in the top left. Click `Configuration`, `Graphics`, and check `Use Custom Textures`
   1. `Preload Custom Textures` is generally recommended as well but in the current version of Citra, it crashes the emulator. Read the explanation below the tutorial for additional detail.
   2. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/196013341-d75408b8-2295-4946-a315-10c2186c90f2.png" height="300">
2. Open https://3ds.jdbye.com/?details=USA&split=0&display=0 in a browser, and note down the `Title ID` for the game you would like to install custom textures for. 
3. Open `/home/deck/.var/app/org.citra_emu.citra/data/citra-emu/load/textures`
   1. `~/.var` is an invisible folder by default. In Dolphin (file manager), click the `☰` (hamburger menu) in the top right, click "view hidden files" to see these folders.  
   2. If the `load` and `textures` folder do not exist, create them.
4. In the `textures` folder from Step 3, create a folder matching the `TitleID` from Step 2.
5. Put your texture files directly into this folder.
6. Your texture pack should now be installed. 

**IMPORTANT:** There is a current bug where turning on `Preload Textures` will crash the game if it is being launched from a shortcut made by Steam ROM Manager or EmulationStation-DE. 

There are two workarounds:

* Turn off `Preload Textures`. Turning off `Preload Textures` may negatively impact performance.
* Turn on `Preload Textures` and launch your game directly from Citra instead of through a shortcut made by Steam ROM Manager or EmulationStation-DE. 

For a visual on how to install custom textures, watch the following GIF:

<img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/81df29947ca5665637ea98df4d02630a37bf07ea/GIFs/How%20to%20Install%20Custom%20Textures%20for%20Citra.gif" height="400">

***

## How to Configure Bottom Screen as PiP
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

Credit: `NexLevel`

Citra allows you to configure the bottom screen as a sort of PiP (Picture in Picture) overlay on the top screen, by editing the qt-config file. 

**Here's How**

(Add specific steps)

1.

qt-config: 

```
[Layout]
custom_top_bottom=784
custom_top_left=0
custom_top_right=1280
custom_top_top=16
custom_bottom_bottom=800
custom_bottom_left=520
custom_bottom_right=760
custom_bottom_top=620
custom_second_layer_opacity=33
custom_layout=true
layout_option=1
layout_option\default=false
```

```
yup you can move up the screen a bit. if you want to keep the same 5:3 aspect ratio, set custom_top_top=0 and custom_top_bottom=768
```

***

## How to Configure Bottom Screen With Opacity
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/citra#citra-table-of-contents)

Credit: `NexLevel`

A recent update of Citra allows the ability to set the opacity on the bottom screen. In combination with setting the bottom screen as a PiP overlay: [link], you can create a Citra layout that looks like the following: 

**Example 1:** <img src="https://user-images.githubusercontent.com/108900299/219829080-3e871ada-cde0-44b5-9781-0294a9a9fc7b.png" height="300">

**Example 2:** <img src="https://user-images.githubusercontent.com/108900299/219829095-8fe0e1e9-aa15-4750-b917-899373ce10e7.png" height="300">
 
**Here's How**

(Add specific steps)

qt-config: 

```
[Layout]
custom_top_bottom=784
custom_top_left=0
custom_top_right=1280
custom_top_top=16
custom_bottom_bottom=800
custom_bottom_left=520
custom_bottom_right=760
custom_bottom_top=620
custom_second_layer_opacity=33
custom_layout=true
layout_option=1
layout_option\default=false
```

```
here is my layout config as shown in the screenshots. the opacity can be any integer between 1-100. be sure to remove the default=true lines
```

***