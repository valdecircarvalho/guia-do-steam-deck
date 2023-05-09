# Steam Deck - Guia básico de uso e solução de problemas

## Primeiros passos

Antes de tentar qualquer solução de problemas detalhada ou entrar em contato com o Suporte Steam, certifique-se de ter tentado o seguinte:

+ Instale todas as atualizações de sistema disponíveis (Steam > Configurações > Sistema > Atualizações de software).
+ Reinicie seu Steam Deck (na seção Atualizações de software ou em Steam > Power > Reiniciar).
+ Certifique-se de que todos os aplicativos de terceiros instalados por meio do modo de área de trabalho sejam encerrados ou desativados e teste novamente o problema.
+ Se o seu Steam Deck estiver ligado, mas não responder, você pode forçar uma reinicialização mantendo o botão liga/desliga pressionado por três segundos. Se ele continuar sem resposta, pode haver um problema no nível do sistema operacional. Nesse caso, tente segurar o botão liga/desliga por 10 segundos.


## Potência e carregamento

Se for a primeira vez que você usa seu Steam Deck, você precisará conectá-lo por um curto período de tempo usando a fonte de alimentação fornecida para despertá-lo do modo de remessa de economia de bateria. Se você já usou seu Steam Deck antes, mas não está ligando, conecte-o e verifique o LED ao lado da porta de carregamento.
+ Se o LED estiver aceso, a unidade está recebendo carga. O LED permanecerá aceso quando a unidade atingir a carga total.
+ Se o LED piscar após pressionar o botão liga/desliga, a bateria está descarregada. Conecte-o usando a PSU fornecida, confirme se o LED está aceso e deixe-o carregar por pelo menos 15 minutos antes de ligá-lo.
+ Se o seu Steam Deck parece estar carregando normalmente, mas o botão liga/desliga não responde, você pode tentar segurar o botão Volume + enquanto o liga e, em seguida, selecionarContinuarpara inicializar a partir das opções do BIOS.

Se o seu dispositivo foi deixado no carregador por longos períodos de tempo, ele pode relatar menos de 100% de carga. Isto é normal. Permitimos que a bateria descarregue lentamente após longos períodos de carga para otimizar a saúde da bateria a longo prazo.

O Steam Deck usa USB Power Delivery e não suporta as especificações de carregamento rápido ou carregamento rápido.


## Entrada

Se estiver tendo problemas com as entradas, você pode acessar Steam > Configurações > Controlador > Testar entradas do controlador para executar um conjunto de testes para ajudar a identificar quaisquer problemas. Conclua os testes e saia pressionando longamente o botão B.

### Atalhos
Existem muitos atalhos de botão convenientes que você pode usar. Por exemplo, você pode abrir o teclado na tela pressionando Steam + X.

Mantenha pressionado o botão Steam para ver uma lista de todos os atalhos disponíveis.

### Configurações do controlador
Para alterar seus controles para um jogo individual, acesse os detalhes do jogo destacando um jogo em sua Biblioteca e pressionando o botão A. Abra as configurações de controle selecionando o ícone do gamepad. Aqui, você pode visualizar e editar seu layout atual. Você também pode navegar e aplicar as configurações que foram compartilhadas pela comunidade selecionando o modelo atual e navegando até Community Layouts com R1.


## Programas
Confira nosso guia de software para obter informações e solução de problemas.


## Mostrar
Você pode aprender mais sobre as especificações de exibição do Steam Deck aqui . Observe que a tela é limitada a uma taxa de atualização de 60 Hz. O limite pode ser reduzido para 30 Hz nas configurações do dispositivo, mas as configurações de aplicativos individuais com taxas de atualização acima de 60 Hz não melhorarão o desempenho e podem esgotar a carga da bateria mais rapidamente.


## Audio
As configurações de áudio podem ser ajustadas em Steam > Configurações > Áudio.

### Caixas de som

Se não houver som saindo dos alto-falantes integrados, verifique se você não possui outro dispositivo habilitado para áudio conectado via Bluetooth, USB-C ou conector de 3,5 mm e, em seguida, mude para uma saída diferente e volte para os alto-falantes padrão. Você também deve verificar se os sons da interface do usuário estão ativados (Steam > Configurações > Áudio > Ativar sons da interface do usuário).

Se ainda não houver áudio, reinicie o sistema (Steam > Power > Restart).

### Fones de ouvido
A maioria dos dispositivos de áudio de 3,5 mm e Bluetooth deve funcionar naturalmente com o Steam Deck, mas pode haver dispositivos específicos que tenham problemas para interagir com o SteamOS ou não funcionem. Estamos trabalhando continuamente para acomodar a maior variedade possível de dispositivos de terceiros.

### Microfone
O microfone embutido não estará disponível ao usar o plugue de áudio de 3,5 mm. Certifique-se de usar fones de ouvido com microfone embutido se quiser usar voz enquanto ouve áudio de 3,5 mm.
O microfone embutido ainda estará disponível durante o uso de um dispositivo de áudio Bluetooth.


## Bluetooth
Para emparelhar um dispositivo Bluetooth, verifique se ele está no modo de emparelhamento. Verifique as informações do seu dispositivo se não tiver certeza de como fazer isso. Em seguida, vá para Steam > Configurações > Bluetooth, encontre seu dispositivo na lista e use a tela de toque para selecioná-lo ou pressione o botão Menu para ver as opções de emparelhamento. Se estiver com problemas para se conectar a um dispositivo emparelhado anteriormente, tente esquecer e emparelhar novamente o dispositivo.

### Dispositivo Bluetooth não listado
Se você não conseguir encontrar seu dispositivo Bluetooth, vá para Configurações > Bluetooth e alterne a opção "Mostrar todos os dispositivos" para LIGADO.

### Problemas de latência
Se você estiver enfrentando latência ou outros problemas de desempenho com seu dispositivo Bluetooth, comece desconectando e reconectando o dispositivo para atualizar sua conexão. Se o problema persistir, você pode esquecer e emparelhar novamente o dispositivo. Se ainda estiver com problemas, você pode querer mudar para um codec A2DP diferente, como SBC ou AptXLL. Você pode fazer isso nas configurações de som no modo de área de trabalho (veja abaixo).

---
## Wi-fi
Se esta for a primeira vez que usa o Steam Deck, você será solicitado a se conectar a uma rede Wi-Fi durante o processo de configuração. Você pode usar o teclado na tela para inserir sua senha. Você precisará de acesso Wi-Fi durante o processo de configuração para poder fazer login na sua conta Steam.

Se você já configurou seu Steam Deck e gostaria de se conectar a uma rede diferente, vá para Steam > Configurações > Internet, selecione sua rede e digite a senha usando o teclado na tela.

---
## Armazenamento de dados
Seu Steam Deck usa armazenamento integrado por padrão. Você pode gerenciar o armazenamento do sistema, bem como qualquer outro armazenamento conectado, em Steam > Configurações > Armazenamento.
### Cartões MicroSD
Os cartões MicroSD precisam ser formatados antes de serem usados ​​com o Steam Deck. Para formatar um cartão microSD, insira-o no slot na superfície inferior e vá para Steam > Configurações > Sistema > Formatar cartão SD. Pode levar alguns minutos para concluir o processo.

Qualquer cartão microSD UHS-I (classe 3 ou superior) é compatível. Steam Deck não suporta UHS-II.

---
## Modo de Área de Trabalho
Para acessar o modo de área de trabalho, vá para Steam > Power > Alternar para área de trabalho. Você pode navegar na área de trabalho usando o trackpad direito para mover o mouse, R2 para clicar com o botão esquerdo e L2 para clicar com o botão direito.

No modo Desktop, o Steam Deck funciona como um PC normal - você pode navegar na Internet, baixar e instalar aplicativos e executar programas fora do Steam. Observe que o modo Desktop ainda faz parte do SteamOS, portanto, você precisará garantir que qualquer coisa que esteja tentando usar seja compatível com a distribuição do Arch Linux.

Para obter mais informações, confira nossas Perguntas frequentes do Steam Deck Desktop .


## Cuidado e manutenção
### Armazenar
Recomendamos usar o estojo fornecido para armazenamento de curto e longo prazo para evitar a entrada de poeira, danos causados ​​por quedas e outros problemas.
### Limpeza
+ Use um pano de microfibra seco para limpar a tela.
+ Use uma pequena quantidade de álcool isopropílico com um pano seco para limpar as superfícies plásticas externas.
+ Não use álcool isopropílico ou outros líquidos ao limpar ao redor do dissipador de calor e aberturas de ventilação, poços de entrada (ao redor de botões, trackpads e joysticks), alto-falantes ou portas. Use apenas um pano seco.
+ Evite usar dispositivos de ar comprimido para limpar o dissipador de calor e as aberturas do ventilador, pois isso pode interferir nos componentes internos.

### Ambiental
A faixa de temperatura de armazenamento segura do Steam Deck está entre -20° - +60° C (-4° - +140° F).

As faixas operacionais seguras do Steam Deck são:
+ Temperatura ambiente - 0° - +35° C (+32° - +95° F)
+ Umidade - até 85% de umidade relativa sem condensação
+ Altitude - até 3500m

### Armazenamento de longo prazo
Se você não for usar seu Steam Deck por um tempo e quiser colocá-lo de volta no modo de armazenamento para aumentar a saúde da bateria a longo prazo, você pode usar as seguintes etapas para fazer isso:
+ Desligue o Steam Deck normalmente (escolha Desligar no menu Power)
+ Mantenha pressionado o botão Volume + e pressione o botão liga / desliga. O Steam Deck deve inicializar no menu do BIOS.
+ Usando o D-Pad e A para selecionar, navegue até "Setup Utility"
+ Navegue até o menu de energia
+ Escolha o modo de armazenamento da bateria e confirme.

Você deve ver o Steam Deck desligado e o LED de energia piscará três vezes para confirmar que o modo de armazenamento da bateria foi ativado.

Para tirar seu Steam Deck do modo de armazenamento, conecte a fonte de alimentação fornecida e ligue-a normalmente.


Fonte: [Steam Deck - Basic Use & Troubleshooting Guide](https://help.steampowered.com/en/faqs/view/69E3-14AF-9764-4C28)

