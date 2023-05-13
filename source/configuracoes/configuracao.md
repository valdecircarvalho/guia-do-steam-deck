---
title: Configurações do Steam Deck #aparece no titulo do navegador
description: Configurações do Steam Deck # descrição para meta tag
authors:
    - Valdecir Carvalho
date: 2023-04-01
tags:
  - steamdeck
  - configurações
search:
  boost: 2
  exclude: false
---

# Primeiros Passos com o seu Steam Deck

:fontawesome-solid-person-digging: **_Em construção_**
:simple-steamdeck:

## Configurações Iniciais

### Ligando o console. Primeiro boot!

Após tirar o seu novo Steam Deck da caixa - aprecie cada momento do unbox - dê aquela cheirada para sentir o cheiro de brinquedo novo (eu sempre faço isso).

![Modelos de SSD M.2](/img/steamdeck-fechado.jpg)

Caso esteja usando o seu Steam Deck pela primeira vez, você precisará deixá-lo ligado na tomada por alguns minutos usando a fonte de alimentação fornecida para despertá-lo do modo de economia de energia configurado de fábrica. 

Caso já tenha usado o seu Steam Deck antes, mas ele não esteja ligando, coloque-o para carregar e verifique o LED ao lado da porta de carregamento.

Caso o LED esteja ligado, então o dispositivo está recebendo carga. O LED permanecerá aceso mesmo depois que a bateria estiver totalmente carregada.

Caso o LED pisque depois de apertar o botão Ligar/Desligar, a bateria está descarregada. Conecte o dispositivo à tomada usando a fonte fornecida, confirme que o LED está aceso e deixe-o carregando por 15 minutos ou mais antes de tentar ligá-lo novamente.

Caso o Steam Deck pareça estar carregando normalmente, mas o botão Ligar/Desligar não responde, tente segurá-lo junto com o botão Aumentar Volume (+) até a tela ligar, e então selecione Continuar (ou Continue) para inicializar a partir das opções do BIOS.

Se você deixar o seu dispositivo carregando por muito tempo, é possível que indique ter menos de 100% de bateria. Isto é normal. Quando o dispositivo fica muito tempo carregando, é proposital que a bateria descarregue lentamente para otimizar o seu funcionamento a longo prazo.

O Steam Deck usa USB Power Delivery e não é compatível com outras especificações de carga rápida.

### Updates

Antes de começar a brincadeira, segure a ansiedade e instale todas as atualizações epara garantir que seu Steam Deck esteja atualizado. A Valve lança atualizações constantes, tanto para corrigir problemas como para melhorar a usabilidade do Steam Deck.

Para atualizar, ligue, pressione o botão ```Steam``` e role para baixo até ```Configurações```. Em Sistema, você pode escolher entre três tipos de atualização:

- **Estável (Stable)**: experiência recomendada para a maioria dos usuários. Esta opção instalará o mais recente Steam Client estável e SteamOS.
- **Beta (Beta)**: Testando novos recursos do Steam. Atualiza com frequência. Esta opção instalará o Steam Client Beta e o mais recente SteamOS estável.
- **Preview (Preview)**: Testando novos recursos do Steam e no nível do sistema. Atualiza com frequência. Você pode encontrar problemas. Esta opção instalará o Steam Client Beta e o SteamOS Beta.

Talvez seja melhor não mudar se tiver medo de estragar as coisas. **Stable** é a opção mais segura. 

![Steam Deck Updates](/img/updates.jpeg)

Certifique-se de tocar em ```Check for updates``` se há atualizações e deixe tudo instalar.

### Procure por possíveis problemas

Depois de instalar todas as atualizações, é hora de verificar se há algum problema no Steam Deck.

Aqui estão alguns dos problemas mais frequentes do Steam Deck mencionados pela comunidade:

- Botões de ombro morto
- Pixels mortos
- Bolhas sob a tela
- Botões pegajosos/sticky ABXY — o botão B parece especialmente propenso a isso
- Ventilador irritantemente alto

Se você se deparar com algum desses e tiver certeza de que não é um problema de software, talvez seja necessário [entrar em contato com o suporte da Valve](https://help.steampowered.com/en/wizard/HelpWithSteamDeck)

O próximo passo a fazer é testar suas entradas:

- Clique no botão ```Steam```.
- Vá para ```Settings``` e depois para ```Controller```.
- Clique em ```Test Device Inputs``` e siga as instruções.

A Valve criou um game especialmente para isso e de quebra, ajuda você a se acostumar com os controles do Steam Deck e é um game totalmente grátis e bem legalzinho para se acostumar.

![](/img/Aperture-Desk-Job-Steam-Deck-Game.png)

[Aperture Deck Job](https://store.steampowered.com/app/1902490/Aperture_Desk_Job/)


!!! tip "Dica"
    Se o seu Steam Deck parar de responder, você pode forçar uma reinicialização pressionando o ```botão liga / desliga``` por três segundos. Se o Steam Deck ainda não responder, pode ser um problema no nível do sistema operacional - tente segurar o ```botão liga / desliga``` por dez segundos.
.

### Faça a calibração da bateria

Às vezes, a bateria não parece calibrada corretamente de fábrica e seu Steam Deck pode relatar uma porcentagem de integridade da bateria significativamente menor do que a realmente correta. Eu tive esse problema, pois meu Steam Deck exibia uma capacidade máxima de bateria de 82% na primeira vez que o inicializei, em vez dos 100 esperados. Se você tiver problemas semelhantes, continue lendo.

Antes de entrar em pânico, uma maneira de resolver esse problema, se for realmente um problema simples de calibração, é calibrá-lo adequadamente. Aqui está o que você precisa fazer:

1. Jogue um jogo até que seu Steam Deck desligue. Se o LED de energia piscar três vezes, você precisará conectar o carregador para a próxima etapa. Caso contrário, o Steam Deck não liga.
2. Com o Steam Deck desligado, segure o botão de aumentar o volume enquanto pressiona o botão liga/desliga. Isso inicializará no menu do BIOS. Você deseja permanecer neste menu até que o Steam Deck seja desligado. Em seguida, repita uma ou duas vezes até que o Deck desligue antes que você consiga acessar o menu do BIOS. Você pode conectar brevemente o carregador para chegar até aqui. (Resumidamente, você não deseja carregar o Steam Deck. Apenas o suficiente para ligar o Deck e, em seguida, desconecte-o imediatamente.)
3. Em seguida, queremos carregar o Steam Deck durante a noite enquanto estiver desligado. Se o Steam Deck ligar automaticamente, desligue imediatamente o carregador e volte a ligá-lo quando o Steam Deck se desligar novamente.
4. Após cerca de 8 horas no carregador, ele deve estar totalmente carregado. Ligue-o e verifique a integridade da bateria na barra de tarefas. Para isso, você precisa alternar para o modo Desktop ou instalar o plug-in de saúde da bateria para Decky seguindo este guia.
5. Para inicializar no modo Desktop, clique no botão Steam, vá para Power e depois em Switch to Desktop. Aguarde o Deck reiniciar.
6. De volta ao modo Desktop, você encontrará a integridade da bateria na barra de tarefas. Deve estar acima de 90%, mas não necessariamente em 100% (embora possa estar em 100%). Há sempre uma pequena margem de erro.
   
!!! warning "Observação"
    Observação: as etapas de bateria acima são necessárias apenas se você estiver enfrentando algum tipo de problema de integridade da bateria.

### Navegue pelos menus

Navegue pelos menus do Steam Deck. Não tenha medo, se algo der errado, você sempre pode reiniciar o seu Steam Deck como de fábrica. 

Se você pressionar o botão de três pontos, também conhecido como menu de acesso rápido, verá um painel deslizar da direita. Está dividido em vários grupos, todos identificáveis por um ícone.

- O ícone de sino é a guia Notificações. Aqui você vê a atividade de seus amigos e outras notificações.
- A próxima guia é a guia de amigos e é bastante autoexplicativa.
- O ícone de engrenagem representa as configurações rápidas. Aqui você pode alterar os níveis de brilho e áudio, ativar diferentes opções de conectividade (Wi-Fi, Bluetooth, etc.) e ativar o Rumble e o Steam Haptics.
- O ícone da bateria é a guia Desempenho
- O ponto de interrogação é a seção de ajuda do menu.

### Instale um jogo para se acostumar com os controles

Como dito anteriormente, a Valve criou um game especialmente para isso e de quebra, ajuda você a se acostumar com os controles do Steam Deck e é um game totalmente grátis e bem legalzinho para se acostumar.

!!! tip "Conta Steam"
      Para instalar um jogo da Steam, você irá precisar ter uma conta Steam, caso ainda não tenha uma. Veja como criar uma conta [aqui](/configuracoes/conta-steam)

![](/img/Aperture-Desk-Job-Steam-Deck-Game.png)

[Aperture Deck Job](https://store.steampowered.com/app/1902490/Aperture_Desk_Job/)

### Instale seus jogos preferidos

### Explore o Modo Desktop do Steam Deck


### Links Úteis

!!! tip "Links Úteis"

    + [Steam Deck Starter Guide: Here’s what to do first](https://overkill.wtf/steam-deck-starter-guide-start-here/) :flag_us:
    + [Steam Deck — Primeiros passos e solução de problemas básicos](https://help.steampowered.com/pt-br/faqs/view/69E3-14AF-9764-4C28) :flag_br:
    + [Steam Deck tips and tricks: Things you can do to have more fun](https://www.pocket-lint.com/steam-deck-tips-and-tricks/) :flag_us:
    + [Steam Deck Controller Guide - A Visual Introduction](https://steamcommunity.com/sharedfiles/filedetails/?id=2804823261) :flag_us:
    + [A Guide To Remapping Gaming Controls On Steam Deck](https://sortatechy.com/remapping-gaming-controls-steam-deck/) :flag_us:
    + [How to customize controls on the Steam Deck](https://www.digitaltrends.com/computing/how-to-customize-controls-on-the-steam-deck/) :flag_us:
    + [The Steam Deck’s button mapper is the best feature you’re not using](https://www.pcworld.com/article/1364387/the-steam-decks-button-mapper-is-the-best-feature-youre-not-using.html) :flag_us:
    + [How to customize your controller layout on the Steam Deck](https://www.tomsguide.com/how-to/how-to-customize-your-controller-layout-on-the-steam-deck) :flag_us:
    + [How to Use External Controllers on Steam Deck](https://www.lifewire.com/use-external-controllers-on-steam-deck-6544100) :flag_us:
    + [How to Connect a Mouse and Keyboard to Steam Deck](https://www.lifewire.com/connect-mouse-and-keyboard-to-steam-deck-6544106) :flag_us:

----

!!! info "Fontes"

    - [Steam Deck FAQ](https://www.steamdeck.com/en/faq)
    - [/r/valvesteamdeck](https://www.reddit.com/r/ValveSteamDeck/wiki/faq/)
    - [Steam Deck Desktop: FAQ](https://help.steampowered.com/en/faqs/view/671A-4453-E8D2-323C)
