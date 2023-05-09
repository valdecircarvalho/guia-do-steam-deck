# Xenia is an Xbox 360 Emulator. 

Website: https://xenia.jp/

Github: https://github.com/xenia-project/xenia

Compatibility List: https://github.com/xenia-project/game-compatibility/issues

Xenia's FAQ: https://github.com/xenia-project/xenia/wiki/faq

Xenia's Quickstart Guide: https://github.com/xenia-project/xenia/wiki/Quickstart

**IMPORTANT:** Xenia does not currently run well on Linux/SteamOS. Most games will not boot or will not be playable. This emulator is currently in an experimental state for Linux/SteamOS.

We HIGHLY suggest looking to see if a game you wish to emulate has a native PC version on Steam, Lutris, etc. or has a PS3 version than can be run with RPCS3 instead.

***

# Xenia Table of Contents

1. [Getting Started with Xenia](#getting-started-with-xenia)
      - [Configuration](#configuration)
      - [How to Update Xenia](#how-to-update-xenia)
      - [How to Launch Xenia in Desktop Mode](#how-to-launch-xenia-in-desktop-mode)
      - [File Formats](#file-formats)
      - [Hotkeys](#hotkeys)
      - [EmuDeck Compatibility List](#emudeck-compatibility-list)

2. [Common Issues](#common-issues)
      - [The Dangers of Proton](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#the-dangers-of-proton)

3. [Xenia Tips and Tricks](#xenia-tips-and-tricks)
      - [How to Swap Out Xenia Builds](#how-to-swap-out-xenia-builds)


***

# Getting Started with Xenia
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

**IMPORTANT:**  Currently, Xbox Live Arcade games have the highest compatibility on Linux/SteamOS. Most Xbox 360 games do not run well on Xenia, on Linux/SteamOS at this time. Xenia does not currently run well on Linux/SteamOS. Most games will not boot or will not be playable. This emulator is currently in an experimental state for Linux/SteamOS.

Xenia is a fairly straight-forward emulator to set up. Place your Xbox 360 ROMs in `Emulation/roms/xbox360/roms` or Xbox Live Arcade ROMs in `Emulation/roms/xbox360/roms/xbla`. No additional setup is required. Read the [Configuration](#configuration) section to learn more about Xenia and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your Xbox 360 ROMs:

* `EmulationStation-DE`
* `Microsoft Xbox 360 - Xenia` 
* `Microsoft Xbox 360 - Xenia - XBLA` 
* `Emulators`

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)


* Type of Emulator: Windows Executable through Proton
* Executable Location (Xenia Script): `Emulation/tools/launchers/xenia.sh`
  * Use `xenia.sh` to launch Xenia in Desktop Mode
* Executable Location (Windows EXE): `Emulation/roms/xbox360/xenia_canary.exe`
  * Do not launch Xenia in Desktop Mode with `xenia_canary.exe`
* Config Location: `Emulation/roms/xbox360`
* Xbox 360 ROM Location: `Emulation/roms/xbox360/roms`
  * Note the second `roms` folder in the path 
* Xbox Live Arcade ROM Location: `Emulation/roms/xbox360/roms/xbla`
  * Note the second `roms` folder in the path 
* BIOS: No BIOS are required to play Xenia
* Saves Location: `Emulation/roms/xbox360/content`

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Xenia
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

**How to Update Xenia**

* Through the `Update your Emulators & Tools` section on the `Manage Emulators` page in the `EmuDeck` application
* Manual file replacement of `xenia_canary.exe` 
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.

***

## How to Launch Xenia in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

**How to Launch Xenia in Desktop Mode**

* Launch `xenia (Proton)` from the `Applications Launcher` (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `xenia.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager` 

***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

* .iso
* .xex
* No file extension
  * For Xbox Live Arcade Games

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

N/A

*** 

## EmuDeck Compatibility List
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

Currently, Xbox Live Arcade games have the highest compatibility on Linux/SteamOS. Most Xbox 360 games do not run well on Xenia, on Linux/SteamOS at this time. 

This compatibility list primarily comes from the EmuDeck Discord. If you have any additions, either edit this page or send a message in the Xenia channel. 

This section should be used in tandem with the EmuDeck community compatibility list: https://docs.google.com/forms/d/e/1FAIpQLScavGFOuGpEVpyHdRVcPjdrCEquG9ItBaloa8Q0XaiNlu_Afg/viewform. If you add a game to this section, consider adding it to the community compatibility list as well. 

### Playable Games
* GoldenEye 007 (XBLA)
  * Works, runs well
  * Tested Date: `Unknown`
  * This is specifically referring to: https://arstechnica.com/gaming/2021/02/ex-rare-devs-open-up-about-the-canceled-goldeneye-007-remake-for-xbox-360/
* Banjo Kazooie (XBLA)
  * Works, runs well
  * Tested Date: `Unknown`
* Alien Hominid HD (XBLA)
  * Works, runs well
  * Tested Date: `Unknown`
* Feeding Frenzy (XBLA)
  * Runs perfectly under Vulkan, graphical glitches when using DirectX12
  * Tested Date: `February 24th, 2023`
* Geometry Wars Evolved (XBLA)
  * Runs perfectly under Vulkan
  * Tested Date: `February 24th, 2023`
* Marvel vs Capcom Origins
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* Marvel vs Capcom 2
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* Space Invaders Infinity Gene
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* Splosion Man
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* The Simpsons Arcade
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* X-Men Arcade
  * Works, runs well
  * Tested Date: `March 8th, 2023`
* Beautiful Katamari
  * Works, runs between 40 and 60 FPS
  * Tested Date: `March 8th, 2023`

### Non-Playable Games

* Rayman Legends (DISC GAME)
  * Crashes on Vulkan, Runs very smooth on DX12 with heavy artifacts on top and middle of screen
  * Tested Date `February 24th, 2023`
* Perfect Dark (XBLA)
  * Major z fighting issues and missing graphics
  * Tested Date: `Unknown`
* Forza Horizon 1
  * Does not boot
  * Tested Date: `September 3rd, 2022`
* Doritos Crash Course
  * Playable but avatar invisible
  * Xbox Avatars are not supported in Xenia currently
  * Tested Date: `March 8th, 2023`
* Hydro Thunder
  * Slow with major graphical issues
  * Tested Date: `March 8th, 2023`

***

# Common Issues
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

***

## The Dangers of Proton
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-table-of-contents)

**IMPORTANT:**

**DO NOT set Proton Compatibity on Xenia or Xenia games added to Steam.** Do NOT set `STEAM_COMPAT_MOUNTS` in parameters.

**Turning on Proton is not necessary because EmuDeck created a custom script to launch Xenia through Proton. Turning on Proton through Steam breaks EmuDeck's custom script.**

Do not open the `Compatibility` screen in `Game Mode`. Do not touch any of the settings on the `Compatibility` screen in `Game Mode`. 

<img width="500" alt="proton" src="https://user-images.githubusercontent.com/108900299/194777064-526930f4-c36c-44be-b26a-ec192375ef7b.png">

***

# Xenia Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

***

## How to Swap Out Xenia Builds
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

Xenia, through Proton/Wine, is currently in an experimental state. Updates may break or affect the emulator in unexpected ways. If an update does break certain games launching from Xenia, it is easy to swap out the build for an older one so you can continue playing.

Currently (as of April 26th, 2023), build `e9d1e51_canary_experimental` (released April 2nd, 2023) has the highest compatibility. This section will go over how to swap out the latest build of Xenia Canary for `e9d1e51_canary_experimental`. However, you can take what is written here and apply it to future builds of Xenia Canary as well. 

**Tutorial**

1. In Desktop Mode, download `xenia_canary.zip` from: https://github.com/xenia-canary/xenia-canary/releases/tag/e9d1e51
2. Extract the zip file to a folder of your choice
3. Copy or move `xenia_canary.exe` in the newly extracted folder to `Emulation/roms/xbox360` and overwrite the pre-existing `xenia_canary.exe`
4. To test, you can open Xenia by launching `xenia.sh` from `Emulation/tools/launchers` or `xenia (Proton)` from the applications launcher in the bottom left
5. Xenia will now be using your swapped out build. However, you can update to the latest build at any time through EmuDeck


***