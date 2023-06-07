---
title: CryoUtilities - FAQ em Português
description: CryoUtilities - FAQ em Português
authors:
    - Valdecir Carvalho
date: 2023-04-01
tags:
  - steamdeck
  - hacks
  - utilitarios
  - cryoutilities
---

:fontawesome-solid-person-digging: **_Em construção_**
:simple-steamdeck:

# Perguntas frequentes
## Geral
### Quem é você?
Olá, eu sou o CryoByte33, ou Kyle. Tenho um [canal no YouTube] (https://youtube.com/@cryobyte33) que usa meus 18 anos de experiência em Linux 
e experiência como engenheiro de DevOps em meu trabalho diário para ajudar as pessoas a jogar os jogos que amam em seus decks!

### Isso destruirá meu Deck Steam?
Não ouvi nenhum caso em que isso tenha acontecido, mas se algo acontecer **_PLEASE_** abra um problema aqui.

### Isso funciona no Windows?
Infelizmente, não. O Windows não permite ajustar as coisas tão perto do kernel, com exceção do tamanho do arquivo de página, 
que pode ser configurado por meio de uma GUI dentro do Windows.

### Essas correções afetam a vida útil da bateria ou aumentam o calor gerado pelo Deck?
Não, isso não afeta diretamente a velocidade do ventilador nem a vida útil da bateria, mas poderia eliminar um gargalo e permitir que a 
CPU e GPU trabalhem mais, aumentando, assim, a velocidade da ventoinha ou diminuindo a vida útil da bateria por questões técnicas.

### Há alguma desvantagem nessas correções?
Que eu saiba, não. Na pior das hipóteses, o desempenho se equilibra.

### As atualizações reverterão essas correções/configurações?
Não, mas a reformatação do Deck as reverterá. Testei com várias atualizações e todos os ajustes foram mantidos. No caso de 
No caso de uma atualização reverter algumas configurações, farei o possível para informar a comunidade sobre isso e lhe darei as etapas, se necessário. 
se necessário.

### O que a configuração X faz?
Confira meu [vídeo no YouTube] (https://www.youtube.com/watch?v=od9_a1QQQns) para obter uma explicação de tudo!

## Swap/Swappiness
### Quais jogos se beneficiam do arquivo de troca maior?
Qualquer jogo que use uma combinação de 16 GB para RAM e VRAM provavelmente se beneficiará da correção de swap de alguma forma. O quanto a correção de swap 
dependerá de alguns fatores, incluindo a compactação de ativos, o tamanho dos ativos e a agitação dos dados na memória.

### As alterações de troca funcionam para todos os jogos?
Sim, elas funcionam para qualquer programa no SteamOS carregado de **qualquer** local. Isso significa que até mesmo o Google Chrome instalado em 
em um disco rígido externo se beneficiaria com essas alterações (se as condições de acionamento forem atendidas).

### Há alguma situação em que a correção de troca não seja uma boa opção?
Não, desde que a capacidade de troca também seja ajustada adequadamente.

### A correção de troca prejudica os emuladores?
Não, até mesmo o Yuzu e o Cemu se beneficiaram com essas correções, e espero testar mais emuladores em breve.

### A correção de swap prejudicará meu SSD?
Não, o uso de uma menor capacidade de troca compensará completamente as gravações adicionais de um arquivo de troca maior e, na verdade, manterá 
o SSD mais saudável por mais tempo.

### Quanto desgaste da SSD a configuração padrão causa?
Em geral, um swappiness de 100 tentará colocar os dados no swap antes da RAM. Por esse motivo, uma grande porcentagem de todas as 
operações de memória desgastaria seu SSD. Não tenho uma SSD sobressalente para testar isso, mas imagino que o padrão de desgaste 
padrão reduziria a vida útil da SSD para cerca de 4 anos de jogabilidade média em jogos modernos.

Definir a capacidade de troca como 1 não impedirá que os dados sejam trocados o tempo todo, mas reduzirá a 
frequência para apenas quando o Deck estourar sua memória total.

### Os SSDs de tamanhos diferentes têm uma diferença de desempenho para troca?
Sim, as velocidades de leitura e gravação fazem diferença na velocidade de troca e, portanto, no desempenho. Dito isso, 
A Valve fez um ótimo trabalho ao escolher peças de boa qualidade com velocidades relativamente semelhantes para que todos nós tivéssemos uma experiência consistente. 
experiência consistente.

Em geral, quanto maior o SSD, mais rápido ele é, mas há muito mais do que isso. Planejo testar a diferença
nas velocidades assim que possível.

## Ajuste de memória
### Que diferenças de desempenho posso esperar com esses ajustes?
Em geral, você provavelmente verá uma jogabilidade muito mais suave. As médias de FPS também podem ser aumentadas em jogos em que a CPU é o
o maior gargalo.

### Há algum risco em aplicar essas configurações?
Pelo que sei, não, pois todas elas estão incorporadas ao kernel do Linux e estou apenas alterando valores preexistentes
em vez de adicionar ou alterar a funcionalidade.