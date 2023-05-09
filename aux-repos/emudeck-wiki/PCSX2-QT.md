# PCSX2-QT is a Sony Playstation 2 emulator. 

Website: https://pcsx2.net/

PCSX2-QT Releases: https://pcsx2.net/downloads/#nightly-anchor

Github: https://github.com/PCSX2

Compatibility List: https://forums.pcsx2.net/Forum-Public-compatibility-list

PCSX2 Wiki: https://wiki.pcsx2.net/Main_Page

***

# PCSX2-QT Table of Contents

1. [Getting Started with PCSX2](#getting-started-with-pcsx2)
      - [Configuration](#configuration)
      - [How to Update PCSX2](#how-to-update-pcsx2)
      - [How to Launch PCSX2 in Desktop Mode](#how-to-launch-pcsx2-in-desktop-mode)
      - [File Formats](#file-formats)
      - [Hotkeys](#hotkeys)
      
2. [Common Issues](#common-issues)
      - [Controller isn't working?](#controller-isnt-working)
      - [Black screen immediately or just after the game boots?](#black-screen-immediately-or-just-after-the-game-boots)
      - [After starting a game it goes back to Steam or EmulationStation-DE?](#after-starting-a-game-it-goes-back-to-steam-or-emulationstation-de)
      - [Why do some of my multi-disc games not show up in Steam ROM Manager?](#why-do-some-of-my-multi-disc-games-not-show-up-in-steam-rom-manager)
3. [PCSX2 Tips and Tricks](#pcsx2-tips-and-tricks)
      - [How to Optimize Performance (Power Tools)](#how-to-optimize-performance-power-tools)
      - [How to Optimize Storage (Compression Tool)](#how-to-optimize-storage-compression-tool)
      - [How to Manage Multiple Discs](#how-to-manage-multiple-discs)
      - [How to Switch to Folder Memory Cards](#how-to-switch-to-folder-memory-cards)
      - [How to use Cheats](#how-to-use-cheats)
      - [How to Set Game Settings On a Per-Game Basis](#how-to-set-game-settings-on-a-per-game-basis)
      - [How to Use Custom Textures Packs](#how-to-use-custom-texture-packs)
***

## Getting Started with PCSX2
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

PCSX2 is a fairly straight-forward emulator to set up. Place your ROMs in `Emulation/roms/ps2`. Place your BIOS directly in `Emulation/bios`. Read the [Configuration](#configuration) section to learn more about PCSX2 and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your PS2 ROMs:

* `EmulationStation-DE`
* `Sony PlayStation 2 - PCSX2` 
* `Emulators`


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

* Type of Emulator: AppImage
* Executable Location: `/home/deck/Applications/pcsx2-Qt.AppImage`
* Config Location: `/home/deck/.config/PCSX2`
  * Contains: `cheats`, `cheats_ni`, `cheats_ws`, `gamesettings`, `inis`, `inputprofiles`, and `logs`
* Storage Location: `Emulation/storage/PCSX2`
  * Contains: `cache`, `covers`, `snaps`, and `textures`
* ROM location: `Emulation/roms/ps2/`
* BIOS location: `Emulation/bios/`  
  * **IMPORTANT:** Files go directly in this folder. Do not make or use a `PS2`, `PCSX2`, or any sort of folder here. PCSX2 will not be able to find your bios files if they are in a folder. 
  * Required BIOS (Europe Example Set): `SCPH-70004_BIOS_V12_EUR_200.BIN`, `SCPH-70004_BIOS_V12_EUR_200.EROM`, `SCPH-70004_BIOS_V12_EUR_200.ROM1`, `SCPH-70004_BIOS_V12_EUR_200.ROM2`
  * Required BIOS (US Example Set): `SCPH-70012_BIOS_V12_USA_200.BIN`
* Saves: `Emulation/saves/pcsx2/saves`
* Savestates `Emulation/saves/pcsx2/states`

**Note:** `~/.config` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  

**Important Info:** Prior to version 0.17.6 of EmuDeck, we used the Flatpak version of PCSX2. This was installed from the discover store. We have since moved away from this release for performance reasons, and usability reasons (menus not opening).

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update PCSX2
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

**How to Update PCSX2**

* Through the `Update your Emulators & Tools` section on the `Manage Emulators` page in the `EmuDeck` application
* Manual file replacement of `pcsx2-Qt.AppImage` 
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.

***

## How to Launch PCSX2 in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

**How to Launch PCSX2 in Desktop Mode**

* Launch `PCSX2-QT AppImage` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `pcsx2-Qt.sh`
* Launch the AppImage in `/home/deck/Applications/pcsx2-Qt.AppImage`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

* .iso 
* .bin 
* .chd

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

|            Hotkey           |        PCSX2-QT        |
|:---------------------------:|:----------------------:|
| Menu                        | `Start` + `L3`         |
| Full Screen                 | `Select` + `R3`        |
| Exit                        | `Select` + `Start`     |
| Pause/Unpause Emulation     | `Select` + `A`         |
| Fast Forward                | `Select` + `R2`        |
| Slow Motion                 | `Select` + `L2`        |
| Load State                  | `Select` + `L1`        |
| Save State                  | `Select` + `R1`        |
| Next Save Slot              | `Start` + `R1`         |
| Previous Save Slot          | `Start` + `L1`         |
| Increase Upscale Multiplier | `Start` + `DPad Up`    |
| Decrease Upscale Multiplier | `Start` + `DPad Down`  |
| Cycle Aspect Ratio          | `Start` + `DPad Right` |
| Toggle Software Rendering   | `Start` + `DPad Left`  |

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

# Common Issues
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

***

## Controller isn't working?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

Try turning off multitap. Certain games may not handle it.

1. Open PCSX2-QT
2. Open the `Controllers` settings menu
3. Disable Multitap

<img src="https://user-images.githubusercontent.com/108900299/230689881-a34703f4-80a9-4033-8f65-cc52c6a5a74e.png" height="300">

***

## Black screen immediately or just after the game boots?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

This indicates a bad dump. Please validate and redump your game files.

How to validate your ROMs: https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-to-verify-a-rom-is-valid

***

## After starting a game it goes back to Steam or EmulationStation-DE?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

This usually means you haven't placed your bios in the right place.

Where to place your BIOS: https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#configuration

***

## Why do some of my multi-disc games not show up in Steam ROM Manager?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

Primarily with the Playstation 2 parser, turning on `Remove (...) and [...] brackets` will trim the ROM name and cause Steam ROM Manager to deem multiple discs of the same game as the same file. When you generate an app list, only one of your discs will show up. 

To fix this, do one of the following solutions:
* Remove the () in the file name
  * Open the respective folder with the ROMs, and rename each disc to remove the ()
  * Example: 
      * Original File Name: `Xenosaga: Episode 2 (Disc 1)` and `Xenosaga: Episode 2 (Disc 2)`
      * Updated File Name: `Xenosaga: Episode 2 Disc 1` and `Xenosaga: Episode 2 Disc 2`
* Turn off `Remove (...) and [...] brackets` in the respective parser
   * Visual Reference (Using Playstation 2 as an example):  <img src="https://user-images.githubusercontent.com/108900299/206884232-b2b1ed76-6310-4586-8c75-b15c643e3f6a.png" height="300">
   * **Note:** With this setting off, Steam ROM Manager will include any content in the parantheses of the file name when parsing ROMs. This means that if you include region names or any other information in parantheses, your ROM will include this information in a generated app list

***


# PCSX2 Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

***

## How to Optimize Performance (Power Tools)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

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
* **IMPORTANT:** Some Playstation 2 games will not perform well regardless and will require the PCSX2 team to improve compatibility
  * In some cases, these games may have workarounds through modifying settings or applying patches or mods. Search on Google for your respective game, and see if these workarounds exist
  * Check the PCSX2 Compatibility list: https://pcsx2.net/compat/

***


## How to Optimize Storage (Compression Tool)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

To optimize storage, you can use the `EmuDeck Compressor` within EmuDeck.  

The `EmuDeck Compressor` will compress your Playstation 2 ROMs from ISO or BIN/CUE to CHD. If your ROM is a BIN/CUE, the Compression Tool will only compress it if you have both the BIN and the CUE files for a ROM. If the ROM is in a zip file or is missing a paired BIN or CUE file, the Compression Tool will not detect the ROM. 

After running the `EmuDeck Compression Tool`, re-run Steam ROM Manager to update your ROM shortcuts to the newly compressed ROM. 

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/198798630-9cf85bc5-ff42-45c4-bceb-7fc4ac740c3c.png" height="300">

***

## How to Manage Multiple Discs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

PCSX2 does not support M3U files. 

You can manage multiple discs two ways:

### Method 1: Hotkeys

1. While in game, when you are ready to switch discs, press `Start` + `L3` at the time
2. Select `Change Disc` and select your next disc

### Method 2: Separate Game Entries

1. When you are ready to switch discs, save and exit out of your game
2. Open the next disc entry, either as a separate shortcut through Steam ROM Manager or a separate entry through EmulationStation-DE

***

## How to Switch to Folder Memory Cards
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

By default PCSX2 stores each memory card as a single file. This doesn't have any compatibility problems, but means that once you hit the 8MB limit you'll have to start manually swapping cards. You can get around this by converting to folders for your memory cards:

1. Open PCSX2
2. Settings menu > Memory cards
3. Eject the memory cards you wish to convert, by clicking the appropriate eject icons near the top of the window
4. Right click each card to convert, and select "Convert"
5. Ensure the conversion type dropdown is set to "Folder" and click OK
   1. This process will create a new folder that is a copy of the original memory card file. The file will be left intact as a backup.
6. Right click the newly converted memory card folder, and select Use for slot 1/Use for slot 2 as appropriate
7. At the bottom of the window, ensure "Automatically manage saves based on running game" is checked

PCSX2 will now give each game it's own separate memory card automatically.

***

## How to use Cheats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

**Cheat Resources**

_This list is not comprehensive_

* https://forums.pcsx2.net/Thread-Post-your-PCSX2-cheats-patches-here
* https://gamehacking.org/system/ps2
* https://forums.pcsx2.net/Thread-No-interlacing-codes
* https://forums.pcsx2.net/Thread-Fixing-unplayable-games

Cheat files have a `.pnach` file extension. Sometimes websites will provide the raw content of a cheats file. You can copy and paste these contents into a text file, and save the file as `<crc>.pnach`. The website will usually provide the crc as an 8 character long alphanumerical string. You can find more information about PCSX2 cheats here: https://wiki.pcsx2.net/Game_cheats. 

**Tutorial**

1. Place your cheat file, with a `.pnach` file extension in `/home/deck/.config/PCSX2/cheats`
2. Open PCSX2-QT
3. Right click the game you are adding cheats for, click `Properties..`, click `Emulation` and check `Enable Cheats`
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/203470189-f81311b4-912d-488a-b0c8-48eecf24c037.png" height="300">
4. Repeat for each game

***

## How to Set Game Settings On a Per-Game Basis
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

1. In either Desktop or Game Mode, open PCSX2
2. (Optional) Exit out of PCSX2's big picture mode by clicking the square box in the top right
   * <img src="https://user-images.githubusercontent.com/108900299/233122295-4c29bd44-e71c-4fbf-8e5a-7839d1eb80fb.png" height="300">
3. Right click a game
   * In Game Mode, hold `Steam` and click `L2` to right click 
4. Click `Properties`
   * <img src="https://user-images.githubusercontent.com/108900299/233122582-9f29a2aa-6d61-4a10-ad01-0914954907ea.png" height="300">
5. Select your settings, any settings changed in this menu will only be applied for this specific game

***

## How to Use Custom Textures Packs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/pcsx2-qt#pcsx2-qt-table-of-contents) 

**Texture Pack Sources**

_This list is not exhaustive_

* https://gbatemp.net/threads/list-of-hd-texture-packs-by-panda_venom.620163/

***

**How to Use Custom Textures Packs**

1. Download a texture pack
2. Place it here:`Emulation/storage/pcsx2/textures/GAMEID/replacements`
   * The `GAMEID` will be unique to your game 
   * Typically a texture pack download will come in this format: `GAMEID/replacements`
   * If the texture pack does not come in the standard format, you can locate the `GAMEID` by doing the following:
     * Open PCSX2
     * Right click the game
     * Click `Properties`
     * The `GAMEID` will be in the `Serial` box
   * <img src="https://user-images.githubusercontent.com/108900299/232943226-21d9f542-3fff-4fbb-9c5a-05e1323f9926.png" height="300">
3. Open PCSX2
4. Right click the game
5. Click `Game Properties`
6. Click `Graphic Settings`
   * <img src="https://user-images.githubusercontent.com/108900299/232942780-09e56c2b-53d1-4d11-aee2-e9add3e9d15b.png" height="30">
7. Scroll down to `Texture Replacements` and toggle `Load Textures
   * Optionally, toggle `Asynchronous Texture Loading`
   * <img src="https://user-images.githubusercontent.com/108900299/232942987-8c49715d-3ff6-441a-90f2-507fde73a58a.png" height="300">
8. Your game will now be using the custom texture pack
  
***