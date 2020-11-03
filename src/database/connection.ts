import path from 'path'
import knex from 'knex'

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.HOST_MYSQL,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
  // useNullAsDefault: true
})

export default db
