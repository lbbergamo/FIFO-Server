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
   * [Configurar a conexão com banco de dados](#floppy_disk-configurar-a-conexão-com-banco-de-dados)
   * [Configurar a porta do servidor](#electric_plug-configurar-a-porta-do-servidor)
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

##  :floppy_disk: Configurar a conexão com banco de dados 
1. Entre no arquivo src/config/database-config.ts

2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL
```
const HOST_MYSQL = process.env.HOST_MYSQL || 'ENDERECO_DO_BANCO_DE_DADOS'
const DATABASE_NAME = process.env.DATABASE_NAME || 'NOME_DO_BANCO_DE_DADOS'
const DATABASE_USER = process.env.DATABASE_USER || 'USUARIO_DO_BANCO_DE_DADOS'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'SENHA_DO_BANCO_DE_DADOS'
```

##  :electric_plug: Configurar a porta do servidor
1. Entre no arquivo src/server.ts

2. Configure a porta na variavel PORT
```
const app = express()
export const port = process.env.PORT || 3333
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