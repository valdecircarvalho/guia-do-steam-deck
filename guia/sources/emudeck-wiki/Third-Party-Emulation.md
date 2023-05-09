# Third Party Emulation: Non-EmuDeck Tools and Resources

Learn how to install various tools and resources related to emulation on your Steam Deck outside of what EmuDeck installs. These tools and resources are either difficult to implement into EmuDeck's installation script directly, require elaborate setup, or may be added to EmuDeck in the future pending time and resources. 

The guides on this page are not officially supported by EmuDeck. Many require some level of comfort in the terminal to successfully install. Regardless of your comfort with the terminal, the guides will cover as much detail as possible to address a wide variety of expertise levels. If you get stuck on a certain part, it is encouraged you Google and troubleshoot. The EmuDeck Discord will not be able to promise support for the guides available on this page.

# Third Party Emulation Table of Contents

1. [Decompilations and Reverse Engineered PC Ports](#decompilations-and-reverse-engineered-pc-ports)
      - [Render96ex](#render96ex)
      - [Super Mario 64 Plus](#super-mario-64-plus)
      - [zelda3: A Link to the Past](#zelda3-a-link-to-the-past)
      - [Super Metroid](#super-metroid)
      - [Ship of Harkinian: Ocarina of Time](#ship-of-harkinian-ocarina-of-time)
      - [OpenGOAL: Jak and Dexter: The Precursor Legacy](#opengoal-jak-and-dexter-the-precursor-legacy)

2. [Emulators](#emulators)
      - [BlueMaxima's Flashpoint](#bluemaximas-flashpoint)
      - [Hypseus Singe](#hypseus-singe)
      - [Model 2 Emulator](#model-2-emulator)
      - [Supermodel: Model 3 Emulator](#supermodel-model-3-emulator)
      - [Super Smash Bros: Project+](#super-smash-bros-project)


***

## Decompilations and Reverse Engineered PC Ports
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

***

## Render96ex
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

### How to Compile Render96ex on the Steam Deck

### What is Render96ex?

`An "HD" version of Super Mario 64 based on the rendered advertisements and art published in Nintendo Power.`

Source: https://github.com/Render96/Render96ex/wiki

### Prerequisites: Sudo Password

**Note:** Skip this section if you have already set a sudo password

1. In Desktop Mode, open `Konsole`, type in `passwd`, and press enter
2. You'll be prompted to create a password. Your text will not be visible. After you press enter, you will need to type your password again to confirm
3. Exit out of Konsole


### Install Distrobox

This will require your sudo password for the setup

```
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --prefix ~/.local
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/extras/install-podman | sh -s -- --prefix ~/.local
```

Add these lines to `/home/deck/.bashrc` and reload your terminal
```
export PATH=$HOME/.local/bin:$PATH
export PATH=$HOME/.local/podman/bin:$PATH
xhost +si:localuser:$USER
```

### Setting Up Distrobox

1. Open Konsole
2. Create an Ubuntu distrobox: `distrobox create --name ubuntu -i ubuntu:22.10`
3. Enter the distrobox by opening Konsole and entering: `distrobox enter ubuntu`
4. Enter the following: `sudo apt install -y git build-essential pkg-config libusb-1.0-0-dev libsdl2-dev bsdmainutils libglew-dev`

## Setting Up Render96ex

**Note:** The following folder locations are recommendations. You can choose a different folder location. 

1. In `/home/deck/Applications`, create a `Distrobox` folder
2. In the `Distrobox` folder, right click `Open Terminal Here`, enter:
   * `git clone --single-branch --branch alpha https://github.com/Render96/Render96ex.git`
3. A `Render96ex` folder will be created, place your Super Mario 64 ROM in this folder
4. Rename the Super Mario 64 ROM to `baserom.us.z64`

### Building Render96ex

1. In `/home/deck/Applications/Distrobox/Render96ex/`, right click `Open Terminal Here`, enter:
   * `distrobox enter ubuntu`
2. Enter: 
   * `make -j4`
3. Wait for it to finish building
4. To play Render96ex, open `sm64.us.f3dex2e` in `/home/deck/Applications/Distrobox/Render96ex/build/us_pc`

### How to Install Custom Models

1. Download the latest model pack: https://github.com/Render96/ModelPack/releases to `/home/deck/Downloads`
2. Right click `Render96_DynOs_v3.2.7z` and click `Extract archive here, autodetect subfolder`
3. Move the newly extracted `Render96_DynOs...` folder to `/home/deck/Applications/Distrobox/Render96ex/build/us_pc/dynos/packs`
4. To enable custom models, in game, press `Start`, press `L2`, select `Model Packs` and enable `Render96DynOs...`

### How to Install Custom Textures

1. In `/home/deck/Applications/Distrobox/Render96ex/`, right click `Open Terminal Here`, enter:
   * `git clone https://github.com/pokeheadroom/RENDER96-HD-TEXTURE-PACK.git -b master`
2. Move the `gfx` folder in the newly cloned `RENDER96-HD-TEXTURE-PACK` folder to `/home/deck/Applications/Distrobox/Render96ex/build/us_pc/res`

### How to Configure Render96ex

1. While in game, press `Start`, press `R1`
2. Configure settings

### How to Add Render96ex to Steam

1. In `/home/deck/Applications/Distrobox/Render96ex/build/us_pc`, right click `sm64.us.f3dex2e`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly



***
    
## Super Mario 64 Plus 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

### How to Compile Super Mario 64 Plus on the Steam Deck

### What is Super Mario 64 Plus?

`SM64Plus is a fork of sm64-port that focuses on customizability and aims to add features that not only fix some of the issues found in the base game but also enhance the gameplay overall with extra options.`

Source: https://github.com/MorsGames/sm64plus

### Prerequisites: Sudo Password

**Note:** Skip this section if you have already set a sudo password

1. In Desktop Mode, open `Konsole`, type in `passwd`, and press enter
2. You'll be prompted to create a password. Your text will not be visible. After you press enter, you will need to type your password again to confirm
3. Exit out of Konsole


### Install Distrobox

This will require your sudo password for the setup

```
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --prefix ~/.local
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/extras/install-podman | sh -s -- --prefix ~/.local
```

Add these two lines to `/home/deck/.bashrc` and reload your terminal
```
export PATH=$HOME/.local/bin:$PATH
export PATH=$HOME/.local/podman/bin:$PATH
xhost +si:localuser:$USER
```

## Setting Up Distrobox

1. Open Konsole
2. Create an Ubuntu distrobox: `distrobox create --name ubuntu -i ubuntu:22.10`
3. Enter this distrobox: `distrobox enter ubuntu`
4. Enter the following: 
   * `sudo apt install -y git build-essential pkg-config libusb-1.0-0-dev libsdl2-dev bsdmainutils`

### Setting Up Super Mario 64 Plus


**Note:** The following folder locations are recommendations. You can choose a different folder location. 

1. In `/home/deck/Applications`, create a `Distrobox` folder
2. In the `Distrobox` folder, right click `Open Terminal Here`, enter:
   * `git clone https://github.com/MorsGames/sm64plus`
3. A `sm64plus` folder will be created, place your Super Mario 64 ROM in this folder
4. Rename the Super Mario 64 ROM to `baserom.us.z64`

### Building Super Mario 64 Plus

1. In `/home/deck/Applications/Distrobox/sm64plus/`, right click `Open Terminal Here`, enter:
   * `distrobox enter ubuntu`
2. Enter: 
   * `make`
3. Wait for it to finish building
4. To play Super Mario 64 Plus, open `sm64.us` in `/home/deck/Applications/Distrobox/sm64plus/build/us_pc`
   * The game may have missing HUD UI textures, to fix these, read the next section
   
### How to Fix the Missing HUD UI textures

1. Download attached `.sh` file
   * Link: https://gist.githubusercontent.com/rawdatafeel/b3933e82b913175f2b7cad60f9c6f2b5/raw/0f7e619465a4349da98b5c7899a8e998037a9876/SuperMario64Plus.sh
   * Right click anywhere on the page, click `Save Page As`
2. Place in `/home/deck/Applications`
3. Right click `SuperMario64Plus.sh`
4. Click `Properties`
5. Click `Permissions`
6. Check `Is Executable`
7. Use `SuperMario64Plus.sh` to open SM64Plus

### How to Configure Super Mario 64 Plus

1. Open `sm64.us` in `/home/deck/Applications/Distrobox/sm64plus/build/us_pc` at least once so it can generate the `settings.ini` file 
1. Open the `/home/deck/Applications/Distrobox/sm64plus/build/us_pc` folder
2. Right click `settings.ini`, click `Open with Kate` or a text editor of your choice
3. Customize settings

**Recommended Settings**

* Set `window_height` to `800`

### How to Add Super Mario 64 Plus to Steam

1. In `/home/deck/Applications`, right click `SuperMario64Plus.sh`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly


***

## zelda3: A Link to the Past 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

### How to Compile zelda3 on the Steam Deck

### What is zelda3?

`A reverse engineered clone of Zelda 3 - A Link to the Past.`

Source: https://github.com/snesrev/zelda3

### Prerequisites: Sudo Password

**Note:** Skip this section if you have already set a sudo password

1. In Desktop Mode, open `Konsole`, type in `passwd`, and press enter
2. You'll be prompted to create a password. Your text will not be visible. After you press enter, you will need to type your password again to confirm
3. Exit out of Konsole

### How to Install Distrobox

This will require your sudo password for the setup

1. In Desktop Mode, open Konsole and enter the following two lines, one at a time

```
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --prefix ~/.local
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/extras/install-podman | sh -s -- --prefix ~/.local
```

1.Add these two lines to `/home/deck/.bashrc` and reload your terminal

```
export PATH=$HOME/.local/bin:$PATH
export PATH=$HOME/.local/podman/bin:$PATH
xhost +si:localuser:$USER
```

### How to Set Up Distrobox

1. Open Konsole
2. Create an Ubuntu distrobox: `distrobox create --name ubuntu -i ubuntu:22.10`
3. Enter the distrobox by opening Konsole and entering: `distrobox enter ubuntu`
4. Enter the following: 
   * `sudo apt install libsdl2-dev python3-pip make`

### How to Set Up zelda3

**Note:** The following folder locations are recommendations. You can choose a different folder location. 

1. In `/home/deck/Applications`, create a `Distrobox` folder
2. In the `Distrobox` folder, right click `Open Terminal Here`, enter:
   * `git clone https://github.com/snesrev/zelda3`
4. A `zelda3` folder will be created, place your US Link to the Past ROM in `/home/deck/Applications/zelda3/tables`
   * SHA256 Hash: `66871d66be19ad2c34c927d6b14cd8eb6fc3181965b6e517cb361f7316009cfb`
5. Rename the Link to the Past ROM to `zelda3.sfc`

### How to Build zelda3

1. In `/home/deck/Applications/Distrobox/zelda3/`, right click `Open Terminal Here`, enter:
   * `distrobox enter ubuntu`
2. Enter: 
   * `make`
3. Wait for it to finish building
4. To play zelda3, open `zelda3` in `/home/deck/Applications/Distrobox/zelda3/`

### How to Configure zelda3

1. In `/home/deck/Applications/Distrobox/zelda3/`, right click `zelda3.ini`, click `Open with Kate` or a text editor of your choice
2. Customize settings

**Recommended** 

* Set `ExtendedAspectRatio` to `16:10`
* Set `Fullscreen` to `1`

### How to Customize Sprites

1. In `/home/deck/Applications/Distrobox/zelda3/`, right click `Open Terminal Here`, enter:
   * `git clone https://github.com/snesrev/sprites-gfx.git`
2. In `/home/deck/Applications/Distrobox/zelda3/`, right click `zelda3.ini`, click `Open with Kate` or a text editor of your choice
3. Remove the `#` at the beginning of this line: `# LinkGraphics = sprites-gfx/snes/zelda3/link/sheets/megaman-x.2.zspr`
4. Replace `megaman-x.2.zspr` with the sprite of your choice

For a full list of sprites, visit: http://alttp.mymm1.com/sprites/

#### To find the file name to place in zelda3.ini

1. On http://alttp.mymm1.com/sprites/, right click the link above the sprite you would like to use, click `Copy Link`
2. In a new tab, paste the URL
   * If you press enter, it will download the sprite
3. The sprite file name will be at the end of the URL
4. Example (Crewmate): https://alttpr-assets.s3.us-east-2.amazonaws.com/crewmate.2.zspr
5. In `zelda3.ini`, replace `megaman-x.2.zspr` at the end: `LinkGraphics = sprites-gfx/snes/zelda3/link/sheets/megaman-x.2.zspr` with `crewmate2.zspr`
6. Example: `LinkGraphics = sprites-gfx/snes/zelda3/link/sheets/crewmate2.zspr`


### How to Enable MSU1 CD Soundtrack Files

Choose a soundtrack from: https://www.zeldix.net/t791-the-legend-of-zelda-a-link-to-the-past

**Example**


1.  Download `Alternative New Soundtrack For Randomizers by JUD6MENT (updated: Sep 27, 2021)` from: https://www.zeldix.net/t791-the-legend-of-zelda-a-link-to-the-past to your `/home/deck/Downloads` folder
2. Right click `Zelda Alternative Soundtrack by JUD6MENT (update Sep-21-2021).zip`, click `Extract archive here, autodetect subfolder`
3. Rename the newly extracted `Zelda Alternative Soundtrack by JUD6MENT (update Sep-21-2021)` folder to `msu`
   * `msu` is case sensitive
4. Move the `msu` folder to `/home/deck/Applications/Distrobox/zelda3/`
5. In `/home/deck/Applications/Distrobox/zelda3/`, right click `zelda3.ini`, click `Open with Kate` or a text editor of your choice
6. Edit the line: `EnableMSU = false` so it instead writes: `EnableMSU = true`
7. MSU1 CD Soundtrack Files are now enabled

### How to Add zelda3 to Steam

1. In `/home/deck/Applications/Distrobox/zelda3`, right click `zelda3`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly


***

## Super Metroid
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)
   
### How to Build Super Metroid on the Steam Deck

### What is this?

`A reverse engineered clone of Super Metroid.`

Source: https://github.com/snesrev/sm

### Prerequisites: Sudo Password

**Note:** Skip this section if you have already set a sudo password

1. In Desktop Mode, open `Konsole`, type in `passwd`, and press enter
2. You'll be prompted to create a password. Your text will not be visible. After you press enter, you will need to type your password again to confirm
3. Exit out of Konsole

### Install Distrobox

This will require your sudo password for the setup

```
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/install | sh -s -- --prefix ~/.local
curl -s https://raw.githubusercontent.com/89luca89/distrobox/main/extras/install-podman | sh -s -- --prefix ~/.local
```

Add these two lines to `/home/deck/.bashrc` and reload your terminal
```
export PATH=$HOME/.local/bin:$PATH
export PATH=$HOME/.local/podman/bin:$PATH
xhost +si:localuser:$USER
```

### Setting Up Distrobox

1. Open Konsole
2. Create an Ubuntu distrobox: `distrobox create --name ubuntu -i ubuntu:22.10`
3. Enter the distrobox by opening Konsole and entering: `distrobox enter ubuntu`
4. Enter the following: 
   * `sudo apt install libsdl2-dev python3-pip make`

### Setting Up Super Metroid

**Note:** The following folder locations are recommendations. You can choose a different folder location. 

1. In `/home/deck/Applications`, create a `Distrobox` folder
2. In the `Distrobox` folder, right click `Open Terminal Here`, enter:
   * `git clone https://github.com/snesrev/sm`
4. A `sm` folder will be created, place your US Super Metroid ROM in `/home/deck/Applications/sm`
5. Rename the Super Metroid ROM to `sm.smc`

### Building Super Metroid

1. In `/home/deck/Applications/Distrobox/sm`, right click `Open Terminal Here`, enter:
   * `distrobox enter ubuntu`
2. Enter: 
   * `make`
3. Wait for it to finish building
4. To play Supet Metroid, open `sm` in `/home/deck/Applications/Distrobox/sm/`

### How to Configure Supet Metroid

1. In `/home/deck/Applications/Distrobox/sm/`, right click `sm.ini`, click `Open with Kate` or a text editor of your choice
2. Customize settings

### How to Add Super Metroid to Steam

1. In `/home/deck/Applications/Distrobox/sm`, right click `sm`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly



*** 

## Ship of Harkinian: Ocarina of Time 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

### What is Ship of Harkinian?

An unofficial PC port of The Legend of Zelda Ocarina of Time

Source: https://www.shipofharkinian.com/

### Supported Legend of Zelda: Ocarina of Time ROMs

**Note:** You will need one of the following ROMs before you can proceed with the tutorial

#### Ocarina of Time Debug PAL GC (not Master Quest)
> Currently the recommended option
```
Build team: `zelda@srd022j`
Build date: `03-02-21 00:49:18` (year-month-day)
sha1: cee6bc3c2a634b41728f2af8da54d9bf8cc14099
```
#### Ocarina of Time PAL GameCube
> May lead to crashes and instability
```
sha1: 0227d7c0074f2d0ac935631990da8ec5914597b4
```
#### Ocarina of Time Debug PAL GC MQ (Dungeons will be Master Quest)
```
Build team: `zelda@srd022j`
Build date: `03-02-21 00:16:31` (year-month-day)
sha1: 079b855b943d6ad8bd1eb026c0ed169ecbdac7da (Produced by decomp)
sha1: 50bebedad9e0f10746a52b07239e47fa6c284d03 (Alternate)
```

### Setting up Ship of Harkinian

**Note:** The following folder locations are recommendations. You can choose a different folder location.

1. In `/home/deck/Applications`, create a `ShipofHarkinian` folder
2. Download the latest version of `Ship of Harkinian`: https://www.shipofharkinian.com/ to the folder you created in Step 1
   * Download links are only available from their Discord
   * Download the `Linux / SteamDeck (Perfomance Build)`
3. Right click the downloaded zip file and click `Extract archive here, detect subfolder`
4. Move the `soh.AppImage` to `/home/deck/Applications/ShipofHarkinian`
5. Right click `soh.AppImage`, click `Properties`, click `Permissions`, check `Is Executable`

### Installing Ship of Harkinian

1. Place your `The Legend of Zelda: Ocarina of Time` ROM in `/home/deck/Applications/ShipofHarkinian`
2. Open `soh.AppImage`, wait
3. To play Ship of Harkinian, open `soh.AppImage`

### How to Add Ship of Harkinian to Steam

1. In `/home/deck/Applications/ShipofHarkinian/` right click `soh.appimage`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly


***

## OpenGOAL: Jak and Dexter: The Precursor Legacy
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

### What is OpenGOAL?

`OpenGOAL is an unofficial port of Jak and Daxter: The Precursor Legacy for Windows and Linux.`

Source: https://opengoal.dev/

### Setting up OpenGOAL

**Note:** The following folder locations are recommendations. You can choose a different folder location. 

1. In `/home/deck/Applications`, create an `OpenGOAL` folder
2. Download the latest `tar.gz` from here: https://github.com/open-goal/jak-project/releases/tag/v0.1.32 and place it in the folder you created in Step 1
   * Example: Download `opengoal-linux-v0.1.32.tar.gz `
       * The version number may be different depending on when you are reading this
3. Right click the `tar.gz` file and click `Extract archive here`
   * This will make it easier to apply updates. When an update is released, you can overwrite the files in this directory
4. Place your `Jak and Daxter: The Precursor Legacy` in `/home/deck/Applications/OpenGOAL`
   * If you use EmuDeck, you may also place it in `Emulation/roms/ps2`


### Installing OpenGOAL

1. In `/home/deck/Applications/OpenGOAL`, right click, click `Open Terminal Here
2. Enter: `./extractor "NAMEOFJAKANDDEXTERROM"
   * If you have spaces, you will need to use quotes around the ROM name
   * If you placed your ROM in another directory, you will need to enter the full path
        * Example: If you placed it in your `Emulation/roms/ps2` folder on your SD card, the command will look like the following: `./extractor "/run/media/mmcblk0p1/Emulation/roms/ps2/NAMEOFJAKANDDEXTERROM"`
3. To play `Jak and Daxter: The Precursor Legacy`, open `/home/deck/Applications/OpenGOAL/gk`

### How to Install Custom Textures

**Note:** After placing your custom textures, you will need to run the extractor again, some steps will be identical to the previous section. 

1. Download the custom textures from the pinned comment on this Youtube Video: https://www.youtube.com/watch?v=lX1gBO1INZ4 to your `/home/deck/Downloads` folder
2. Right click `texture_replacements.zip` and click `Extract archive here, autodetect subfolder`
3. Move the extracted `texture_replacements` folder to `/home/deck/Applications/OpenGOAL/data`
4. In `/home/deck/Applications/OpenGOAL`, right click, click `Open Terminal Here`
5. Enter: `./extractor "NAMEOFJAKANDDEXTERROM"`
   * If you have spaces, you will need to use quotes around the ROM name
   * If you placed your ROM in another directory, you will need to enter the full path
        * Example: If you placed it in your `Emulation/roms/ps2` folder on your SD card, the command will look like the following: `./extractor "/run/media/mmcblk0p1/Emulation/roms/ps2/NAMEOFJAKANDDEXTERROM"`
6. Wait
7. Your custom textures will now be installed

### How to Add OpenGoal to Steam

1. In `/home/deck/Applications/OpenGOAL`, right click `gk`, click `Add to Steam`
2. After adding it to Steam, you may rename the shortcut in Steam directly



***

## Emulators
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

***

## BlueMaxima's Flashpoint
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

Link: https://gist.github.com/parkerlreed/4bd1f5fa38f7ffa72f9ceacb7d7f636d

***

## Hypseus Singe
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

Link: https://gitlab.com/es-de/emulationstation-de/-/blob/master/USERGUIDE.md#hypseus-singe-daphne

***

## Model 2 Emulator
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

**Note:** The following folder locations are recommendations. You can choose a different folder location.

### Setting up Lutris Folders

1. In `/home/deck/Games`, create a `Lutris` folder
2. In `/home/deck/Games/Lutris`, create two folders, `Games` and `Prefixes`
3. In `/home/deck/Games/Lutris/Games`, create a `Model2` folder
4. In `/home/deck/Games/Lutris/Prefixes`, create a `Model2` folder

### Setting up Lutris

1. Open Discover, and install Lutris
2. Open Lutris, click the icon to the right of the `Wine` button under `Runners` on the left 
3. Install `lutris-GE-Proton7-35`

### Setting up Model 2

1. Download the Model 2 emulator from here: https://www.mediafire.com/file/luw7g37xsvzklvu/Model2.zip/file, place it in `/home/deck/Games/Lutris/Games`
2. Right click `Model2.zip`, click `Extract > Extract archive here`

### Adding Model 2 to Lutris

1. Open Lutris
2. Click the `+` icon in the top left
3. Click `Add locally installed game`
4. `Game info` Tab:
   * Name: `Model 2`
   * Runner: `Wine (Runs Windows games)`
5. `Game options` Tab
   * Executable: `/home/deck/Games/Lutris/Games/Model2/Sega Model 2 UI.exe`
   * Arguments: Leave blank
   * Working directory: Leave blank
   * Wine prefix: `/home/deck/Games/Lutris/Prefixes/Model2`
   * Prefix architecture: `Auto (default)`
6. `Runner options` tab
   * `Wine Version`: `lutris-GE-Proton7-35`
   * Leave everything else as is
7. Click `Save` in the top right
8. In Lutris, select your Model 2 shortcut, and click `Play` in the bottom left, wait, it'll take a moment while it creates a Wine prefix
9. After placing ROMs in `/home/deck/Games/Lutris/Games/Model2/ROMs`, you can launch ROMs using the `Load ROM` option on the right side of the GUI

### How to add Model 2 to Steam

1. Open Lutris
2. Right click `Model 2`
3. Click `Create Steam shortcut`


***

## Supermodel: Model 3 Emulator
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

**Note:** The following folder locations are required so EmulationStation-DE can properly recognize the emulator and your ROMs. 

Prerequisites: 

* EmulationStation-DE 2.0

### Updating EmulationStation-DE to 2.0

1. Download `EmulationStation-DE-2.0.0-beta-2023-02-20-x64_SteamDeck.AppImage` from: https://es-de.org/#Download
   * The version number may look different depending on when you are reading this
2. In `Emulation/tools`, delete `EmulationStation-DE-x64_SteamDeck.AppImage`
3. Move the AppImage you downloaded in Step 1 to `Emulation/tools`
4. Rename it to `EmulationStation-DE-x64_SteamDeck.AppImage`
5. Right click `EmulationStation-DE-x64_SteamDeck.AppImage`, click `Properties`, click `Permissions`, click `Is Executable`

### Setting up Supermodel

1. Download `Supermodel` from: https://gitlab.com/es-de/emulationstation-de/-/blob/master/USERGUIDE-DEV.md#arcade-and-neo-geo, under `Sega Model 3` to your `/home/deck/Downloads` folder
2. Right click `Supermodel_2022-10-07.tar.gz`, click `Extract > Extract archive here`
3. Move the `Config` and `NVRAM` folders from the extracted folder in Step 2 to `Emulation/roms/model3`
4. In `/home/deck/Applications`, create a `Supermodel` folder
5. Move the `supermodel` file from the extracted folder in Step 2 to `/home/deck/Applications/Supermodel`

### Running Supermodel

1. After placing ROMs in `Emulation/roms/model3`, open `EmulationStation-DE` in Game Mode, and run your Supermodel 3 ROMs

**Note:** Your ROMs should be zipped

***

## Super Smash Bros: Project+
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/third-party-emulation#third-party-emulation-table-of-contents)

Link: https://gist.github.com/WingofaGriffin/3202698447ca2452a9431137cfc18d21

***