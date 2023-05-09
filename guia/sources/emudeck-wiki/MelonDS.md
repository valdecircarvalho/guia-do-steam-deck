# melonDS is a Nintendo DS emulator.

Website: https://melonds.kuribo64.net/

melonDS' FAQ: https://melonds.kuribo64.net/faq.php

Github: https://github.com/melonDS-emu/melonDS

Compatibility List: https://melonds.kuribo64.net/board/forum.php?id=3

**This page is for melonDS, a standalone NDS emulator. This page is not for the melonDS RetroArch core. For more information on RetroArch and the melonDS RetroArch core, visit https://github.com/dragoonDorise/EmuDeck/wiki/Retroarch.**

***

# melonDS Table of Contents

1. [Getting Started with melonDS](#getting-started-with-melonds)
      - [Configuration](#configuration)
      - [How to Update melonDS](#how-to-update-melonds)
      - [How to Launch melonDS in Desktop Mode](#how-to-launch-melonds-in-desktop-mode)
      - [File Formats](#file-formats)
      - [Hotkeys](#hotkeys)

2. [melonDS Tips and Tricks](#melonds-tips-and-tricks)
      - [How to Use Cheats](#how-to-use-cheats)
      - [How to Set up DSIWare](#how-to-set-up-dsiware)
      - [How to Play Nintendo DS Games in Book Mode](#how-to-play-nintendo-ds-games-in-book-mode)

***

# Getting Started with melonDS
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

melonDS is a fairly straight-forward emulator to set up. Place your ROMs in `Emulation/roms/nds`. No additional setup is required. Read the [Configuration](#configuration) section to learn more about melonDS and its folder locations. BIOS are optional for both the Nintendo DS and Nintendo DSI. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your NDS ROMs:

* `EmulationStation-DE`
* `Nintendo DS - melonDS` 
* `Emulators`

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/net.kuribo64.melonDS`
* ROM Location: `Emulation/roms/nds`
* BIOS Location: `Emulation/bios`
   * Optional BIOS (Nintendo DS): `bios7.bin`, `bios9.bin`, `firmware.bin`
   * Optional BIOS (Nintendo DSI): `dsi_bios9.bin`, `dsi_bios7.bin`, `dsi_firmware.bin`, `dsi_nand.bin`
* Saves: `Emulation/saves/melonds/saves`
* Savestates: `Emulation/saves/melonds/states`
* Cheats Location: `Emulation/storage/melonds/cheats`

**Note:** `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  

### Works With
* Steam ROM Manager
* EmulationStation-DE


***

## How to Update melonDS
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

**How to Update melonDS**

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`

***

## How to Launch melonDS in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

**How to Launch melonDS in Desktop Mode**

* Launch `melonDS` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `melonds.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

* .nds
* .app

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

melonDS comes with a Steam Input profile for Hotkeys. Activate the Steam Input profile by clicking the `Game Controller` icon in `Game Mode`, change the template to `Emudeck - melonDS`. The hotkeys below can only be used if you have the Steam Input profile active.

| Hotkey         | melonDS                   |
|----------------|---------------------------|
| Full Screen    | Left Trackpad Radial Menu |
| Save State Menu| Left Trackpad Radial Menu |
| Load State Menu| Left Trackpad Radial Menu |
| Pause          | Left Trackpad Radial Menu |
| Cheats         | Left Trackpad Radial Menu |
| Microphone     | Left Trackpad Radial Menu |
| Close Lid      | Left Trackpad Radial Menu |
| Swap Screens   | Left Trackpad Radial Menu |
| Reset          | Left Trackpad Radial Menu |

For a tutorial on how to select Steam Input Profiles, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile.

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

# melonDS Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

***

## How to Use Cheats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

**Note:** melonDS does not currently support importing cheats from a database file.

### How to Enable Cheats in melonDS

1. Open melonDS
2. Click `System` at the top
3. Check `Enable cheats`
    * <img src="https://user-images.githubusercontent.com/108900299/220514789-7511568d-4806-4528-8521-ea1d6e35b989.png" height="300">

### How to Download the Cheats Database

1. Open https://db.universal-team.net/ds/ndsi-cheat-databases, right click `cheats.xml`, and click `Save As`
2. Place it in `Emulation/storage/melonds/cheats`
    * This folder placement is optional, you may place it wherever you want
3. To view, right click `cheats.xml`, open with a text editor of your choice

### How to Use the Cheats Database

**Note:** It's recommended you do this in Desktop mode so you can easily copy from the cheats database into MelonDS. After adding cheats, you can use MelonDS in Game Mode. 

1. Open the `cheats.xml` you downloaded from the `How to Download the Cheats Database` section
2. `CTRL` + `F` the game you are adding cheats to
3. Copy the blocks of alphanumerical strings between the two `<codes> <codes>` for your respective cheat
   * Example: <img src="https://user-images.githubusercontent.com/108900299/220517493-9305654f-660e-4845-8210-ea1da61ce2b2.png" height="300">
4. Open MelonDS
5. Open a ROM
6. Click `System` at the top
7. Click `Setup cheat codes`
8. Create a `New Category`, you may name it whatever you would like
9. Click `New AR Code`
10. Match the name of the AR Code to the cheat you located in Step 3
    * The name is flexible, you may name it whatever you would like
11. Paste the code you copied from Step 3, it will appear as red text
13. Format the cheat so there are two blocks of code per line
    * Original: <img src="https://user-images.githubusercontent.com/108900299/220517044-dc4c547b-7a13-4a42-aa34-c3f36786c320.png" height ="300">
    * Corrected: <img src="https://user-images.githubusercontent.com/108900299/220516960-47147c37-d914-4ced-9893-f5b9c9e47781.png" height="300">
14. Some cheats are automatically activated, others will require a button combo. Look at the `cheats.xml` file to see if a button combo is required to activate your cheat

***

## How to Set Up DSIWare
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

1. If you have a game that when extracted is just "00000000", change the extension to ".app" so it becomes "00000000.app". This makes the game recognizable in melonDS.
2. Place your DSI BIOS in `Emulation/bios`.
   * Read: https://github.com/dragoonDorise/EmuDeck/wiki/melonds#getting-started-with-melonds for additional detail
3. Open melonDS. At the main screen, select Config -> Emu Settings
4. In General: Console type -> DSi (experimental)
5. In DSi-mode: Point the ARM9 BIOS, ARM7 BIOS, Firmware, and NAND to the files you acquired
6. At the main screen, select System -> Manage DSi titles
7. In DSi Title Manager: Import title
8. Select your 00000000.app as the Executable, then for Metadata select "Download from NUS"
9. At the main screen, select File -> Boot Firmware
10. Select your newly-installed DSiWare game and start playing

***

## How to Play Nintendo DS Games in Book Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/melonds#melonds-table-of-contents)

A handful of Nintendo DS games require portrait orientation. For these games, you will need to rotate the Steam Deck screen in order to play them. Fortunately, it's a simple process.

**Here's How**

1. In Game Mode, select the `EmuDeck - MelonDS` profile if you are playing a game directly from Game Mode or the `EmuDeck - EmulationStation-DE` profile if you are playing through EmulationStation-DE
   * [How to Select A Steam Input Profile](https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile)
2. Open the game, use the Steam Input profile and select the `Fullscreen` hotkey
3. At the top, press `Config`, `Screen Rotation`, `270`
   * <img src="https://user-images.githubusercontent.com/108900299/224400268-181fd70c-3ef1-470d-85ef-9a8897211958.png" height="300">
   * <img src="https://user-images.githubusercontent.com/108900299/224400552-b53ddd81-c448-473e-9951-5003cb8b6b14.png" height="300">

***

Original: <img src="https://user-images.githubusercontent.com/108900299/224400685-7f8b98be-b75b-4758-9d84-07ae3e5f8179.png" height="300">

Rotated: <img src="https://user-images.githubusercontent.com/108900299/224400804-2155e870-d6fd-4e3b-8b6b-2ecf47812db8.png" height="300">

***