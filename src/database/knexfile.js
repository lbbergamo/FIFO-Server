
module.exports = {
    client : 'mysql',
    connection : {
        database : 'fifoserver',
        user : 'root',
        password : ''
    },
    pool : {
        min: 2,
        max : 10
    },
    migrations : {
        tableName : 'knex_migrations'
    }
}