import { ListQueue } from '@models/ListQueue'
import { Server, Socket } from 'socket.io'

export class WebSocket {
  private io: Server
  private listQueue: ListQueue

  constructor (socket: Server) {
    this.io = socket
    this.listQueue = new ListQueue()
  }

  public listen (): void {
    this.io.on('connection', async (socket: Socket) => {
      socket.on('disconnect', () => {
        this.disconnect(socket.id)
      })
      await socket.on('entryQueue', (msg) => this.entryQueue(msg, socket))
      await this.status(socket)
      socket.on('exit', (socket: Socket) => { })
    })
  }

  private entryQueue (msg: entryQueue, socket: Socket): void {
    const web = {
      socketId: socket.id,
      service: msg.service,
      localization: msg.localization,
      user: msg.user,
      date: new Date()
    }
    this.listQueue.add(web)
    socket.emit('status', socket.id)
  }

  private disconnect (socketId: string) {
    console.log('to chegando aqui solo ')
    console.log(socketId)
    // this.listQueue.disconnect(socketId)
  }

  private status (socket: Socket): void {
    console.log(this.listQueue.getList())
    let i = 0
    this.listQueue.getList().forEach((value) => {
      console.log(value.socketId)
      socket.broadcast.to(value.socketId).emit('status', value.socketId)
      socket.broadcast.to(value.socketId).emit('count', i)
      i++
    })
  }
}

interface entryQueue {
  service: number,
  localization: number,
  user: number,
  date?: Date
}
