---
title: CryoUtilities - Explicação dos Ajustes em Português
description: CryoUtilities - Explicação dos Ajustes em Português
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

# Explicação dos ajustes

## Tamanho do Arquivo de Troca (Swap Size)

### O que é é isso?

De acordo com a [Wiki do Arch Linux](https://wiki.archlinux.org/title/swap):

```
O Linux divide sua RAM física (memória de acesso aleatório) em pedaços de memória chamados páginas. A troca (swap) é o processo em que uma página de memória é copiada para o espaço pré-configurado no disco rígido, chamado espaço de troca, para liberar essa página de memória. O tamanho combinado da memória física e do espaço de troca é a quantidade de memória virtual disponível.
```

### Por que mudei isso?

Ao aumentar o tamanho do swap, podemos fazer algumas coisas:

* Reduzir significativamente a pressão sobre a memória
    * Isso permite que mais dados sejam armazenados em cache e, ao mesmo tempo, permite que a VRAM aumente um pouco mais.
* Ter um estoque de "memória de emergência" caso a memória física fique baixa
    * Isso evita despejos em massa e distribui o gerenciamento de memória por um período mais longo, evitando picos de latência.

### Como é feito

```bash
sudo swapoff -a
sudo dd if=/dev/zero of=/home/swapfile bs=1G count=SIZE_IN_GB status=none
sudo chmod 0600 /home/swapfile
sudo mkswap /home/swapfile  
sudo swapon /home/swapfile
```

## Swappiness

### O que ele faz

Também da [Wiki do Arch Linux](https://wiki.archlinux.org/title/swap#Swappiness):

> O parâmetro swappiness ``sysctl`` representa a preferência do kernel (ou evitar) o espaço de swap. O swappiness pode ter um valor entre 0 e 200 (máximo de 100 se o Linux < 5.8), o valor padrão é 60.
Um valor baixo faz com que o kernel evite a troca, um valor alto faz com que o kernel tente usar o espaço de troca e um valor de 100 significa que o custo de IO é considerado igual. O uso de um valor baixo em memória suficiente é conhecido por melhorar a capacidade de resposta em muitos sistemas.

### Por que mudei isso?

Por padrão, o Deck tem uma capacidade de troca muito alta de 100, o que pode fazer com que os dados sejam trocados quando há muita memória física restante.

Isso pode ser ruim por dois motivos:

* O excesso de gravações pode reduzir a vida útil da unidade
* A swap é muito mais lenta do que a memória e seu uso torna tudo mais lento.

Portanto, ao reduzir o swap para um valor mais baixo, ou meu valor recomendado de 1, podemos:

1. Garantir que a swap seja usada somente no último segundo, quando for realmente necessária
2. Preservar a saúde da unidade

### Como isso é feito

```bash
echo VALUE | sudo tee /proc/sys/vm/swappiness
```

## Hugepages transparentes

### O que ele faz

De um [excelente artigo escrito por Emin aqui](https://xeome.github.io/notes/Transparent-Huge-Pages/):

>Quando a CPU atribui memória aos processos que a requerem, ela normalmente o faz em pedaços de página de 4 KB.
Como a unidade MMU da CPU precisa traduzir ativamente a memória virtual para a memória física nas solicitações de E/S recebidas, passar por todas as páginas de 4KB é naturalmente uma operação cara. Felizmente, ela tem seu próprio cache TLB (translation lookaside buffer), que reduz o tempo potencial necessário para acessar um endereço de memória específico, armazenando em cache a memória usada mais recentemente.


### Por que mudei isso?

Conforme mencionado na explicação, a alocação de páginas é cara. As Hugepages são muito mais fáceis de alocar e procurar, além de reduzirem bastante o gargalo ao lidar com grandes quantidades de memória.

### Como isso é feito

```bash
echo always | sudo tee /sys/kernel/mm/transparent_hugepage/enabled
```

## Memória compartilhada em Hugepages transparentes

### O que ele faz

De acordo com [a documentação do kernel](https://www.kernel.org/doc/html/next/admin-guide/mm/transhuge.html#hugepages-in-tmpfs-shmem):

> A montagem é usada para SysV SHM, memfds, mmaps anônimos compartilhados de ``(/dev/zero ou MAP_ANONYMOUS)``, objetos DRM dos drivers de GPU.

Essencialmente, ele permite que essas coisas acabem em hugepages.

### Por que mudei isso?

Pelas mesmas razões que a habilitação das hugepages, isso pode reduzir a latência no gerenciamento de memória.

### Como isso é feito

```bash
echo advise | sudo tee /sys/kernel/mm/transparent_hugepage/shmem_enabled
```

## Proatividade da compactação

### O que faz

Esse recurso desfragmenta proativamente a memória quando o Linux detecta "tempo de inatividade".

### Por que eu mudei isso?

Até mesmo a [documentação do kernel](https://docs.kernel.org/admin-guide/sysctl/vm.html#compaction-proactiveness) concorda que esse recurso tem um impacto no desempenho de todo o sistema:

> Observe que a compactação tem um impacto não trivial em todo o sistema, pois as páginas pertencentes a diferentes processos são movidas, o que também pode levar a picos de latência em aplicativos desavisados.

Essencialmente, mesmo que o Linux tenha tentado detectar o momento adequado para fazer a compactação, nunca há um bom momento durante os jogos, portanto, é melhor desativá-la.

### Como é feito

```bash
echo 0 | sudo tee /proc/sys/vm/compaction_proactiveness
```

## Desfragmentação da página inicial

### O que ela faz

É a mesma coisa que a compactação proativa, mas para hugepages.

### Por que mudei isso?

Veja os motivos para desativar a compactação proativa.

### Como isso é feito

```bash
echo 0 | sudo tee /sys/kernel/mm/transparent_hugepage/khugepaged/defrag
```

## Page Lock Unfairness

### O que ele faz

O PLU configura quantas vezes um processo pode tentar obter um bloqueio em uma página antes que o comportamento "justo" entre em ação e garanta o acesso desse processo a uma página.

Consulte [the commit](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=5ef64cc8987a9211d3f3667331ba3411a94ddc79) para obter mais detalhes.

### Por que eu mudei isso?

Infelizmente, [ele pode ter efeitos colaterais negativos](https://www.phoronix.com/review/linux-59-fairness), especialmente em jogos. O fato de os processos esperarem repetidamente pode fazer com que os jogos tenham muitos problemas com gargalos e faz com que alguns fiquem em estado dormente quando não deveriam.

### Como isso é feito

```bash
echo 1 | sudo tee /proc/sys/vm/page_lock_unfairness
```

## Fontes

Alguns textos e verificações gerais de sanidade foram fornecidos por [Emin](https://github.com/xeome), que provavelmente será um grande contribuinte no futuro, dado seu interesse em otimizações de baixo nível do Linux.

O restante foi fornecido por [the Arch Wiki](https://wiki.archlinux.org), [Phoronix](https://www.phoronix.com),
[kernel docs](https://docs.kernel.org) e vários fragmentos de conhecimento que reuni ao longo dos anos.

