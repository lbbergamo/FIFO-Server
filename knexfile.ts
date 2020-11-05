import path from 'path'
import { HOST_MYSQL, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } from './src/config/database-config'

module.exports = {
  client: 'mysql2',
  connection: {
    host: HOST_MYSQL,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true
}
