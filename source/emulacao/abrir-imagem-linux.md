---
title: Como abrir imagens no Linux 
description: Como abrir imagens no Linux
authors:
    - Valdecir Carvalho
date: 2023-04-01
tags:
  - steamdeck
  - emulação
  - imagens
  - image-pack
---

1. Instalar o kpartx (sudo apt-get install kpartx)
2. Executar o comando sudo kpartx -av nome-da-imagem.img
3. Executar o comando lsblk para ver onde a imagem foi montada. Geralmente é /dev/mapper/loopXXXX
4. Criar um diretorio sudo mkdir /caminho-da-imagem-montada
5. Montar a imagem com o comando sudo mount -o loop /dev/mapper/loop0xxx caminho-da-imagem-montada