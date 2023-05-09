# Steam ROM Manager is a tool to add ROMs as Non-Steam Game Shortcuts. 

## Introduction

EmuDeck installs Steam ROM Manager https://github.com/SteamGridDB/steam-rom-manager, which allows you to add your ROMs directly to your library.  It can either be used as an alternative or in tandem with EmulationStation-DE (a frontend application to manage your ROMs.).

Steam ROM Manager's Website: https://github.com/SteamGridDB/steam-rom-manager

Steam ROM Manager sources art from SteamGridDB: https://www.steamgriddb.com/

Read https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE to learn more about EmulationStation-DE and how it can be used in tandem with Steam ROM Manager! 

***

# Steam ROM Manager Table of Contents

1. [Getting started with Steam ROM Manager](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#getting-started-with-steam-rom-manager)
      - [Configuration](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#configuration)
      - [How to Update Steam ROM Manager](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-update-steam-rom-manager)
      - [How to Launch Steam ROM Manager in Desktop Mode](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-launch-steam-rom-manager-in-desktop-mode)
      - [How to Reset Steam ROM Manager](#how-to-reset-steam-rom-manager) 

2. [Common Pitfalls](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#common-pitfalls)
      - [Help, I just opened Steam ROM Manager and I have no controls!](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#help-i-just-opened-steam-rom-manager-and-i-have-no-controls)
      - [Why does Steam ROM Manager have no parsers?](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#why-does-steam-rom-manager-have-no-parsers)
      - ["Please shutdown Steam if it is running"](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#please-shutdown-steam-if-it-is-running)
      - [Large ROM Collections](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#large-rom-collections)
      - [Why are my games not showing up in Steam ROM Manager?](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#why-are-my-games-not-showing-up-in-steam-rom-manager)
      - [Why do some of my multi-disc games not show up in Steam ROM Manager?](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#why-do-some-of-my-multi-disc-games-not-show-up-in-steam-rom-manager)
      - [Unexpected end of JSON input](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#Unexpected-end-of-JSON-input)


3. [Steam ROM Manager Tips and Tricks](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-tips-and-tricks)
      - [How to Generate and Save an App List](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-generate-and-save-an-app-list)
      - [How to Fix a Mismatched Entry](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-fix-a-mismatched-entry)
      - [How to Hide an Entry in Steam ROM Manager](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-hide-an-entry-in-steam-rom-manager)
      - [How to Remove All Shortcuts From Your Steam Library](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-remove-all-shortcuts-from-your-steam-library)
      - [How to Customize Artwork for your ROMs](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-customize-artwork-for-your-roms)



***

# Getting started with Steam ROM Manager
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)


***

## Configuration
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

* Executable Location: `Emulation/tools/srm/Steam-ROM-Manager.AppImage`
* Config Location: `/home/deck/.config/steam-rom-manager`
* Art Location: `/home/deck/.steam/steam/userdata/<steamuseridnumber>/config/grid`

Note: 
* `~/.config` and `~/.steam` are invisible folders by default. In Dolphin (file manager), click the hamburger menu in the top right, click "view hidden files" to see these folders.

***

## How to Update Steam ROM Manager
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

**How to Update Steam ROM Manager**

* Run `Update Emulators & Tools` in `EmuDeck`
* Run through the `EmuDeck` install
* Manual file replacement of `Steam-ROM-Manager.AppImage`
  * Refer to https://github.com/dragoonDorise/EmuDeck/wiki/file-management#how-to-swap-out-appimages-and-binaries for instructions.
*  Run through the `EmuDeck` install with a fresh download from https://www.emudeck.com/ 


***

## How to Launch Steam ROM Manager in Desktop Mode
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

**How to Launch Steam ROM Manager in Desktop Mode**

* Launch `Steam ROM Manager` through `Tools & stuff` in `EmuDeck`
* Launch `Steam ROM Manager` from the Applications Launcher (Steam Deck icon in the bottom left of the taskbar)
* Launch the AppImage in `Emulation/tools/srm/Steam-ROM-Manager.AppImage`

***

## How to Reset Steam ROM Manager
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

Sometimes after installing EmuDeck, Steam ROM Manager may not be configured correctly and you will be missing EmuDeck's pre-created parsers. Or you may have tinkered with Steam ROM Manager and want to reset it back to EmuDeck's defaults.

You can reset Steam ROM Manager's configurations in the `Emulator Guides` page. 

**Tutorial**

1. Open EmuDeck on your desktop.
2. Click the `Tools & stuff` button at the bottom of the screen.
3. Click the `Emulator Guides` button.
4. Select Steam ROM Manager in the drop-down menu.
5. Click `Reset configuration`, wait a moment.
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/208750160-f3b7650a-ea38-4a27-a0a8-4b9598cb1077.png" height="200">
6. Steam ROM Manager has been reset.

A backup of your original Steam ROM Manager configurations is automatically created after resetting. You can find this backup in `/home/deck/.config/steam-rom-manager/userData`. The backup file is named: `userConfigurations.json.bak`. 

***


# Common Pitfalls
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

***

## Help, I just opened Steam ROM Manager and I have no controls!
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

When you open Steam ROM Manager, it will exit out of Steam. Since your controls are tied to Steam being open, your controls will revert to `Lizard Mode`. You can use `L2` to right click, `R2` to left click, and the `Right Trackpad` to move the mouse.

Alternatively, you can either use a mouse/keyboard (Bluetooth or through a USB-C Hub) or remote into your Steam Deck.

Learn how to remotely control your Steam Deck: https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-remotely-control-my-steam-deck

***

## Why does Steam ROM Manager have no parsers?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

If you recently installed EmuDeck for the first time and Steam ROM Manager is empty, that means you did not select Steam ROM Manager's configurations to be set up in the installation of EmuDeck. 

For reference, de-selecting Steam ROM Manager on this screen will prevent EmuDeck from properly setting it up: <img src="https://user-images.githubusercontent.com/108900299/215012989-21a56a91-a66f-4074-860a-30bd56508938.png" height="300">

***

**You can fix this by choosing one of the following methods:**

### Method 1: Reset Steam ROM Manager

1. Open EmuDeck on your desktop.
2. Click the `Tools & stuff` button at the bottom of the screen.
3. Click the `Emulator Guides` button.
4. Select Steam ROM Manager in the drop-down menu.
5. Click `Reset configuration`, wait a moment.
   1. Visual Reference: <img src="https://user-images.githubusercontent.com/108900299/208750160-f3b7650a-ea38-4a27-a0a8-4b9598cb1077.png" height="200">
6. Steam ROM Manager has been reset.

***

### Method 2: Custom Update

* Open EmuDeck on your desktop and run through a `Custom Update`. This may be recommended over Method 1 in case you accidentally de-selected any other icons on the `Update emulator configurations` screen. Any de-selected icons will not be set up by EmuDeck
   * **You do not need to uninstall EmuDeck to do this method**




***

## "Please shutdown Steam if it is running"
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

This message is a warning to confirm that you have closed Steam. EmuDeck's shortcut for Steam ROM Manager closes out of Steam for you. You may ignore this warning if you are opening through the applications launcher in the bottom left of the taskbar or through the EmuDeck GUI. 

If you are trying to generate an app list and no ROMs are displaying in the app list, read this section: https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#why-are-my-games-not-showing-up-in-steam-rom-manager

Running Steam ROM Manager external to EmuDeck's script will not exit out of Steam for you. You will need to verify Steam is closed, if you do not use EmuDeck's script. You do not have to worry about this if you are running Steam ROM Manager from its shortcut in the Applications Launcher or the button in the EmuDeck application. 

***

## Large ROM Collections 
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

If you have a large ROM collection, generally over 1,000 ROMs, it is recommended you use EmulationStation-DE for some of your larger sets. 

Do not turn on all of the parsers in Steam ROM Manager, instead pick smaller sets that you would like to appear in your Steam library. Keep in mind that using all parsers will mean that every ROM will show up in your Steam library. Unexpected behavior or bugs may occur with larger ROM counts in Game Mode. 

To use EmulationStation-DE, it is recommended to turn on at least the `EmulationStation-DE` and the `Emulators` parser in Steam ROM Manager. These will allow you to manage EmulationStation-DE (to launch your ROMs) and emulators (to do any additional configurations) in Game Mode. In addition to these two parsers, limit the amount of parsers you toggle to prevent any bugs or unexpected behavior in Game Mode. 

***

**Known Issues With Large ROM Collections in Game Mode**

* Lagging menus and scrolling while browsing games
* Unexpected behavior with collections and games displaying in Game Mode
* Unexpected bugs

***

## Why Are My Games Not Showing Up in Steam ROM Manager?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

Your games may not show up for a few reasons: 

* Make sure your file path is correct. Refer to the [EmuDeck Cheat Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vQB2BrVAl7FMsUCs7m3byS5iKXYrAW5CUSPNY7_Ru_5QlbZvvJ5oPKxYdG_r0gaML_-Rflgrr_dsHfs/pubhtml) for which folders correlate to which system.
   * Example: Nintendo DS games are placed in `Emulation/roms/nds`
* Make sure your ROMs are in the correct file format. Refer to 
the [EmuDeck Cheat Sheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vQB2BrVAl7FMsUCs7m3byS5iKXYrAW5CUSPNY7_Ru_5QlbZvvJ5oPKxYdG_r0gaML_-Rflgrr_dsHfs/pubhtml) for the correct file format.
   * Example: Many emulators are not compatible with `.7z` or `.zip` files. You will need to extract these files to use them. The cheat sheet will list which emulators can and cannot use `zip` files. 
* Make sure you know how to generate an App List, refer to https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-generate-and-save-an-app-list, for further instructions. 
* Steam ROM Manager's UI sometimes does not scale properly and the scrollbar on the right does not let you scroll down. However, you can either resize the window or scroll in the middle to see the rest of your generated app list. 


***

## Why do some of my multi-disc games not show up in Steam ROM Manager?
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

Primarily with the Playstation 2 parser, turning on `Remove (...) and [...] brackets` will trim the ROM name and cause Steam ROM Manager to deem multiple discs of the same game as the same file. When you generate an app list, only one of your discs will show up. 

To fix this, do one of the following solutions:
* Remove the () in the file name
  * Open the respective folder with the ROMs, and rename each disc to remove the ()
  * Example: 
      * Original File Name: `Xenosaga: Episode 2 (Disc 1)` and `Xenosaga: Episode 2 (Disc 2)`
      * Updated File Name: `Xenosaga: Episode 2 Disc 1` and `Xenosaga: Episode 2 Disc 2`
* Turn off `Remove (...) and [...] brackets` in the respective parser
   * Visual Reference (Using Playstation 2 as an example):  <img src="https://user-images.githubusercontent.com/108900299/206884232-b2b1ed76-6310-4586-8c75-b15c643e3f6a.png" height="300">
   * **Note:** With this setting off, Steam ROM Manager will include any content in the parantheses of the file name when parsing ROMs. This means that if you include region names or any other information in parantheses, your ROM will include this information in a generated app list

***

## Unexpected end of JSON input
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

If you receive an error while trying to save the App List that is similar to this:

`syntax error: /home/deck/.steam/steam/userdata/<USERID>/config/addeditemsv2.json: unexpected end of JSON input`

You will need to delete the file by opening the path in the error message. After deleting the file, try generating your app list again. It's possible to have more than one corrupted file in this way and is related to the Steam ROM Manager process being terminated before it is done saving.

***
# Steam ROM Manager Tips and Tricks
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

## How to Generate and Save an App List
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

### Preface

Generating and saving an App List is how you add your ROMs to your Steam library. It's generally recommended that you turn on at least the `Emulators` parser and the `EmulationStation-DE` parser. 

Here's a quick rundown: 

* The `Emulators` parser allows you to manage your emulators in game mode (game settings, controls, tweaks, etc). 
* The `EmulationStation-DE` parser adds EmulationStation-DE as a shortcut to Steam. 
  * EmulationStation-DE allows you to launch and play all of your ROMs from a single front-end. It can be either used as an alternative or combined with Steam ROM Manager. For further reading, refer to https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE. 

### Tutorial

1. Open `Steam ROM Manager`
   1. Refer to https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-launch-steam-rom-manager-in-desktop-mode on how to open Steam ROM Manager in desktop mode. 
2. Choose which parsers you would like to use (Active parsers are indicated with a green toggle)
3. Click `Preview`
4. Click `Generate App list`
5. Wait for all the images to download, click `Save apps to Steam` (It may take a few moments, check the Event Log tab to confirm that it is finished) 

For a visual, watch the following GIF:

<img src="https://github.com/rawdatafeel/Emudeck-GIFS/blob/088056e2a50f804dd77d30ba032301afba2dfb81/GIFs/How%20to%20Generate%20and%20Save%20an%20App%20List.gif" height="400">

***

## How to Fix a Mismatched Entry
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

### Preface

When you generate an app list in Steam ROM Manager, your ROMs are matched to an existing entry on [SteamGridDB](https://www.steamgriddb.com/). If your ROM does not have a SteamGridDB entry, you can request a page by following the instructions here: https://www.steamgriddb.com/faq. Make sure to upload art to your newly created SteamGridDB page. 

Sometimes, when you generate your app list in Steam ROM Manager, your ROM does not match properly to a game title and either uses incorrect art or does not display art at all. You can solve this issue two ways: editing the file name or by creating an exception in Steam ROM Manager. Follow the steps below to properly match your ROM to its respective page on SteamGridDB. 

***

### Step One: Correct the File Name

First, check https://www.steamgriddb.com/ to see if your game has an entry. If it is missing, create one by following the instructions here: https://www.steamgriddb.com/faq. If it exists, make sure your ROM file name matches the SteamGridDB entry as closely as possible. 

Open your ROM folder, edit the ROM file name in your ROM folder directly to match the SteamGridDB entry. 

If your ROM is still not matching correctly, proceed to `Step Two: Create An Exception in Steam ROM Manager` below. 

***

### Step Two: Create An Exception in Steam ROM Manager

If correcting the file name does not work, you can create an exception in Steam ROM Manager. On the left in the UI, click the `Exceptions` button. On the right of this menu, you can add an exception. Use the following format:

**Extracted Title:** 

To find your extracted title:

* Select the game's parser (Example: if it's a Gamecube game, select the `Nintendo Gamecube - Dolphin ` Parser). Click `Test Parser` at the bottom. You will see a list of your games on this page. Look for the `Extracted Title` for the game you are correcting. Place that title in the **Extracted Title** field.

**New Display Title:** The name you want it to show

**New Search Title:** `${gameid:#####}`  

To find your gameid: 

* Search your game on SteamGridDB (https://www.steamgriddb.com/), copy the numbers at the end of the URL. For example, `The Legend of Zelda: Breath of the Wild `'s SteamGridDB page is: https://www.steamgriddb.com/game/35744. The `gameid` would be: `35744`.

**New Commandline Args:** Leave this entry blank


For a visual, watch the following GIF:

https://user-images.githubusercontent.com/108900299/226779286-d0c224fd-ee14-423c-9e59-4edc176083b2.mp4

***

## How to Hide an Entry in Steam ROM Manager
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

If you have multiple discs for a game and you are using M3U files (refer to https://github.com/dragoonDorise/EmuDeck/wiki/File-Management on how to create one), you may want to hide the discs in Steam ROM Manager. 

To do so, you can create an exception in Steam ROM Manager to hide each disc. On the left in the UI, click the `Exceptions` button. On the right of this menu, you can add an exception. Use the following format:

**Extracted Title:**

To find your extracted title:

* Select the game's parser (Example: if it's a PS2 game, select the `Sony Playstation 2 - PCSX2` Parser). Click `Test Parser` at the bottom. You will see a list of your games on this page. Look for the `Extracted Title` for the game you are correcting. Place that title in the **Extracted Title** field.

**New Display Title:** Leave this entry blank

**New Search Title:** Leave this entry blank

**New Commandline Args:** Leave this entry blank

**Exclude Title:** Make sure this is toggled on, indicated with a green color. 

For a visual, watch the following GIF:

https://user-images.githubusercontent.com/108900299/228953465-1f3aa31c-913e-4b3c-9f68-93f2b1593765.mp4


***


## How to Remove All Shortcuts From Your Steam Library
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

### Preface

This setting removes all of your ROMs from your Steam library. It does not remove the ROM files. It is a way to clean up, debug, or reduce the amount of ROMs you have in your Steam library.

### Tutorial

1. Open Steam ROM Manager
2. Click `Settings` on the left
3. Click the `Remove all added app entries` on the top left of the screen
4. Wait
5. All of your ROMs have now been removed from your Steam library (However, they are not deleted from your drive)

**Visual Reference:** <img src="https://user-images.githubusercontent.com/108900299/195199554-c1c05767-88cf-4049-b49a-b9993fcf3565.png" height="300">

***

## How to Customize Artwork for your ROMs
[Back to the Top](https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#steam-rom-manager-table-of-contents)

After generating an app list: https://github.com/dragoonDorise/EmuDeck/wiki/steam-rom-manager#how-to-generate-and-save-an-app-list, click `Select Type` in the top right and select which type of artwork you would like to choose for your ROM

Visual Reference:  <img src="https://user-images.githubusercontent.com/108900299/202832612-b3e73dfd-235a-424a-a38a-c35be9733ec4.png" height="300">

**Types of Art**

   * Grids: Grids appear as the poster art in your Steam library. When you open your library, you will see two types of grids for your game, a horizontal and vertical grid
       * Steam ROM Manager splits grids into Grids and Posters. In the context of Steam ROM Manager, Grids are horizontal and Posters are vertical
       * Example Grid: <img src="https://user-images.githubusercontent.com/108900299/202833284-bdc62e34-5d72-4535-b415-0ee2b48123a4.png" height="300">
       * Example Poster: <img src="https://user-images.githubusercontent.com/108900299/202833285-a45fd4ef-5676-454d-8528-7754b0a0cbda.png" height ="300">
   * Heroes: When you select a game, you will see a large piece of artwork on the top of the screen. This artwork is the hero art for your game
       * Example Hero: <img src="https://user-images.githubusercontent.com/108900299/202833272-c0bd53fc-1ac8-467c-b734-26db2e121e16.png" height="300">
   * Logos: When you select a game, you will see a tiny piece of artwork above the game name. This artwork is the logo art for your game
       * Example Logo: <img src="https://user-images.githubusercontent.com/108900299/202833280-20874f8b-eae6-4902-bb0b-f880bcc75626.png" height="300">
   * Icons: When you press the `Steam` button in game, the artwork in the top left screen on the Steam overlay is the icon for your game
       * Example Icon: <img src="https://user-images.githubusercontent.com/108900299/202833288-66850bb2-95d2-4baa-b9a0-3023801c16b4.png" height="300">

***