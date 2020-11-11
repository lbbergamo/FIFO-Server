const HOST_MYSQL = process.env.HOST_MYSQL || 'localhost'
const DATABASE_NAME = process.env.DATABASE_NAME || 'fifo-server'
const DATABASE_USER = process.env.DATABASE_USER || 'root'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '123456'

export { HOST_MYSQL, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD }
