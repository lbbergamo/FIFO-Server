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
1. Crie na raiz do projeto o arquivo .env
2. Digite o valor das variáveis de acordo com o seu banco de dados MySQL
```
HOST_MYSQL=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
```

3. No arquivo knexfile.ts altere também as variáveis de conexão caso seja necessário
```
import path from 'path'

module.exports = {
  client: 'mysql2',
  connection: {
    host: SEU_HOST,
    database: NOME_DO_BANCO,
    user: SEU_USER,
    password: SUA_SENHA'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}
```

*Vou ver como eu posso automizar isso depois :)*

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
