---
title: Upgrade do SSD - Passo-a-Passo 
description: Upgrade do SSD - Passo-a-Passo 
authors:
    - Valdecir Carvalho
date: 2023-04-01
tags:
  - steamdeck
search:
  boost: 2
  exclude: false
---

# Upgrade do SSD - Passo-a-Passo

Fiz o upgrade do SSD do meu Steam Deck e esses foram os passos que eu segui:


- Desmontar o Steam Deck
- Trocar o SSD
- Fazer a instalação do SteamOS
- Configurar o Steam OS
- Acessar o modo desktop
- Particionar o SSD - Deixar a particao livre como NTFS
- Reboot
- Acessar o modo desktop
- Configurar senha sudo
- Instalar Google Chrome, Microsoft Edge
- Instalar o Steam
- Instalar o Decky Loader (https://deckbrew.xyz/)
  - Instalar os plugins: (https://plugins.deckbrew.xyz/)
    - CSS Loader
    - VibrantDeck
    - Fantastic
    - ProtonDB Badges
    - Bluetooth
    - Powertools
    - HLTB for Deck
    - AutoSuspend
    - MetaDeck
    - MoonDeck
    - Controller Tools
    - DeckSettings
- Instalar o CryoUtilities (https://github.com/CryoByte33/steam-deck-utilities)
-----
- Instalar o Windows
  - Baixar ISO
  - Baixar os driver do Windows para o Steam Deck (https://help.steampowered.com/pt-br/faqs/view/6121-ECCD-D643-BAA8)
  - Gravar ISO no pendrive com Rufus
  - Boot no Steam Deck com o pendrive
  - Fazer a instalação do Windows usando a particao livre
  - Após a instalacao finalizar, instalar os drivers do Steam Deck
  - Rodar o Debloat do Windows para remover os software não necessários (https://github.com/builtbybel/ThisIsWin11)
  - Ativar o Windows - eu tive que usar o comando no prompt do windows `slmgr /ipt <windows-key>` e funcionou. Pela UI não estava aceitando a minha chave.
  - Instalar o (Windows) Steam Deck Tools [https://github.com/ayufan/steam-deck-tools] / [https://steamdecklife.com/2022/12/26/steam-deck-tools-for-windows/]
  - Windows Update
  - Seguindo o guia https://baldsealion.github.io/Steam-Deck-Ultimate-Windows-Guide
  - Windows Update novamente
  - CONTINUA....
## Instalar o SteamOS

- [Instruções de recuperação do Steam Deck](https://help.steampowered.com/pt-br/faqs/view/1b71-edf2-eb6d-2bb3)



## Videos no Youtube que eu assisti durante essa jornada
- https://www.youtube.com/watch?v=CIJjFTsPgbY


## Links Uteis
- https://steamdecklife.com/?s=windows
- https://baldsealion.github.io/Steam-Deck-Ultimate-Windows-Guide/Master1000@!
- https://github.com/ayufan/steam-deck-tools
- https://github.com/mKenfenheuer/steam-deck-windows-usermode-driver
- https://github.com/ryanrudolfoba/SteamDeck-Clover-dualboot
- https://github.com/SteamDeckWindows/Steam-Deck-Windows / https://steamdeckwindows.github.io/Steam-Deck-Windows/
- https://github.com/TomBayne/SteamDeck-Windows-Script


[] Todo - Criar um script para fazer tudo isso de uma vez :) 