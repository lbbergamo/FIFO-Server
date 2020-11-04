import path from 'path'
import knex from 'knex'

const db = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    database: 'fifo-server',
    user: 'root',
    password: ''
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
  // useNullAsDefault: true
})

export default db
