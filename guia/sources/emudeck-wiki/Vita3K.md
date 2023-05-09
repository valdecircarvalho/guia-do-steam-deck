# Vita3K is a Playstation Vita emulator.

Website: https://vita3k.org/

Github: https://github.com/Vita3K/Vita3K

Compatibility List: https://vita3k.org/compatibility.html?lang=en

Quickstart Guide: https://vita3k.org/quickstart.html

***

# Vita3K Table of Contents

1. [Getting Started with Vita3K](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#getting-started-with-vita3k)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#configuration)
      - [How to Update Vita3K](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#how-to-update-vita3k)
      - [How to Launch Vita3K in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#how-to-launch-vita3k-in-deskop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#file-formats)
      - [Updating and Launching Vita3K](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#updating-and-launching-vita3k)
      - [Workaround for a Failed VPK Install](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#workaround-for-a-failed-vpk-install)

2. [Vita3K Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-tips-and-tricks)
      - [How to Configure Vita3K to Work With EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#how-to-configure-vita3k-to-work-with-emulationstation-de)

***

# Getting Started with Vita3K
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

In order to play a game on Vita3K, you will need to install firmware through the Vita3K UI. In desktop mode, open Vita3K, either in the application menu or through its shortcut in `Emulation/tools/launchers/vita3k.sh`. In Vita3K, click  `File`, click `Install Firmware`. Firmware is provided legally by Sony. 

Follow Vita3K's quickstart guide: https://vita3k.org/quickstart.html

Read the [Configuration](#configuration) section to learn more about Vita3K and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your PSVita ROMs:

* `EmulationStation-DE`
* `Sony PlayStation Vita Installed PKG` 
* `Emulators`

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

* Type of Emulator: Binary Package
* Config Location: `/home/deck/Applications/Vita3K`
* Executable Location: `/home/deck/Applications/Vita3K/Vita3K`
* Storage Location: `Emulation/storage/Vita3K`
  * Contains: `ux0`
* ROM location: `Emulation/roms/psvita/InstalledGames` (`InstalledGames` is a symlink to `Emulation/storage/Vita3K/uxo/app`)
* Firmware: Install the firmware through [The Quickstart Guide](https://vita3k.org/quickstart.html)

### Works With
* Steam ROM Manager
* EmulationStation-DE
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#how-to-configure-vita3k-to-work-with-emulationstation-de for instructions

***

## How to Update Vita3K
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

**How to Update Vita3K**

* Run `Update Emulators & Tools` in `EmuDeck`
* Run through the `EmuDeck` install
* Manual file replacement of `Vita3K` 
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.
*  Run through the `EmuDeck` install with a fresh download from https://www.emudeck.com/ 

***

## How to Launch Vita3K in Desktop Mode

**How to Launch Vita3K in Desktop Mode**

* Launch `Vita3K EmuDeck` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `vita3k.sh`
* Launch the binary in `/home/deck/Applications/Vita3K/Vita3K`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

* .pkg
* NoNpDrm
* Manually decrypted games
* Installed `.vpk`

**Note:** Vitamin dumps are not supported and Maidump is unstable.

***

## Updating and Launching Vita3K
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

### How to Update Vita3K

1. Run `Update Emulators and Tools` in the `Tools & stuff` section of `EmuDeck`
2. Manual file replacement of Vita3K  (Refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#how-to-swap-out-appimagesbinaries-for-yuzu-ryujinx-and-pcsx2 for instructions)

### How to Launch Vita3K in Desktop Mode

1. Launch `Vita3K EmuDeck` from the `Applications Launcher` (Steam Deck icon in the bottom left of the taskbar)
2. Launch the emulator from Steam after adding it via the Emulators Parser in Steam ROM Manager
3. Launch the script from `Emulation/tools/launchers`, `vita3k.sh`
4. Launch from `/home/deck/Applications/Vita3K/Vita3K`

***

## Workaround for a Failed VPK Install
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

1. Extract the VPK (if it extracted files and not a folder, create a folder for the extracted files)
2. Rename the folder to match the game ID (typically in this format: PCSEXXXXX, PCSAXXXXX)
3. Place the game folder in `Emulation/roms/psvita/InstalledGames`
4. Open Vita3K, and click the refresh button in the top right
5. (optional) Parse the game in Steam ROM Manager

***

# Vita3K Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

***

## How to Configure Vita3K to Work With EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/vita3k#vita3k-table-of-contents)

1. In Desktop Mode, Open Vita3K, and note down the Game ID next to the game name 
2. In `Emulation/roms/psvita`, right click, `Create New - Text File`
3. Name it `GAMENAME.psvita`
   * The name of the file is primarily for identifying it in ES-DE and scraping
4. Open the text file in a text editor of your choice and paste the game ID's Game ID on a single line
   * Refer to Step 1 for the Game ID
   * Visual Reference (`Tales of Heart R` is used as an example): <img src="https://user-images.githubusercontent.com/108900299/196052342-6957f67d-d31c-4479-b4fa-7456d74c085c.png" height="300">
5. Save
6. Repeat for each PSVita ROM
7. Your game should now launch through EmulationStation-DE

For additional detail, read EmulationStation-DE's section on Vita3K: https://gitlab.com/es-de/emulationstation-de/-/blob/master/USERGUIDE.md#sony-playstation-vita

***