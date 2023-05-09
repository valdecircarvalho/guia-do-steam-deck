# EmulationStation-DE is a frontend application to manage all of your ROMs. 

## Introduction

EmuDeck installs EmulationStation-DE, which allows you to manage your ROMs through a single frontend application. It can either be used as an alternative or in tandem with Steam Rom Manager (an application that adds ROMs as game shortcuts to your Steam Library).

Website: https://es-de.org/

EmulationStation-DE's Wiki: https://gitlab.com/es-de/emulationstation-de/-/blob/master/USERGUIDE.md

EmulationStation-DE's FAQ: https://gitlab.com/es-de/emulationstation-de/-/blob/master/FAQ.md

Emulation-Station-DE Releases: https://gitlab.com/es-de/emulationstation-de/-/packages/

EmulationStation-DE currently scrapes art from https://thegamesdb.net/ and https://www.screenscraper.fr/

Read https://github.com/dragoonDorise/EmuDeck/wiki/Steam-Rom-Manager to learn more about Steam Rom Manager and how it can be used in tandem with EmulationStation-DE!


***

# Emulationstation-DE Table of Contents

1. [Getting started with EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#getting-started-with-emulationstation-de)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#configuration)
      - [How to Update EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-update-emulationstation-de)
      - [How to Launch EmulationStation-DE in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-launch-emulationstation-de-in-desktop-mode)
      - [How to add EmulationStation-DE to your Steam Library](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-add-emulationstation-de-to-your-steam-library)
      - [Hotkeys](#hotkeys)

2. [EmulationStation-DE Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-tips-and-tricks)
      - [Tips for Navigating EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#tips-for-navigating-emulationstation-de)
      - [How to Select a Different Emulator for a System](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-select-a-different-emulator-for-a-system)
      - [How to Select a Different Emulator on a Per-Game Basis](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-select-a-different-emulator-on-a-per-game-basis)
      - [How to Manage Multiple Discs](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-manage-multiple-discs)
      - [How to Download Themes](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-download-themes)

***

# Getting started with EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

* Executable Location: `Emulation/tools/EmulationStation-DE-x64_SteamDeck.AppImage`
* Scraped Media Location: `Emulation/tools/downloaded_media`
* Config Location: `/home/deck/.emulationstation`
  * Contains: `collections`, `custom_systems`, `gamelists`, `scrapers`, `scripts`, and `themes`

Note: `~/.emulationstation` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.

***

## How to Update EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

**How to Update EmulationStation-DE**

* Run `Update Emulators & Tools` in `EmuDeck`
* Run through the `EmuDeck` install
* Manual file replacement of `EmulationStation-DE-x64_SteamDeck.AppImage`
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.
*  Run through the `EmuDeck` install with a fresh download from https://www.emudeck.com/ 

***

## How to Launch EmulationStation-DE in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

**How to Launch EmulationStation-DE in Desktop Mode**

* Launch the AppImage in `/Emulation/tools/EmulationStation-DE-x64_SteamDeck.AppImage`
* Launch EmulationStation-DE from `Steam` after adding it via the `EmulationStationDE` parser in `Steam Rom Manager`

***

## How to Add EmulationStation-DE to your Steam Library
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

In Desktop Mode, you can open `EmulationStation-DE` by opening the executable here: `Emulation/tools/EmulationStation-DE-x64_SteamDeck.AppImage`. However, it's recommended you add EmulationStation-DE to Steam through Steam ROM Manager so you can use it in Game Mode as a front-end for your ROMs.

**Here's How**

1. In Desktop Mode, open Steam Rom Manager 
2. Turn all the parsers off except for `EmulationStation-DE`
   * It's recommended to turn on the `Emulators` parser as well so you can configure your Emulators directly in `Game Mode`
3. Click `Preview` in the top left of the application
4. Click `Generate app list`, wait a moment
5. Click `Save app list`, wait for a message to pop up: `Done adding/removing entries`
6. EmulationStation-DE will now be added to your Steam Library. 

Watch the following GIF for a visual: 

<img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/c165d87500dd88a51b8ec80c5173e0950aebfe25/GIFs/Adding%20EmulationStation-DE%20to%20Steam.gif" height="400">

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

EmulationStation-DE with a Steam Input profile for Hotkeys. Activate the Steam Input profile by clicking the `Game Controller` icon in `Game Mode`, change the template to `Emudeck - EmulationStation-DE`. The hotkeys below can only be used if you have the Steam Input profile active.

| Hotkey         | EmulationStation-DE       |
|----------------|---------------------------|
| Citra          | Left Trackpad Touch  Menu |
| Cemu           | Left Trackpad Touch  Menu |
| No Profile     | Left Trackpad Touch  Menu |
| mGBA           | Left Trackpad Touch  Menu |
| RMG            | Left Trackpad Touch  Menu |
| melonDS        | Left Trackpad Touch  Menu |
| PPSSPP         | Left Trackpad Touch  Menu |
| DuckStation    | Left Trackpad Touch  Menu |

For a tutorial on how to select Steam Input Profiles, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile.

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

# EmulationStation-DE Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

## Tips for Navigating EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

### Quick-Jumping Through Menus

* If you use the shoulder and trigger buttons, you can quick-jump through all menus, including the gamelist view menus. 

***

## How to Select a Different Emulator for a System
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

1. In EmulationStation-DE, press the `Start` button
2. Scroll down and select `Other Settings`
3. Select `Alternative Emulators`
4. Scroll down to the system you would like to configure, press `B`, and select your preferred emulator. 

Watch the following GIF for a visual:

<img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/8a63e0196e44930de6a3a328ea24429beea15673/GIFs/How%20to%20Select%20a%20Different%20Emulator%20for%20a%20System.gif" height="400">

***

## How to Select a Different Emulator on a Per-Game Basis
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

EmulationStation-DE allows you to pick alternative emulators on a per-game basis. This may come in handy when different emulators have different levels of compatibility. You can use this option to switch between Yuzu and Ryujinx on a per-game basis for the Nintendo Switch. 

On a game in a console list, press the `select ` button, scroll down and select `EDIT THIS GAME'S METADATA`, scroll down and select `ALTERNATIVE EMULATOR`, pick which emulator you would like to use for that game. 

**Note:** This feature is also required to get PrimeHack to work through EmulationStation-DE. For Primehack, place your `Metroid Prime Trilogy` ROM in the `wii` folder. Follow the above steps, and choose `PrimeHack [Standalone] ` for `Metroid Prime Trilogy`.

Watch the following GIF for a visual:

<img src="https://user-images.githubusercontent.com/108900299/193986411-74c137f0-c4d3-4c4a-a354-fd8f26fb546a.gif" height="400">

***

## How to Manage Multiple Discs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)


***

### Method 1:  Directories interpreted as files (Recommended)

1. Refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#how-to-create-an-m3u-file on how to create an M3U file
2. Place all of your disc files with the M3U file in a folder
3. Rename the folder to match the M3U file exactly including the file extension `.m3u`
   * Example: <img src="https://user-images.githubusercontent.com/108900299/220529984-3a333b70-ad70-4815-8490-45236414cd9a.png" height="300">

**Note:** 

* This method is not compatible with Steam ROM Manager. 
* Refer to https://gitlab.com/es-de/emulationstation-de/-/blob/master/USERGUIDE.md#directories-interpreted-as-files for additional details.

***

### Method 2: Create an M3U file and hide each of the disc entries in EmulationStation-DE

1. Refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#method-1-creating-an-m3u-file on how to create an m3u file.
2. In EmulationStation-DE, press `Start`, `Other Settings`, toggle `Show Hidden Games` off
   * <img src="https://user-images.githubusercontent.com/108900299/220525893-83723351-a594-4f40-b106-0170085139cd.png" height="300">
3. For each disc entry, press select, press `Edit This Game's Metadata`, scroll down, toggle on `Hidden`, press `Save`, `Apply`
3. Repeat for each disc entry

***

## How to Download Themes
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#emulationstation-de-table-of-contents)

**Themes List:** https://gitlab.com/es-de/themes/themes-list

### Prerequisites

* EmulationStation-DE 2.0 or above
   * In Desktop Mode, Open the EmuDeck App --> Tools and Stuff --> Update Emulators and tools --> Update AppImages

### How to Download Themes

MiSTer Menu will be used as an example in the below guide. 

1. From the themes list: https://gitlab.com/es-de/themes/themes-list, select a theme under `EmulationStation Desktop Edition (ES-DE) - Themes`
   * <img src="https://user-images.githubusercontent.com/108900299/224575757-623672e6-12ff-4afc-80e3-230cc0ca8ac3.png" height="300">
2. Open the link for the respective theme, it will take you the respective theme section on the EmulationStation-DE themes page 
3. Open the Github link, it will take you to a Github repository
   * <img src="https://user-images.githubusercontent.com/108900299/224561154-a4085184-0601-4b2e-9e6d-9fe69bebbcf9.png" height="300">
4. On the Github repository, press the green `Code` button in the top right
   * <img src="https://user-images.githubusercontent.com/108900299/224561062-9f50be3f-761c-4184-86e1-fa1cd5fbad2b.png" height="300">
5. Click `Download Zip`, download to a folder of your choice
   * <img src="https://user-images.githubusercontent.com/108900299/224561283-270d6c77-d2f0-4282-ad36-6c9e8f899a14.png" height="300">
6. Open the folder with the zipped theme, right click the theme, click `Extract`, `Extract archive here`
   * <img src="https://user-images.githubusercontent.com/108900299/224565489-9f50658a-aa48-4f09-b630-7735dad26566.png" height="300">
7. Move the unzipped theme folder to `/home/deck/.emulationstation/themes`
   * `~/.emulationstation` is an invisible folder by default. In Dolphin (file manager), click the hamburger button, ☰, in the top right, click `Show hidden files`
   * <img src="https://user-images.githubusercontent.com/108900299/224561598-8a3f27f2-5ade-4a13-ae4b-1eb740fadd55.png" height="300">
8. To use the theme: Open EmulationStation-DE in Game Mode, press the `Start` button, `UI Settings`, `Theme Set`, and select the theme you downloaded
   * <img src="https://user-images.githubusercontent.com/108900299/224561706-59d4dec1-2d0c-4c33-a1e8-3f5cf72c93a2.png" height="300">

***