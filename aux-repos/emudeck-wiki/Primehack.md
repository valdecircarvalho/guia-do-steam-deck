# Primehack is a fork of Dolphin (Gamecube and Wii Emulator), intended to modernize the Metroid Prime Trilogy.

***

Website: https://forums.dolphin-emu.org/Thread-fork-primehack-fps-controls-and-more-for-metroid-prime

Github: https://github.com/shiiion/metroid-prime-source-mod/releases/

Primehack Wiki: https://github.com/shiiion/dolphin/wiki

Primehack FAQ: https://github.com/shiiion/dolphin/wiki/Frequently-Asked-Questions

Updating this Emulator:
* Use `Discover` (Shopping Bag icon) to update Primehack

***

# Primehack Table of Contents

1. [Getting Started with Primehack](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#getting-started-with-primehack)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#configuration)
      - [How to Update Primehack](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-update-primehack)
      - [How to Launch Primehack in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-launch-primehack-in-desktop-mode)
      - [File Formats](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#file-formats)
      - [Controls](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#controls)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#hotkeys)

2. [Primehack Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-tips-and-tricks)
      - [How to Optimize Performance (Power Tools)](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-optimize-performance-power-tools)
      - [How to Optimize Storage (Compression Tool)](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-optimize-storage-compression-tool)
      - [How to Install Custom Textures](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-install-custom-textures)
      - [How to Configure Primehack to work with EmulationStation-DE](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#how-to-configure-primehack-to-work-with-emulationstation-de)

***

# Getting Started with Primehack
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

Primehack is a fairly straight-forward emulator to set up. Place your Metroid Prime Trilogy ROM in `Emulation/roms/primehack`. No additional setup is required. Read the [Configuration](#configuration) section to learn more about Primehack and its folder locations. **Note:** Controller configurations are not set up for the Metroid Prime games on the Gamecube. 

To launch your ROMs in game mode, use Steam ROM Manager and use one of the following parsers to play the Metroid Prime Trilogy:

* `EmulationStation-DE`
* `PrimeHack` 
* `Emulators`


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/io.github.shiiion.primehack`
* ROM location: `Emulation/roms/primehacks`
* Saves:
  * Symlink: `Emulation/saves/primehack/Wii`
  * Target: `/home/deck/.var/app/io.github.shiiion.primehack/data/dolphin-emu/Wii`
* Save States:
  * Symlink: `Emulation/saves/primehack/Savestates`
  * Target: `/home/deck/.var/app/io.github.shiiion.primehack/data/dolphin-emu/StateSaves/`
* Primehack does not need any additional BIOS files to run.

**Note:** 
* `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  
* Only `Metroid Prime Trilogy` (Wii)'s controls are configured. The Gamecube versions do not have controls configured at this time.

### Works With
* Steam ROM Manager
* EmulationStation-DE

***

## How to Update Primehack
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

**How to Update Primehack**

* Update through `Discover` (Shopping bag icon)
* Through the `Update your Emulators & Tools` section on the `Manage Emulators` page in the `EmuDeck` application


***

## How to Launch Primehack in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

**How to Launch Primehack in Desktop Mode**

* Launch `Dolphin Emulator` (Metroid Prime Icon) from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
  * Icon: <img src="https://user-images.githubusercontent.com/108900299/195756130-4040ed75-0041-481a-9e26-87e913a6c6e2.png" height="25">
* Launch the script from `Emulation/tools/launchers`, `primehack.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam ROM Manager`


***

## File Formats
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

* .ciso 
* .dol 
* .elf 
* .gcm 
* .gcz 
* .iso 
* .nkit 
* .iso 
* .rvz 
* .wad 
* .wia 
* .wbfs

***

## Controls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)


| Controls            | Primehack                |
|---------------------|--------------------------|
| Jump, Spring Ball   | `A`                      |
| Grapple, Boost Ball      | `B`                      |
| Morph               | `Y`                      |
| Missile, Super Bomb | `X`                      |
| Lock On, Grapple    | `L2`                     |
| Shoot, Interact     | `R2`                     |
| Cycle Beams         | `DPad Up/Down`           | 
| Cycle Visors        | `DPad Left/Right`        |

**IMPORTANT:** 

* EmuDeck includes a texture pack that matches Metroid Prime's button prompts to the buttons in the above chart. 
* The Steam Input profile for Primehack is: `Gamepad with Joystick Trackpad`. Community Layouts conflict with EmuDeck's pre-configured controls. 
* Only `Metroid Prime Trilogy` (Wii)'s controls are configured. The Gamecube versions do not have controls configured at this time.

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

**Important Note:** Primehack does not have a way of opening the menu if you are launching the game directly. It is recommended that you change any settings in the Primehack UI itself before launching a game. 

| Hotkey              | Primehack              |
|---------------------|------------------------|
| Menu                | N/A                    |
| Exit                | `Select` + `Start`     |
| Pause/Unpause       | `Select` + `A`         |
| Fast Forward (Hold)       | `Select` + `R2`        |
| Save State          | `Select` + `R1`        |
| Load State          | `Select` + `L1`        |
| Next Save Slot      | `Start` + `R1`         |
| Previous Save Slot  | `Start` + `L1`         |
| Toggle Aspect Ratio | `Start` + `DPAD Right` |
| Increase IR         | `Start` + `DPAD Up`    |
| Decrease IR         | `Start` + `DPAD Down`  |
| Graphics Toggle     | `Start` + `L3`         |

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

# Primehack Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

***

## How to Optimize Performance (Power Tools)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

**Prerequisites**

* Decky Loader and Power Tools
  * Power Tools can be installed via EmuDeck, or it can be installed manually
     * **Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/203443895-be44fb04-e855-4cdf-a45e-23e339ac5fc9.png" height="400"> 
     * Although this screen does not explicitly state Decky Loader, Decky Loader is included in this installation
  *  **Step by Step Instructions on How to Install Power Tools:** https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-power-tools-and-deckyloader

***

**Recommended Settings**
* Power Tools: Turn SMT off. 
  * Open the `QAM` ("..." button), select the `Socket` icon, select `POWERTOOLS`, turn off `SMT`
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160535-d57e2ecf-c4dc-499a-9682-16183000aff7.png" height="200">
  * (Optional) Use the `Persistent` toggle to set these settings on a per-game basis
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207163585-3e3cb3a0-486e-4bf5-bbcd-b44e2f431b28.png" height="200">
* Steam Deck Performance Menu: Set Manual GPU Clock Control to 1200 frequency
  * Open the `QAM` ("..." button), select the `Battery` icon, enable `Advance View`, scroll down, enable `Manual GPU Clock Control`, and set it to `1200` 
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160899-88b5f89c-788d-480e-ba89-de9435d0b454.png" height="200">
  * Toggle per game profiles
      * Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/207160776-07742e76-a082-4a91-b05f-193a42288662.png" height="200">

***

## How to Optimize Storage (Compression Tool)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

To optimize storage, you can use the `EmuDeck Compression Tool` in the `Tools & Stuff` menu within EmuDeck.  

The `EmuDeck Compression Tool` will compress your Metroid Prime Trilogy ROM from ISO to RVZ.

After running the `EmuDeck Compression Tool`, re-run Steam ROM Manager to update your ROM shortcuts to the newly compressed ROM. 

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/198798630-9cf85bc5-ff42-45c4-bceb-7fc4ac740c3c.png" height="300">


***

## How to Install Custom Textures
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

Here's how to install custom textures for Primehack: 

1. Open the Primehack emulator, click `Graphics` in the top right (or `Options` > `Graphic Settings`), click `Advanced`, make sure `Load Custom Textures` and `Prefetch Custom Textures` are checked. 
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/196001972-9b887344-b246-4c3d-9109-dfc9d76840f3.png" height="200">
2. Open `/home/deck/.var/app/io.github.shiiion.primehack/data/dolphin-emu/Load/Textures`
   1. `~/.var` is an invisible folder by default. In Dolphin (file manager), click the `☰` (hamburger menu) in the top right, click "view hidden files" to see these folders.  
   2. If the `Load` and `Textures` folder do not exist, create them.
   3. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/196001948-ae428327-5ca5-4a1a-b649-2a620678790c.png" height="200">
3. In the `Textures` folder from Step 2, create a folder named `R3M`. 
4. Put your texture files directly into this folder.
5. Your texture pack should now be installed. 
   1. If the game crashes with custom textures, it is likely too demanding for the Steam Deck. You can turn off `Prefetch Custom Textures` as a workaround, but performance will still take a hit. 


***

## How to Configure Primehack to work with EmulationStation-DE
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/primehack#primehack-table-of-contents)

You need to move your `Metroid Prime Trilogy` ROM to `Emulation/roms/wii` and choose an alternative emulator for the ROM in EmulationStation-DE.

For further instructions, refer to: https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-select-a-different-emulator-on-a-per-game-basis. 

***