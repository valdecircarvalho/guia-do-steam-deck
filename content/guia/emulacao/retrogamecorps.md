---
title: 'Guia de Emulação para o Steam Deck - Retro Game Corps'
date: 2023-03-01T00:00:00+00:00
weight: 39
summary: 'Guia de Emulação para o Steam Deck por Russ Crandall - Retro Game Corps.'
---

> Texto traduzido e adaptado do Inglês para o Português do Brasil com autorização do autor, Russ Crandall. O conteúdo original pode ser encontrado em [https://retrogamecorps.com/2022/10/16/steam-deck-emulation-starter-guide/](https://retrogamecorps.com/2022/10/16/steam-deck-emulation-starter-guide/).

Deixo aqui o meu **agradecimento público** ao Russ que autorizou a tradução e publicação desse texto no [Guia do Steam Deck em Português](https://steamdeck.valdecir.me). Se esse conteúdo foi útil para você, vá até o [Twitter](https://twitter.com/RetroGameCorps) e agradeça o Russ dizendo que viu o conteúdo dele aqui. 

---- 

## GUIA INICIAL DE EMULAÇÃO PARA STEAM DECK

**Última atualização:** 08MAR2023 (veja o [Changelog](https://retrogamecorps.com/changelog/) para mais detalhes)

O Steam Deck da Valve é uma combinação perfeita de dispositivos portáteis: possui uma excelente relação custo-benefício, uma vasta biblioteca de jogos graças à sua integração com o [Steam](https://store.steampowered.com/steamdeck) e está se tornando cada vez mais disponível a cada mês. Neste guia, mostrarei como jogar seus sistemas de jogos retrô (e modernos) favoritos através da emulação de software.

Este guia usará principalmente um aplicativo chamado EmuDeck para configurar sua experiência de emulação, mas também abordarei outras soluções, como RetroDeck e Batocera. Se você está procurando um guia geral de configuração para o Steam Deck em si, recomendo este abrangente [guia do Steam Deck](https://github.com/mikeroyal/Steam-Deck-Guide) do usuário mikeroyal no GitHub.

## EmuDeck vs Batocera vs RetroDeck vs EmulationStation

Vamos dar uma olhada rápida em algumas opções de emulação no Steam Deck.

**EmuDeck** é uma ferramenta que integra muitas funções em uma: ela baixará emuladores de suas fontes oficiais, pré-configurará suas configurações e hotkeys, e trabalhará em conjunto com EmulationStation e o [Steam ROM Manager](https://store.steampowered.com/app/1100640/Steam_ROM_Manager/). Não é um "aplicativo" no sentido estrito, mas uma coleção de scripts inteligentes que cuidam de todas as instalações e configurações manuais para você. Vi algumas preocupações sobre permitir que um aplicativo instale itens no seu Steam Deck, mas o EmuDeck não requer acesso sudo/root para funcionar e instala apenas os mesmos sistemas de arquivos que você instalaria se instalasse os emuladores manualmente. No entanto, se você preferir uma solução autônoma, confira o **Batocera** ou o **RetroDeck**.

**Batocera** é um sistema operacional Linux personalizado focado na emulação de jogos. É completamente autônomo e inicializável a partir de uma variedade de formatos. Isso significa que você pode carregar o Batocera em um cartão microSD, unidade flash ou disco rígido externo e inicializá-lo a partir daí. Como exemplo, você poderia usar o seu Steam Deck principalmente para jogos de PC, e quando estiver pronto para fazer algumas emulações, pode simplesmente adicionar o cartão SD do Batocera, inicializar no cartão e começar a jogar. Esta é uma excelente configuração se você quiser separar sua experiência de jogos SteamOS no PC e sua emulação de jogos retrô.

**RetroDeck** é uma solução de emulação tudo-em-um que usa o EmulationStation como sua interface principal. Como é autônomo, ele se comportará como um único aplicativo com todos os seus emuladores pré-instalados e configurados. Esta é uma ótima solução se você quiser apenas uma experiência de emulação simples que você possa acessar diretamente do seu ambiente SteamOS. Além disso, o aplicativo está disponível como um FlatPak diretamente no aplicativo Discover via Desktop Mode no seu Steam Deck, tornando o processo de instalação super fácil. O RetroDeck está em desenvolvimento ativo e ainda não está em um estado de lançamento final.

**EmulationStation** é um frontend que fornecerá uma interface de usuário autônoma para navegar e lançar seus jogos retrô favoritos. A versão encontrada no Steam Deck é conhecida como EmulationStation-DE (Desktop Edition, abreviada para ES-DE). Ele pode ser instalado independentemente baixando a última [AppImage](https://github.com/HerbFargus/ES-Portable/releases) e instalando-o no seu Steam Deck, ou vem incluído nos ambientes EmuDeck ou RetroDeck. O ES-DE atualiza automaticamente, portanto, se você remover ou adicionar ROMs às suas pastas, ele detectará automaticamente essas alterações e refletirá no aplicativo na próxima vez que você iniciar o ES-DE.

> No final, nenhuma das opções acima são necessárias para executar emulação no Steam Deck. Se você quiser, pode instalar manualmente cada emulador individual na [Discovery Store](https://store.steampowered.com/search/?term=emulator) e configurá-los por conta própria, como faria em um PC com Windows. Ou você pode instalar a Edição Desktop do EmulationStation e configurá-la por si mesmo. As ferramentas acima simplesmente oferecem a opção de tornar esse processo mais fácil.

### Ferramentas recomendadas

### Teclado e mouse
Porque usaremos o Desktop Mode para configurar nossa experiência de emulação, às vezes é mais fácil usar um mouse e teclado do que tentar navegar em tudo usando os trackpads e teclado na tela do Steam Deck. Além disso, há momentos em que precisaremos ter o aplicativo Steam fechado (como ao usar o Steam ROM Manager), o que desativa alguns dos controles do trackpad mais úteis.

Se você tiver um teclado e mouse Bluetooth, é fácil pareá-los e o emparelhamento persistirá entre o Game Mode e o Desktop Mode (quão conveniente é isso?). No entanto, se você quiser algo mais portátil, [este teclado da Rii](https://amzn.to/31YINRJ) é o que eu uso. Ele é recarregável por USB e possui um dongle USB de 2,4GHz para conexão fácil.

### Dock do Steam Deck ou hub USB-C
Para tornar a configuração ainda mais fácil, você pode acoplar seu Steam Deck a um monitor ou TV e usá-lo como um PC comum. Você pode usar um hub USB-C como este da Anker, a Estação de Ancoragem Oficial do Valve Steam Deck ou docks de terceiros como este da iVoler. Aqui está um vídeo onde eu comparo quatro soluções diferentes de dock para o Steam Deck.

### Cartão microSD
Independentemente de como você configurar o seu Steam Deck para jogos retrô, você vai querer armazenar seus jogos em algum lugar. Eu recomendo armazenar seus jogos retrô em um cartão microSD, já que os cartões são relativamente baratos e você pode trocá-los conforme necessário. O tamanho do cartão microSD dependerá de como você planeja usá-lo. Se você for usar um único cartão microSD para armazenar jogos do Steam e seus jogos retrô, um cartão maior pode ser melhor. Se você vai usar um cartão microSD dedicado para jogos retrô, pode usar algo menor (mas tenha em mente que jogos baseados em CD e jogos modernos ocupam mais espaço de armazenamento do que sistemas de cartuchos antigos).

Observe que, quando se trata de emulação, as velocidades de leitura/gravação no cartão microSD geralmente não afetam a velocidade de carregamento de jogos ou emulação, então armazenar jogos no armazenamento interno provavelmente não fornecerá um impulso de desempenho. No entanto, se você for usar o cartão para armazenar jogos do PC/Steam também, então você vai querer obter um cartão Classe 2 de alta velocidade (A2) em vez de um cartão Classe 1 (A1), já que isso pode afetar os tempos de carregamento dos jogos do PC. Eu recomendaria comprar um cartão microSD de uma marca respeitável como [SanDisk](https://amzn.to/31ZRvR1) ou [Samsung](https://amzn.to/3vVcGho) para garantir a integridade do cartão a longo prazo. Pessoalmente, uso um cartão SanDisk Extreme de 1TB no meu Steam Deck, e o uso para armazenar jogos do PC, bem como todos os meus sistemas emulados.

- 256GB microSD:
  - [SanDisk Ultra](https://amzn.to/3cb1Y9X)
  - [SanDisk Extreme](https://amzn.to/3ct1l3q)
  - [Samsung EVO Select](https://amzn.to/3clhvQJ)
- 512GB microSD:
  - [SanDisk Ultra](https://amzn.to/31XK9GM)
  - [SanDisk Extreme](https://amzn.to/3ct4wqA)
  - [Samsung EVO Select](https://amzn.to/3f43Q2I)
- 1TB microSD:
  - [SanDisk Ultra](https://amzn.to/31XKMLI)
  - [SanDisk Extreme](https://amzn.to/3f27JtF)
  - [SanDisk Extreme Pro](https://amzn.to/31XKJWz)

> Se você for usar um cartão microSD para armazenar seus jogos, o cartão precisa ser formatado primeiro.
>- Insira o cartão no seu Steam Deck enquanto estiver executando o SteamOS Game Mode
>- Vá para STEAM > Configurações > Sistema e selecione "Formatar cartão SD"

Observe que, embora o cartão possa ser lido tanto no SteamOS Game Mode quanto no Desktop Mode, ele usa um sistema de arquivos Linux que não é legível por PCs com Windows ou Mac sem software especializado

### Unidade flash ou disco rígido USB externo:

Se você estiver usando um computador Windows ou Mac como seu computador, a maneira mais fácil de adicionar arquivos de jogos ao seu Steam Deck (independentemente de onde você estiver armazenando eles, no armazenamento interno ou em um cartão microSD) é usar uma unidade flash ou um disco rígido USB externo. Isso ocorre porque o Steam Deck pode ler sistemas de arquivos do Windows (como exFAT e NTFS) no Desktop Mode, mas o Windows e os Macs não podem ler sistemas de arquivos do Linux. Portanto, você vai querer mover seus arquivos de jogos para um disco rígido externo (ou unidade flash) e, em seguida, conectar essa unidade ao seu Steam Deck (geralmente via um dock ou hub USB-C) para que você possa arrastar e soltar seus arquivos nas pastas apropriadas.

> **Se o seu cartão não estiver sendo reconhecido dentro do SteamOS Game Mode após formatá-lo ou executar o EmuDeck, você pode ter que re-linkar o cartão com sua biblioteca do Steam.** Para fazer isso, abra o Steam Deck no Desktop Mode e, em seguida, abra o Steam e vá para Configurações > Downloads > Pastas da biblioteca do Steam > ícone "Mais" > e navegue até a localização do seu cartão SD (/run/media/mmcblk0p1) e selecione-o. Agora você deve ser capaz de usar seu cartão SD para armazenar jogos do Steam.

### Começando com o EmuDeck

O EmuDeck é super simples de instalar no Steam Deck. O processo é um pouco diferente dependendo se você deseja armazenar seus jogos no próprio Steam Deck ou em um cartão microSD. Se estiver usando o Steam Deck para armazenar seus jogos, não será necessário nenhum ajuste extra, mas para o cartão microSD, você precisará formatá-lo no Steam Deck primeiro (consulte a seção acima se você ainda não o fez).

> O EmuDeck recentemente criou uma página de [FAQ](https://github.com/dragoonDorise/EmuDeck/wiki/Frequently-Asked-Questions) abrangente e eu recomendo dar uma olhada se você tiver algum problema não coberto neste guia.

Para instalar o EmuDeck, entre no Desktop Mode no seu Steam Deck (STEAM > Power > Switch to Desktop), e usando um navegador da web (como o FireFox), vá para o site do [EmuDeck](https://www.emudeck.com/) e faça o download do aplicativo diretamente no seu Steam Deck. Quando solicitado a salvar o arquivo, salve-o diretamente na sua área de trabalho. Em seguida, navegue até sua área de trabalho e abra o aplicativo EmuDeck.

O EmuDeck irá inicializar e baixar alguns arquivos, e em seguida você será recebido com a opção de escolher o MODO FÁCIL ou o MODO PERSONALIZADO.

Modo Fácil: Todos os sistemas serão baixados automaticamente e tudo será pré-configurado. Se você só quer começar a jogar e não quer se preocupar com personalização, esta é uma ótima escolha. Note que mesmo se você usar o Modo Fácil para começar, você sempre pode voltar e executar o EmuDeck novamente por meio do Modo Personalizado ou Configurações Rápidas.

Modo Personalizado: Este modo permite que você escolha quais sistemas deseja instalar e você pode escolher configurações especiais como proporção de aspecto, tema do EmulationStation, shaders e mais. Se você está familiarizado com emulação, eu recomendo usar este modo.

Depois de selecionar qual modo do EmuDeck usar, o aplicativo irá guiá-lo pelos demais prompts para começar. Assista ao vídeo acima para uma demonstração desse processo. Provavelmente você receberá algumas mensagens pop-up sobre chaves Yuzu (Switch) faltando e um prompt sobre onde colocar seus arquivos de jogo. Você pode ignorá-los por enquanto, já que abordaremos isso na próxima seção.

### Adicionando jogos e arquivos BIOS

Depois de instalar o EmuDeck, o próximo passo é adicionar seus jogos ("ROMs") e arquivos BIOS.

Os arquivos ROM possuem direitos autorais e não serão compartilhados neste site. Você precisará extrair seus próprios arquivos de jogos (esse processo varia por emulador) ou encontrar arquivos ROM por conta própria. Da mesma forma, os arquivos BIOS (do sistema) têm direitos autorais e não serão compartilhados.

Se você estiver usando um PC com Windows ou Mac como seu computador, a maneira mais fácil de adicionar arquivos de jogos ao seu Steam Deck ( independentemente de armazená-los no armazenamento interno ou em um cartão microSD) é usar uma unidade flash ou disco rígido USB externo. Isso ocorre porque o Steam Deck pode ler sistemas de arquivos do Windows (como exFAT e NTFS) quando no Modo Desktop, mas Windows e Macs não podem ler sistemas de arquivos Linux. Portanto, você deve mover seus arquivos de jogos para um disco rígido externo (ou unidade flash) e, em seguida, conectá-lo ao seu Steam Deck (geralmente por meio de um dock ou hub USB-C) para que possa arrastar e soltar seus arquivos nas pastas apropriadas. Você economizará muito tempo e dor de cabeça usando um mouse e teclado USB/Bluetooth durante esta etapa.

Observação: você pode achar a navegação nas janelas do Linux pouco intuitiva, porque em versões mais antigas do SteamOS, clicar uma vez em um objeto na verdade abrirá o arquivo. Para alterar isso, abra o menu Configurações no Modo Desktop do SteamOS (no canto inferior esquerdo), vá para Comportamento da Área de Trabalho> Comportamento Geral> "Clicando em arquivos ou pastas" e altere essa opção para "Selecioná-los".

Aqui é onde você deve colocar seus arquivos:

ROMS: Primary/Emulation/roms/ (método do cartão microSD)
BIOS: Primary/Emulation/bios/ (método do cartão microSD)

Você também pode navegar até esses locais indo para:
/run/media/NOME_DO_CARTAO_SD/Emulation (método do cartão microSD)

/home/deck/Emulation/roms/ (método de armazenamento interno)
/home/deck/Emulation/bios/ (método de armazenamento interno)

Para encontrar as pastas específicas, tipos de arquivo e arquivos BIOS necessários para cada emulador, confira este guia Emulator Cheatsheet útil ou consulte a página do emulador individual no wiki EmuDeck. Observe que com alguns emuladores, os arquivos BIOS precisam ser colocados em um local específico (como a subpasta "dc" para BIOS do Dreamcast).

Aqui está uma lista rápida dos arquivos BIOS que uso pessoalmente em minha configuração do EmuDeck (e sua localização):

- NINTENDO GAME BOY (boot logo):
    - /Emulation/bios/gb_bios.bin
- NINTENDO GAME BOY COLOR (boot logo):
    - /Emulation/bios/gbc_bios.bin
- NINTENDO GAME BOY ADVANCE (boot logo):
    - /Emulation/bios/gba_bios.bin
- NINTENDO DS:
    - /Emulation/bios/bios7.bin
    - /Emulation/bios/bios9.bin
    - /Emulation/bios/firmware.bin
- NINTENDO GAMECUBE (boot logo):
    - /home/deck/.var/app/org.DolphinEmu.dolphin-emu/data/dolphin-emu/GC/USA/IPL.bin
    - veja a seção GameCube abaixo para mais informações
- NINTENDO SWITCH:
    - /Emulation/bios/yuzu/keys/prod.keys
- SONY PLAYSTATION 1:
    - /Emulation/bios/scph5501.bin
- SONY PLAYSTATION 2:
  - /Emulation/bios/SCPH-70012.bin
  - /Emulation/bios/SCPH-70012.MEC
  - /Emulation/bios/SCPH-70012.NVM
- SEGA CD:
  - /Emulation/bios/bios_CD_E.bin
  - /Emulation/bios/bios_CD_J.bin
  - /Emulation/bios/bios_CD_U.bin
- SEGA SATURN:
  - /Emulation/bios/sega_101.bin
  - /Emulation/bios/mpr-17933.bin
- SEGA DREAMCAST:
  - /Emulation/bios/dc/dc_boot.bin
- MICROSOFT XBOX:
  - /Emulation/bios/mcpx_1.0.bin
  - /Emulation/bios/Complex_4627.bin (versão modificada de varejo)
- NEO GEO:
  - /Emulation/roms/neogeo/neogeo.zip

### Steam ROM Manager

Depois de adicionar seus arquivos ROM e BIOS às pastas correspondentes, é hora de adicionar nossos jogos à experiência SteamOS. Vamos usar uma ferramenta chamada Steam ROM Manager (SRM) para integrar seus jogos à interface principal do usuário SteamOS para o jogo que você deseja ver diretamente em seu menu principal e, em seguida, poderemos acessar o restante via EmulationStation.

Observe que o uso do Steam ROM Manager exigirá que você saia do Steam, o que reverterá seus controles no modo "lizard" do Steam Deck, que terá menos funcionalidade. Ainda é possível fazer isso usando o trackpad direito como cursor do mouse, L2 para clicar com o botão direito e R2 para clicar com o botão esquerdo. Para facilitar as coisas, recomendo o uso de um mouse e teclado para essas etapas abaixo.

### 1. CONFIGURE SEUS PARSERS

Abra o EmuDeck e vá em Ferramentas e coisas > SteamRomManager. Ele pedirá para você confirmar que vai sair do aplicativo Steam e abrir o SRM. Depois que o SRM estiver aberto, você será recebido pela tela que vê acima, que pode ser bastante intimidante. Aqui, você só quer percorrer a coluna esquerda e desativar qualquer sistema que não deseja que apareça na interface do SteamOS (ainda aparecerá no EmulationStation, independentemente de você ativar ou desativar aqui). Preste atenção especial aos sistemas que possuem vários parsers, como PSP, Switch e PS3. Para esses sistemas, certifique-se de escolher o emulador que deseja usar ou, no caso do PS3, o tipo de arquivo que está usando.

Em geral, quanto menos sistemas você analisar, melhor - lembre-se de que esses jogos vão aparecer na interface do SteamOS e você provavelmente não quer poluir a IU. O restante dos sistemas aparecerá no EmulationStation. Observe também que, se você deseja que apenas um jogo de um determinado sistema (como um único jogo SNES) apareça na interface do SteamOS, ainda será necessário analisar todo o catálogo SNES - mas é fácil limpar isso na Etapa #4 abaixo.

### 2. GERAR A LISTA DE APLICATIVOS. 

Em seguida, vamos clicar em “Preview” na seção superior esquerda do SRM e selecionar “Generate app list”. Isso irá examinar todos os parsers que você deixou ativados e fará a correspondência dos jogos com o banco de dados do SteamGridDB. Isso levará vários minutos, dependendo do tamanho da sua biblioteca. Você pode acompanhar a contagem regressiva na parte superior da tela enquanto o SRM busca os recursos (artworks) para seus jogos.

Assim que a lista de aplicativos for concluída, você poderá rolar a lista de jogos para verificar se todos correspondem aos ROMs que você adicionou. Se houver uma seção de jogos faltando (como jogos do 3DS, por exemplo), é provável que você tenha colocado os ROMs no lugar errado ou usado um tipo de arquivo que não é compatível com o EmuDeck (consulte esta planilha para verificar). Se houver uma incompatibilidade com o jogo e a arte, pode ser o nome do arquivo do ROM ou o SteamGridDB o correspondeu ao jogo errado (isso ocorre com frequência para jogos que usam o mesmo título para vários jogos em diferentes gerações de consoles, como Bionic Commando). Recomendamos verificar o jogo no SteamGridDB para ver se é necessário mudar o nome.

### 3. Personalize sua arte

Agora vem a parte divertida. Aqui, vamos percorrer nossa lista de jogos e modificar a arte de acordo com nossas preferências. Se você usar o mouse para pairar sobre a arte, poderá ver que há várias imagens que você pode rolar até encontrar a que mais gosta. Certifique-se de fazer isso para vários formatos de arte. Por padrão, você estará olhando para a "Grade", que é a imagem que você verá no SteamOS quando for o jogo mais recente que você jogou. Mas se você for para o topo da tela e escolher Selecionar tipo > Cartazes, você encontrará a arte de capa comum que você verá ao navegar pelo SteamOS. Essas são as imagens em que eu mais foco ao fazer ajustes.

Se você tiver um jogo desajustado ou faltando arte, poderá adicionar a sua própria baixando as imagens desejadas do SteamGridDB e salvando-as no seu Steam Deck. Em seguida, você pode pairar sobre o jogo e clicar no pequeno ícone de foto no canto inferior esquerdo, encontrar a imagem que você baixou e adicioná-la manualmente. Além disso, você pode corrigir uma entrada desajustada por meio da ferramenta de "exceção" do SRM (mais informações aqui). Se for um jogo que você não planeja adicionar à sua interface do SteamOS de qualquer maneira, você pode simplesmente ignorá-lo por enquanto.

### 4. SALVE E LIMPE A LISTA DE APLICATIVOS. 

Uma vez que você esteja satisfeito com as artes dos seus jogos, vamos salvar a configuração clicando em "Salvar lista de aplicativos" próximo ao final da tela. Isso pode levar vários minutos e você pode clicar no "Registro de Eventos" no canto superior esquerdo para acompanhar o seu progresso. Uma vez que o Registro de Eventos diz "Concluído adicionando/removendo entradas", você está pronto para ir - saia do Steam ROM Manager e abra o Steam.

Na seção Biblioteca, do lado esquerdo, você verá que seus jogos foram adicionados ao Steam e organizados por sistema ou emulador. Aqui, queremos passar por cada um e excluir todos os jogos que NÃO queremos ver na interface do SteamOS (a exclusão do jogo aqui não irá deletar o arquivo do jogo, apenas apaga sua presença na sua experiência SteamOS). Note também que a remoção de um jogo não afetará se ele aparecerá no EmulationStation. Para remover um jogo, clique com o botão direito do mouse e selecione Gerenciar > Remover jogo não-Steam da sua biblioteca. Para facilitar, você pode pressionar CTRL no teclado e selecionar vários jogos de uma vez, assim como faria em qualquer outro navegador de arquivos.

Assim que você tiver removido todos os jogos que não quer ver no Modo de Jogo SteamOS, você terminou! Agora você pode sair do Modo Desktop, entrar no Modo de Jogo e aproveitar os frutos do seu trabalho. Claro, sua jornada de emulação está apenas começando, então não deixe de conferir as seções por sistema abaixo para garantir que cada um dos seus sistemas esteja ajustado exatamente como você gosta. 

### EmulationStation Desktop Edition

Adicionar o EmulationStation-DE à sua experiência SteamOS via EmuDeck é super fácil. Depois de executar o EmuDeck pela primeira vez, abra o Steam ROM Manager (veja a seção acima para mais detalhes), e em seguida, sob a seção Parsers no lado esquerdo, certifique-se de que esteja habilitado. Na verdade, se você quiser APENAS adicionar o ES-DE ao SteamOS e nenhum outro jogo, simplesmente desligue tudo, exceto o ES-DE na seção Parsers. [Aqui está uma visualização do processo cortesia do wiki EmuDeck](https://github.com/dragoonDorise/EmuDeck/wiki/EmulationStation-DE#how-to-add-emulationstation-de-to-your-steam-library).

Por padrão, o EmulationStation prefere emuladores específicos. Para trocá-los, acesse o Menu Principal pressionando START > Other Settings > Alternative Emulators e mude-os como desejar. Estes são os emuladores que prefiro usar com alguns dos principais sistemas no ES-DE (os que são alterados em relação ao padrão estão **em negrito**):

dreamcast = Flycast
gb = Gambatte
gba = mGBA
gbc = Gambatte
gc = **Dolphin (standalone)**
genesis = Genesis Plus GX
mame = **MAME 2003-Plus (se estiver usando o conjunto de ROMs Mame 2003 Plus)**
n3ds = **Citra (standalone)**
n64 = Mupen64Plus-Next
nds = **melonDS**
nes = **Nestopia UE**
ps2 = **PCSX2 (standalone)**
psp = PPSSPP
psx = **SwanStation ou DuckStation (standalone)**
saturn = Beetle Saturn
snes = **bsnes**
switch = Yuzu (standalone)
wii = **Dolphin (standalone)**

Em geral, escolho usar os núcleos RetroArch para sistemas como PS1, N64 e PSP. Embora você possa executar emuladores independentes e obter um desempenho melhor, prefiro as características universais como hotkeys e RetroAchievements que você pode obter ao usar os núcleos do RetroArch, em vez de ter que configurar essas características manualmente para os emuladores independentes. Se você quiser ajustar um emulador para um jogo específico, passe o mouse sobre o jogo no menu, pressione SELECT > Edit this Game’s Metadata > Alternative Emulator e faça a mudança lá.

Se você quiser baixar temas adicionais, [confira estas opções](https://gitlab.com/es-de/themes/themes-list#emulationstation-desktop-edition-es-de-recommended-theme-sets) em seu site. Os temas são salvos em Home/.emulationstation/themes (você precisará habilitar arquivos ocultos para encontrar a pasta .emulationstation). Observe que, para alguns temas, será necessário ajustar o arquivo theme.xml para ajustar a proporção da tela ou outras configurações do tema.

É possível lançar jogos de PS3 a partir do ES-DE, mas é um pouco complicado. [Aqui está um guia para o processo](https://github.com/dragoonDorise/EmuDeck/wiki/RPCS3#how-to-configure-rpcs3-for-emulationstation-de).

> Uma dica rápida de navegação: para rolar para baixo nas configurações do EmulationStation, pressione o botão R2. Isso ajudará a navegar rapidamente por coleções maiores de jogos ou sair rapidamente do ES-DE (pressione START, R2, A e depois A).

### Atualizando o EmuDeck e emuladores

A plataforma EmuDeck terá atualizações periódicas para adicionar novos recursos ou opções. Para atualizar, abra o EmuDeck e ele encontrará a atualização, instalará e reiniciará o EmuDeck para você. No GitHub deles, você pode ler [o registro de mudanças das atualizações lançadas](https://github.com/dragoonDorise/EmuDeck/releases).

Depois de instalar o EmuDeck, você terá duas formas de atualizar seus emuladores. Muitos serão atualizados individualmente, como qualquer outro aplicativo, usando a ferramenta de atualização integrada da loja Discover. Basta iniciar no Modo Desktop e você verá um ícone de seta "Para cima" na barra de tarefas inferior direita. Clique nele e instale seus emuladores. Você também pode abrir o EmuDeck e selecionar "Ferramentas e Coisas" > Atualizar emuladores e ferramentas > Atualizar Flatpaks para fazer o mesmo.

Outros emuladores são instalados diretamente do site do desenvolvedor, que também está integrado ao EmuDeck. Para atualizar esses, abra o EmuDeck e selecione "Ferramentas e Coisas" > Atualizar emuladores e ferramentas > Atualizar AppImages.

Observe que, ao executar uma atualização no EmuDeck, ela pode sobrescrever quaisquer configurações personalizadas que você tenha feito. Embora haja uma opção no script de atualização que permite escolher não sobrescrever suas configurações, isso ainda pode acontecer à medida que os aplicativos ou o EmuDeck passam por pequenas melhorias. Para garantir que as configurações do seu jogo favorito persistam nas atualizações, às vezes é melhor fazer uma configuração de configurações por jogo (esse processo varia dependendo do sistema que você está emulando).

> Além disso, uma atualização do EmuDeck ou de um emulador pode às vezes resultar em comportamentos inesperados. Isso é normal ao tentar consolidar os esforços de toda uma comunidade de emulação em uma única ferramenta! Se você enfrentar alguns problemas, recomendo verificar o servidor Discord do EmuDeck, onde outros podem ajudar a resolver a questão.

## CryoUtilities

[CryoUtilities](https://github.com/CryoByte33/steam-deck-utilities) é uma ferramenta que permite algumas otimizações de desempenho ocultas que melhoram a suavidade do jogo para emuladores de ponta, como o Yuzu (Nintendo Switch). Quando usado em conjunto com o plugin PowerTools apresentado abaixo, você pode ter uma jogabilidade melhorada com muito pouco trabalho. Esta ferramenta foi criada pelo YouTuber [CryoByte33](https://www.youtube.com/@cryobyte33) e você pode encontrar sua explicação detalhada da ferramenta e seus benefícios neste [vídeo](https://youtu.be/C9EjXYZUqUs).

Para instalar:

1. No modo desktop do Steam Deck, use um navegador web como o Firefox e vá para o [GitHub do CryoUtilities](https://github.com/CryoByte33/steam-deck-utilities), [baixe o pacote mais recente](https://github.com/CryoByte33/steam-deck-utilities#install) e salve-o em sua área de trabalho clicando com o botão direito e selecionando "Salvar como" ([link direto aqui](https://raw.githubusercontent.com/CryoByte33/steam-deck-utilities/main/InstallCryoUtilities.desktop)).
2. Se ainda não o fez, será necessário criar uma senha sudo. Para fazer isso, abra o aplicativo Konsole e digite a palavra "passwd" e pressione ENTER. Será solicitado que você crie uma senha do sistema (ou solicite a alteração da senha, caso já exista). Crie uma senha e lembre-se dela para depois.
3. Dê um duplo clique no ícone na área de trabalho. Ele executará um script de instalação e criará mais ícones na área de trabalho para você.
4. Abra o aplicativo CryoUtilities, ele solicitará a senha sudo que você acabou de criar.
5. Uma vez no menu principal, você pode simplesmente tocar no botão "Recomendado" e deixar o aplicativo fazer o resto do trabalho. Para uma explicação mais longa de todo o conjunto de configurações, confira este [vídeo do desenvolvedor](https://youtu.be/C9EjXYZUqUs).
6. Desligue seu dispositivo e, em seguida, mantenha pressionado o botão VOLUME UP enquanto liga o dispositivo. Você pode soltar os botões assim que ouvir o som "bloop" do Steam Deck. Isso o levará ao menu BIOS. Usando o trackpad direito, navegue até "Setup Utility" no canto inferior direito e pressione o botão R2 para clicar nele. Vá para Avançado > UMA Frame Buffer Size e altere de 1G para 4G. Em seguida, pressione o botão SELECT e confirme para salvar as alterações e reiniciar o dispositivo.
7. Se você quiser reverter às configurações de fábrica, basta reabrir o CryoUtilities e clicar na opção "Stock". Você também precisará fazer as etapas demonstradas na Etapa #6 do processo de instalação acima, revertendo o tamanho da VRAM de volta para 1GB.

Observe que a configuração recomendada do CryoUtilities criará um arquivo de troca (swap file) de 16 GB no SSD interno. Se você estiver usando o Steam Deck de 64 GB, onde o armazenamento interno é escasso, isso pode ser uma preocupação. Recomendo usar um cartão microSD grande para armazenar seus jogos e melhorar sua capacidade de armazenamento.


## Ferramentas adicionais do EmuDeck

Além de instalar e configurar seus sistemas retrô favoritos, o EmuDeck possui algumas ferramentas integradas que podem melhorar sua experiência, e podem ser acessadas abrindo o EmuDeck e navegando até **Ferramentas & Coisas (Tools & Stuff)**.

- **PowerTools**: PowerTools é um plugin que permitirá ajustar emuladores e jogos específicos para obter o melhor desempenho. Por exemplo, ele funciona muito bem com o Dolphin, permitindo reduzir o número de threads de CPU usadas pelo aplicativo de 8 para 3 (certifique-se de também desativar o SMT), o que fará com que as 3 threads funcionem em uma velocidade de clock mais alta e proporcionem uma jogabilidade suave.
  
  Se estiver usando o EmuDeck, você pode instalar o PowerTools diretamente no aplicativo. Abra o EmuDeck e selecione "Ferramentas & Coisas" > PowerTools e siga as instruções. Para instalar o PowerTools manualmente, você precisará usar uma ferramenta chamada **[Decky Loader](https://deckbrew.xyz/en/user-guide/home)**, que fornece uma loja e um caminho de instalação para plugins como o PowerTools. Para instalar o Decky Loader, [siga as instruções](https://deckbrew.xyz/en/user-guide/install) em seu site. Depois de instalado, você deve encontrar o menu de plugins na parte inferior do seu Quick Access Menu (QAM) pressionando o botão "três pontos" enquanto estiver no modo de jogo. A partir daí, você pode tocar no ícone da loja e encontrar o PowerTools. Observe que todos os plugins requerem acesso sudo, e o EmuDeck ou Decky Loader o guiarão pelo processo quando necessário.

- **GyroDSU**: GyroDSU é um plugin que libera os controles giroscópios do Steam Deck para serem usados em emuladores para 3DS, Wii, Wii U e Switch. Para começar, [confira este guia na página wiki do EmuDeck](https://github.com/dragoonDorise/EmuDeck/wiki/frequently-asked-questions#how-do-i-install-SteamDeckGyroDSU).
  
  Observe que o uso de plugins pode, às vezes, fazer com que o dispositivo funcione de forma irregular e travar. Por exemplo, ao sair do PowerTools, é melhor pressionar o botão B no Steam Deck do que pressionar o botão QAM ("três pontos"), o que às vezes pode causar travamento do Steam Deck.

**EmuDeck Compressor**: Esta ferramenta analisará suas ROMs e as comprimirá para um formato compactado, economizando até 70% do espaço de armazenamento. Jogos de PSX, PS2, Sega CD e Dreamcast serão convertidos para o formato CHD, e jogos do GameCube/Wii serão convertidos para o formato RVZ.

**Verificador de BIOS/BIOS Checker**: Esta ferramenta verificará sua pasta de BIOS e informará se há algum problema. Mesmo que você tenha adicionado BIOS, elas podem não passar nesta verificação devido a uma incompatibilidade de letras maiúsculas/minúsculas, ou pode não ser o arquivo exato que o EmuDeck está procurando.

**Configurações rápidas/Quick Settings**: Se você mudou de ideia sobre molduras, shaders ou proporções de aspecto para sistemas específicos, você pode usar esta ferramenta para alternar rapidamente essas opções.

**SaveBackup**: Esta ferramenta fará backup de seus jogos salvos em um serviço de nuvem como Google Drive ou Dropbox. Esta ferramenta está em beta e, por enquanto, só fará backup de seus jogos salvos. No futuro, esta ferramenta também sincronizará com outros dispositivos.

**Guias de emuladores/Emulator Guides**: Esta seção possui uma lista suspensa dos diferentes emuladores, com algumas notas sobre o emulador. A parte mais útil desta seção é que cada emulador possui um botão "Redefinir configuração". Então, se você estragar suas configurações do GameCube e quiser redefini-las sem executar toda a atualização do EmuDeck, você pode simplesmente redefinir as configurações do GameCube aqui.

**Redefinir ou desinstalar o EmuDeck/Reset or Uninstall EmuDeck**: Se você deseja redefinir o EmuDeck para o padrão ou desinstalar o aplicativo completamente, também pode fazer isso na seção "Ferramentas & Coisas"(Tools & Stuff).

Outra ferramenta útil, mas não faz parte do EmuDeck:

**VibrantDeck**: VibrantDeck é um plugin que permite aumentar os níveis de saturação na tela do seu Steam Deck. Ele é instalado através do DeckyLoader, que será instalado ao mesmo tempo que o PowerTools e o GyroDSU. Pessoalmente, uso uma configuração de VibrantDeck de 120.


## Hotkeys

Um dos desafios de emular jogos no Steam Deck é encontrar uma boa maneira de imitar os controladores originais para os sistemas que você deseja emular. O EmuDeck pré-configurará os controles para você usando as ligações que você vê acima. Se desejar ajustar algum deles, você pode entrar nas configurações do emulador e ajustá-los conforme sua preferência.

Observe que, para alguns sistemas (Wii U, 3DS, etc.), você precisará habilitar um Perfil do Controlador Steam para que as teclas de atalho funcionem. Vamos usar o 3DS como exemplo. Tudo o que você precisa fazer é inicializar um jogo do 3DS enquanto estiver no modo de jogo do Steam Deck, pressionar o botão STEAM > Configurações do Controlador > Layout Atual > Modelo > EmuDeck - Citra 3DS. Observe que isso deve ser feito UMA VEZ para cada jogo, ele lembrará o perfil depois disso.

## RetroArch

Aplicativo: RetroArch (FlatPak)
Tipos de arquivo: variados
BIOS: variadas (colocar na pasta /Emulation/bios/)
Mais informações: [página da wiki do EmuDeck](https://github.com/dragoonDorise/EmuDeck/wiki/Retroarch)

RetroArch é um programa de emulação tudo-em-um que oferece muitas opções padronizadas, como hotkeys universais, implementação de trapaças fácil, shaders, filtros, autosaves e muito mais. Para todos os sistemas de baixo desempenho (basicamente tudo até PSP), eu prefiro usar o RetroArch, mas para os sistemas mais difíceis de emular, muitas vezes é melhor usar os emuladores independentes. Existem também emuladores independentes para os sistemas que funcionam bem no RetroArch (PS1, PSP, N64).

Para uma lista dos sistemas mais comuns suportados pelo RetroArch ao usar o EmuDeck, confira [esta lista da página do GitHub do EmuDeck](https://github.com/dragoonDorise/EmuDeck/wiki/Retroarch#list-of-retroarch-cores-used-by-emudeck). Aqui você encontrará o nome do sistema e as extensões de arquivo aceitas, além de quaisquer arquivos de BIOS necessários, se houver. Uma solução fácil para as BIOS é procurar por um "pacote de BIOS RetroArch" e colocar todos os arquivos de BIOS do pacote na pasta /Emulation/bios/. Esses pacotes provavelmente contêm mais arquivos do que você precisa, mas funcionarão em caso de necessidade.

> **Observe que o RetroArch requer que o Steam Deck esteja sendo executado a 60Hz**. Se estiver experimentando desaceleração, pressione o botão QAM ("três pontos"), vá para a seção de Bateria (Desempenho) e verifique se o Limite de Taxa de Quadros e a Taxa de Atualização estão ambos definidos como 60.

- **Jogos com vários discos (Multi-Disc Games)**: se estiver jogando algo com vários discos, a maneira mais fácil de gerenciá-los é através de um arquivo m3u. [Aqui está um excelente tutorial da página wiki do EmuDeck](https://github.com/dragoonDorise/EmuDeck/wiki/File-Management#method-1-creating-an-m3u-file).

  Arquivos de sistema PSP: Se estiver executando jogos de PSP pelo RetroArch, você precisará baixar os arquivos de sistema do PSP dentro do próprio aplicativo. Abra o RetroArch, vá para o Menu Principal > Atualização Online > Baixar Arquivos do Sistema do Núcleo > PPSSPP.zip - isso fará o download e a instalação dos arquivos para fazer os menus funcionarem corretamente.

  Tamanhos de imagem N64: Devido à natureza do processamento de vídeo do N64, alguns jogos terão barras pretas ao redor da imagem (isso foi algo embutido em certos jogos de N64). Se quiser ampliar a imagem para remover essas bordas, pressione SELECT + Y para abrir o menu rápido do RetroArch, pressione B para voltar ao menu principal, selecione Configurações > Vídeo > Escala > Proporção de Aspecto e defina como Personalizado. Em seguida, ajuste os parâmetros de proporção de aspecto personalizados para que a imagem se estenda por toda a tela (ou como preferir). Quando estiver satisfeito com o resultado, vá para Menu Rápido > Substituições de Jogos Salvas. Agora, toda vez que iniciar esse jogo, ele será ampliado corretamente.

- **Correção do limite de 30fps do N64** (N64 30fps cap fix): Se você está enfrentando um limite de 30fps em jogos N64, é necessário    desativar a opção "rewind". Abra um jogo N64, pressione SELECT + Y para abrir o menu rápido do RetroArch, pressione B para voltar ao menu principal e selecione Configurações > Frame Throttling > Rewind e desative-o, isso deve corrigir o problema. Depois disso, você pode ir em Quick Menu > Overrides > Save Core Overrides para que todos os jogos N64 tenham a opção "rewind" desativada.

- **Conquistas retroativas (RetroAchievements)**: uma das características mais legais do RetroArch é a integração com o RetroAchievements. Esta é uma ferramenta comunitária multiplataforma que ajuda você a rastrear e alcançar conquistas em jogos retrô. Como parte do processo de instalação do EmuDeck, você terá a oportunidade de integrar suas conquistas retroativas à experiência do EmuDeck e RetroArch. Para começar, registre-se para obter uma conta gratuita no site RetroAchievements e, em seguida, certifique-se de inserir seus dados de login ao configurar o EmuDeck. Se você já instalou o EmuDeck, mas deseja adicionar conquistas retroativas posteriormente, não se preocupe - basta voltar para o modo Desktop, entrar no modo Custom e adicionar seus dados de login quando solicitado.

Aqui está uma lista dos [atalhos universais](https://github.com/dragoonDorise/EmuDeck#hotkeys) mais importantes para sistemas RetroArch:

- Sair do jogo: SELECT + START
- Avançar rápido: SELECT + R2
- Salvar estado: SELECT + R1
- Carregar estado: SELECT + L1
- Menu rápido do RetroArch: SELECT + Y (ou L3 + R3)
- Alternar FPS: SELECT + X

Observer que RetroArch pode ser um aplicativo bastante complexo de usar. O EmuDeck configurará a maioria das coisas para você e a experiência deve ser perfeita para que você nunca precise interagir com os menus do RetroArch. Mas se há algo específico que você gostaria de fazer com o aplicativo, eu recomendaria verificar o [meu Guia Inicial do RetroArch](https://retrogamecorps.com/2022/02/28/retroarch-starter-guide/) <sup>Nota: Por agora não pretendo traduzir o texto do Guia do RetroArch do Russ</sup> para mergulhar mais profundamente em suas opções.

