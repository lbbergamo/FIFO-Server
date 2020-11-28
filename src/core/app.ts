import express from 'express'
import cors from 'cors'
import * as socketIo from 'socket.io'
import { createServer, Server } from 'http'
import routes from '@routes/index'
import { WebSocket } from '@core/WebSocket'
import setupSwagger from '@core/config-swagger'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from '@docs/indexSwagger.json'

require('dotenv/config')

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
    setupSwagger(this.app)
  }

  private socket (): void {
    this.server = createServer(this.app)
    this.io = new socketIo.Server(this.server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['my-custom-header'],
        credentials: true
      }
    })
  }
}

export default new App()
