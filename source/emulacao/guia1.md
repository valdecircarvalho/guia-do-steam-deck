---
title: Emulação no Steam Deck - O Guia descomplicado do Emudeck #aparece no titulo do navegador
description: O Guia descomplicado do Emudeck - Parte 1 - Nesse guia, iremos falar sobre todos os detalhes sobre o uso do Emudeck no Steam Deck # descrição para meta tag
authors:
    - Valdecir Carvalho
date: 2023-04-01
tags:
  - steamdeck
  - emulação
  - emudeck
---

# O Guia Descomplicado do Emudeck para Emulação no Steam Deck

> Esse guia em 3 partes foi traduzido e adaptado dos textos publicado no Reddit pelo usuário [/u/EmulationStranger](https://www.reddit.com/user/EmulationStranger/) com algumas modificações e adições para o público brasileiro. Os posts originais estão [aqui](https://www.reddit.com/user/EmulationStranger/comments/11kom88/idiots_guide_to_steam_rom_manager_for_emudeck/), [aqui](https://www.reddit.com/r/SteamDeckEmulation/comments/11kcrhf/idiots_guide_to_romsets_for_emudeck/) e [aqui](https://www.reddit.com/user/EmulationStranger/comments/11j09qc/idiots_guide_to_emudeck_where_to_find_bios_and/)

## Parte 1 - O Guia descomplicado do Emudeck
Estou usando o [Emudeck](https://github.com/dragoonDorise/EmuDeck) como base para este guia, embora existam outras ferramentas como RetroDeck e Batocera. 
As dicas sobre BIOS e ROMs serão basicamente as mesmas, mas podem variar de plataforma para plataforma.

Em breve, pretendo atualizar essa página com guias para outros sistemas.

A instalação do Emudeck é bem simples e direta. O vídeo e o guia de instalação feito pelo Russ do blog Retro Game Corp no site da Emudeck irá guiá-lo através da instalação do Emudeck 2.0

[Guia de Instalação do Emudeck no site oficial](https://www.emudeck.com/#how_to_install)

- Se você planeja armazenar suas roms em um cartão SD, antes você deve formatar seu cartão SD pelo Steam (Botão Steam > Definições > Sistema > Formatar cartão SD. Este processo poderá demorar alguns minutos). O cartão SD precisa estar no formato ext4 (ou btrfs) para funcionar no EmuDeck. 
- Em seguida, vá para o modo Desktop pressionando o botão STEAM, Power -> Switch to Desktop
- Abra o navegador e faça o download do instalador utilizando o [link](https://www.emudeck.com/EmuDeck.desktop) e salve o arquivo no desktop/area de trabalho do Deck
- Execute o arquivo com 2 cliques e siga os passos da instalação

### Links úteis do Emudeck

- [Site oficial Emudeck](https://www.emudeck.com/)
- [Emudeck - How to Install](https://www.emudeck.com/#how_to_install)
- [Emudeck - FAQ](https://www.emudeck.com/#faqs)
- [Guia Emudeck - Retro Game Corps](https://retrogamecorps.com/2022/10/16/steam-deck-emulation-starter-guide/)
- [Guia Emudeck -  Wagner's Tech Talk](https://wagnerstechtalk.com/sd-emudeck/) 

### Os Emuladores

- **RetroArch** vai emular consoles antigos como Atari, NES, SNES, DS, N64, Sega Genesis, Neo Geo, Saturn, Dreamcast, GB, GBA, GBC e muitos outros
- **Dolphin** é o emulador padrão para Nintendo GameCube e Nintendo Wii
- **Prime Hacks** é um fork do Dolphin para Metroid Prime Wii Trilogy
- **PPSSPP** é o emulador para Sony PSP
- **Duckstation** é o emulador para Sony Playstation 1/PS1
- **Citra** é o emulador para Nintendo 3DS
- **MelonDS** é o emulador para Nintendo DS
- **PCSX2** é o emulador para Sony Playstation 2/PS2
- **RPCS3** é o emulador para Sony Playstation 3/PS3
- **Yuzu** e **Ryujinx** são ambos para Nintendo Switch
- **Xemu** é o emulador para OG Xbox
- **CEMU** é o emulador para o Nintendo WII U
- **MAME** é o emulador de jogos de fliperama
- **VITA3K** é o emulador para Playstation Vita
- **SCUMMVM** é o emulador para PC de jogos apontar e clicar (_point & click_) em aventuras como as antigas da LucasArts (Monkey Island, Full Throttle, Indiana Jones and the Fate of Atlantis)

### Onde encontro os arquivos do BIOS?!

E é aqui que todos os outros guias param devido a temores de “violação de direitos autorais”, dos quais BIOS e ROMs se enquadram diretamente. Mas não este guia porque somos todos adultos e sabemos sobre abandonware. Aqui você irá encontrar todos os links para você começar e todos eles estão no GitHub, archive.org, Vimm's Lair (site de ROM confiável) ou no site oficial do PlayStation. 

- BIOS RetroArch completo ([link do GitHub](https://github.com/Abdess/retroarch_system) ou [link alternativo]([zip](http://download.localhostcloud.com/bios/retroarch_system/libreto.zip)) direto do meu site)

- Arquivos de BIOS do XBox ([link archive.org](https://archive.org/details/xemustarter) ou [link alternativo](http://download.localhostcloud.com/bios/retroarch_system/libreto.zip) direto do meu site))

- Firmware PS3 ([site oficial da Sony](https://www.playstation.com/en-us/support/hardware/ps3/system-software/) ou [link alternativo](http://download.localhostcloud.com/bios/ps3/PS3UPDAT.PUP) direto do meu site)) 

### Onde coloco os arquivos da BIOS?!

Esses sistemas precisam de BIOS que devem ser copiados DIRETAMENTE na pasta BIOS:

+ PS1
+ PS2
+ Sega Saturn (Três núcleos RetroArch separados)
+ CD Sega
+ Sega Genesis
+ Nintendo DS
+ XBox (Não - RetroArch)
+ Dreamcast BIOS vai para a pasta 'dc' dentro da pasta BIOS
+ O firmware PS3 deve ser instalado via desktop RPCS3.

Esses sistemas NÃO precisam de arquivos de BIOS:

+ NES
+ SNES
+ N64
+ Game Cube
+ Wii
+ wii u
+ Game Boy
+ Game Boy Color
+ Game Boy Advance
+ Nintendo 3ds
+ PSP
+ Game Gear

Para todos os outros sistemas, consulte a documentação do Emudeck e RetroArch. [Informações do BIOS do Emudeck](https://github.com/dragoonDorise/EmuDeck/wiki/Cheat-Sheet)
[Informações do BIOS do RetroArch](https://docs.libretro.com/library/bios/)

### Como faço para verificar se tenho o arquivo BIOS correto no lugar certo?!

Você pode verificar usando o verificador de BIOS do Emudeck. Vá para o modo de área de trabalho >> abra o Emudeck >> Tools and Stuff >> Check BIOS.

Isso verificará se o arquivo está no lugar correto e se possui o hash correto, mas ainda pode ter um nome incorreto. Todos os arquivos do BIOS do RetroArch são nomeados corretamente, assim como os arquivos do BIOS do XBox, mas lembre-se de que, se o verificador do BIOS estiver verde, ele ainda pode ter sido nomeado incorretamente.

### Agora, onde consigo jogos ou ROMS?

Não vou entrar no mérito se ROM é pirataria ou não. Isso eu deixo para você decidir. Aqui você irá encontrar alguns links onde pode baixar as roms dos jogos e também alguns termos de pequisa que você pode usar no Google.

Duas coisas para manter em mente.

Às vezes, os arquivos baixados estarão compactados no formato .zip ou .7z ou .rar. Alguns sistemas RetroArch podem reproduzir os arquivos compactados, mas a maioria dos sistemas não, então você terá que extrair os arquivos. No Steamdeck, clique com o botão esquerdo no arquivo e clique em Extrair. Você também pode descompactar os arquivos no seu PC antes de transferir para o Steam Deck.

A outra coisa é que os downloads do archive.org são extremamente lentos, a menos que você use um gerenciador de downloads. Na loja Discover, há um programa chamado Free Download Manager que funciona muito bem. Basta arrastar o arquivo de archive.org para o programa e ele acelerará consideravelmente o download. Eu particularmente, prefiro baixar as roms pelo computador e depois transferir para o Steam Deck.

### Sites para Download de Roms

 - [Myrient](https://myrient.erista.me/)
   - Bastante organizado e seguro
   - Tem de TUDO
   - Velocidade de Download bem alta e podem ser baixados diversos arquivos de uma vez.
   - Permite o acesso via FTP e Rsync 
 - [Vimm's Lair](https://vimm.net/)
    - Tem tudo até Wii e PSP
    - Velocidades de download dolorosamente lentas (apenas uma de cada vez), mas seguras, confiáveis e incrivelmente intuitivas
    - Downloads do XBox no formato .xiso que rodam automaticamente no Xemu (o emulador é instalado pelo Emudeck)
    - Cada arquivo que você baixa vem como um arquivo compactado junto com um arquivo .txt do Vimm's Lair depois de extrair os arquivos. Você pode deletar isso.
 - [r-ROMs também conhecida como “o Megathread”](https://r-roms.github.io/)
    - Para navegar para encontrar um jogo, use a barra de menu na parte superior (ou clique no botão de 3 linhas para expandir o menu)
    - NÃO use a barra de pesquisa porque ela não encontrará todos os jogos, apenas alguns jogos populares.
    - Depois de navegar para o sistema (por exemplo, Sony - Sony PlayStation - Internet Archive (Redump) (CHD) ), clique em download e ele o levará a um arquivo em archive.org. Você pode rolar para encontrá-lo ou “Localizar na página”/Control + F para encontrar seu jogo.

- [Archive.org](https://archive.org)
  - Se tudo o que foi dito acima não ajudou você a descobrir por que estava procurando, o archive.org o cobre.
  - Se você - assim como eu não conhece/conhecia o Archive.org - é um site onde você irá encontrar praticamente tudo, desde revistas antigas, discos, cds e roms, basta procurar.
  - Sugiro que você crie uma conta no archive.org e utiliza um gerenciador de download. Eu uso o [Jdownloader2](https://jdownloader.org/jdownloader2)

Na parte 2 voltaremos a falar mais sobre Roms e Romsets para o Emudeck.


## Parte 2 - O Guia Descomplicado de ROMsets para Emudeck
**_Em construção_**

Então você baixou e instalou o Emudeck em seu Steam Deck e agora está pensando “Sou tão preguiçoso, só quero um monte de jogos de uma só vez para um sistema”. Você está com sorte! Tenho links e termos de pesquisa para ajudá-lo.

Não posso garantir que todos os links aqui listados irão funcionar para sempre e também que estarão completamente livre de vírus, mas o archive.org verifica se há vírus antes do upload. Uma dica importante, não faça o download de nenhum arquivo .exe, pois nenhuma ROM está nesse formato e as chances de ser um vírus são grandes.

>Eu estou me organizando para disponibilizar no meu site alguns packs de roms que eu utilizo, para você baixar sistemas completos ou escolher a rom do jogo que desejar, mas essa é uma tarefa demorada e que demanda bastante tempo, então, continue sempre visitando esse guia para saber das novidades.

Os downloads do Archive.org são extremamente lentos, a menos que você use um gerenciador de downloads. Eu gosto de usar o JDownloader2 para isso ou quando possível utilizo o bom e velho torrent.

### No-Intro vs Redump vs Tosec vs Trurip vs GoodSets/GoodTools

<sub>fonte: [https://wiki.recalbox.com/en/tutorials/games/generalities/isos-and-roms/differents-groups](https://wiki.recalbox.com/en/tutorials/games/generalities/isos-and-roms/differents-groups)</sub>

> Quando vocêm começar a procurar (e encontrar) RomSets você certamente irá se deparar com esses termos: **_No-Intro_**, **_Redump_**, **_Tosec_** , **_Trurip_** e **_Goodsets/Goodtools_** e vai ficar na dúvida sobre qual baixar. Aqui tento explicar brevemente o que significam cada um desses termos e suas diferenças.

- **No-Intro** 
  - foca apenas em jogos publicados em **mídia de cartucho** (Master-System, SNES, N64, Gameboy, etc).
  - mantém apenas as melhores roms, sem erros ou alterações, e que sejam o mais próximo possível dos cartuchos originais.
  - geralmente contém apenas uma versãode cada jogo para um determinado país (EUA, Eur, Jp, Fr, De, ...), bem como todas as atualizações desses jogos (Rev1, Rev2, Beta, ...).

- **Redump** 
  - apenas em jogos publicados em **mídia óptica** (CD, DVD, ...) (PlayStation, Sega Saturn, GameCube, Dreamcast, etc).
  - mantém apenas as melhores isos, sem erros ou alterações, e que estejam o mais próximo possível da mídia original.
  - os ISOS Redump são maiores que os Tosec ou Trurip Isos, mas possuem uma qualidade melhor, o que influencia diretamente no comportamento durante a emulação.

- **Tosec**
  - visa listar todos os conteúdos possíveis para cada consola ou computador (Disquetes, Cartuchos e CDs mas também revistas, manuais e vídeos - Atari-ST, Amiga, Commodore, Dreamcast, Master-System, N64, etc).- é um sistema de catalogação/nomeação. Sua missão é identificar e nomear todas as ROMs encontradas **na natureza**.
  - isso parece louvável à primeira vista, mas no final torna-se extremamente caótico. Você obtém ROMs boas, mas também ruins, arquivos ruins, arquivos de backup extras, arquivos de substituição alternativos, hack roms, falsos, homebrews, roms modificados, etc... Dessa forma você pode ter 27 versões diferentes do mesmo jogo, das quais apenas 3 são roms que funcionam corretamente. Por exemplo, o conjunto TOSEC 2012-12-28 contém 346 versões diferentes de Super Mario World!
  
- **Trurip**
  - se concentra exclusivamente em jogos baseados em CD.
  - a missão do TruRip é ter a duplicata mais precisa da mídia original, embora essa afirmação possa parecer muito semelhante aos objetivos do No-Intro e do Redump, não é.É outro nível, o que significa que não há cabeçalhos ou configurações para garantir que os jogos funcionem corretamente nos emuladores.
  - TruRip não pode fazer uma cópia exata em todos os casos, às vezes coisas como subcódigo ainda estão faltando. Tenta ser o mais purista possível
  - TruRip tentou ser um grupo privado e falhou. É difícil obter informações sobre isso online.

- **Goodsets/Goodtools**
  - O objetivo do GoodSets/GoodTools é muito semelhante ao TOSEC, mas um pouco mais refinado, pois são apenas um sistema de catalogação/nomeação e não um sistema de purificação como No-Intro, Redump e TruRip.
  - Os conjuntos GoodTools pretendem ser o conjunto ideal "daí seus nomes", eles tentam ter todos os jogos e todas as versões do jogo.
  - Como resultado, você obterá 20 versões do Super Mario (EUA, JAP, EUR, versão pirata dos EUA V1, JAP Alternate V1, etc) para que cada jogo tenha todas as versões das roms.
  - Eles geralmente identificam as roms (com colchetes, chaves, etc. que são adicionados ao nome da ROM, veja [aqui](https://wiki.recalbox.com/en/tutorials/games/generalities/tags-used-in-rom-names) a nomenclatura comumente usada).


Abaixo alguns links onde você pode baixar roms sets completos de cada console ou sistema.

### Links para downloads de RomSets

- [ROMset da RetroAchievement](https://archive.org/details/retroachievements_collection_v5) -  Ótima comunidade que adiciona conquistas a jogos retrô. Existe até um para [jogos de PS2](https://archive.org/details/retroachievements_collection_PS2). Cada jogo neste conjunto tem o hash certo para corresponder a um conjunto da RetroAchievement. Se você compactar o arquivo, talvez não seja mais possível usar o RetroAchievements para esse arquivo. Os arquivos aqui são constantemene atualizados. Verifique sempre.

- [1G1R ROMset Conjuntos 1G1R](https://archive.org/details/hearto-1g1r-collection) - 1G1R significam 1 Jogo 1 ROM. Nesse set você não irá encontrar jogos duplicados, várias versões do mesmo jogo e nem versões hack. Nesse RomSet você encontrará roms dos principais sistemas.

- [No-Intro ROMsets](https://archive.org/details/no-intro_romsets) e [ReDump ROMsets](https://archive.org/details/redump) - No-Intro e ReDump são os dois principais dumps confiáveis de jogos. Este conjunto específico de No-Intro exige que você crie uma conta no Archives.org.

- [Cylum ROMsets](https://archive.org/search?query=creator%3A%22Cylum%22)  - Excelentes ROMsets para a maioria dos sistemas. Ainda tem traduções e hacks em pastas separadas.

- [Ghostware ROMsets](https://archive.org/search?query=creator%3A%22Ghostware%22) Uma variedade enorme de ótimos ROMsets. Bem rotulado e mantido.

- [Emuvault ROMsets](https://archive.org/search?query=creator%3A%22EmuVault%22) -  Bastante parecido com a opção anterior.

- Por último, mas não menos importante, conjuntos de [ROMs EBZero](https://archive.org/details/@dischord), especificamente seu [RetroROMs Best Set](https://archive.org/details/retro-roms-best-set), que é de longe o melhor pacote inicial para um entusiasta retrô. 


## Parte 3 - O Guia descomplicado do Emudeck
**_Em construção_**