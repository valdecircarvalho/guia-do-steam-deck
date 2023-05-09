# File Management, learn how to manage your files like a wizard.

***

# File Management Table of Contents


1. [Managing ROM Files](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#managing-rom-files)
      - [How to Manage ROMs with Multiple Discs](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-manage-roms-with-multiple-discs)

2. [Managing Emulators and Tools](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#managing-emulators-and-tools)
      - [How to Swap out AppImages and Binaries](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries)

***

# Managing ROM Files
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#file-management-table-of-contents)

***

## How to Manage ROMs with Multiple Discs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#file-management-table-of-contents)

***

### Preface

**Quick Note:** To reduce the amount of files to manage, it's recommended to use EmuDeck's `Compression Tool`. Place your ROMs as you normally would in their respective folders, open the EmuDeck application on your desktop and run the `Compression Tool`. If you run the compression tool and you ran Steam ROM Manager previously, you will need to re-run Steam ROM Manager after compression to update your shortcuts. 

Compressing your ROMs makes managing multi-track games a lot simpler. You can create a playlist file (M3U) and place all of your tracks in this file. After creating the playlist file, treat the M3U file as the game (instead of the individual discs) and when the time comes to switch discs, you can use the various emulator quick-menus to seamlessly move onto the next disc. You can view the hotkeys for the various quick-menus here: https://github.com/dragoonDorise/EmuDeck/wiki/Hotkeys.

**Important** 

* PCSX2 does not support M3U files

***

### How to Create an M3U File

When it comes time to switch discs, various emulators have an option or a button to switch from one disc to the next. An M3U file allow you to manage ROMS with multiple discs and continue playing without any hiccup. 

Fortunately these M3U files are easy to create. 

**Here's How:**

1. In your ROM folder, right click, click `Create New Text File`
2. Name it `GAMENAME.m3u`
   * The M3U name can be anything, casing, spelling, etc, are not relevant in the M3U file name
3. Right click the text file, click `Open with Kate` or a text editor of your choice
4. Place the full file name of each ROM disc including the file extension on a separate line
   * **IMPORTANT:** If you are using both `.bin` and `.cue` files, only place the `.cue` files in the M3U file. It is recommended you use the EmuDeck compression tool for easier file management. 
   * Example (Using D2 for the Dreamcast):
      * Folder: <img src="https://user-images.githubusercontent.com/108900299/211213411-713804bb-8d96-4b21-9b0a-afd40d461d3b.png" height="300">
      * M3U File: <img src="https://user-images.githubusercontent.com/108900299/211213427-05c57715-8bc5-443d-9824-8ae410bc6859.png" height="300">
5. Save and close out of the text file
6. From now on, you can treat the M3U as the game file, and play the respective ROM discs by running the newly created M3U file through one of EmuDeck's included front-ends: Steam Shortcuts created by Steam ROM Manager or EmulationStation-DE, or by running the emulator directly
   * Steam ROM Manager:
        * Steam ROM Manager will still parse all of your discs in addition to the M3U file. To solve this, you can hide each disc entry, and only allow Steam ROM Manager to parse the M3U file
             * How to hide discs in Steam ROM Manager: https://github.com/dragoonDorise/EmuDeck/wiki/Steam-ROM-Manager#how-to-hide-an-entry-in-steam-rom-manager
             * Alternatively, you can move all of your Multi-Disk games to a new folder, ie. `psx-multidisk`, and keep the .m3u files in the `psx` folder, changing the contents to point to the disks in their new location. This will prevent those disks from being read, as the parsers will not look in the new folders created. **Note:** Not all emulators support absolute pathing. 
    * EmulationStation-DE:
        * EmulationStation-DE will display all of your discs in addition to the M3U file. You can either hide the discs and only display the M3U or use one of EmulationStation-DE's workarounds to only display the M3U
             * How to hide discs or learn about EmulationStation-DE's workarounds: https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-manage-multiple-discs


Watch the following GIF for a visual: 

<img src="https://user-images.githubusercontent.com/108900299/193983784-20703e94-a2ae-4a61-9869-af527d7cbdc6.gif" height="400">


***

# Managing Emulators and Tools
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#file-management-table-of-contents)

***

## How to Swap out AppImages and Binaries
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/file-management#file-management-table-of-contents)

#### Preface

Sometimes, when an emulator updates, there can be regressions for certain games or bugs that break the emulator temporarily. You can downgrade to a previous version by replacing the emulator in `/home/deck/Applications`. 

Additionally for Yuzu, you can also use this feature to download the `Early Access` version of Yuzu. 

For some emulators, your ROMs launch using a script created by EmuDeck, which look for the corresponding emulator, depending on how it is installed or downloaded. In the case of PCSX2 and Yuzu, the script looks for two things: 

* The most recently downloaded version in `/home/deck/Applications`, based on the file date.
* The emulator name at the beginning of the file. Anything after the emulator name is ignored. `pcsx2-Qt` in the case of PCSX2 and `Yuzu` in the case of Yuzu. For example, if the latest version of `Yuzu` is `1351` and you would like to downgrade to `1349`. When you download `yuzu 1349`, you could rename it to `Yuzu-1349.AppImage`, and EmuDeck's script will ignore the `-1349` in the file name, allowing you to record which versions of Yuzu you are using through the file name. 

#### List of Supported Emulators and Tools

* Cemu (Swap out its EXE)
  * Executable Location: `Emulation/roms/wiiu/cemu.exe`
  * Download Link: https://github.com/cemu-project/Cemu
* EmulationStation-DE
  * Executable Location: `Emulation/tools/EmulationStation-DE-x64_SteamDeck.AppImage`
  * Download Link: https://gitlab.com/es-de/emulationstation-de/-/packages/
* PCSX2-QT
  * Executable Location: `/home/deck/Applications/pcsx2-Qt.AppImage`
  * Download Link: https://pcsx2.net/downloads/#nightly-anchor
* Ryujinx
  * Executable Location: `/home/deck/Applications/publish/Ryujinx`
  * Download Link: https://github.com/Ryujinx/release-channel-master/releases
* Steam ROM Manager
  * Executable Location: `Emulation/tools/srm/Steam-ROM-Manager.AppImage`
  * Download Link: https://github.com/SteamGridDB/steam-rom-manager/releases
* Vita3K
  * Executable Location: `/home/deck/Applications/Vita3K/Vita3K`
* Yuzu
  * Executable Location: `/home/deck/Applications/yuzu.AppImage`
  * Download Link: https://github.com/yuzu-emu/yuzu-mainline/releases

#### How to Swap Out Emulators

1. Download the version of the emulator you would like to use, from the list above to your `/home/deck/Downloads` folder
2. Open the respective emulator folder location, using the list above: https://github.com/dragoonDorise/EmuDeck/wiki/file-management#list-of-supported-emulators-and-tools
3. Move the downloaded emulator from Step 1 to the folder in Step 2
3. Rename or delete the original emulator file
   * Rename it so it can be distinguished from your downloaded file
   * A Few Examples: 
        * Rename `Yuzu.AppImage` to `Yauzu.AppImage`
        * Rename `Yuzu.AppImage` to add a `.bak` to the end of the file extension, `Yuzu.AppImage.bak` 
        * Rename `Yuzu.AppImage` to add the version number. For example, if the latest version is 1351, rename it to `Yuzu-1351.AppImage`
4. Right click the newly downloaded emulator, click `Properties`, click `Permissions`, check `Is executable`
5. Your games will now launch using the version of the emulator you downloaded

Watch the following GIF for a visual (Yuzu is being used as an example in this GIF):

<img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/3c461f555ed3eb882e2ee1273a53429ae3fda486/GIFs/Swapping%20out%20AppImages%20and%20Binaries.gif" height="400">

***