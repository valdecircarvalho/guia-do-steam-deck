# Configurações de Performance

Muitos jogos estão sendo lançados no Steam e muitos desejam jogar no Steam Deck . Embora alguns não precisem de nenhuma alteração de configuração, muitos jogos precisam! Seja para rodar da maneira mais otimizada possível e economizar bateria ou para que funcione decentemente com a aparência mais bonita, as alterações de configuração ajudam a fazer com que os jogos funcionem bem em um dispositivo que parece que não deveria.

Para muitas de nossas otimizações, mudamos várias configurações do SteamOS para o jogo. Embora seja fácil apenas alterar as configurações e jogar, é bom entender o que as configurações fazem e como elas podem afetar o dispositivo e o próprio jogo. Neste guia, examinaremos as configurações do SteamOS (acesso rápido), bem como as configurações gerais do jogo que costumamos encontrar na maioria, se não em todos os jogos. Esta é também uma visão geral, não um mergulho muito profundo, por isso recomendamos olhar mais para essas configurações, pois há mais coisas acontecendo sob o capô.

## Configurações do SteamOS (menu de acesso rápido)
As configurações mais importantes que analisamos, quando se trata de economizar bateria e estabilizar a taxa de quadros, são aquelas incorporadas ao SteamOS. Eles podem ser facilmente visualizados no menu de acesso rápido e podem ser salvos para cada jogo individual por meio do perfil na parte superior.

Agora, começando de cima e descendo, explicarei cada configuração e como a utilizamos:


+ **Limite de taxa de quadros** - Este é um limite interno que impedirá que a taxa de quadros de um jogo ultrapasse um valor especificado. Os valores na barra se relacionam diretamente com a taxa de atualização, sendo as taxas: 1/4 da taxa de atualização, 1/2 da taxa de atualização, o mesmo valor da taxa de atualização e nenhum limite. Reduzir a quantidade de quadros que estão sendo transmitidos pode economizar significativamente a bateria e reduzir a temperatura.

+ **Taxa de atualização** - Este é o limite no qual a exibição do seu Steam Deck será atualizada. No Steam Deck, esse valor varia de qualquer número entre 40-60. A alteração desse valor também afetará diretamente o limite da taxa de quadros, o que pode economizar bateria e reduzir a temperatura.

Ter uma taxa de quadros e uma taxa de atualização que correspondam ao valor sempre será melhor do que ir para um valor de 1/2 ou 1/4, pois sincroniza perfeitamente e parece significativamente mais suave. A utilização deles também pode ajudar a estabilizar a taxa de quadros errática. Por exemplo, se você tiver um limite de 60 ou nenhum limite e a taxa de quadros pairar em torno de 42-47 FPS, impor uma taxa de atualização e um limite de 40 estabilizará a taxa de quadros do jogo, economizará bateria e parecerá mais suave no geral.

Allow Tearing - Esta é uma opção relativamente nova que irá desabilitar qualquer limite ou Vsync para jogos através do SteamOS. Isso só é útil ao enviar para um monitor externo ou TV com uma taxa de atualização diferente. Ativar isso desativará qualquer Vsync imposto pelo SteamOS e permitirá menos latência com alguns rasgos visuais na tela.

Sombreamento de meia taxa - Isso aplicará um sombreamento de taxa variável projetado para economizar energia. Esta opção reduz pela metade a qualidade do sombreamento durante o jogo. Eu pessoalmente não habilito muito isso, mas pode ser útil para alguns quando se trata de estabilização da taxa de quadros, se tentar pressionar por uma taxa de quadros mais alta.

Limite de energia térmica (TDP) - Este é o limite de quanta energia é enviada para sua APU para rodar jogos. Este é um componente chave em nossas compilações para quando estamos tentando economizar bateria. Existem também alguns jogos como Hades ou Tactics Ogre: Reborn que usarão mais energia do que o necessário, o que pode ser corrigido pelo limite de TDP. O intervalo de quanto ele limitará vai de 3W a 15W. Eu pessoalmente tento equilibrar em torno de 9W para nossas construções que buscam maior qualidade. Há também uma correlação direta com menos energia usada e menor temperatura interna da CPU e GPU.

Controle manual do relógio da GPU - Esta opção permite definir uma frequência manual da velocidade do relógio da GPU. O Steam Deck faz isso automaticamente, mas há momentos em que definir uma frequência de velocidade do clock, como quando a GPU está sendo subutilizada, realmente ajuda na estabilidade da taxa de quadros. Embora possa economizar bateria, essa configuração é mais usada para estabilizar o uso da CPU/GPU e manter taxas de quadros intermitentes sob controle.

Filtro de dimensionamento - O Filtro de dimensionamento é uma opção que permite aumentar a escala de qualquer resolução com proporção de aspecto de 16:10 e abaixo da resolução nativa de 1280 x 800. Isso inclui as resoluções 1152x720, 1024x648 e 960x600, respectivamente. Existem 4 opções para o filtro de escala também:

Linear: Sem upscaling.

Nearest: Também conhecido como Nearest Neighbor, este método de upscaling é o mais simples dos 4 métodos e substitui os pixels pelo que estiver mais próximo para a saída. Isso significa que vários pixels da mesma cor estarão presentes um ao lado do outro para tentar criar uma imagem de resolução mais alta. Isso pode preservar alguns detalhes nítidos, mas introduz alguma irregularidade em imagens suaves.

Inteiro: Este método de upscaling transforma cada pixel de um jogo em um grupo quadrado ou retangular de pixels da mesma cor. É muito útil em jogos estilo pixel, mas jogos 3D tendem a ter nitidez reduzida.

FSR: método de upscaling de código aberto da AMD. Com base no algoritmo Lanczos, esta iteração do FSR (1.0) usa uma imagem anti-aliasted de resolução mais baixa e usa upscaling espacial para fazer o jogo parecer que está sendo executado em uma resolução mais alta. Esta é a forma preferida de upscaling de jogos 3D, que no Steam Deck, são os que mais precisam de configuração para rodar melhor.

Por meio de uma combinação dessas configurações, geralmente podemos melhorar a forma como os jogos são executados e otimizados para obter o melhor desempenho e economizar bateria. Esses são recursos que vêm embutidos no SteamOS e não são tão facilmente acessíveis/disponíveis em outros sistemas. Mas isso é apenas metade do método de otimização, já que alguns jogos maiores também precisam de mudanças no jogo, que também abordaremos.

Configurações do jogo
Embora cada jogo seja um pouco diferente e não mostre todas essas configurações, ou mostre outras específicas para o jogo, abordaremos as mais importantes e comuns que geralmente aparecem em todos os jogos.

Resolução - Esta é a opção que renderizará seu jogo no tamanho de tela de sua escolha. Escolher uma resolução mais alta forçará o jogo a renderizar mais detalhes para preencher a tela adequadamente, mas ao custo de energia. Reduzi-lo resultará em uma imagem mais desfocada, pois renderiza para telas menores e, em seguida, amplia a imagem, mas pode economizar no consumo de bateria e no uso de energia. Os métodos de upscaling podem ser úteis aqui para tentar melhorar a aparência da imagem sem utilizar mais energia.

Modo Upscaling - Alguns jogos vêm com seus próprios métodos internos de upscaling que podem acessar mais detalhes dentro do jogo para resultar em imagens de maior qualidade. Esses métodos geralmente usam upscaling temporal, que depende de dados de quadros anteriores, para produzir uma imagem muito melhor, economizando a mesma quantidade de energia que o FSR 1.0 do SteamOS usa. Os dois mais comuns são FSR 2.0 e XeSS da Intel. O upscaling temporal precisa de dados anteriores para poder funcionar e isso deve ser implementado pelos desenvolvedores do jogo, portanto, não pode ser amplamente usado no SteamOS.

Qualidade da textura - Essa configuração altera o nível de detalhamento da resolução das texturas no jogo. Diminuir essa configuração pode ajudar com a memória de vídeo limitada que temos no Deck, mas não causa tanto impacto por si só. Geralmente, deixar isso em uma configuração mais alta é aceitável.

Filtragem de textura - Isso pode ajudar texturas distantes a parecerem mais suaves, mas não tem um grande impacto na qualidade da imagem e não ajuda muito no desempenho.

Qualidade das Sombras - Esta opção altera o nível de detalhamento das sombras que aparecem no jogo. Isso pode variar de aumentar a resolução da sombra, a quantidade de sombras, sombras suaves versus duras ou aumentar a distância na qual as sombras são visíveis. Isso pode ter um efeito muito grande no desempenho dos jogos e é uma das primeiras configurações que costumo observar.

Oclusão de ambiente - Embora existam diferentes tipos, a Oclusão de ambiente ajuda a simular como as fontes de luz afetam diferentes partes de um objeto para fornecer sombras mais realistas. Isso resulta em sombras mais suaves sendo renderizadas, pois diferentes partes dos objetos podem ter diferentes tipos de sombras, dependendo da forma e da largura do objeto. Como a qualidade das sombras, isso pode afetar fortemente o desempenho de um jogo.

Reflections/Ray Tracing - Como a Oclusão de ambiente, Reflections trata especificamente de como os objetos refletem em superfícies por meio de fontes de luz e direção. Existem muitas maneiras de fazer isso, mas a mais nova e popular é o traçado de raios, que é hiper preciso e detalhado. Desligá-los ou ligá-los libera uma grande quantidade de poder de processamento e geralmente é uma das primeiras configurações que vejo além de Shadows.

Qualidade da geometria - Às vezes mencionada como LOD (nível de detalhe), a qualidade da geometria se concentra em quão detalhados são os objetos 3D no jogo. Geralmente, isso significa que os polígonos usados ​​para compor um objeto 3D são reduzidos. Isso pode resultar no uso de menos poder de processamento e aumentar o desempenho, mas os objetos parecerão menos detalhados em sua estrutura.

Anti-Aliasing - Outra configuração que vejo bem no início. O anti-aliasing lida com a suavização das bordas de objetos 3D para que não fiquem nítidas. Dependendo do jogo, isso pode liberar uma boa quantidade de energia para ajudar o jogo a funcionar de maneira mais otimizada. Desativar isso fará com que o jogo pareça muito mais nítido.

Resolução Dinâmica - Esta opção geralmente define uma taxa de quadros desejada e altera automaticamente a resolução que o jogo está produzindo conforme tenta manter essa taxa de quadros desejada.

Escala de renderização - Esta opção permite reduzir a resolução em uma porcentagem específica para economizar no desempenho sem alterar a resolução geral. Por exemplo, se você tiver uma resolução de 1280 x 800, terá automaticamente 100% de saída para essa resolução. Mas se você definir para 90%, o jogo produzirá 90% da escala

Pós-processamento - Esta é uma coleção de filtros e efeitos específicos para aprimorar os elementos visuais do jogo. Isso pode ser algo pequeno como um filtro, ou algo muito maior como neblina volumétrica, mas é tudo para realçar a imagem que você vê. Dependendo do que está incluído no pós-processamento por jogo, desativá-lo pode ou não afetar o desempenho do jogo.

E essas são uma coleção das configurações mais importantes que analisamos ao otimizar os jogos. Alguns jogos mostram configurações diferentes, então você pode não ver todas elas em alguns jogos (ou pode ver mais), mas essas são as mais comuns. Podemos atualizar esta enciclopédia mais tarde, à medida que o SteamOS se desenvolve e novas configurações são adicionadas, ou encontramos mais jogos usando uma opção de vídeo mais recente que foi adicionada. Espero que isso ajude a entender a ideia básica de cada um deles, portanto, alterar as configurações por conta própria será mais compreensível!





Tradução Livre para o Português. Fonte: https://steamdeckhq.com/tips-and-guides/the-sdhq-performance-settings-encyclopedia/