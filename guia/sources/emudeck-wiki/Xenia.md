# Xenia is an Xbox 360 Emulator. 

Website: https://xenia.jp/

Github: https://github.com/xenia-project/xenia

Compatibility List: https://github.com/xenia-project/game-compatibility/issues

Xenia's FAQ: https://github.com/xenia-project/xenia/wiki/faq

Xenia's Quickstart Guide: https://github.com/xenia-project/xenia/wiki/Quickstart

**IMPORTANT:** Xenia does not currently run well on Linux/SteamOS. Most games will not boot or will not be playable. This emulator is currently in an experimental state for Linux/SteamOS.

***

# Xenia Table of Contents

1. [Getting Started with Xenia](#getting-started-with-xenia)
      - [Configuration](#configuration)
      - [How to Update Xenia](#how-to-update-xenia)
      - [How to Launch Xenia in Desktop Mode](#how-to-launch-xenia-in-desktop-mode)
      - [File Formats](#file-formats)
      - [Hotkeys](#hotkeys)
      - [EmuDeck Compatibility List](#emudeck-compatibility-list)

2. [Xenia Tips and Tricks](#xenia-tips-and-tricks)


***

# Getting Started with Xenia
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

Xenia can only be installed on the Beta version of EmuDeck, on the `Manage Emulators` page.

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

* Run `Update Emulators & Tools` in `EmuDeck`
* Manual file replacement of `xenia_canary.exe` 
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.

***

## How to Launch Xenia in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

**How to Launch Xenia in Desktop Mode**

* Launch `xenia EmuDeck` from the `Applications Launcher` (Steam Deck icon in the bottom left of the taskbar)
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

# Xenia Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xenia#xenia-table-of-contents)

***