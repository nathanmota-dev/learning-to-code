# Docker

### O que é o Docker?

Basicamente imagine a seguinte situação: você faz uma aplicação fullstack utilizando a versão 18 no node.js mas a máquina de instalação no servidor para colocar sua aplicação no ar suporta apenas a versão 14. Como resolver isso? Para isso que surgiu o Docker.

Com o Docker a gente cria nossa aplicação e coloca ela em um container, que é uma espécie de máquina virtual, e nesse container a gente coloca a versão do node.js que a gente quer. Assim, a gente consegue rodar a aplicação em qualquer lugar, independente da versão do node.js que a máquina suporta. Além da versão no node incluira também todas as especificações de ambiente que a aplicação precisa para rodar, como versão do react, do postgres, etc.

Container é uma forma de empacotar a aplicação e todas as suas dependências em um único pacote. Assim, a aplicação pode ser executada em qualquer ambiente que tenha o Docker instalado. Então basicamente o container é uma "mini" máquina virtual.

### Então o Container do Docker é a mesma coisa que uma máquina virtual? 

Não. A máquina virtual simula um hardware físico, enquanto o container compartilha o kernel do sistema operacional com o sistema hospedeiro. Isso significa que o container é muito mais leve que uma máquina virtual, pois não precisa de um sistema operacional completo.

Basicamente quando a gente instala uma máquina virtual ela compartilha as características do sistema com a máquina física e é extremamente pesado comparado com o Docker porque você esta instalando um Sistema Operacional do zero. Já o Docker é muito mais leve porque ele compartilha o kernel do sistema operacional com o sistema hospedeiro, no container tem apenas as versões do node.js, react, etc que a aplicação precisa para rodar.

Na máquina então que vamos instalar o container eu não preciso me preocupar com a versão do node.js, react, etc que a aplicação precisa para rodar, pois o container já tem tudo isso. Basta instalar o Docker e rodar o container.

### Como funciona a alocação de recursos no Docker? 

A locação de memória é feita dinamicamente, ou seja, o Docker aloca a memória conforme a aplicação precisa. Se a aplicação precisa de mais memória, o Docker aloca mais memória. Se a aplicação precisa de menos memória, o Docker libera memória.

### Eu aloco a minha aplicação inteira então em um container?

Não, com o Docker a gente consegue separar front, back e banco de dados em diferentes containers. Assim, a gente consegue ter uma aplicação mais escalável e mais fácil de manter onde se a gente precisa por exemplo alterar algo do front, a gente desce o container do front e altera apenas ele sem precisar mexer no back e no banco de dados.

