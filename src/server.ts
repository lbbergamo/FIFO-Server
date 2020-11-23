import express from 'express'
import routes from './routes/index'
import cors from 'cors'
import { Server, Socket } from 'socket.io'
import http from 'http'

require('dotenv/config')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})
app.use(cors())
app.use(express.json())
app.use(routes)

io.on('connection', (socket: Socket) => {
  socket.on('cadadastro_fila', (msg) => {
    console.log(msg)
  })
  socket.emit('status', '4546')
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

server.listen(process.env.PORT, () => console.log(`\n\n\n **** Server is running, port: ${process.env.PORT} ****\n\n\n`))
