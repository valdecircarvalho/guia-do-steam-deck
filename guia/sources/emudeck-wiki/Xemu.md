# Xemu is an Original Xbox Emulator.

Website: https://xemu.app/

Github: https://github.com/mborgerson/xemu

Compatibility List: https://xemu.app/#compatibility

Xemu Wiki: https://xemu.app/docs/download/

Quickstart Guide (Skip the HDD requirement, it is pre-included with EmuDeck): https://xemu.app/docs/required-files/

Updating this Emulator:
* Use `Discover` (Shopping bag icon) to update Xemu

***

# Xemu Table of Contents

1. [Getting Started with Xemu](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#getting-started-with-xemu)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#configuration)
      - [How to Update Xemu](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#how-to-update-xemu)
      - [How to Launch Xemu in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#how-to-update-xemu)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#file-formats)

2. [Common Error Messages](#common-error-messages)
      - ["The guest has not initialized the display"](#the-guest-has-not-initialized-the-display)
      - ["Please insert an Xbox disc"](#please-insert-an-xbox-disc)

3. [Xemu Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-tips-and-tricks)
      - [How to Convert ROMs to XISO Format](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#how-to-convert-roms-to-xiso-format)
          - [Method 1: Use XDVDMulleter (Windows)](#method-1-use-xdvdmulleter-windows)
          - [Method 2: extract-iso (Windows)](#method-2-extract-iso-windows)
          - [Method 3: extract-iso (Linux)](#method-3-extract-iso-linux)
          - [Method 4: extract-iso (Mac)](#method-4-extract-iso-mac)
          - [Method 5: dd](#method-5-dd-linux)
      - [How to Apply Zink](#how-to-apply-zink)

***

# Getting Started with Xemu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

Xemu is a fairly straight-forward emulator to set up. Place your ROMs in `Emulation/roms/psx`. Place your BIOS directly in `Emulation/bios`. Read the [Configuration](#configuration) section to learn more about Xemu, the expected BIOS and naming conventions, and Xemu's folder locations. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play your Xbox (OG) ROMs:

* `EmulationStation-DE`
* `Microsoft XBox - Xemu` 
* `Emulators`

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/app.xemu.xemu`
* ROM location: `Emulation/roms/xbox`
* BIOS location: `Emulation/bios` (Do not create any additional folders in this folder for Xbox BIOS)
* Required BIOS: `mcpx_1.0.bin` and modified retail BIOS 
  * Example: `"COMPLEX 4627" BIOS`, named `Complex_4627v1.03.bin` exactly 

**Note:** `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Xemu
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

**How to Update Xemu**

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`


***

## How to Launch Xemu in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

**How to Launch Xemu in Desktop Mode**

* Launch `xemu` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `xemu.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

* .iso (xiso formatted)
   * How to Convert ROMs to XISO Format: https://github.com/dragoonDorise/EmuDeck/wiki/Xemu#how-to-convert-roms-to-xiso-format

***

# Common Error Messages
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

***

## "The guest has not initialized the display"
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

This is likely due to a mismatch of MCPX and BIOS images, or a corrupt MCPX boot ROM.

***

## "Please insert an Xbox disc"
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

Try restarting xemu. If you continue to get the message, your ISO may not be dumped in a compatible way. Try using extract-xiso to pack your ISO. 

How to Convert ROMs to XISO Format: https://github.com/dragoonDorise/EmuDeck/wiki/Xemu#how-to-convert-roms-to-xiso-format

***

# Xemu Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

***

## How to Convert ROMs to XISO Format
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

### List of Methods

- [Method 1: Use XDVDMulleter (Windows)](#method-1-use-xdvdmulleter-windows)
- [Method 2: extract-iso (Windows)](#method-2-extract-iso-windows)
- [Method 3: extract-iso (Linux)](#method-3-extract-iso-linux)
- [Method 4: extract-iso (Mac)](#method-4-extract-iso-mac)
- [Method 5: dd](#method-5-dd-linux)


***

### Method 1: Use XDVDMulleter (Windows)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#list-of-methods)

Link: https://archive.org/details/xdvdmulleterv10.2beta

![1](https://user-images.githubusercontent.com/108900299/194170038-5b4f69ed-853c-4332-b9c5-00b43679b449.png)
![2](https://user-images.githubusercontent.com/108900299/194170057-95e650e2-7dfb-4dcc-99b8-f4e6b5aaf689.png)
![3](https://user-images.githubusercontent.com/108900299/194170067-4062edeb-cafc-4606-88db-7f091030606e.png)


***

### Method 2: extract-iso (Windows)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#list-of-methods)

Link: https://github.com/XboxDev/extract-xiso

**Instructions**

1. Go to the releases tab: https://github.com/XboxDev/extract-xiso/releases/tag/build-202204252159
2. Download the release .ZIP
3. Extract it somewhere on your computer
4. Put the untrimmed Xbox .ISO in the same directory
5. Rename the .ISO to something without spaces like `game-redump.iso` (doesn't have to be this exact name)
6. Open command prompt on your computer
7. Navigate to the directory containing the .EXE and your .ISO
8. Run `extract-xiso -r game-redump.iso` 

Xemu's Tutorial: https://xemu.app/docs/disc-images/

***

### Method 3: extract-iso (Linux)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#list-of-methods)

Note: Cannot be *built* on the Steam Deck, but can be built elsewhere and copied. Then, it is usable on Steam Deck.

1. Enter these commands in your terminal
```
# Install dependencies
# Example for Arch:
sudo pacman -Syu build-essential cmake

# Clone Repo
git clone https://github.com/XboxDev/extract-xiso.git

# cd into directory
cd extract-xiso

# Create working directory
mkdir build
cd build

# Build project
cmake ..
make
```
2. Put the untrimmed Xbox .ISO in the same directory
3. Rename the .ISO to something without spaces like `game-redump.iso` (doesn't have to be this exact name)
4. Navigate to the directory containing your .ISO
5. Run `extract-xiso -r game-redump.iso` 

***

### Method 4: extract-iso (Mac)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#list-of-methods)

1. ⁠Open terminal
2. In terminal type the following: `Xcode-select --install`
3. Click allow on the Pop-up
4. Navigate to `extract-xiso`, cd `the/path/to/extract-xiso`
5. Type `make`
6. Then type the following: `sudo chmod +x extract-iso`
7. Finally run the executable: `./extract-xiso name\of\game.iso`

***

### Method 5: dd (Linux)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#list-of-methods)

**Note:** May not work on Steam Deck, needs testing.

Refer to Xemu's wiki for instructions, https://xemu.app/docs/disc-images/#about-redump-isos. 

***

## How to Apply Zink
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/xemu#xemu-table-of-contents)

### Preface

On the Steam Deck, some Xbox game graphics will not render properly. Applying Zink can fix these graphical issues. 

However, Zink can also cause performance hits in certain games. Apply it on a per-game basis and keep in mind that if performance is degraded, it may be due to Zink. 

You can read more about the issue here: https://github.com/xemu-project/xemu/issues/1279#issuecomment-1381015271. 

### How to Apply Zink to Steam ROM Manager Shortcuts

1. In Desktop Mode, open Steam
2. Select an Xbox Game shortcut in Steam
3. Click the `Gear` icon 
   * <img src="https://user-images.githubusercontent.com/108900299/226738898-c724328a-b91c-42d8-91d3-4109998b8212.png" height="300">
4. Click `Properties` 
5. In the `Launch Options` box, enter: `__GLX_VENDOR_LIBRARY_NAME=mesa MESA_LOADER_DRIVER_OVERRIDE=zink GALLIUM_DRIVER=zink %command%`
   * <img src="https://user-images.githubusercontent.com/108900299/226739203-c14b2c57-3029-4f87-baa3-2fa9d0af8bef.png" height="300">
6. Zink will now be applied to this specific game's Steam shortcut, repeat for each game you would like to apply Zink

### How to Apply Zink to EmulationStation-DE Games

1. In Desktop Mode, open the `Emulation/roms/xbox` folder
2. Right click anywhere in the folder, click `Create New --> Text File`
   * <img src="https://user-images.githubusercontent.com/108900299/226739494-0e7b44c7-0fcf-4f9b-820a-8fa3351cfcfc.png" height="300">
3. Match the name of the text file to the game you are applying Zink to and change the file extension to `.esprefix`
   * For example: 
       * ROM Name: `Conker - Live & Reloaded.iso`
       * New text file name: `Conker - Live & Reloaded.esprefix`
   * <img src="https://user-images.githubusercontent.com/108900299/226740001-1738684d-854c-4466-86f3-96e14ac1bfb0.png" height="300">
4. Open the newly created text file in Kate or a text editor of your choice
5. Enter: `__GLX_VENDOR_LIBRARY_NAME=mesa MESA_LOADER_DRIVER_OVERRIDE=zink GALLIUM_DRIVER=zink` on a single line
   * <img src="https://user-images.githubusercontent.com/108900299/226754331-28689940-10ef-42b5-9164-4bc58188ea68.png" height="300">
6. Zink will now be applied to this specific game in EmulationStation-DE, repeat for each game you would like to apply Zink

***