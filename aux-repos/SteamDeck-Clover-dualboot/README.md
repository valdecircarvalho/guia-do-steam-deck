# Steam Deck - Installing Clover for Dual Boot Between SteamOS and Windows

## About

All-in-One script and instructions for installing [Clover - a graphical boot manager.](https://github.com/CloverHackyColor/CloverBootloader)

This will mostly benefit Steam Deck users who have setup a dual boot and wants to have a graphical way to select which OS to boot from.
> **NOTE**\
> If you are going to use this script for a video tutorial, PLEASE reference on your video where you got the script! This will make the support process easier!

## Disclaimer
1. Do this at your own risk!
2. This is for educational and research purposes only!

## Why Use this Clover install script for dual boot?!?
1. Makes as little changes as possible to the SteamOS / Windows installation.
2. Makes dual boot with SteamOS / Windows easy with a nice GUI.
3. No extra config needed for Ventoy, Batocera, Kali, Ubuntu and Fedora. (if there are other OS you want to be added just let me know)
4. Automatically and easily re-create the dual boot entries if it gets broken by a BIOS / SteamOS / Windows update. No need to type manual commands!
5. Supports random themes (Mojave and Catalina bundled in the install script), add / remove themes, icons, background using Dolphin File Manager.


## Screenshots
**Apocalypse - SteamOS, Windows and Batocera (microSD)**
![image](https://user-images.githubusercontent.com/98122529/233867354-4d554a4e-1e1f-42f7-968a-31a8c0b677b2.png)


<details>
<summary><b>More Screenshots Here</b></summary>

<b>Custom Windows Splash Screen</b><br>
![image](https://user-images.githubusercontent.com/98122529/233867095-5946c34a-5e63-41e4-bc56-5e8d6a261d0f.png)<br>

<b>Gothic - SteamOS, Windows, Batocera (microSD) and Fedora</b><br>
![image](https://user-images.githubusercontent.com/98122529/233867306-15377bfa-91e7-4f9d-abea-d346be6099be.png)<br>

<b>Catalina - SteamOS, Windows, and Batocera (microSD)</b><br>
![image](https://user-images.githubusercontent.com/98122529/214861561-bb63c209-14ee-492a-a506-2a87665f52d3.png)<br>

<b>Crystal - SteamOS, Windows, Batocera (microSD) and Fedora</b><br>
![image](https://user-images.githubusercontent.com/98122529/233867450-b87b0704-38b7-41a5-89e6-b39567b440ac.png)<br>

<b>Rick and Morty - SteamOS, Windows, Batocera (microSD) and Fedora</b><br>
![image](https://user-images.githubusercontent.com/98122529/233867485-d91f4bae-4139-431a-9fb1-730f3c74f5f1.png)<br>

<b>Select which OS will be the default in the Clover GUI boot menu</b><br>
![image](https://user-images.githubusercontent.com/98122529/229242673-0966ef48-9b6b-41ba-8269-2e8c1d9caca1.png)<br>

<b>Catalina - SteamOS, Windows, Batocera (microSD) and Fedora</b><br>
![image](https://user-images.githubusercontent.com/98122529/224508836-c170c472-da02-441e-9709-6950d3d47332.png)<br>

<b>Mojave - SteamOS, Windows, Ventoy (microSD) and Fedora</b><br>
![image](https://user-images.githubusercontent.com/98122529/224508862-6fd10d7c-eb96-4a0e-aeff-d59034e6bd7c.png)<br>

<b>Mojave - SteamOS, Windows and Batocera (microSD)</b><br>
![image](https://user-images.githubusercontent.com/98122529/214861730-66b21114-09bd-43f4-ae30-f1c3efb24d4a.png)<br>

<b>Mojave - SteamOS, Windows on Internal SSD and Windows on External SSD / microSD</b><br>
![image](https://user-images.githubusercontent.com/98122529/232523110-77cd7616-cca4-40c4-9a5e-cbc003afae80.png)
![image](https://user-images.githubusercontent.com/98122529/232523294-21c5ed46-ee02-4688-b65f-e3ea15b6bcd8.png)

<b>Mojave - SteamOS, Windows, Ubuntu and Kali (pic not mine)</b><br>
![image](https://user-images.githubusercontent.com/98122529/224509169-ae7e41ae-a870-4227-a16f-d79e7877bea5.png)<br>

<b>Easily add / remove themes using Dolphin File Manager</b><br>
![image](https://user-images.githubusercontent.com/98122529/214928509-7d6cae5e-107e-4bcd-baa7-2051f6ddb269.png)<br>
</details>

## Sample Video - How to Install Clover
https://user-images.githubusercontent.com/98122529/229668217-23d03b25-b72d-47a9-91e4-3933b0fdb523.mp4

## Sample Video - Apocalypse Theme and Booting to Windows with Custom Splash Screen, BootVideoRandomizer and Playnite!
https://user-images.githubusercontent.com/98122529/234082851-a836816f-edbf-43a5-838d-c10c19b56fd5.mp4

## Video Tutorial by baldsealion
<details>
<summary><b>Click here if you prefer a video tutorial!</b></summary>
baldsealion has created a Youtube video tutorial <a href="https://www.youtube.com/watch?v=112Bw7GMqJI">here</a>. This is a good supplement for the instructions in this github.
</details>

## What's New (as of April 23 2023)
1. added new themes - Apocalypse, Crystal, Gothic, Rick and Morty.
2. re-write the inject systemd service on the other rootfs.
3. added custom splash screen when booting Windows from the internal SSD.
4. add Clover Boot Manager Service status as non-Steam game to easily check the systemd service from within Game Mode.

<details>
<summary><b>Old Changelog</b></summary>
<p><b>March 31 2023</b><br>
1. have a simple menu during install to select which OS will be the default in the Clover GUI boot menu.<br>
2. implement systemd service / inject systemd service on the other rootfs.<br></p>

<p><b>March 11 2023</b><br>
1. rewrote the script <a href="https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot/issues/7">(thanks arkag!)</a> so it pulls the ISO directly from the Clover repositories.<br>
2. updated the config.plist so it supports more OS automatically - Kali, Ubuntu and Fedora.<br></p>
   
<p><b>February 20 2023</b><br>
1. added more sanity checks and cleanup in the post-install script.<br>
2. cleaned up the config.plist so it is more manageable and easier to read.<br>
3. changed the mouse pointer speed to 20 to close the <a href="https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot/issues/3">issue reported here.</a><br></p>

<p><b>January 26 2023</b><br>
1. <b>added experimental version (this is what i use)</b> - no need for Windows powershell script / scheduled task.<br>
2. color coded the install script - if the output is RED then something went wrong.<br>
3. updated script and scheduled task on the Windows side.<br>
4. updated config.plist to support Windows, Batocera and Ventoy on microSD / external SSD.<br>
5. easily add / remove themes via drag and drop / copy-paste in Dolphin file manager.<br>
6. add multiple themes and Clover will automatically choose a random theme on each reboot.<br>
7. Catalina and Mojave theme bundled by default.<br>
8. community contributed icons / logos for SteamOS and Batocera (thanks to WindowsOnDeck reddit members u/ch3vr0n5 and u/ChewyYui).<br>
9. re-wrote and re-organized the README.<br></p>

<p><b>January 11 2023</b><br>
1. Initial Release based on <a href="https://github.com/CloverHackyColor/CloverBootloader/releases/tag/5151">Clover v5151.</a><br>
2. Does not rename / move Windows EFI entries.<br>
3. When the dual boot breaks, just boot back manually to SteamOS and it will fix the dual boot entries on its own.<br>
4. Makes as few changes as possible - doesn't rely on pacman repositories, no systemd scripts and no EasyUEFI.<br>
5. All-in-One script - install, disable / re-enable, uninstall.<br></p>
</details>

## Using the Clover Install Script
<details>
<summary><b>Read this first - What does the script do?!?</b></summary>
1. The script copies files to the /esp/efi/clover location and manipulates the EFI boot entries.<br>
2. Extra scripts are saved in ~/1Clover-tools which performs a sanity check on each reboot, and an uninstall script to reverse any changes made.<br>
3. systemd service is created and also injected on the other rootfs.<br>
</details>

<details>
<summary><b>Read this first - Prerequsities for SteamOS</b></summary>
1. No prior traces of rEFInd or scripts / systemd services related to rEFInd.<br>
2. sudo password should already be set by the end user. If sudo password is not yet set, the script will ask to set it up.<br>
</details>

<details>
<summary><b>Read this first - Prerequisites for Windows</b></summary>

VERY IMPORTANT - If you plan to use Windows installed on the sdcard, make sure that it is setup as GPT and Windows-to-Go in Rufus.<br>
![image](https://user-images.githubusercontent.com/98122529/229247790-8511dc09-b56e-4e3f-ae59-bd11b21fc07c.png)<br>

1. This applies to Windows installed on the internal SSD / external SSD / microSD.<br>
2. No scripts / scheduled tasks related to rEFInd or EasyUEFI.<br>
3. APU / GPU drivers has been installed and screen orientation set to Landscape.<br><br>
4. This is VERY IMPORTANT! Do not skip this step. If you skip this step, the display will be garbled when Windows boots up! <br>
   Open command prompt with admin privileges and enter the command -<br>
   bcdedit.exe -set {globalsettings} highestmode on <br><br>

5. This is IMPORTANT! Do not skip this step. If you skip this step, the time will be messed up! <br>
   Open command prompt with admin privileges and enter the command -<br>
   reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f <br>
</details>

<details>
<summary><b>Read this first - Uninstall Old Version of Clover Before Using this Script</b></summary>
1. If you are using an older version of my script, it is recommended to uninstall it first before installing the new one!<br>
2. Open a konsole terminal and run the uninstall script - <br>
   cd ~/1Clover-tools <br>
   ./uninstall-Clover.sh <br>
   
   ![image](https://user-images.githubusercontent.com/98122529/211840095-85745118-fa64-4ef8-b2c1-78dbf0443459.png)<br>
</details>

<details>
<summary><b>Once you have read the above, perform the following steps to install Clover</b></summary>
1. Boot into SteamOS, then go into Desktop Mode and open a konsole terminal.<br>
2. Clone the github repo. <br>
   cd ~/ <br>
   git clone https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot <br>
   
   If it errors that folder already exists, delete the old folder first - <br>
   rm -rf ~/SteamDeck-Clover-dualboot <br>
   
   Then perform the clone again - <br>
   git clone https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot <br>
   
3. Execute the script! <br>
   cd ~/SteamDeck-Clover-dualboot <br>
   chmod +x install-Clover.sh <br>
   ./install-Clover.sh <br>
   
   ![image](https://user-images.githubusercontent.com/98122529/211831914-b170e57c-1d45-426c-9861-c0659c0531f6.png) <br>

4. The script will check if sudo passwword is already set. <br>
   <b>a.</b>
         If it is already set, enter the current sudo password and the script will continue. <br>
         If wrong password is provided the script will exit immdediately. Re-run the script and enter the correct sudo password! <br>
         ![image](https://user-images.githubusercontent.com/98122529/215194972-02cbcdf2-0d8e-41cf-b39c-417049d1b5c6.png) <br>

   <b>b.</b>
         If the sudo password is blank / not yet set by the end user, the script will prompt to setup the sudo password. Re-run the script to continue. <br>
         ![image](https://user-images.githubusercontent.com/98122529/215194796-58b9c638-d21a-4e26-a1c9-12743fd36196.png) <br>

   <b>c.</b>
         Script will show a menu. Select which OS will be the default selected in the Clover GUI boot menu. <br>
         ![image](https://user-images.githubusercontent.com/98122529/229242673-0966ef48-9b6b-41ba-8269-2e8c1d9caca1.png)<br>
         
   <b>d.</b>
         Script will continue to run and perform sanity checks all throughout the install process.<br>
         ![image](https://user-images.githubusercontent.com/98122529/215194418-20597cef-4851-440d-b1c5-9428662349ad.png)<br>

            
5. Reboot the Steam Deck. Clover is installed and you should see a GUI to select which OS to boot from! Use the DPAD and press A to confirm your choice. You can also use the trackpad to control the mouse pointer and use the RIGHT SHOULDER BUTTON for LEFT-CLICK.<br>
![image](https://user-images.githubusercontent.com/98122529/214861561-bb63c209-14ee-492a-a506-2a87665f52d3.png)<br>
</details>

## How to Add / Remove Themes
<details>
<summary><b>Read this first - ESP partition size</b></summary>
The esp partition is only 64MB in size. This is where SteamOS, Windows and Clover EFI entries are saved.<br>
The free space on the esp partition is around ~25MB. Make sure the themes you download don't exceed this size!<br>
You can have multiple themes installed and Clover will automatically pick a random theme on every reboot!<br>
</details>

<details>
<summary><b>Read this first - custom icons</b></summary>
When adding your own theme, make sure to name your custom SteamOS and Batocera icons as follows - <br>
os_steamos.icns<br>
os_batocera.icns<br>
This are just regular PNG files, but you have to rename them to have the icns file extension.<br>
Sample icons are saved in custom\iconset folder. Thanks to WindowsOnDeck reddit members u/ch3vr0n5 and u/ChewyYui !!!<br>
</details>

<details>
<summary><b>Steps to Add / Delete Themes</b></summary>
1. Boot into Desktop Mode and then open Dolphin File Manager.<br>
2. Navigate to /esp on the lower left side. It will say "Could not enter folder /esp"<br>

   ![image](https://user-images.githubusercontent.com/98122529/214927546-75e5cd14-1c0a-499d-8491-d5221e20f3a8.png)<br>

3. Right-click and select "Open as Root."<br>
   ![image](https://user-images.githubusercontent.com/98122529/214929527-f9e9a435-f715-4803-88f9-5b30e043a84c.png)<br>

4. Enter the sudo password when prompted.<br>

   ![image](https://user-images.githubusercontent.com/98122529/214928042-eda04c7e-41d0-4d0f-9ae8-6aa3003b5032.png)<br>
   

5. A new folder will appear for the esp partition.<br>
   Take note of the free space located in the lower right side. On this example the free space is around 26MB.<br>
   ![image](https://user-images.githubusercontent.com/98122529/215268989-56a661dc-e2c5-40fb-b57e-9b49a4de93a7.png)<br>

6. Visit the [Clover Themes github](https://github.com/CloverHackyColor/CloverThemes) to download the themes. Make sure the themes you download doesn't exceed the free space of the esp partition from step5.<br>

7. Navigate to efi > clover > themes. It will show a list of themes installed. By default it will show 3 - random, Catalina and Mojave.<br>
   ![image](https://user-images.githubusercontent.com/98122529/214928509-7d6cae5e-107e-4bcd-baa7-2051f6ddb269.png)<br>

8. **Don't delete the random folder!** It is needed so that when there are multiple themes installed, Clover will randomly pick a theme on every reboot.<br>
9. Delete the themes you don't want and copy / paste new themes that you have downloaded.<br>
10. Reboot and enjoy the new theme!<br>
</details>

## OPTIONAL - Scheduled Task for Windows. Use this only if you have Windows installed on microSD / external SSD and if Windows keeps hijacking the bootloader!
<details>
<summary><b>Use this only if you have Windows installed on microSD / external SSD and if Windows keeps hijacking the bootloader!</b></summary>

1. Download the ZIP by pressing the GREEN CODE BUTTON, then select Download ZIP.<br>

![image](https://user-images.githubusercontent.com/98122529/212368293-2b5f59ac-b480-4f72-b7c5-3122e57476e4.png)<br>

2. Go to your Downloads folder and then extract the zip.<br>
3. Right click CloverWindows.bat and select RUNAS Administrator.<br>
![image](https://user-images.githubusercontent.com/98122529/212368736-c9b10eb0-ecfe-4ccb-b035-1aa55f959d94.png)<br>

4. The script will automatically create the C:\1Clover-tools folder and copy the files in there. <br>
5. It will also automatically create the Scheduled Task called CloverTask-donotdelete. <br>
![image](https://user-images.githubusercontent.com/98122529/212368944-9be9e55a-ce96-43d8-9fb0-bf5f17a2bcc8.png)<br>

6. Go to Task Scheduler and the CloverTask will show up in there.<br>
7. Right-click the CloverTask and select Properties.<br>
![image](https://user-images.githubusercontent.com/98122529/212369284-76266936-d9d6-495e-aaf9-44d3abb7b129.png)<br>

8. Under the General tab, make sure it looks like this. Change it if it doesn't then press OK.<br>
![image](https://user-images.githubusercontent.com/98122529/212369626-8a02f229-3a94-45d0-ad1f-929a4a7e51be.png)<br>

9. Right click the task and select RUN.<br>
![image](https://user-images.githubusercontent.com/98122529/212369786-6a973906-a849-4c60-85cb-556963754997.png)<br>

10. Close Task Scheduler. Go to C:\1Clover-tools and look for the file called status.txt.<br>
11. Open status.txt and the Clover GUID should be the same as the bootsequence. Sample below.<br>
![image](https://user-images.githubusercontent.com/98122529/212370053-2bd6dbd8-3d21-43a9-8498-cd0f156c6b9c.png)<br>

12. Reboot and you should see a GUI to select which OS to boot from! Use the DPAD and press A to confirm your choice. You can also use the trackpad to control the mouse pointer and use the RIGHT SHOULDER BUTTON for LEFT-CLICK.<br>
![image](https://user-images.githubusercontent.com/98122529/214861561-bb63c209-14ee-492a-a506-2a87665f52d3.png)<br>
</details>

## FAQ / Troubleshooting
Read this for your Common Questions and Answers! This will be regularly updated and some of the answers in here are contributions from the [WindowsOnDeck reddit community!](https://www.reddit.com/r/WindowsOnDeck/)

<details>
<summary><b>Q0. Windows on microSD / external SSD doesn't get picked up automatically!</b></summary>
1. Make sure that it is setup as GPT and Windows-to-Go in Rufus. <br>

![image](https://user-images.githubusercontent.com/98122529/229247790-8511dc09-b56e-4e3f-ae59-bd11b21fc07c.png)<br>
</details>

<details>
<summary><b>Q1. Windows shows strange vertical lines at the center when booting up!</b></summary>

![image](https://user-images.githubusercontent.com/98122529/211201387-36311ba8-7ac4-44e7-938c-25d5ed2a3e5f.png)<br>
1. Boot to Windows.<br>
2. Open command prompt with admin privileges and enter the command -<br>
   bcdedit.exe -set {globalsettings} highestmode on<br>
</details>
      
<details>
<summary><b>Q2. Windows boots up in garbled graphics!</b></summary>
   
![image](https://user-images.githubusercontent.com/98122529/211198222-5cce38ff-3f20-4386-8715-c408fea6a4b0.png)<br>
1. Boot into SteamOS.<br>
2. Go to Desktop Mode.<br>
3. Open a konsole terminal and re-enable the Windows EFI - <br>
   cd ~/1Clover-tools <br>
   ./enable-windows-efi.sh<br>
   ![image](https://user-images.githubusercontent.com/98122529/211840322-46c3ab90-2ed4-4abc-84a6-ae82cce1d917.png)<br>
   
4. Reboot the Steam Deck and it will boot directly to Windows.<br>
5. Open command prompt with admin privileges and enter the command -<br>
   bcdedit.exe -set {globalsettings} highestmode on <br>

6. Make sure screen orientation is set to Landscape.<br>
7. Shutdown the Steam Deck. Press VOLDOWN + POWER and select SteamOS from the list.<br>
8. Reboot and it will go back to Clover!<br>
</details>

<details>
<summary><b>Q3. I need to perform a GPU / APU driver upgrade in Windows. What do I do?</b></summary>
1. Boot into SteamOS.<br>
2. Go to Desktop Mode.<br>
3. Open a konsole terminal and re-enable the Windows EFI - <br>
   cd ~/1Clover-tools <br>
   ./enable-windows-efi.sh<br>
   
   ![image](https://user-images.githubusercontent.com/98122529/212214891-ea322f50-2704-4676-b550-9071d41947ff.png)<br>
   
4. Reboot the Steam Deck and it will automatically load Windows.<br>
5. Install the GPU / APU driver upgrade and reboot Windows.<br>
6. Make sure screen orientation is set to Landscape.<br>
7. If everything looks good then shutdown the Steam Deck.<br>
8. Press VOLDOWN + POWER and select SteamOS from the list.<br>
9. Reboot and it will go back to Clover!<br>
</details>
       
<details>
<summary><b>Q4. I reinstalled Windows and now it boots directly to Windows instead of Clover!</b></summary>
1. Shutdown the Steam Deck. While powered OFF, press VOLDOWN + POWER and select SteamOS from the list.<br>
2. Script will automatically fix the dual boot entries! Reboot and it will go back to Clover!<br>
</details>

<details>
<summary><b>Q5. Windows automatically installed updates and on reboot it goes automatically to Windows!</b></summary>
1. Shutdown the Steam Deck. While powered OFF, press VOLDOWN + POWER and select SteamOS from the list.<br>
2. Script will automatically fix the dual boot entries! Reboot and it will go back to Clover!<br>
</details>

<details>
<summary><b>Q6. There was a SteamOS update and it wiped all my boot entries!</b></summary>
This happens even if not using dualboot / Clover / rEFInd.<br>
1. Shutdown the Steam Deck. While powered OFF, press VOLUP + POWER.<br>
2. Go to Boot from File > efi > steamos > steamcl.efi<br>
3. Script will automatically fix the dual boot entries! Reboot and it will go back to Clover!<br>
</details>

<details>
<summary><b>Q7. The time is always getting messed up!</b></summary>
1. Boot to Windows. <br>
2. Open command prompt with admin privileges and enter the command -<br>
   reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f <br> <br>
3. Reboot the Steam Deck for changes to take effect. <br>
</details>

<details>
<summary><b>Q8. I hate Clover / I want to just dual boot the manual way / A better script came along and I want to uninstall your work!</b></summary>
1. Boot into SteamOS.<br>
2. Open a konsole terminal and run the uninstall script - <br>
   cd ~/1Clover-tools <br>
   ./uninstall-Clover.sh <br>
   ![image](https://user-images.githubusercontent.com/98122529/211840095-85745118-fa64-4ef8-b2c1-78dbf0443459.png)<br>
   
3. Manually delete the non-Steam game clover-bootmanager-status.sh<br>
4. Reboot the Steam Deck and it will automatically load Windows. Clover has been uninstalled!<br>
</details>

<details>
<summary><b>Q9. I like your work how do I show a token of appreciation?</b></summary>
You can send me a message on reddit / discord to say thanks!<br>
</details>

<details>
<summary><b>Q9. Do you accept donations?</b></summary>
If you want to donate, you can drop by at my <a href="https://greatcyclechallenge.ca/riders/RyanrudolfOba">fundraising page</a> to help fight kids cancer! I ride my bike in summertime to help raise awareness and help fight kids cancer! All proceeds go to <a href="https://www.sickkids.ca/">Canada Sick Kids Foundation.</a><br>
</details>

## Known Issue
1. If Steam Deck is docked and connected a TV / display higher than 1080p (4K, 1440p), the GUI screen will be sideways. This is purely cosmetics and once an OS is selected it will boot in the correct orientation.

1080p TV \
![image](https://user-images.githubusercontent.com/98122529/230472962-0c981a47-2677-4766-80ad-c2b27d7f62c7.png)


4K TV \
![image](https://user-images.githubusercontent.com/98122529/230472728-b73bc18f-563d-4149-9d18-27792d6031b7.png)


## Acknowledgement / Thanks
Thanks to jlobue10 for his rEFInd script [available here.](https://github.com/jlobue10/SteamDeck_rEFInd) This Clover script was inspired by jlobue10's rEFInd script.

And in no particular order -<br>
- the Clover team / sergey for creating this awesome software. <br>
- Christoph Pfisterer for creating rEFIt which Clover is a fork of. <br>
- ss64.com for my quick online reference guide on command line switches! I also use this at work when scripting using bash / batch / powershell. <br>
- deckwizard for testing the initial Clover script. <br>
- arkag for the code enhancement to pull the ISO directly from Clover repo. <br>
- community contributed icons / logos for SteamOS and Batocera (thanks to WindowsOnDeck reddit members u/ch3vr0n5 and u/ChewyYui). <br>
- baldsealion for creating the custom splash screen for Windows. <br>
- Kodi Ross from FB Steam Deck Community for the Rick and Morty theme. <br>
- insanelymac and its forum members for creating beautiful Clover themes. <br>
- Metabolix for his HackBGRT that loads a custom splash screen (BGRT) for Windows. I modified it a bit so it plays nicely with this Clover script.<br>
- and the rest of WindowsOnDeck reddit community / discord server!
