# Cemu is a Wii U Emulator.

Website: https://cemu.info/

Github: https://github.com/cemu-project/Cemu

Compatibility List: https://compat.cemu.info/

**This page is for the native build of Cemu. EmuDeck installs the native build of Cemu on the EmuDeck Beta. Both versions will remain installed. One quick way to tell the difference is to compare the two GUIs. For the Proton version of Cemu, visit https://github.com/dragoonDorise/EmuDeck/wiki/Cemu.**

Native Cemu: <img src="https://user-images.githubusercontent.com/108900299/226765451-f9e712cd-f6c5-4257-8821-8957f28b3745.png" height="300">

Proton Cemu: <img src="https://user-images.githubusercontent.com/108900299/226765705-e8aa00ff-d647-4965-9e8a-253dfb36f289.png" height="300">

# Cemu Native Table of Contents

1. [Getting started with Cemu](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#getting-started-with-cemu)
      - [Setting up Cemu Questionnaire](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#setting-up-cemu-questionnaire)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#configuration)
      - [The Dangers of Proton](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#the-dangers-of-proton)
      - [How to Update Cemu](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-update-cemu)
      - [How to Launch Cemu in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-launch-cemu-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#file-formats)
      - [How to Convert to WUA](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-convert-to-wua)
      - [How to Install DLC and Updates](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-install-dlc-and-updates)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#hotkeys)
      - [Known Issues](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#known-issues)

2. [Cemu Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#cemu-tips-and-tricks)
      - [How to Configure Gyro](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-configure-gyro)
      - [How to Optimize Performance (Power Tools)](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-optimize-performance-power-tools)
      - [How to Configure Multiplayer](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-configure-multiplayer)
      - [How to Use the Wii U Pro Controller Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#how-to-use-the-wii-u-pro-controller-configuration)
      - [How to Configure Cemu Native to Work With EmulationStation-DE](#how-to-configure-cemu-native-to-work-with-emulationstation-de)
      - [Breath of the Wild Optimization](https://github.com/dragoonDorise/EmuDeck/wiki/cemu-native#breath-of-the-wild-optimization)

***

# Getting started with Cemu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**IMPORTANT:** Cemu is shifting away from encrypted ROMs (WUX, WUD). It is strongly recommended you use decrypted ROMs (Loadiine, WUA). Decrypted ROMs do not need any additional configuration and should launch without any issue.

Cemu is a fairly straight-forward emulator to set up, _if_ you use decrypted ROMs. Place your ROMs in `Emulation/roms/wiiu/roms`. No additional setup is required. Read the [Configuration](#configuration) section to learn more about Cemu and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your Wii U ROMs:

* `EmulationStation-DE`
* `Nintendo WiiU - Cemu (.rpx) - Native` or `Nintendo WiiU - Cemu (.wud, .wux, .wua) - Native`
   * Read the [File Formats](#file-formats) section to learn more about these various file formats
   * `.rpx` and `.wua` are decrypted ROM formats
* `Emulators`

_If_ you intend on using encrypted ROMs, proceed to the [Setting up Cemu Questionnaire](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#setting-up-cemu-questionnaire). 

***

## Setting up Cemu Questionnaire
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**IMPORTANT:** Cemu is shifting away from encrypted ROMs (WUX, WUD). It is strongly recommended you use decrypted ROMs (Loadiine, WUA). Decrypted ROMs do not need any additional configuration and should launch without any issue. If you use decrypted ROMs, you do not need the following questionnaire. 

**Setting up Cemu Questionnaire**

1. Is your ROM encrypted? If yes, do you have a `keys.txt` in the right place with the correct keys for your games in the `keys.txt` file?
   1. What are keys?: Keys are required to decrypt Wii U ROMs. Your `keys.txt` needs to contain keys (one key per game) that must be dumped from a Wii U console. Any other method of obtaining keys is piracy and cannot be discussed here or on the EmuDeck discord.
   2. Which Cemu ROM Formats are encrypted?: https://github.com/dragoonDorise/EmuDeck/wiki/cemu#file-formats 
   3. `keys.txt` Location: `/home/deck/.local/share/Cemu/`
   4. If your ROM is NUS Format (a folder with .h3 and .app files), you will need to decrypt your ROM into the Loadiine format (folder format with three subfolders - code, content, meta). Decryption methods cannot be discussed here or on the EmuDeck discord.
2. Is your ROM decrypted?
    1. Which Cemu ROM Formats are decrypted?: https://github.com/dragoonDorise/EmuDeck/wiki/cemu#file-formats
    2. If your ROM is decrypted, place the ROM in `Emulation/roms/wiiu/roms`. Your game should launch without needing any keys. 
3. If you are getting an `Unable to launch game` error, did you place the `keys.txt` in the right place?
   1. `keys.txt` Location: `/home/deck/.local/share/Cemu/`
4. If you placed the `keys.txt` in the right place, and your ROM is still not working, does your `keys.txt` have the correct key for the ROM?
   1. Even if you placed a key for your game in `keys.txt`, you may still have the incorrect key. 
5. Did you transfer your ROM from another computer and did you compare file sizes to ensure it transferred successfully? 
6. Did you turn on Proton in Steam? If yes, turn it off. If you are unsure, check.
   1. How do I check?: https://github.com/dragoonDorise/EmuDeck/wiki/cemu#the-dangers-of-proton


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**IMPORTANT:** Cemu is shifting away from encrypted ROMs (WUX, WUD). It is strongly recommended you use decrypted ROMs (Loadiine, WUA). Decrypted ROMs do not need any additional configuration and should launch without any issue.

* Type of Emulator: AppImage
* Executable Location:  `/home/deck/Applications/Cemu.AppImage`
* Configuration: `/home/deck/.config/Cemu/`
* Persistent Storage: `Emulation/roms/wiiu/mlc01/`
* ROM Location: `Emulation/roms/wiiu/roms` 
  * Note the second `roms` folder in the path. 
  * Do not put DLC / update files in the ROM path. Refer to https://github.com/dragoonDorise/EmuDeck/wiki/cemu#installing-dlc-and-updates for DLC and updates. 
* `keys.txt` Location: `/home/deck/.local/share/Cemu/`
   * The `keys.txt` is only necessary if the Wii U ROM is encrypted.
   * `keys.txt` needs to contain keys (one key per game) that must be dumped from a Wii U console. Any other method of obtaining keys is piracy and cannot be discussed here or on the EmuDeck discord.
* Saves Location:
   * Symlink:  `Emulation/saves/Cemu/saves/`
   * Target: `Emulation/roms/wiiu/mlc01/usr/save`

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## The Dangers of Proton
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**IMPORTANT:**

There is outdated info on the internet that indicates you need to set Proton on Cemu or on games added for this console by Steam ROM Manager in Steam. Turning on Proton is not necessary. **DO NOT set Proton Compatibity on Cemu or Cemu games added to Steam.** Do NOT set `STEAM_COMPAT_MOUNTS` in parameters.

**Turning on Proton is not necessary because this is the native linux version of Cemu.**

Do not open the `Compatibility` screen in `Game Mode`. Do not touch any of the settings on the `Compatibility` screen in `Game Mode`. 

<img width="500" alt="proton" src="https://user-images.githubusercontent.com/108900299/194777064-526930f4-c36c-44be-b26a-ec192375ef7b.png">

***

## How to Update Cemu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**How to Update Cemu**

* Run `Update Emulators & Tools` in `EmuDeck`
* Run through the `EmuDeck` install on your desktop
* Manual file replacement of `Cemu.AppImage` 
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#how-to-swap-out-appimages-and-binaries for instructions. 
*  Run through the `EmuDeck` install with a fresh download from https://www.emudeck.com/ 

***

## How to Launch Cemu in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

**How to Launch Cemu in Desktop Mode**

* Launch `Cemu EmuDeck` from the `Applications Launcher` (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `cemu.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager` 

***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

* Loadiine (rpx)
    * Three folders (code, content, meta) 
    * Folders should be inside a folder with the name of the game. This game folder is placed in `Emulation/roms/wiiu/roms` (note the second `roms`)
    * **Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/194643616-cdf86618-1869-4ba5-b95e-f14066e77ac1.png" width="300">
    * Decrypted, does not require `keys.txt` 
* WUA 
    * Decrypted, does not require `keys.txt`
* WUX
    * Encrypted, requires `keys.txt` in `/home/deck/.local/share/Cemu/`
* WUD 
    * Encrypted, requires `keys.txt` in `/home/deck/.local/share/Cemu/`
* NUS
    * A folder with `.h3` and `.app` files
    * Encrypted, can be decrypted into a `Loadiine (rpx)` folder. Decryption methods cannot be discussed here or on the EmuDeck discord.

**IMPORTANT:**

* Some of these formats may require keys. We cannot help you get these. Place your `keys.txt` in: `/home/deck/.local/share/Cemu/`
  * `keys.txt` needs to contain keys (one key per game) that must be dumped from a Wii U console. Any other method is piracy and cannot be discussed here or on the EmuDeck discord.
* Once you put ROMs in place, you must refresh the list of games by right clicking in the Cemu UI and clicking `Refresh Games List`.
  * Your game will not show up in Cemu until you refresh. 
* Refer to https://github.com/dragoonDorise/EmuDeck/wiki/cemu#installing-dlc-and-updates, for DLC and Updates. 

***

## How to Convert to WUA
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

The WUA format is a compressed version of the Loadiine format. It contains your base game, DLC, and updates all in one single file. The WUA format is a lot less fuss than the other formats, requires no keys, and is the most friendly format for EmulationStation-DE.

Here's how to convert to WUA:

**Note:** 
* Encrypted ROMs (WUX, WUD, NUS) cannot be converted to WUA

**Tutorial**

1. Open Cemu
2. Click `Tools`, `Title Manager`
   1. <img src="https://user-images.githubusercontent.com/108900299/226769311-0c9961f3-57d8-48fe-a7d9-babafcfc761f.png" height="300">
3. Either search for your ROM or find it in the list
4. Select the ROM with the word `base` in the `Type` column
   1. <img src="https://user-images.githubusercontent.com/108900299/226769442-cad00efe-9a9b-4d28-a461-e55cb7e2e4a8.png" height="300">
5. Verify the pop-up prompt has your base game, your update, and your DLC files
   1. You can either place these update and DLC files in `Emulation/roms/wiiu/roms` temporarily or install them: https://github.com/dragoonDorise/EmuDeck/wiki/cemu#installing-dlc-and-updates
6. Wait, it may take a while
7. Right click in Cemu, and click `Refresh Game List` to refresh your file path in Cemu to the newly created WUA file

***

## How to Install DLC and Updates
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

### Preface

DLC and Updates must be installed using the title manager. DLC and UPdates are saved to mlc01, in the `Emulation/roms/wiiu` folder.

**IMPORTANT:** Do not keep your DLC and update files in `Emulation/roms/wiiu/roms`. After installing them, you may either delete them or move them to a backup location. Keeping DLC and update files in this directory will create duplicates in Steam ROM Manager.  

***

## How to Install DLC and Updates
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#table-of-contents)

### Preface

DLC and Updates must be installed using the title manager. DLC and UPdates are saved to mlc01, in the `Emulation/roms/wiiu` folder.

**IMPORTANT:** Do not keep your DLC and update files in `Emulation/roms/wiiu/roms`. After installing them, you may either delete them or move them to a backup location. Keeping DLC and update files in this directory will create duplicates in Steam ROM Manager.  

***

### How to Install DLC and Updates

1. Launch Cemu on Desktop Mode
2. Click `File` in the top left, click `Install game title, update, or DLC...`
   * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/226768498-90501d46-1656-4ade-b52d-615c80f73fef.png" height="300">
3. Navigate to to your Update or DLC files
   * If your files are on your SD Card, click `Other Locations`, `Computer`, `run`, `media`, and navigate to your SD Card
   * Example SD Card Path: `/run/media/mmcblk0p1`
4. Select the Update or DLC and click `Open`
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/226768959-2078b493-e542-4d16-a42f-b5f8372d809d.png" height="300">
5. Wait a moment, and your DLC or update will be successfully installed. Repeat for each DLC or update


***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

Cemu comes with a Steam Input profile for Hotkeys. Activate the Steam Input profile by clicking the `Game Controller` icon in `Game Mode`, change the template to `Emudeck - Cemu`. The hotkeys below can only be used if you have the Steam Input profile active.

|  Hotkey                 | Cemu           |
|-------------------------|----------------|
|  Toggle Screens         | `L4` or `R4`    |
|  Swap Screens           | `L5` or `R5`    |
|  Exit                   | `Select` + `Start` |
|  Blow Mic               | `R3`    |

**Note:** 

* The `Blow Mic` hotkey only works if you are using the gamepad. 

For a tutorial on how to select Steam Input Profiles, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile.

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

## Known Issues
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#table-of-contents)

* Temp

***

# Cemu Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

***

## How to Configure Gyro
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)
Gyro for Cemu requires SteamDeckGyroDSU. SteamDeckGyroDSU can be installed via EmuDeck in the `Tools & Stuff` menu, or it can be installed manually.

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/203438190-68cd4120-c416-4af0-a48f-069afeebe7f5.png" height="400"> 

**How to Install SteamDeckGyroDSU:** https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-steamdeckgyrodsu


***

## How to Optimize Performance (Power Tools)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

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
* **IMPORTANT:** Some Wii U games will not perform well regardless and will require the Cemu team to improve compatibility
  * In some cases, these games may have workarounds through modifying settings or applying patches or mods. Search on Google for your respective game, and see if these workarounds exist
  * Check the Cemu Compatibility List: https://compat.cemu.info/

***

## How to Configure Multiplayer
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

1. Open Cemu
2. It's recommended you enable multiplayer on a per-game basis. Turning on additional controllers can disable single player controls in a handful of games
3. Right click a game, click `Edit Game Profile`
4. Click `Controller`
5. To the right of each Controller (`Controller 2` through `Controller 4`), select the respective `Deck #` profile (Deck 2 for player 2 and so on)

<img src="https://user-images.githubusercontent.com/108900299/226769760-abc659a8-4ddb-420b-9c33-b98043f27756.png" height="300">

***

## How to Use the Wii U Pro Controller Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

In some some games, the initial screen will prompt for a controller configuration: `Wii U Gamepad` or `Wii U Pro Controller`. Some games will automatically switch to the `Wii U Pro Controller` configuration if you choose it. 

For example: <img src="https://user-images.githubusercontent.com/108900299/214977370-2e0fece0-4166-45ea-b373-5599b4d2b7ca.png" height="400">

If you prefer to use the `Wii U Pro Controller` layout, you need to change the controller profile in Cemu. Make sure to change controller profiles on a per-game basis so it is persistent on EmuDeck updates.

**Tutorial**

1. Right click the game, click `Edit game profile`
2. Click the `Controller` tab
3. Change the profile to `Deck-P1`
   1. <img src="https://user-images.githubusercontent.com/108900299/226769652-9696e8f7-a91e-46e7-a553-156037b7e39e.png" height="300">
4. When you launch a game, one of the following two things will happen: 
    * Some games will prompt you to choose a controller layout, select the `Wii U Pro Controller`
    * Some games will automatically switch to the `Wii U Pro Controller` configuration

*** 

## How to Configure Cemu Native to Work With EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

In order to use Cemu Native through EmulationStation-DE, you will have to enable it in the settings menu.

**Here's How**

1. Open EmulationStation-DE
2. Press `Start`
3. Press `Other Settings`
4. Press `Alternative Emulators`
5. On `Wiiu`, select `Cemu [Native]`

***

## Breath of the Wild Optimization
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cemu#cemu-native-table-of-contents)

1. After you have added the ROM to your roms/wiiu/roms folder, open Cemu, right click in the blank space, click refresh You should now see Breath of the Wild in your game list
2. Right click, click "Edit graphic packs"
3. Open the Mods drop down list
4. Toggle on FPS++
5. Select FPS++
6. Change the mode to "Advanced Settings"
7. Change the Framerate Limit to 40FPS
8. Close out of Cemu
9. Open Breath of the Wild in game mode
10. Click the "..." (the QAM) button
11. Click the battery icon
12. Click "Advanced View"
13. Turn on "Use per-game profile"
14. Set the refresh rate to 40
15. Your game should now be running at a stable 40 FPS (with temporary occasional hiccups in new areas while it compiles shaders)

***