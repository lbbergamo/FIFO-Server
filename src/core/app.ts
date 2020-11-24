import express from 'express'
import cors from 'cors'
import * as socketIo from 'socket.io'
import { createServer, Server } from 'http'
import routes from '@routes/index'
import { WebSocket } from '@core/WebSocket'

class App {
  public app = express();
  public server: Server;
  private io: socketIo.Server;

  constructor () {
    this.socket()
    const webSocket = (new WebSocket(this.io)).listen()
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(routes)
  }

  private socket (): void {
    this.server = createServer(this.app)
    this.io = new socketIo.Server(this.server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true
      }
    })
  }
}

export default new App()
