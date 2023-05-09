## Welcome to the Reddit Steam Deck Wiki

Fonte: [https://www.reddit.com/r/SteamDeck/wiki/index/](https://www.reddit.com/r/SteamDeck/wiki/index/)

Congratulations! You just got your Steam Deck delivered and want to know more. Or, you are still waiting for your confirmation email. Maybe you are simply interested in the Steam Deck. You have arrived at the right place, and we'll try to explain everything you want or need to know.

What is a Steam Deck?
If you have just arrived here, the Steam Deck is a portable gaming PC made by Valve, disguised as a portable console. It tries to be both! The popular saying on the subreddit is, "It's a PC!", meaning that it can do anything a PC, or laptop, can do. But SteamOS makes using it as easy as using a console--mostly.

Since this is a PC, there may be more tinkering involved in some cases than on a console. The Steam Deck runs SteamOS, which is a Linux distro. If a game does not have a native Linux version, it is run through a compatibility layer called Proton. This works great for a great many games, but it is still possible that a game might not work. This is especially true for online multi-player games that use an anti-cheat solution that is unsupported on (or not activated for) Linux.

However, Valve uses a verification system that classifies games as Verified, Playable, Unsupported or not tested (yet). You will most likely be fine if you stick with games that are Verified or Playable, but even many games that are listed as Unsupported can be played without issue. Some games need minor tweaking to work and you can search for information about that on the [ProtonDB](https://www.protondb.com/) website. You can see which games in your Steam library are Verified or Playable on [this website from Valve](https://store.steampowered.com/steamdeck/mygames).

But nothing is really stopping you from [installing Windows](https://www.reddit.com/r/SteamDeck/wiki/guides/windows) on it! Except, maybe, direct support from Valve. Valve certainly is investing a lot into SteamOS and updates have been swift and frequent since it release. So SteamOS is getting better and better!

The device can perhaps be compared to portable systems like the [PSP](https://www.reddit.com/r/PSP/), [PS Vita](https://www.reddit.com/r/vita/) and the [Switch](https://www.reddit.com/r/Switch/), but also the [Aya Neo](https://store.ayaneo.com/), or [GDP Win 3](https://gpd.hk/gpdwin3). You can certainly use the Steam Deck as any such device, but you can also do so much more. This wiki will try to guide you through everything you could want to do with the Steam Deck, such as [emulating other systems](https://www.reddit.com/r/SteamDeck/wiki/guides/emulation), guiding you to the right [tools and homebrew](https://www.reddit.com/r/SteamDeck/wiki/guides/homebrew), or directing you to [other resources online](https://www.reddit.com/r/SteamDeck/wiki/guides/websites).

### What to do first?
A common question is: what do I do when I get my Steam Deck? Well, the correct answer is: install a few games and play them! According to this subreddt, these are a good recommendation:

- [Aperture Desk Job](https://store.steampowered.com/app/1902490/Aperture_Desk_Job/)
- [Vampire Survivors](https://store.steampowered.com/app/1794680/Vampire_Survivors/)
Aside from using the Steam Deck for its main intended purpose (playing games!), there are loads of other things you can do with it.

### Desktop mode
The Steam Deck has a desktop mode, which you can access from the Power menu, accessible with the Steam Deck button (on the lower left of the device), or by holding the power button. Upon selecting "Switch to Desktop", a [KDE Plasma](https://kde.org/plasma-desktop/) desktop environment will load up. KDE Plasma is the open-source desktop environment that Valve chose to use for the Steam Deck. It is pretty similar to Window in some ways, but very different it others.

### Discover store
The Steam Deck uses something called Flatpak applications. This is a way of packaging and distributing applications that work on any Linux distribution (as opposed to traditional package managers that are geared for specific distributions). Steam Deck comes with an app store installed called Discover, accessible in Desktop mode. This application can download and update applications that are available on a site called [Flathub](https://flathub.org/homehttps://flathub.org/home).

### File Access
One of the other things you will be wondering about is how to access your Steam Deck remotely and upload files to it. You can: to guides in this section.

- Enable SSH

    Open de Konsole application in Desktop Mode and run these commands:

    - Set a password for user deck if you haven't already $ passwd
    - Enable SSH $ sudo systemctl enable --now sshd

    [Download FileZilla](https://filezilla-project.org/download.php) FTP client, connect to deck@steamdeck (or use the Steam Deck's IP address).

- Synchronizing files between machines

    [Download Syncthing binaries from here](https://github.com/syncthing/syncthing/releases/download/v1.22.0/syncthing-linux-amd64-v1.22.0.tar.gz)

    There is also [a Flatpak available](https://flathub.org/apps/details/me.kozec.syncthingtk) in Discover.

- Connect to an SMB shares

- Use the application Warpinator available in the Discover store

### Steam Input
With Steam Input, you have full control over how to control your games. It is a very powerful way to configure every aspect of the Steam Deck controller. Below you will find a few resources that have been posted in this subreddit to get you started.

- [Basic Steam Input Guide](https://www.reddit.com/r/BestOfSteamDeck/comments/wp9vwj/guide_basic_steam_input_guide/) - A basic introduction to Steam Input by [u/ArenLuxon](https://www.reddit.com/u/ArenLuxon).

- [Steam Deck Controller Guide](https://www.reddit.com/r/SteamDeck/comments/uovy87/steam_deck_controller_guide_a_visual_introduction/) - A Visual Introduction Steam Community link - A very comprehensive guide, featuring many videos (takes a while to fully load).

- [Steam Input Wiki](https://www.reddit.com/r/SteamDeck/comments/uovy87/steam_deck_controller_guide_a_visual_introduction/) [Link](https://steaminput.wiki/en/home) - A general wiki about Steam Input that was originally written for the Steam Controller.

### [Steam Deck Frequently Asked Questions](https://www.reddit.com/r/ValveSteamDeck/wiki/faq)
### [SteamOS 3.0 information](https://www.reddit.com/r/SteamDeck/wiki/steamos)
### [Steam Deck Guides](https://www.reddit.com/r/SteamDeck/wiki/guides)

### Lists of useful resources
- [List of tools and homebrew](https://www.reddit.com/r/SteamDeck/wiki/guides/homebrew) - Searching for apps, homebrew and other software to enhance or enable your emulation, remote access, streaming, modding, etc. experience? Look here.

- [List Steam Deck-related websites, subreddits, podcasts, Discord servers, etc.](https://www.reddit.com/r/SteamDeck/wiki/guides/websites) - Searching for other online resources like Steam Deck-oriented websites, other Reddit subreddits or Discord servers? Look here.