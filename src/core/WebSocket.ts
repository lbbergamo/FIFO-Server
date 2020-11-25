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
      socket.on('entryQueue', (msg) => this.entryQueue(msg, socket))
      socket.on('exit', (socket: Socket) => {
        // console.log('to chegando aqui sim ')
        this.disconnect(socket)
      })
      socket.on('disconnect', (value) => {
        this.disconnect(socket)
      })
      this.status(socket)
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
    socket.emit('queue', this.listQueue.getFilter(msg.service, msg.localization).length)
  }

  private disconnect (socketId: Socket) {
    this.listQueue.removeSocket(socketId.id)
  }

  private status (socket: Socket): void {
    const list = this.listQueue.getGroup()
    for (const localization in list) {
      for (const service in list[localization]) {
        let i = list[localization][service].length
        list[localization][service].sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) return -1
          if (new Date(a.date) < new Date(b.date)) return 1
          return 0
        })
        list[localization][service].forEach((value) => {
          socket.broadcast.to(value.socketId).emit('queue', i)
          i--
        })
      }
    }
  }
}

interface entryQueue {
  service: number,
  localization: number,
  user: number,
  date?: Date
}
