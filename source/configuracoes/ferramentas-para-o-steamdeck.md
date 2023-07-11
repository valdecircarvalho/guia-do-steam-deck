https://www.reddit.com/r/SteamDeck/comments/14lqjsd/steam_deck_all_toolsetup_ultimate_guide/

r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
This thread will give you everything you need to know from tools etc. to ensure you know what you can get out of your steam deck.

Before Getting Started:
Make sure you have set a password in the "Konsole" terminal otherwise installer provided may fail to install to do this follow the instructions below:



1st make sure you're in-desktop mode and then open up the "Konsole" app this will be located under "System" in the start menu and when the terminal has opened type this in the terminal w/out the quotation marks. "passwd" then it will ask you to submit a new password; i recommend using a 4-digit passcode that you will remember, once you have set a password it will ask for the same password again to confirm, do not worry if you cannot see it being entered in the terminal, this is normal. It's hidden by default while you type but reassure it is there. Once it's set you are done with this step, and you only have to set it once.



Decky Loader (Steam Deck Homebrew):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
Decky Loader is a tool that allows the user to install custom made plugins that enhances & adds additional functionality from Animation Editor to adding a browser to your steam deck.

This tool is very useful as it is added as a Quick Setting and can easily download plugins right from your deck within game mode.



INSTALLATION: To install Decky Loader you must enter desktop mode as this can only be installed via the desktop of Steam OS. Open your browser of our choice and either search "Decky Loader" or by using this link: SteamDeckHomebrew/decky-loader: A plugin loader for the Steam Deck. (github.com) and click on the logo that says download in the main page of the github. it will download the installer which will look like this decky_installer.desktop now it may download to /home/Deck/Downloads you will need to move it to your desktop as it cannot be ran in the downloads folder.

Now run the installer and it will open a command prompt and ask you to enter your sudo password, this is the password you set in the Konsole earlier, if you don't have one read the Before Getting Started section of this thread before proceeding. Now once you entered your password it will begin to ask what you wish to install, these options are release and prerelease. We recommend installing the release version to avoid bugs that is present with the prerelease. Once it finishes you may now verify its installation by entering game mode and pressing the 3-dot button to open the QS.

Troubleshooting: If you find yourself with an issue where some plugins such as CSS Loader not working, you will have to go back into desktop mode and rerun the decky installer; however, when you do make sure you select update to the latest release, and it should fix it.



Cryo Utilities (CryoByte33):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
This tool allows you to manage the swap file and make additional tweaks that helps increase performance in games.



INSTALLATION: To install Cryo Utilities, make sure you have a sudo password already set otherwise it cannot perform tweaks necessary for this to work. 1st download the installer here: CryoByte33/steam-deck-utilities: A utility to improve performance and help manage storage on Steam Deck. (github.com) scroll down till you see a link that says "Download this link" and right mouse click over it to open the context menu and click "save link as" and save it to your desktop.

Once downloaded it should look like this InstallCryoUtilities.desktop now run the installer and it will install the program. Once installed you will see a new cryo utilities icon and you will need to click on that.

Once it's open a warning will be displayed warning you about the risks of using this software if you agree to it click yes and then enter your sudo password. Once it confirmed your password you will have two choices to choose recommended or custom, we recommend the recommended option, but before you choose an option make sure you enter your SD bios and change the UMA Buffer from the default 1GB to 4GB this is to prevent cryo utilities from failing. if you already have done that just click recommended and it will begin tweaking. when it's done you can exit cryo utilities and reboot your device if you wish.

IMPORTANT NOTICE: If you have the 64GB model of the steam deck be aware that this software will create a 16GB swap file and may cause a boot loop if you do not have sufficient storage space for both the swap and shaders created by the games that utilize it. We HIGHLY RECOMMEND that you either upgrade your internal storage or install a SDCard 256GB or higher.



RefreshRate Unlocker (Ryanrudolfoba):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
RefreshRate Unlocker is a useful and cool tool to have if you desire a little more push to your hardware, this tool allows you to overclock your display to 70Hz without a fuss, though this may make game feel smoother, however i have to mention the risks of overclocking your display refresh rate. This can degrade your displays life span and you are 100% responsible for any damages that occur by using this tool, the developer or me the guide creator does not take any responsibility if this tool degrades or damages any part of your hardware. Use at Your Own Risk!



INSTALLATION: to install this software follows these instructions precisely:

1). Open the "Konsole" terminal & copy and place this command in the terminal:

cd ~/git clone https://github.com/ryanrudolfoba/SteamDeck-RefreshRateUnlocker.git

2). Once it's done next paste this command in the same terminal:

cd ~/SteamDeck-RefreshRateUnlockerchmod +x install-RefreshRateUnlocker.sh./install-RefreshRateUnlocker.sh

This will run the installer but will ask for your sudo password before it begins. When it's done another prompt will pop up asking you what type of refresh rate from min to max you wish to use. Once you make your selection it will complete the install and will require you to reboot your steam deck for the changes to take effect, if you made a mistake on your refresh rate selection or simply want to change it anytime, do not worry the installer creates a shortcut on your desktop to access the Gui, and if you wish to revert the changes you can do that as well.

If you need a visual guide the developer of this mod has a official github that has its source code and guide on how to do it yourself from here: ryanrudolfoba/SteamDeck-RefreshRateUnlocker: Unlock the display panel to use upto 70Hz refresh rate! (github.com)



EMUDeck (dragoonDorise):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
This software is a very useful tool as it installs emulators and its config so you can start immediately playing your game backups, however we must say that this software does not provide the games for the emulators included in this software. You must legally provide the games from games you personally purchased. We do not condone piracy (legal reasons).



INSTALLATION: To install this software go to dragoonDorise/EmuDeck: Emulator configurator for Steam Deck (github.com) or EmuDeck - Emulators on Steam Deck, SteamOS , Rog Ally and Windows to download the software. If it downloads to the downloads folder, make sure you move it to the desktop in order to run it. When it runs it may ask for a sudo password and if not then just follow the on-screen instructions it's pretty simplified so no need for additional walkthrough.

However once you get to the part where you have to parse the emulator. when you click preview, then parse you can click save to steam and you are done.



NonSteamLaunchers (moraroy):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
This tool is a very useful tool as it allows you to install 3rd party launchers to game mode such as the EA App, Ubisoft connect etc. in an all-in-one script.



INSTALLATION: To install this go to: moraroy/NonSteamLaunchers-On-Steam-Deck: Installs the latest GE-Proton and Installs Non Steam Launchers under 1 Proton prefix folder and adds them to your steam library. Installs... Battle.net, Epic Games, Ubisoft, GOG, Origin, The EA App, Amazon Games, itch.io , Legacy Games, The Humble Games Collection, IndieGala, Rockstar Games Launcher, Glyph and Minecraft. Now with SD Card Support (github.com) and under releases download the installer and move it to your desktop the installer should look like this NonSteamLaunchers.desktop once it's on your desktop; run the software and it will begin, be aware that we recommend not to sign into any of the launchers yet until all launchers chosen has been installed.

If you're planning to install duplicate launchers such as Origin and EA App make sure you check the "Separate IDs" box because they both use the same launcher ID and will fail to install if not checked.

Once the launchers have been installed at the end it will ask if you want to parse them to steam so you can launch them in game mode. it is HIGHLY RECOMMENDED that you say yes/Ok. When you do it will begin & the terminal it was using will close indicating it is done, so do not close the window after confirming.



Clover - Windows/SteamOS Dual Booting (ryanrudolfoba):
r/SteamDeck - Steam Deck All Tool/Setup - Ultimate Guide
Clover is a very useful tool that allows you to dual boot Steam OS & Windows w/out losing SteamOS entirely with it's own graphical GUI and one of the best variants of dual booting witch was inspired by "jlobue10's rEFInd script" and is a better version that will always booth into the GUI instead of the original version that didn't and booted the last used OS and supports multi booting with other OS beyond windows as well!



INSTALLATION: to install this script follow these instructions precisely in order to avoid issues:

1). Open the "Konsole" terminal in desktop mode & type this command in the terminal:

git clone https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot

This will initiate the cloning of the GitHub that has the necessary files for clover to work.

2). In the same or new terminal, you have open type this command in the terminal this will tell the terminal you need to switch to the appropriate directory (if your already in this directory just skip this step to step 3:

cd SteamDeck-Clover-dualboot/

3). In the terminal type this command to initiate the 1st part of the installation:

chmod +x install-Clover.sh

4). Now once step3 has been completed in that same terminal type this command, this will require you to input your sudo password so make sure you had one already setup before proceeding:

./install-Clover.sh

5). Now once it has installed it will open a prompt that will ask what OS you want to be your primary OS, choose what you prefer to be your primary OS we do recommend SteamOS to be your primary OS, but you can choose what you like to your preferences: furthermore when clover does boot if the boot timer has reached "0:00" (0 seconds) the default OS will auto boot the primary OS you chose after no user interaction has been detected within "0:05" (5 seconds), you can change this in clovers settings when the GUI boots to any amount we found "0:10" (10 seconds) was the perfect amount of time to give it before it auto boots into the chosen Primary OS.

Once you have chosen your primary OS your good to go, now if you don't have windows installed it's alright every time you boot your Steam Deck clover will always scan for installs so if a new OS has been detected the user can boot into it without hassle & you are ready to dual boot :)



Preparing Dual boot for windows (Detailed Steps [very long one sorry]):

If you wish to dual boot on your main SSD you will need to prepare it so that you can install windows.

Here is what you need (best to have already downloaded to speed process up):

- USB Flash Drive (8GB or higher)

- Windows PC

-Rufus (Rufus - Create bootable USB drives the easy way)

- USB OTG with type a to Type-C connector

- SteamOS [Holo OS] (Steam Support :: Steam Deck Recovery Instructions (steampowered.com))

-Windows 10 or 11 iso

1). To begin you will need to download the steam deck image from steams website if not already have and then download and run rufus (if you already have then great) & plug in your USB flash drive.

2). Now in rufus you will see your drive be displayed in the application, in rufus find the boot selection field and click on "Select" and find where your Steam Deck Recovery image is located, once you have selected it and it will be loaded into rufus then proceed by clicking "Start".

Just keep in mind this will format and delete any data on the drive so if you have anything important on their BACK IT UP you don't get a 2nd chance once you click start.

3). Now wait for it to finish flashing your flash drive. when it is done it will do a chime indicating either a fail or successful flash. Pull out the USB from your main pc and plug it into your steam deck with the USB OTG connector and ensure the steam deck is fully off.

4). Once the Steam Deck is off and you have the flash drive you just flashed with SteamOS press and hold Vol Down + Power, when you hear a chime let go of the power button but not the volume down button. The boot device menu will be displayed and now choose the USB flash drive to boot into.

5). When it boots you will notice it has booted into the recovery of steam OS you will need to now go to the start menu and go to [System]>[KDE Partition Manager] it will open, and you need to find your internal SSD when you enter it you will see 8 partitions. The one you are looking for is "/dev/nvme/0n1p8" you will know it is the right one because under the "Mount Point" it's displaying "/home" and it's the biggest size compared to the other partitions.

6). Now you will need to right click over that partition to open a context menu (L2 & R2 is your left and right mouse click) and you will see a new window pop up and withing it you will see a blue bar indication the space that partition currently occupies. Now we need to resize it.

7). To resize it you will need to hover over the right end of the blue progress bar till you see your mouse cursor turn into a horizontal diamond with a blue dot (if you see red dot instead that isn't the one chief, needs to be blue) and you will need to hold R2 to move the bar from right to left. you will see the one half is now grey or saying unallocated, you can choose any amount of space you desire you want windows to be installed on and have for games, apps etc. but remember it is recommended you leave at least 256GB of storage space for SteamOS, so you don't get a boot loop from already present shader cache. typically, i would split it in half so both SteamOS and Windows has similar storage spaces.

8). Now that you chose your desired storage space you want to give to windows before you apply the changes to the partition. head over to the unallocated space you're going to have windows installed on. right click over it to open a context menu and click "New" then make sure in the partition format you choose the partition format "NTFS" then click ops you do not need to name the partition just click ok and once it shows its partition is NTFS now you can apply the pending operations. this won't take long.

9). Once it's done applying the pending operations you may now exit the partition manager and turn off the system from the start menu. Now unplug the flash drive and replug it back into your PC & reopen rufus. now in the boot selection field click select and find your Windows iso you want to use and select it to load it into rufus. Once it does verify that it's going to format in fat32 and is going to format in GPT not MBR; then click start, it will prompt you that it will delete all data on the drive and then warn you about multiple partitions detected just click yes to proceed and wait till it does its thing.

10). Once it is finished, safely remove the USB from your PC and replug it back into your steam deck and then press Vol Down + Power and let go of the power button once you hear a chime but keep holding the vol down button to enter the boot menu. Once it boots choose your flash drive and it will boot into the windows installer. Once it boots proceed follow the on-screen instructions until you reach the prompt on where to install windows to. Remember that partition we formatted to ntfs earlier? that is where you're going to have windows installed in, you will know it is the right one because it's the only partition that is ntfs. select it and click next and it will begin installing windows once it installs clover may show up and you will notice a new item to choose, if it does show up just click on windows and set it up and there ya go dual boot is now fully ready.



RISKS WARNING: Be aware that these tools are mods and they must be treated as mods, though some of these tools won't do any harm we must post this warning in case some kind of damage happens from using these mods so if you are planning to use these tools just keep in mind that you and i quote the "end user" are 100% responsible if any damages that occur to either the software or hardware installed to your Steam Deck, Not the developers. Use at Your Own Risk!

if i have missed any additional software please let me know so i can add it here

UPDATE: Mods are amazing they let me know the issues with my post and gave insight of why it was removed, so I have fixed it and reposted it. Thanks to the mods for letting me know :)