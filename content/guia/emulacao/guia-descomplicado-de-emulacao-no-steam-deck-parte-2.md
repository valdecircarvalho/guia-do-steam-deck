---
title: 'O Guia Descomplicado de ROMsets para Emudeck - Parte 2'
date: 2023-03-01T00:00:00+00:00
weight: 32
summary: 'O Guia descomplicado do Emudeck - Parte 2 - Nesse guia, iremos falar sobre todos os detalhes sobre o uso do Emudeck no Steam Deck'
---

> Esse guia em 3 partes foi traduzido e adaptado dos textos publicado no Reddit pelo usuário [/u/EmulationStranger](https://www.reddit.com/user/EmulationStranger/) com algumas modificações e adições para o público brasileiro. Os posts originais estão [aqui](https://www.reddit.com/user/EmulationStranger/comments/11kom88/idiots_guide_to_steam_rom_manager_for_emudeck/), [aqui](https://www.reddit.com/r/SteamDeckEmulation/comments/11kcrhf/idiots_guide_to_romsets_for_emudeck/) e [aqui](https://www.reddit.com/user/EmulationStranger/comments/11j09qc/idiots_guide_to_emudeck_where_to_find_bios_and/)

### Parte 2 - O Guia Descomplicado de ROMsets para Emudeck
**_Em construção_**

Então você baixou e instalou o Emudeck em seu Steam Deck e agora está pensando “Sou tão preguiçoso, só quero um monte de jogos de uma só vez para um sistema”. Você está com sorte! Tenho links e termos de pesquisa para ajudá-lo.

Não posso garantir que todos os links aqui listados irão funcionar para sempre e também que estarão completamente livre de vírus, mas o archive.org verifica se há vírus antes do upload. Uma dica importante, não faça o download de nenhum arquivo .exe, pois nenhuma ROM está nesse formato e as chances de ser um vírus são grandes.

>Eu estou me organizando para disponibilizar no meu site alguns packs de roms que eu utilizo, para você baixar sistemas completos ou escolher a rom do jogo que desejar, mas essa é uma tarefa demorada e que demanda bastante tempo, então, continue sempre visitando esse guia para saber das novidades.

Os downloads do Archive.org são extremamente lentos, a menos que você use um gerenciador de downloads. Eu gosto de usar o JDownloader2 para isso ou quando possível utilizo o bom e velho torrent.

#### No-Intro vs Redump vs Tosec vs Trurip vs GoodSets/GoodTools

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

#### Links para downloads de RomSets

- [ROMset da RetroAchievement](https://archive.org/details/retroachievements_collection_v5) -  Ótima comunidade que adiciona conquistas a jogos retrô. Existe até um para [jogos de PS2](https://archive.org/details/retroachievements_collection_PS2). Cada jogo neste conjunto tem o hash certo para corresponder a um conjunto da RetroAchievement. Se você compactar o arquivo, talvez não seja mais possível usar o RetroAchievements para esse arquivo. Os arquivos aqui são constantemene atualizados. Verifique sempre.

- [1G1R ROMset Conjuntos 1G1R](https://archive.org/details/hearto-1g1r-collection) - 1G1R significam 1 Jogo 1 ROM. Nesse set você não irá encontrar jogos duplicados, várias versões do mesmo jogo e nem versões hack. Nesse RomSet você encontrará roms dos principais sistemas.

- [No-Intro ROMsets](https://archive.org/details/no-intro_romsets) e [ReDump ROMsets](https://archive.org/details/redump) - No-Intro e ReDump são os dois principais dumps confiáveis de jogos. Este conjunto específico de No-Intro exige que você crie uma conta no Archives.org.

- [Cylum ROMsets](https://archive.org/search?query=creator%3A%22Cylum%22)  - Excelentes ROMsets para a maioria dos sistemas. Ainda tem traduções e hacks em pastas separadas.

- [Ghostware ROMsets](https://archive.org/search?query=creator%3A%22Ghostware%22) Uma variedade enorme de ótimos ROMsets. Bem rotulado e mantido.

- [Emuvault ROMsets](https://archive.org/search?query=creator%3A%22EmuVault%22) -  Bastante parecido com a opção anterior.

- Por último, mas não menos importante, conjuntos de [ROMs EBZero](https://archive.org/details/@dischord), especificamente seu [RetroROMs Best Set](https://archive.org/details/retro-roms-best-set), que é de longe o melhor pacote inicial para um entusiasta retrô. 
