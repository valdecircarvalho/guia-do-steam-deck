# The Cheat Sheet is Your Tool to Success.

***

# Cheat Sheet Table of Contents

1. [Cheat Sheets](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#cheat-sheets)
      - [Cheat Sheet Deluxe](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#cheat-sheet-deluxe)
      - [Retroarch Core Cheat Sheet](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#retroarch-core-cheat-sheet)
      - [Standalone Emulator Cheat Sheet](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#standalone-emulator-cheat-sheet)

***

# Cheat Sheets

***

## Cheat Sheet Deluxe
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#cheat-sheet-table-of-contents)

### The Full Package

**Read the below bullet points before looking at the chart**

**IMPORTANT:** 
* BIOS files go directly into the `Emulation/bios` folder. **Do not** make or use any additional folders unless otherwise specified on the chart below.
* If the BIOS box contains: `N/A`, BIOS files are not required to play the respective system.
* The chart can be scrolled horizontally. 
* In many cases, BIOS names are case sensitive. Match the casing to the `BIOS` column in the chart. 
* If you are on a computer, press `CTRL` + `F` or `CMD` + `F` together to search the chart. 
   * <img src="https://user-images.githubusercontent.com/108900299/215289134-a79b8b74-2317-4128-a1d6-4e51fe046b88.png" height="300">

***

**Chart**

[Jump to the Bottom](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#end)

| System | Folder Name | Emulator | File Format | BIOS Files |
|---|---|---|---|---|
| 3DO | 3do | Retroarch Opera | .iso<br>.chd<br>`.cue and bin` | `panafz1.bin` |
| Amiga | amiga | Retroarch PUAE | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga 600 | amiga600 | Retroarch PUAE | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga 1200 | amiga1200 | Retroarch PUAE | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amiga CD32 | amigacd32 | Retroarch PUAE | .adf<br>.adz<br>.dms<br>.fdi<br>.ipf<br>.hdf<br>.hdz<br>.lha<br>.slave<br>.info<br>`.cue and .bin`<br>.ccd<br>.chd<br>.nrg<br>.mds<br>.iso<br>.uae<br>.m3u<br>.zip<br>.7z | [Read the Libretro Wiki](https://docs.libretro.com/library/puae/) |
| Amstrad CPC | amstradcpc | Retroarch Caprice32 | .7z<br>.cdt<br>.dsk<br>.sna<br>.tap | N/A |
| Atari 2600 | atari2600 | Retroarch Stella | .7z<br>.a26  <br>.bin  <br>.zip | N/A |
| Atari Lynx | lynx | Retroarch Beetle Lynx | .7z  <br>.lnx  <br>.bin  <br>.zip | `lynxboot.img` |
| Commodore 16 | c16 | Retroarch Vice | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Commodore 64 | c64 | Retroarch Vice | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Commodore VIC-20 | vic20 | Retroarch Vice | .d64<br>.d71<br>.d80<br>.d81<br>.d82<br>.g64<br>.g41<br>.x64<br>.t64<br>.tap<br>.prg<br>.p00<br>.crt<br>`.cue and .bin`<br>.d6z<br>.d7z<br>.d8z<br>.g6z<br>.g4z<br>.x6z<br>.cmd<br>.m3u<br>.vsf<br>.nib<br>.nbz<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/vice/) |
| Doom | doom | Retroarch PrBoom | .wad  <br>.iwad  <br>.pwad | `prboom.wad` |
| DOS | dos | Retroarch DOSBox Pure | .zip<br>.7z | N/A |
| Final Burn Neo | fbneo | Retroarch FinalBurn Neo | .zip  <br>.7z | BIOS will be searched through 3 folders:  <br>1) the folder of the current ROM Set  <br>2) `Emulation/bios/fbneo/`  <br>3) `Emulation/bios/` |
| MAME 2003 Plus | mame2003 | Retroarch MAME 2003 Plus | .zip | N/A |
| MAME 2010 | mame2010 | Retroarch MAME 2010 | .zip | N/A |
| MAME Current | mame | Retroarch MAME Current | .zip | N/A |
| MAME (Standalone) | arcade | MAME | .zip  <br>.chd | BIOS will be searched through 3 folders:  <br>1) `Emulation/roms/arcade/`  <br>2) `Emulation/bios/mame/`  <br>3) `Emulation/bios/`  <br>Note: EmulationStation-DE will ONLY work with the BIOS, in `Emulation/roms/arcade/` folder. |
| Microsoft Xbox | xbox | xemu | .iso (xiso formatted) | `mcpx_1.0.bin`  modified retail `COMPLEX 4627` BIOS, `Complex_4627v1.03.bin` |
| NEC PC-98 | pc98 | Retroarch Neko Project II Kai | .d98<br>.zip<br>.98d<br>.fdi<br>.fdd<br>.2hd<br>.tfd<br>.d88<br>.88d<br>.hdm<br>.xdi<br>.dup<br>.cmd<br>.hdi<br>.thd<br>.nhd<br>.hdd<br>.hdn | [Read the Libretro Wiki](https://docs.libretro.com/library/neko_project_ii_kai/) |
| NEC TurboGrafx-16 | tg16, pcengine (SRM) | Retroarch Beetle PCE | .pce <br>`.cue and .bin` <br>.ccd <br>.iso  <br>.img <br>.bin <br>.chd | `syscard1.pce`  <br>`syscard2.pce`  <br>`syscard3.pce`<br>`gexpress.pce` |
| NEC TurboGrafx-16 CD | tg-cd, pcenginecd (SRM) | Retroarch Beetle PCE | .pce <br>`.cue and .bin` <br>.ccd <br>.iso  <br>.img <br>.bin <br>.chd | `syscard1.pce`<br>`syscard2.pce`<br>`syscard3.pce`<br>`gexpress.pce` |
| Neo Geo Pocket & Color | ngp | Retroarch Beetle NeoPop | .7z<br>.ngp<br>.ngc<br>.zip | N/A |
| Nintendo 3DS | 3ds or n3ds | Citra | .3ds<br>.3dsx<br>.app<br>.axf<br>.cci<br>.cxi  <br>.elf  <br>.cia is for INSTALL ONLY <br>.cia is incompatible with ES-DE/SRM | Place `aes_keys.txt` (for encrypted ROMs) in `Emulation/bios/citra/keys` |
| Nintendo 64 | n64 | Retroarch Mupen64plus-Next | .7z  <br>`.cue and .bin` <br>.n64  <br>.ndd  <br>.u1  <br>.v64  <br>.z64  <br>.zip | N/A |
| Nintendo DS | nds | Retroarch melonDS | .7z  <br>.nds  <br>.zip | `bios7.bin`  <br>`bios9.bin`  <br>`firmware.bin` |
| Nintendo GameBoy | gb | Retroarch Gambatte | .7z  <br>.gb  <br>.dmg  <br>.zip | N/A |
| Nintendo Gameboy | gb | Retroarch SameBoy | .7z  <br>.gb  <br>.dmg  <br>.zip | N/A |
| Nintendo GameBoy Advance | gba | Retroarch mGBA | .7z  <br>.gba  <br>.zip | N/A |
| Nintendo Gameboy | gbc | Retroarch SameBoy | .7z  <br>.gb  <br>.gbc  <br>.dmg  <br>.zip | N/A |
| Nintendo GameBoy Color | gbc | Retroarch Gambatte | .7z  <br>.gb  <br>.gbc  <br>.dmg  <br>.zip | N/A |
| Nintendo GameCube | gc or gamecube | Dolphin Standalone | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.nkit  <br>.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs | N/A |
| Nintendo NES | Nintendo NES | Retroarch Mesen | .7z  <br>.nes  <br>.fds  <br>.unf  <br>.unif  <br>.zip | FDS (Famicom Disk System) games require a BIOS:  `disksys.rom` in `Emulation/bios` |
| Nintendo NES | Nintendo NES | Retroarch Nestopia | .7z  <br>.nes  <br>.fds  <br>.unf  <br>.unif  <br>.zip | FDS (Famicom Disk System) games require a BIOS:  `disksys.rom` in `Emulation/bios` |
| Nintendo PrimeHack | primehacks | PrimeHack (Metroid Prime) | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.json  <br>.nkit.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs | N/A |
| Nintendo Switch | switch | Ryujinx | .kp  <br>.nca  <br>.nro  <br>.nso  <br>.nsp  <br>.xci  <br>.nsz | Place `prod.keys` in:  `Emulation/bios/ryujinx/keys`  <br>Firmware installation required through Ryujinx UI |
| Nintendo Switch | switch | Yuzu | .kp  <br>.nca  <br>.nro  <br>.nso  <br>.nsp  <br>.xci | Place `prod.keys` in: `Emulation/bios/yuzu/keys`  <br>Place `Firmware` files in: `Emulation/bios/yuzu/firmware` |
| Nintendo Wii | wii | Dolphin Standalone | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.json  <br>.nkit.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs | N/A |
| Nintendo Wii U | `wiiu/roms` | CEMU | .rpx  <br>.wud  <br>.wux  <br>.elf  <br>.iso  <br>.wad <br>.wua | Place `keys_txt` (for encrypted ROMs) in: `Emulation/roms/wiiu` |
| Sega 32X | sega32x | Retroarch PicoDrive | .7z  <br>.32x  <br>.bin  <br>.zip | N/A |
| Sega CD | segacd | Retroarch Genesis Plus GX | .7z  <br>.32x  <br>`.cue and .bin` <br>.chd  <br>.iso  <br>.zip | `bios_CD_E.bin`  <br>`bios_CD_U.bin`  <br>`bios_CD_J.bin` |
| Sega Dreamcast | dreamcast | Retroarch FlyCast | .cdi  <br>.chd <br>`.cue and .bin` <br>.gdi | Create `dc` folder in `Emulation/bios`  Place `dc_boot.bin` in `Emulation/bios/dc` |
| Sega Game Gear | gamegear | Retroarch Genesis Plus GX | .7z  <br>.gg  <br>.zip | N/A |
| Sega Genesis / Mega Drive | genesis | Retroarch Genesis Plus GX | .7z  <br>.gen  <br>.md  <br>.smd  <br>.zip <br>.bin | N/A |
| Sega Genesis Widescreen | genesiswide | Retroarch Genesis Plus GX Wide | .7z  <br>.gen  <br>.md  <br>.smd  <br>.zip<br>.bin | N/A |
| Sega Master System | mastersystem | Retroarch Genesis Plus GX | .7z  <br>.gen  <br>.sms  <br>.zip | N/A |
| Sega Saturn | saturn | Retroarch Beetle Saturn | .7z  <br>`.cue and .bin` <br>.iso  <br>.chd  <br>.zip | `sega_101.bin`  <br>`mpr-17933.bin` |
| Sega Saturn | saturn | Retroarch Kronos | .7z  <br>`.cue and .bin` <br>.iso  <br>.chd  <br>.zip | `kronos/saturn_bios.bin` |
| Sega Saturn | saturn | Retroarch Yabause | .7z  <br>`.cue and .bin`<br>.iso  <br>.chd  <br>.zip | `saturn_bios.bin` |
| Sharp X68000 | x68000 | Retroarch PX68k | .dim<br>.zip<br>.img<br>.d8<br>.88d<br>.hdm<br>.dup<br>.2hd<br>.xdf<br>.hdf<br>.cmd<br>.m3u | [Read the Libretro Wiki](https://docs.libretro.com/library/px68k/) |
| Sony Playstation | psx | DuckStation | `.cue and .bin` <br>.chd  <br>.ecm  <br>.iso  <br>.m3u  <br>.mds  <br>.pbp | Example Set:  <br>`scph5500.bin` (JP)  <br>`scph5501.bin` (US)  <br>`scph5502.bin` (EU) |
| Sony Playstation | psx | Retroarch Beetle HW | `.cue and .bin` <br>.chd  <br>.ecm  <br>.iso  <br>.m3u  <br>.mds  <br>.pbp | Example Set:  <br>`scph5500.bin` (JP)  <br>`scph5501.bin` (US)  <br>`scph5502.bin` (EU) |
| Sony Playstation | psx | Retroarch SwanStation | `.cue and .bin` <br>.chd  <br>.ecm  <br>.iso  <br>.m3u  <br>.mds  <br>.pbp | Example Set:  <br>`scph5500.bin` (JP)  <br>`scph5501.bin` (US)  <br>`scph5502.bin` (EU) |
| Sony Playstation 2 | ps2 | PCSX2 -QT | `.bin` <br>.chd  <br>.cso  <br>.dump <br>.gz  <br>.img  <br>.iso  <br>.mdf  <br>.nrg | Example Set (EU Set):  <br>`SCPH-70004_BIOS_V12_EUR_200.BIN`  <br>`SCPH-70004_BIOS_V12_EUR_200.EROM`  <br>`SCPH-70004_BIOS_V12_EUR_200.ROM1`  <br>`SCPH-70004_BIOS_V12_EUR_200.ROM2`<br>Example Set (US Set): <br>`SCPH-70012_BIOS_V12_USA_200.BIN` |
| Sony Playstation 3 | ps3 | RPCS3 | * Game Folder: `/PS3_GAME/USRDIR/eboot.bin` in `Emulation/roms/ps3` <br>* An installed pkg file through RPCS3 | Firmware installation required through RPCS3 directly |
| Sony Playstation Portable | psp | PPSSPP Standalone | .elf <br>.cso  <br>.iso <br>.pbp  <br>.prx | N/A |
| Sony Playstation Portable | psp | PPSSPP Retroarch | .7z <br>.elf <br>.cso  <br>.iso  <br>.pbp  <br>.prx | The retroarch core requires `ppsspp.zip` in:  `Emulation/bios`  <br>Provided through RetroArch's downloader |
| Sony Playstation Vita | psvita | Vita3K | * Game Folder in `Emulation/roms/psvita/ux0` <br>* A valid installed ROM file through Vita3K | Firmware installation required through Vita3K directly |
| Super Nintendo | snes | Retroarch Snes9x | .7z  <br>.bs  <br>.fig <br>.sfc  <br>.smc  <br>.swx  <br>.zip | N/A |
| Super Nintendo Widescreen | sneshd | Retroarch bsnes hd | .7z  <br>.bs  <br>.fig  <br>.sfc  <br>.smc  <br>.swx  <br>.zip | N/A |
| Wonderswan & Color | wonderswan | Retroarch Beetle Cygne | .7z  <br>.pc2  <br>.ws  <br>.wsc  <br>.zip | N/A |
| ZX Spectrum | zxspectrum | Retroarch Fuse | .7z<br>.tzx<br>.tap<br>.z80<br>.rzx<br>.scl<br>.trd<br>.tzx<br>.tap<br>.z80<br>.zx<br>.scl<br>.trd<br>.zip | [Read the Libretro Wiki](https://docs.libretro.com/library/fuse/) |

### END

[Jump to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#the-full-package)

***

## Retroarch Core Cheat Sheet
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#cheat-sheet-table-of-contents)

### Only Retroarch!

**Read the below bullet points before looking at the chart**

**IMPORTANT:** 
* BIOS files go directly into the `Emulation/bios` folder. **Do not** make or use any additional folders unless otherwise specified on the chart below.
* If the BIOS box contains: `N/A`, BIOS files are not required to play the respective system.
* The chart can be scrolled horizontally. 
* In many cases, BIOS names are case sensitive. Match the casing to the `BIOS` column in the chart. 
* If you are on a computer, press `CTRL` + `F` or `CMD` + `F` together to search the chart. 
   * <img src="https://user-images.githubusercontent.com/108900299/215289134-a79b8b74-2317-4128-a1d6-4e51fe046b88.png" height="300">

***

**Chart**

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
| Neo Geo Pocket & Color | ngp | [Retroarch Beetle NeoPop](https://docs.libretro.com/library/beetle_neopop/) | .7z <br>.ngp <br>.ngc<br>.zip | N/A |
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

## Standalone Emulator Cheat Sheet
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/cheat-sheet#cheat-sheet-table-of-contents)

### Only the Standalones! 

**Read the below bullet points before looking at the chart**

**IMPORTANT:** 
* BIOS files go directly into the `Emulation/bios` folder. **Do not** make or use any additional folders unless otherwise specified on the chart below.
* If the BIOS box contains: `N/A`, BIOS files are not required to play the respective system.
* The chart can be scrolled horizontally. 
* In many cases, BIOS names are case sensitive. Match the casing to the `BIOS` column in the chart. 
* If you are on a computer, press `CTRL` + `F` or `CMD` + `F` together to search the chart. 
   * <img src="https://user-images.githubusercontent.com/108900299/215289134-a79b8b74-2317-4128-a1d6-4e51fe046b88.png" height="300">

***

**Chart**

| System                    | Folder Name    | Emulator                  | File Format                                                                                                                     | BIOS Files                                                                                                                                                                                                                                       |
|---------------------------|----------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAME (Standalone)         | arcade         | MAME                      | .zip  <br>.chd                                                                                                                  | BIOS will be searched through 3 folders: <br>`Emulation/roms/arcade/` <br>`Emulation/bios/mame/` <br>`Emulation/bios/` <br>EmulationStation-DE will ONLY work with the BIOS in `Emulation/roms/arcade/` folder.                                  |
| Microsoft Xbox            | xbox           | Xemu                      | .iso (xiso formatted)                                                                                                           | `mcpx_1.0.bin` <br>modified retail COMPLEX 4627 BIOS:  `Complex_4627v1.03.bin`                                                                                                                                                                   |
| Nintendo 3DS              | 3ds or n3ds    | Citra                     | .3ds  <br>.3dsx  <br>.app  <br>.axf  <br>.cci  <br>.cxi  <br>.elf <br>.cia (Not Compatible)                                     | Place `aes_keys.txt` (for encrypted ROMs) in `Emulation/bios/citra/keys`                                                                                                                                                                                                             |
| Nintendo GameCube         | gc or gamecube | Dolphin                   | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.nkit  <br>.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs           | N/A                                                                                                                                                                                                                                              |
| Nintendo PrimeHack        | primehacks     | PrimeHack (Metroid Prime) | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.json  <br>.nkit <br>.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs | N/A                                                                                                                                                                                                                                              |
| Nintendo Switch           | switch         | Ryujinx                   | .kp  <br>.nca  <br>.nro  <br>.nso  <br>.nsp  <br>.xci                                                                           | Place `prod.keys` in: `Emulation/bios/ryujinx/keys` <br>Firmware installation required through Ryujinx UI                                                                                                                                          |
| Nintendo Switch           | switch         | Yuzu                      | .kp  <br>.nca  <br>.nro  <br>.nso  <br>.nsp  <br>.xci                                                                           | Place `prod.keys` in: `Emulation/bios/yuzu/keys` <br>Place Firmware files in: `Emulation/bios/yuzu/firmware`                                                                                                                                       |
| Nintendo Wii              | wii            | Dolphin Standalone        | .ciso  <br>.dol  <br>.elf  <br>.gcm  <br>.gcz  <br>.iso  <br>.json  <br>.nkit <br>.iso  <br>.rvz  <br>.wad  <br>.wia  <br>.wbfs | N/A                                                                                                                                                                                                                                              |
| Nintendo Wii U            | `wiiu/roms`   | Cemu                      | .rpx  <br>.wud  <br>.wux  <br>.elf  <br>.iso  <br>.wad <br>.wua                                                                 | Place `keys_txt`(for encrypted ROMs) in: `Emulation/roms/wiiu`                                                                                                                                                                                   |
| Sony Playstation          | psx            | DuckStation               | `.cue and .bin`  <br>.chd  <br>.ecm  <br>.iso  <br>.m3u  <br>.mds  <br>.pbp                                                     | Example Set: <br>`scph5500.bin` (JP) <br>`scph5501.bin` (US) <br>`scph5502.bin` (EU)                                                                                                                                                             |
| Sony Playstation 2        | ps2            | PCSX2-QT                  | `.cue and .bin` <br>.chd  <br>.cso  <br>.dump  <br>.gz  <br>.img  <br>.iso  <br>.mdf  <br>.nrg                                  | Example Set (EU Set): <br>`SCPH-70004_BIOS_V12_EUR_200.BIN` <br>`SCPH-70004_BIOS_V12_EUR_200.EROM` <br>`SCPH-70004_BIOS_V12_EUR_200.ROM1` <br>`SCPH-70004_BIOS_V12_EUR_200.ROM2` <br>Example Set (US Set): <br>`SCPH-70012_BIOS_V12_USA_200.BIN` |
| Sony Playstation 3        | ps3            | RPCS3                     | Game Folder: `/PS3_GAME/USRDIR/eboot.bin` in `Emulation/roms/ps3` <br>An installed pkg file through RPCS3                       | Firmware installation required through RPCS3 directly                                                                                                                                                                                            |
| Sony Playstation Portable | psp            | PPSSPP                    | .elf<br>.cso  <br>.iso  <br>.pbp  <br>.prx                                                                                      | Standalone PPSSPP does not require anything special.                                                                                                                                                                                             |
| Sony Playstation Vita     | psvita         | Vita3K                    | Game Folder in `Emulation/roms/psvita`<br>A valid installed ROM file through Vita3K                                             | Firmware installation required through Vita3K directly                                                                                                                                                                                           |
***