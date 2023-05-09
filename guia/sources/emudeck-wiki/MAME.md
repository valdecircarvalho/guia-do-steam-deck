# MAME is a multi-purpose emulation framework. Play arcade games and more. 

Website: https://www.mamedev.org/

Github: https://github.com/mamedev/mame

MAME Wiki: https://docs.mamedev.org/whatis.html

MAME FAQ: https://wiki.mamedev.org/index.php/Frequently_Asked_Questions

Arcade Database (Lookup required files for MAME ROMs, or what a MAME short name refers to): http://adb.arcadeitalia.net/default.php

Updating this Emulator:
* Use `Discover` (Shopping Bag icon) to update MAME


***

# MAME Table of Contents

1. [Getting Started with MAME](https://github.com/dragoonDorise/EmuDeck/wiki/mame#getting-started-with-mame)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/mame#configuration)
      - [How to Update MAME](https://github.com/dragoonDorise/EmuDeck/wiki/mame#how-to-update-mame)
      - [How to Launch MAME in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/mame#how-to-launch-mame-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/mame#file-formats)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/mame#hotkeys)

2. [MAME Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-tips-and-tricks)
      - [Maintaining ROM Versions](https://github.com/dragoonDorise/EmuDeck/wiki/mame#maintaining-rom-versions)
      - [How to Add Custom Bezels](https://github.com/dragoonDorise/EmuDeck/wiki/mame#how-to-add-custom-bezels)
      - [How to Enable Shaders/Scanlines in MAME (Standalone)](https://github.com/dragoonDorise/EmuDeck/wiki/MAME#how-to-enable-shadersscanlines-in-mame-standalone)
      - [How to Configure MAME to Work With EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/mame#how-to-configure-mame-to-work-with-emulationstation-de)

***

# Getting Started with MAME
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.mame`
* Storage: `Emulation/storage/mame`
  * Contains: `artwork`, `ctrlr`, `ini`, and `samples`
* ROM Location: `Emulation/roms/arcade`
* BIOS Location: `Emulation/roms/arcade`
* Saves: `Emulation/saves/MAME/saves`
* Savestates: `Emulation/saves/MAME/states`


**Note:** 
* `~/.mame` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  
* `MAME [Standalone]` shares its `Emulation/roms/arcade` folder with `Arcade - RetroArch MAME Current`. Turning both of these parsers on in Steam ROM Manager will cause duplicates in your App List. 

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update MAME
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

**How to Update MAME**

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`


***

## How to Launch MAME in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

**How to Launch MAME in Desktop Mode**

* Launch `MAME` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `mame.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

### ROMs

* .zip 
* .chd

### BIOS Files

BIOS will be searched through 3 folders:
* `Emulation/roms/arcade/`
* `Emulation/bios/mame/*`
* `Emulation/bios/`

**Note:** EmulationStation-DE will ONLY work with the BIOS in the arcade folder

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)


| Hotkey           | MAME               |
|------------------|--------------------|
| Coin for player  | `Select`           |
| Start for player | `Start`            |
| Fast Forward     | `Select` + `R2`    |
| Load State       | `Select` + `L1`    |
| Save State       | `Select` + `R1`    |
| Exit Emulator    | `Select` + `Start` |

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

***

# MAME Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

***

## Maintaining ROM Versions
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

Ideally use ROMs that are the same version as MAME's version. MAME often releases improved versions of ROMs to fix issues. Issues are less of a concern with the most popular classics because most of those haven't changed in years. But to avoid having to track multiple different versions of your ROMs, most people just keep their ROM sets updated as  the emulator updates. 

To understand how MAME works, look up the difference between merged and split ROM sets, and learn what a sample and a chd are and how they're used in conjunction with ROMs to deliver a playable game. 

**Note:** Refer to https://docs.mamedev.org/usingmame/aboutromsets.html, for additional information. 

***

## How to Add Custom Bezels
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

1. Open `Emulation/storage/mame`
2. Copy bezel files, in .zip format, into this folder, named the same as the ROM. 
3. Done.

**Note:** Use the Bezel Project to locate bezels for your MAME ROMS: https://github.com/thebezelproject/BezelProject-Windows

***

## How to Enable Shaders/Scanlines in MAME (Standalone)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

1. In Desktop Mode, open `/home/deck/.mame/mame.ini`
2. Under the `OSD VIDEO OPTIONS` section, set `video` to `bgfx`
3. Under the `BGFX POST-PROCESSING OPTIONS` section, set `bgfx_screen_chains` to the shader of your choice, for example: `crt-geom-deluxe`
4. Save your changes to the file

**Note:** Other shader values can be found here: https://docs.mamedev.org/advanced/bgfx.html

***

## How to Configure MAME to Work With EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/mame#mame-table-of-contents)

EmuDeck installs both MAME (Standalone, installed as a flatpak), and Retroarch's MAME core. 

In order to use MAME (Standalone), make sure your ROMs are in `Emulation/roms/arcade`. 

In order to use MAME (Standalone) for EmulationStation-DE, make sure you are selecting `MAME [Standalone]` in the `Alternative Emulators` menu.

**Tutorial**

1. In EmulationStation-DE, press the `Start` button
2. Scroll down and select `Other Settings`
3. Select `Alternative Emulators`
4. Scroll down to `Arcade` and select `MAME [Standalone]`

***