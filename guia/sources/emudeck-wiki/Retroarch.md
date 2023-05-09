# Retroarch is an open source and cross platform frontend/framework for emulators.

Website: https://www.retroarch.com/

Github: https://github.com/libretro/RetroArch

Retroarch Wiki: https://docs.libretro.com/

Retroarch FAQ: https://www.retroarch.com/?page=faq

***

# RetroArch Table of Contents

1. [Getting Started with Retroarch](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#getting-started-with-retroarch)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#configuration)
      - [How to Update Retroarch And Its Cores](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-update-retroarch-and-its-cores)
      - [How to Launch Retroarch in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-launch-retroarch-in-desktop-mode)
      - [A Breakdown of Overrides](#a-breakdown-of-overrides)
      - [Common Pitfalls](#common-pitfalls)
      - [Hotkeys](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#hotkeys)
      - [List of Retroarch Cores Used by Emudeck](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#list-of-retroarch-cores-used-by-emudeck)


2. [Retroarch Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-tips-and-tricks)   
      - [How to Optimize Storage (Compression Tool)](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-optimize-storage-compression-tool)   
      - [How to Manage Multiple Discs](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-manage-multiple-discs)
      - [How to Change Shaders](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-change-shaders)
      - [How to Change Controller Layouts on a Per Game Basis](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-change-controller-layouts-on-a-per-game-basis)
      - [How to Change Controller Layouts for a System](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-change-controller-for-a-system)
      - [How to Set Game Settings On a Per-Game Basis](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#how-to-set-game-settings-on-a-per-game-basis)

3. [Retroarch Cores](#retroarch-cores)
      * [Flycast](#flycast)
          * [How to Install Custom Textures For Flycast](#how-to-install-custom-textures-for-flycast)
      * [Fuse](#fuse)
          * [How to Configure Controls For Fuse](#how-to-configure-controls-for-fuse)
      * [MelonDS](#melonds)
          * [How to Use the Trackpad for the Touch Screen](#how-to-use-the-trackpad-for-the-touch-screen)
      * [Mupen64Plus-Next](#mupen64Plus-next)
          * [How to Install Custom Textures for Mupen64Plus-Next](#how-to-install-custom-textures-for-mupen64plus-next)
      * [Neko Project II Kai](#neko-project-ii-kai)
          * [Configuring controls](#configuring-controls)

***

# Getting Started with Retroarch
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

* Type of Emulator: Flatpak
* Config Location: `/home/deck/.var/app/org.libretro.RetroArch`
* Storage: `Emulation/storage/retroarch`
  * Contains: `cheats`
* ROMs: Refer to https://github.com/dragoonDorise/EmuDeck/wiki/Retroarch#list-of-retroarch-cores-used-by-emudeck for a full list of Retroarch folders. 
* BIOS: `Emulation/bios`
* Saves:
    * Symlink: `Emulation/saves/retroarch/saves`
    * Target Location: `/home/deck/.var/app/org.libretro.RetroArch/config/retroarch/saves/`
* Save States:
    * Symlink: `Emulation/saves/retroarch/states`
    * Target Location: `/home/deck/.var/app/org.libretro.RetroArch/config/retroarch/states/`
   
**Note:** `~/.var` is an invisible folder by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.  

### Works With
* Steam Rom Manager
* EmulationStation-DE

***

## How to Update Retroarch And Its Cores
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

### How to Update Retroarch

* Update through `Discover` (Shopping bag icon)
* Run `Update Emulators & Tools` in `EmuDeck`

### How to Update Retroarch Cores

1. Open `Retroarch`
2. Open the `Main Menu`
3. Scroll down and select `Online Updater`
4. Select `Update Installed Cores`

**Visual Reference:** <img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/ce5601424c16b85d3a2a92b3266374d0793eb73e/GIFs/How%20to%20Update%20Retroarch%20Cores.gif" height="300">

***

## How to Launch Retroarch in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**How to Launch Retroarch in Desktop Mode**

* Launch `RetroArch` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the script from `Emulation/tools/launchers`, `retroarch.sh`
* Launch the emulator from `Steam` after adding it via the `Emulators` parser in `Steam Rom Manager`


***

## A Breakdown of Overrides
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

1. Global = Everything.
1. Core = Anything run by a specfic cores.
1. Content Directory = Any rom in a specific directory. *these are used for the emudeck applied shaders.
1. Game = that specific rom.

As you get lower in this list it takes precedence, so if you do nothing but set a core shader preset, it will  not override the content directory preset already applied.

For more information: https://docs.libretro.com/guides/overrides/

***

## Common Pitfalls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

* Shaders will only apply if your ROMs are directly in their respective ROM folder. Shaders will not apply if you place your ROMs in sub-folders

***

## Hotkeys
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

|       Hotkeys      |        Retroarch        |
|:------------------:|:-----------------------:|
| Menu               | `L3` + `R3`             |
| Exit               | `Select` + `Start `     |
| Pause/Unpause      | `Select` + `A`          |
| Fast Forward       | `Select` + `R2`         |
| Rewind             | `Select` + `L1`         |
| Save State         | `Select` + `R1`         |
| Load State         | `Select` + `L1`         |
| Next Save Slot     | `Select` + `DPAD Right` |
| Previous Save Slot | `Select` + `DPAD Left`  |
| Toggle Runahead    | `Select` + `DPad Up`    |
| Toggle FPS Display | `Select` + `X`          |
| Screenshot         | `Select` + `B`          |
| Toggle Screen Layout (NDS) | `R2`    |
| Blow Mic  (NDS)    | `L2`                    |

**Steam Deck Button Layout:** https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys#steam-deck-button-layout

**Note:** 

* Screenshots are saved in: `/home/deck/.var/app/org.libretro.RetroArch/config/retroarch/screenshots`
* The `Blow Mic` hotkey only blows white noise. It cannot be used to speak into the Steam Deck microphone. The white noise may not be strong enough to progress in some games. 

***

## List of Retroarch Cores Used by EmuDeck
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**IMPORTANT:** 
* Files go directly into the `Emulation/bios` folder. **Do not** make or use any additional folders unless otherwise specified on the chart below.
* If the BIOS box contains: `N/A`, BIOS files are not required to play the respective system.
* The chart can be scrolled horizontally. 
* In many cases, BIOS names are case sensitive. Match the casing to the `BIOS` column in the chart. 

| Console/System | Folder Name | Retroarch Core (Click for Libretro Article) | File Types | BIOS Files |
|---|---|---|---|---|
| 3DO | 3do | [Retroarch Opera](https://docs.libretro.com/library/opera/) | .iso<br>.chd<br>`.cue and bin` | `panafz1.bin` |
| Amiga | amiga | [Retroarch PUAE](https://docs.libretro.com/library/puae/) | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga 600 | amiga600 | [Retroarch PUAE](https://docs.libretro.com/library/puae/) | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga 1200 | amiga1200 | [Retroarch PUAE](https://docs.libretro.com/library/puae/) | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga CD32 | amigacd32 | [Retroarch PUAE](https://docs.libretro.com/library/puae/) | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amstrad CPC | amstradcpc | [Retroarch Caprice32](https://docs.libretro.com/library/caprice32/) | .7z<br>.cdt<br>.dsk<br>.sna<br>.tap | N/A |
| Atari 2600 | atari2600 | [Retroarch Stella](https://docs.libretro.com/library/stella/) | .7z <br>.a26 <br>`.cue and .bin` <br>.zip | N/A |
| Atari Lynx | lynx | [Retroarch Stella](https://docs.libretro.com/library/stella/) | .7z <br>.lnx <br>`.cue and .bin` <br>.zip | `lynxboot.img` |
| Commodore 16 | c16 | [Retroarch Vice](https://docs.libretro.com/library/vice/) | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Commodore 64 | c64 | [Retroarch Vice](https://docs.libretro.com/library/vice/) | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Commodore VIC-20 | vic20 | [Retroarch Vice](https://docs.libretro.com/library/vice/) | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Doom | doom | [Retroarch PrBoom](https://docs.libretro.com/library/prboom/) | .wad <br>.iwad <br>.pwad | `prboom.wad` |
| DOS | dos | [Retroarch DOSBox Pure](https://docs.libretro.com/library/dosbox_pure/) | .zip<br>.7z | N/A |
| Final Burn Neo | fbneo | [Retroarch FinalBurn Neo](https://docs.libretro.com/library/fbneo/) | .zip <br>.7z | BIOS will be searched through 3 folders:<br>`Emulation/roms/arcade/`<br>`Emulation/bios/mame/`<br>`Emulation/bios/`<br>EmulationStation-DE will ONLY work with the BIOS in `Emulation/roms/arcade/` |
| MAME 2003 Plus | mame2003 | [Retroarch MAME 2003 Plus](https://docs.libretro.com/library/mame2003_plus/) | .zip | N/A |
| MAME 2010 | mame2010 | [Retroarch MAME 2010](https://docs.libretro.com/library/mame_2010/) | .zip | N/A |
| MAME Current | mame | [Retroarch MAME Current](https://docs.libretro.com/development/cores/core-specific/mame/) | .zip | N/A |
| NEC PC-98 | pc98 | [Retroarch Neko Project II Kai](https://docs.libretro.com/libraryneko_project_ii_kai/) | .d98<br>.zip<br>.98d<br>.fdi<br>.fdd<br>.2hd<br>.tfd<br>.d88<br>.88d<br>.hdm<br>.xdi<br>.dup<br>.cmd<br>.hdi<br>.thd<br>.nhd<br>.hdd<br>.hdn | [Read the Libretro Wiki](https://docs.libretro.com/library/neko_project_ii_kai/) |
| NEC TurboGrafx-16 | tg16, pcengine (SRM) | [Retroarch Beetle PCE](https://docs.libretro.com/library/beetle_pce_fast/) | .pce<br>`.cue and .bin` <br>.ccd, <br>.iso, <br>.img<br>.bin <br>.chd | `syscard1.pce`<br>`syscard2.pce`<br>`syscard3.pce`<br>`gexpress.pce` |
| NEC TurboGrafx-CD | tg-cd, pcenginecd (SRM) | [Retroarch Beetle PCE](https://docs.libretro.com/library/beetle_pce_fast/) | .pce<br>`.cue and .bin`<br>.ccd<br>.iso<br>.img<br>.bin<br>.chd | `syscard1.pce`<br>`syscard2.pce`<br>`syscard3.pce`<br>`gexpress.pce` |
| Neo Geo Pocket & Color | ngp | [Retroarch Beetle NeoPop](https://docs.libretro.com/library/beetle_neopop/) | .7z <br>.ngp <br>.ngc <br>.bin <br>.zip | N/A |
| Nintendo 64 | n64 | [Retroarch Mupen64plus-Next](https://docs.libretro.com/library/mupen64plus/) | .7z <br>`.cue and .bin` <br>.n64 <br>.ndd <br>.u1 <br>.v64 <br>.z64 <br>.zip | N/A |
| Nintendo DS | nds | [Retroarch melonDS](https://docs.libretro.com/library/melonds/) | .7z <br>.nds <br>.zip | `bios7.bin`<br>`bios9.bin`<br>`firmware.bin` |
| Nintendo Gameboy | gb | [Retroarch SameBoy](https://docs.libretro.com/library/sameboy/) | .7z <br>.gb <br>.dmg <br>.zip | N/A |
| Nintendo GameBoy | gb | [Retroarch Gambatte](https://docs.libretro.com/library/gambatte/) | .7z <br>.gb <br>.dmg <br>.zip | N/A |
| Nintendo GameBoy Advance | gba | [Retroarch mGBA core](https://docs.libretro.com/library/mgba/) | .7z <br>.gba <br>.zip | N/A |
| Nintendo GameBoy Color | gbc | [Retroarch SameBoy](https://docs.libretro.com/library/sameboy/) | .7z <br>.gba <br>.zip | N/A |
| Nintendo GameBoy Color | gbc | [Retroarch Gambatte](https://docs.libretro.com/library/gambatte/) | .7z <br>.gb <br>.gbc <br>.dmg <br>.zip | N/A |
| Nintendo NES | nes | [Retroarch Mesen](https://docs.libretro.com/library/mesen/) | .7z <br>.nes <br>.fds <br>.unf <br>.unif <br>.zip | FDS (Famicom Disk System) games require a BIOS - `disksys.rom` in `Emulation/bios` |
| Nintendo NES | nes | [Retroarch Nestopia](https://docs.libretro.com/library/nestopia_ue/) | .7z <br>.nes <br>.fds <br>.unf <br>.unif <br>.zip | FDS (Famicom Disk System) games require a BIOS - `disksys.rom` in `Emulation/bios` |
| Sega 32X | sega32x | [Retroarch PicoDrive](https://docs.libretro.com/library/picodrive/) | .7z <br>.32x <br>.bin <br>.zip | N/A |
| Sega CD | segacd | [Retroarch Genesis Plus GX](https://docs.libretro.com/library/genesis_plus_gx/) | .7z <br>.32x <br>`.cue and .bin` <br>.chd <br>.iso <br>.zip | `bios_CD_E.bin`<br>`bios_CD_U.bin`<br>`bios_CD_J.bin` |
| Sega Dreamcast | dreamcast | [Retroarch FlyCast](https://docs.libretro.com/library/flycast/) | .cdi <br>.chd <br>`.cue and .bin` <br>.gdi | `dc_boot.bin`<br>placed in subfolder: `Emulation/bios/dc` |
| Sega Game Gear | gamegear | [Retroarch Genesis Plus GX](https://docs.libretro.com/library/genesis_plus_gx/) | .7z <br>.gg <br>.zip | N/A |
| Sega Genesis / Mega Drive | genesis | [Retroarch Genesis Plus GX](https://docs.libretro.com/library/genesis_plus_gx/) | .7z <br>.gen <br>.md <br>.smd <br>.zip<br>.bin | N/A |
| Sega Genesis Widescreen | genesiswide | [Retroarch Genesis Plus GX](https://www.libretro.com/index.php/genesis-plus-gx-wide-now-available-for-libretroretroarch/) | .7z <br>.gen <br>.md <br>.smd <br>.zip<br>.bin | N/A |
| Sega Master System | mastersystem | [Retroarch Genesis Plus GX](https://docs.libretro.com/library/genesis_plus_gx/) | .7z <br>.gen <br>.sms <br>.zip | N/A |
| Sega Saturn | saturn | [Retroarch Beetle Saturn](https://docs.libretro.com/library/beetle_saturn/) | .7z <br>`.cue and .bin` <br>.iso <br>.chd <br>.zip | `sega_101.bin`<br>`mpr-17933.bin` |
| Sega Saturn | saturn | [Retroarch Kronos](https://docs.libretro.com/library/kronos/) | .7z <br>`.cue and .bin` <br>.iso <br>.chd <br>.zip | `kronos/saturn_bios.bin` |
| Sega Saturn | saturn | [Retroarch Yabause](https://docs.libretro.com/library/yabause/) | .7z <br>`.cue and .bin`<br>.iso <br>.chd <br>.zip | `saturn_bios.bin` |
| Sharp X68000 | x68000 | [Retroarch PX68k](https://docs.libretro.com/library/px68k/) | .dim<br>.zip<br>.img<br>.d8<br>.88d<br>.hdm<br>.dup<br>.2hd<br>.xdf<br>.hdf<br>.cmd<br>.m3u | [Read the Libretro Wiki](https://docs.libretro.com/library/px68k/) |
| Sony Playstation | psx | [Retroarch Beetle HW](https://docs.libretro.com/library/beetle_psx/) | `.cue and .bin`<br>.chd <br>.ecm <br>.iso <br>.m3u <br>.mds <br>.pbp | Example Set:<br>`scph5500.bin` (JP)<br>`scph5501.bin`(US)<br>`scph5502.bin` (EU) |
| Sony Playstation | psx | [Retroarch Swanstation](https://www.libretro.com/index.php/category/swanstation/) | `.cue and .bin`<br>.chd <br>.ecm <br>.iso <br>.m3u <br>.mds <br>.pbp | Example Set:<br>`scph5500.bin` (JP)<br>`scph5501.bin`(US)<br>`scph5502.bin` (EU) |
| Sony Playstation Portable | psp | [Retroarch PPSSPP](https://docs.libretro.com/library/ppsspp/) | .7z<br>.elf<br>.cso<br>.iso <br>.pbp <br>.prx | The retroarch core requires ppsspp.zip in the bios folder.<br>You can obtain it from within RetroArch's downloader. |
| Super Nintendo | snes | [Retroarch Snes9x](https://docs.libretro.com/library/snes9x/) | .7z <br>.bs <br>.fig <br>.sfc <br>.smc <br>.swx <br>.zip | N/A |
| Super Nintendo Widescreen | sneshd | [Retroarch bsnes hd beta](https://github.com/DerKoun/bsnes-hd) | .7z<br>.bs <br>.fig <br>.sfc <br>.smc<br>.swx <br>.zip | N/A |
| Wonderswan & Color | wonderswan | [Retroarch Beetle Cygne](https://docs.libretro.com/library/beetle_cygne/) | .7z <br>.pc2 <br>.ws <br>.wsc <br>.zip | N/A |
| ZX Spectrum | zxspectrum | [Retroarch Fuse](https://docs.libretro.com/library/fuse/) | .7z<br>.tzx<br>.tap<br>.z80<br>.rzx<br>.scl<br>.trd<br>.tzx<br>.tap<br>.z80<br>.zx<br>.scl<br>.trd<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/fuse/) |

***

# Retroarch Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

***

## How to Optimize Storage (Compression Tool)
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

To optimize storage, you can use the `EmuDeck Compression Tool` in the `Tools & Stuff` menu within EmuDeck.  

The `EmuDeck Compression Tool` will compress your Dreamcast, Playstation 1, Sega/MegaCD, 3DO, Saturn, TurboGraphix/PCEngineCD, PC-FX, Amiga CD32, and NeoGeoCD ROMs to CHD. If your ROM is a BIN/CUE, the Compression Tool will only compress it if you have both the BIN and the CUE files for a ROM. If the ROM is in a zip file or is missing a paired BIN or CUE file, the Compression Tool will not detect the ROM. 

After running the `EmuDeck Compression Tool`, re-run Steam ROM Manager to update your ROM shortcuts to the newly compressed ROM. 

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/198798630-9cf85bc5-ff42-45c4-bceb-7fc4ac740c3c.png" height="300">

***

## How to Manage Multiple Discs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

M3U files can be used to manage multiple discs for RetroAarch. When the time comes to switch discs:

1. Press L3 and R3 together
2. Select manage discs

Learn how to create an M3U File: https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-manage-roms-with-multiple-discs.

***

## How to Change Shaders
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

1. Load content that has a shader applied automatically. 
2. Go to the quick menu via both sticks in retroarch. from there, navigate to shaders.
   * <img src="https://user-images.githubusercontent.com/1683513/174447565-be119f1e-38a3-4297-9248-ae3fcc48ee0f.png" height="300">
2. In shaders find remove, and select it.
   * <img src="https://user-images.githubusercontent.com/1683513/174447588-6390f58b-2606-4f10-9935-3f82acbf3ad1.png" height="300">
4. Hit the button that says remove content directory preset
   * <img src="https://user-images.githubusercontent.com/1683513/174447596-38bc3c39-d667-4c5a-8b06-8cc8c3b9505b.png" height="300">
5. close retroarch, reload content. no shaders applied (yes it's hard to see, but no more lcd squares)
   * <img src="https://user-images.githubusercontent.com/1683513/174447652-b4ca78d1-7b5a-4ae9-b3f9-120a5b16f3cc.png" height="300">

1. Conversely in that same shader menu - if you want to set up a different shader you would make the changes and apply them. When satistified you go to save:
   * <img src="https://user-images.githubusercontent.com/1683513/174447945-3929b8d0-cb9f-45f8-9e15-18d172703cd7.png" height="300">

The order they are listed in is the order they take precedence, from most general to most specific.

* Global = Everything.
* Core = Anything run by a specfic cores.
* Content Directory = Any rom in a specific directory. *these are used for the emudeck applied shaders.
* Game = that specific rom.

As you get lower in this list it takes precedence, so if you do nothing but set a core shader preset, it will  not override the content directory preset already applied.


***

## How to Change Controller Layouts on a Per Game Basis
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

```
How to remap the controls for a single game:

1. Start content with the core for which you want to remap controls
2. Go to Quick Menu and then Controls
3. Configure the buttons the way you want
4. Select Save Game Remap File
```

Copied From: https://docs.libretro.com/guides/input-and-controls/#remapping-controls-for-individual-cores-or-content

*** 

## How to Change Controller Layouts for a System
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

```
How to remap the controls for a single core:

1. Start content with the core for which you want to remap controls
2. Go to Quick Menu and then Controls
3. Configure the buttons the way you want
4. Select Save Core Remap File
```

Copied From: https://docs.libretro.com/guides/input-and-controls/#remapping-controls-for-individual-cores-or-content

***

## How to Set Game Settings On a Per-Game Basis
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

```
How to Set Game Settings On a Per-Game Basis:

1. Start content with the core for which you want to change settings
2. Go to Quick Menu and then 
3. Configure the settings the way you want
4. Select Core Options, Manage Core Options, Save Game Options
```

***

# Retroarch Cores
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

***

## Flycast
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**Flycast is a Dreamcast Core for Retroarch.**

Wiki Link: https://docs.libretro.com/library/flycast/

***

### How to Install Custom Textures For Flycast
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

1. In `Emulation/bios`, create a `dc` folder
2. In `Emulation/bios/dc`, create 3 folders: `texdump`, `textures`, and `skins` folder
   * `texdump` - Dumped Textures Folder
   * `textures` - Texture Pack Folder
3. Place texture packs in `Emulation/bios/dc/textures`
4. Open a game, press `L3` and `R3`, open the settings menu and enable `Load Custom Textures`

Texture Pack Resources: https://old.reddit.com/r/Flycast_texture_packs/

***

## Fuse
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**Fuse is a ZX Spectrum Core for Retroarch.**

Wiki Link: https://docs.libretro.com/library/fuse/

***

### How to Configure Controls for Fuse
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

You will want to set a joystick in the quick menu/controls/port one. 

Retroarch sets it controller by default, but thats useless for a computer. 

I always suggest setting it to "Kempston" and saving a core remap.

Kempston works for a lot of games so is a good base, but it may need changing on a game by game basis, which is easy enough. 

If you load a game and kempston doesnt work, just head back to quick menu/controls/port one, and try one of the other joysticks.

When you find one that works save that as a game remap. 

Bear in mind though the speccy was a computer, and some games will be keyboard only, you may be able to work around that via steam input. 

***

## MelonDS
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**MelonDS is a Nintendo DS Core for Retroarch.**

Wiki Link: https://docs.libretro.com/library/melonds/

***

### How to Use the Trackpad for the Touch Screen
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**Description:** This allows you to use one of the trackpads as a touch screen for a Nintendo DS game. 

**Retroarch**

1) Press both `L3` and `R3` while playing a DS game
2) `Quick Menu` > `Core Options` > `Screen` > `Touch Mode` > change from `Touch` to `Mouse`
3) `Quick Menu` > `Manage Core Options` > `Save Content Directory Options`

**Steam Input**

1. Change one of your trackpads to a mouse and either use the `B` button or `Left Click` as the click option

***

## Mupen64Plus-Next
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**Mupen64Plus-Next is a Nintendo 64 Core for Retroarch.**

Wiki Link: https://docs.libretro.com/library/mupen64plus/

***

### How to Install Custom Textures for Mupen64Plus-Next
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

1. In `Emulation/hdpacks/Mupen64plus_next`, create two folders, `cache` and `hires_texture`
2. A breakdown of which folder to use: 
   * .png textures stored in hires_texture/ should generate a cache when loading a matching game and then work
   * .htc/.hts textures in cache/ should work but the RA settings need to match the settings used when generating the cache
3. Open a game, access the Quick Menu > Options > GlideN64 > Use High-Res textures
   * Enable:
     * Cache Textures
     * Use High-Res Full Alpha Channel
     * Use Hi-Res Storage

***

## Neko Project II Kai
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

**Neko Project II Kai is a NEC PC-98 Core for Retroarch.**

Wiki Link: https://docs.libretro.com/library/neko_project_ii_kai/

***

### Configuring controls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/retroarch#retroarch-table-of-contents)

Neko Project II Kai, soon:tm:

***

