<h1 align="center">FIFO - SERVER</h1>
<p align="center">Server para o desafio do programa de formação da FCamara (Outubro-2020) </p>

[![Latest Stable Version](https://img.shields.io/npm/v/yarn.svg)](https://www.npmjs.com/package/yarn)
![GitHub Repo stars](https://img.shields.io/github/stars/lbbergamo/FIFO-Server?style=social)
![GitHub forks](https://img.shields.io/github/forks/lbbergamo/FIFO-Server?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/lbbergamo/FIFO-Server?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/lbbergamo/FIFO-Server)
![GitHub top language](https://img.shields.io/github/languages/top/lbbergamo/FIFO-Server)
  
<!--ts-->
   * [Requisitos](#gear-requisito-para-executar)
   * [Download do Projeto](#paperclip-download-do-projeto)
   * [Configurando o Projeto](#floppy_disk-configurando-o-projeto)
   * [Iniciando o projeto](#computer-iniciando-o-projeto)
   * [Scripts](#memo-scripts)
   * [Tecnologias](#crystal_ball-tecnologias)
<!--te-->

## :paperclip: Download do projeto
```bash
# Clone este repositório
$ git clone https://github.com/lbbergamo/FIFO-Server
```


## :gear: Requisito para executar

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Mysql](https://www.mysql.com/products/workbench/) ou [MariaDB](https://mariadb.org/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Banco de Dados
> MariaDB ou Mysql superior a v10

# NodeJs 
> Superior ao 12
```


##  :floppy_disk: Configurando o projeto

1. Crie um arquivo na raiz do projeto com o nome ".env"

2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL e a Porta
```
HOST_MYSQL=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
PORT=
```

## :computer: Iniciando o projeto
```bash
# Navegue até ele e instale todas as dependências
$ yarn

# Cria todas as tabelas do banco de dados
$ yarn knex:migrate

# Inicie o modo de desenvolvimento
$ yarn dev
```

## :memo: Scripts
```bash
# Inicia a aplicação em modo de desenvolvimento
$ yarn dev

# Compila o Typescript para Javascript, deixando a aplicação pronta para produção
$ yarn build

# Inicie a aplicação em modo de produção
$ yarn start

# Roda os arquivos de testes
$ yarn test

# Cria todas as tabelas do banco de dados
$ yarn knex:migrate

# Remove todas as tabelas do banco de dados
$ yarn knex:rollback 
```

## :crystal_ball: Tecnologias

- [typescript](https://www.typescriptlang.org/docs/)

- [git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)

- [jest](https://jestjs.io/)

- [eslint](https://eslint.org/)

- [babel](https://babeljs.io/)

- [Node.js](https://nodejs.org/en/)

- [knex](http://knexjs.org/)