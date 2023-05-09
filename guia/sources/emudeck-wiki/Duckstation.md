# Duckstation is a Sony Playstation 1 emulator. 

Website: https://www.duckstation.org/

Github: https://github.com/stenzek/duckstation

Compatibility List: https://docs.google.com/spreadsheets/d/1H66MxViRjjE5f8hOl5RQmF5woS1murio2dsLn14kEqo/edit#gid=0

***

# Duckstation Table of Contents

1. [Getting Started with Duckstation](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#getting-started-with-duckstation)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#configuration)
      - [How to Update Duckstation](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#how-to-update-duckstation)
      - [How to Launch Duckstation in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#how-to-launch-duckstation-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#file-formats)
      - [Configuring Duckstation to work alongside Retroarch's Beetle HW PSX core](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#configuring-duckstation-to-work-alongside-retroarchs-beetle-hw-psx-core)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#hotkeys)

2. [Duckstation Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-tips-and-tricks)
      - [How to Optimize Storage (Compression Tool)](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#how-to-optimize-storage-compression-tool)
      - [How to Manage Multiple Discs](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#how-to-manage-multiple-discs)


***


# Getting Started with Duckstation
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

Duckstation is a fairly straight-forward emulator to set up. Place your ROMs in `Emulation/roms/psx`. Place your BIOS directly in `Emulation/bios`. Read the [Configuration](#configuration) section to learn more about Duckstation and its folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your PSX ROMs:

* `EmulationStation-DE`
* `Sony PlayStation - DuckStation` 
* `Emulators`


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/org.duckstation.DuckStation`
* ROM location: `Emulation/roms/psx`
* BIOS location: `Emulation/bios` 
  * **IMPORTANT:** Files go directly in this folder. Do not make or use a `PSX`, `PS1`, or any sort of folder here. Duckstation will not be able to find your bios files if they are in a folder. 
  * Required BIOS (Example set, one per region - US, Europe, Japan): `scph5500.bin`, `scph5501.bin`, `scph5502.bin `
* Saves: `Emulation/saves/duckstation/saves`
* Savestates: `Emulation/saves/duckstation/states`


**Note:** 

* `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  
* Refer to: https://en.wikipedia.org/wiki/PlayStation_models#Comparison_of_models, for a full list of PSX bios (BIOS files and PSX BIOS have matching names)

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Duckstation
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

**How to Update Duckstation**

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`


## How to Launch Duckstation in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

**How to Launch Duckstation in Desktop Mode**

* Launch `DuckStation` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `duckstation.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`

***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

* .cue 
* .chd 
* .ecm 
* .iso 
* .m3u 
* .mds 
* .pbp

## Configuring Duckstation to work alongside Retroarch's Beetle HW PSX core
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

* ROM files for Retroarch's Beetle HW PSX core are shared with Duckstation in `Emulation/roms/psx`. 
* BIOS files for Retroarch's Beetle HW PSX core are shared with Duckstation in `Emulation/bios` (no subfolders).
* As long as you name your BIOS files in this format: `scph####.bin`(####'s are a placeholder), Retroarch's Beetle HW PSX core will work alongside Duckstation. 
* Be sure to rename your BIOS files and note the lowercase `scph`, lowercase `bin` in the example above.

**Note:** By default, EmulationStation-DE uses Retroarch's Beetle HW PSX core. Both Retroarch's Beetle HW PSX core and Duckstation should work if you have set everything up properly. 

To switch between the two in EmulationStation-DE, you can use the `Alternative Emulators` feature. Refer to https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-select-a-different-emulator-for-a-system, for instructions. 

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

Duckstation comes with a Steam Input profile for Hotkeys. Activate the Steam Input profile by clicking the `Game Controller` icon in `Game Mode`, change the template to `Emudeck - Duckstation`. The hotkeys below can only be used if you have the Steam Input profile active.

| Hotkey                    | Duckstation               |
|---------------------------|---------------------------|
| Save State                | Left Trackpad Touch Menu  |
| Load State                | Left Trackpad Touch Menu  |
| Next Save Slot            | Left Trackpad Touch Menu  |
| Previous Save Slot        | Left Trackpad Touch Menu  |
| Pause/Play                | Left Trackpad Touch Menu  |
| Quick Menu                | Left Trackpad Touch Menu  |
| Swap Disc                 | Left Trackpad Touch Menu  |
| Fast Forward (Toggle)     | Left Trackpad Touch Menu  |
| Fast Forward (Hold)       | `Select` + `R2`           |
| Rewind                    | `Select` + `L2`           |
| Increase Resolution Scale | `Start` + `DPAD Up`       |
| Decrease Resolution Scale | `Start` + `DPAD Down`     |
| Toggle Widescreen         | `Start` + `DPAD Right`    |
| Toggle PGXP               | `Start` + `DPAD Left`     |
| Toggle SoftwareRendering  | `Start` + `L3`            |
| Full Screen               | `Select` + `R3`           |  

For a tutorial on how to select Steam Input Profiles, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/hotkeys#how-to-select-a-steam-input-profile.

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout


***

# Duckstation Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

***

## How to Optimize Storage (Compression Tool)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

To optimize storage, you can use the `EmuDeck Compression Tool` in the `Tools & Stuff` menu within EmuDeck.  

The `EmuDeck Compression Tool` will compress your Playstation 1 ROMs from ISO or BIN/CUE to CHD. If your ROM is a BIN/CUE, the Compression Tool will only compress it if you have both the BIN and the CUE files for a ROM. If the ROM is in a zip file or is missing a paired BIN or CUE file, the Compression Tool will not detect the ROM. 

After running the `EmuDeck Compression Tool`, re-run Steam ROM Manager to update your ROM shortcuts to the newly compressed ROM. 

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/198798630-9cf85bc5-ff42-45c4-bceb-7fc4ac740c3c.png" height="300">


***

## How to Manage Multiple Discs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#duckstation-table-of-contents)

M3U files can be used to manage multiple discs for Duckstation. When the time comes to switch discs, use the Left Trackpad Touch Menu Hotkey. A full list of hotkeys and a tutorial on how to use Steam Input profiles can be found here: https://github.com/dragoonDorise/EmuDeck/wiki/duckstation#hotkeys. 

Learn how to create an M3U File: https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-manage-roms-with-multiple-discs. 

***