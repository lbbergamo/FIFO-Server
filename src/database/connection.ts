import path from 'path'
import knex from 'knex'
import { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER, HOST_MYSQL } from '@config/database-config'

const db = knex({
  client: 'mysql2',
  connection: {
    host: HOST_MYSQL,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
  // useNullAsDefault: true
})

export default db
