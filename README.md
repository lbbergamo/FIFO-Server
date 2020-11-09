# FIFO - SERVER

## :computer: Instalação

```bash
# Clone este repositório
$ git clone https://github.com/lbbergamo/FIFO-Server

# Navegue até ele e instale todas as dependências
$ yarn

# Inicie o modo de desenvolvimento
$ yarn dev
```

#### :scream_cat:  Importante
1. Entre no arquivo src/config/database-config.ts

2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL
```
const HOST_MYSQL = process.env.HOST_MYSQL || 'localhost'
const DATABASE_NAME = process.env.DATABASE_NAME || 'fifo-server'
const DATABASE_USER = process.env.DATABASE_USER || 'root'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
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

