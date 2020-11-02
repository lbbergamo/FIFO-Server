## :computer: Instalação
### Requisitos
- Banco de dados MySql 
- NodeJs (versão superior a 12)
- Tabela no banco de dados chamada fifoserver

### Terminal
```
# Clone este repositório
git clone -b dev https://github.com/lbbergamo/FIFO-Server.git

# Navegue até ele
$ cd FIFO-Server

# Instale todas as dependências
npm install

# Inicie a aplicação
npm start
```

### Banco de dados
Para realizar para realizar a configura do database,acesse o arquivo
```
src/database/knexfile.js
```
Faça as seguintes alterações 
```
module.exports = {
    client : 'mysql',
    connection : {
        database : 'NOME_da_DB',
        user : 'NOME_do_USUARIO',
        password : 'SENHA_do_USUARIO'
    },
    pool : {
        min: 2,
        max : 10
    },
    migrations : {
        tableName : 'knex_migrations'
    }
}
```
