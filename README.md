<h1 align="center">FIFO - SERVER</h1>
<p align="center">Server para o desafio do programa de formação da FCamara (Outubro-2020) </p>

[![Latest Stable Version](https://img.shields.io/npm/v/yarn.svg)](https://www.npmjs.com/package/yarn)
![GitHub Repo stars](https://img.shields.io/github/stars/lbbergamo/FIFO-Server?style=social)
![GitHub forks](https://img.shields.io/github/forks/lbbergamo/FIFO-Server?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/lbbergamo/FIFO-Server?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/lbbergamo/FIFO-Server)
![GitHub top language](https://img.shields.io/github/languages/top/lbbergamo/FIFO-Server)
  
<!--ts-->
   * [Requisito](#gear-requisito-para-executar)
   * [Como usar](#memo-como-usar)
      * [Download](#paperclip-download-do-projeto)
      * [Pre Requisitos](#gear-requisito-para-executar)
      * [Configurar a conexão com banco de dados](#configurar-a-conexão-com-banco-de-dados)
      * [Configurar a porta do servidor](#configurar-a-porta-do-servidor)
      * [Iniciando o projeto](#computer-instalação)
   * [Scripts](#memo-scripts)
   * [Tecnologias](#tecnologias)
<!--te-->

## :memo: Como usar

### :paperclip: Download do projeto
```bash
# Clone este repositório
$ git clone https://github.com/lbbergamo/FIFO-Server
```

## :gear: Requisito para executar

```bash
# Banco de Dados
> MariaDB ou Mysql superior a v10

# NodeJs 
> Superior ao 12
```

### Configurar a conexão com banco de dados 
1. Entre no arquivo src/config/database-config.ts

2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL
```
const HOST_MYSQL = process.env.HOST_MYSQL || 'ENDERECO_DO_BANCO_DE_DADOS'
const DATABASE_NAME = process.env.DATABASE_NAME || 'NOME_DO_BANCO_DE_DADOS'
const DATABASE_USER = process.env.DATABASE_USER || 'USUARIO_DO_BANCO_DE_DADOS'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || 'SENHA_DO_BANCO_DE_DADOS'
```

### Configurar a porta do servidor
1. Entre no arquivo src/server.ts

2. Configure a porta na variavel PORT
```
const app = express()
export const port = process.env.PORT || 3333
``` 

## :computer: Instalação
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

