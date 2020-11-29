import Cover from '@models/admin/Cover'
import Localization from '@models/admin/Localization'
import Queue from '@models/admin/Queue'
import Service from '@models/admin/Service'
import User from '@models/admin/User'
import { Request, Response } from 'express'

class QueueController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const queue = new Queue()
    // queue.make(req.body)
    const objectData = await queue.entryQueue(
      req.body.localization,
      req.body.service,
      req.body.user)
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    return res.status(201).send(objectData)
  }

  /**
   * Realiza a pesquisa
   * @param req Request
   * @param res Response
   * @return Response
   */
  async get (req: Request, res: Response): Promise<Response> {
    const queue = new Queue()
    const findQueue = await queue.get()
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    const result = []
    for (const queue of findQueue) {
      if (queue.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(queue.localization_id)
        if (!localization.error.Status()) {
          queue.localization = findLocalization
        }
      }
      if (queue.service_id != null) {
        const service = new Service()
        const findService = await service.findId(queue.service_id)
        if (!service.error.Status()) {
          queue.service = findService
        }
      }
      if (queue.users_id != null) {
        const user = new User()
        const findUser = await user.findId(queue.users_id)
        if (!user.error.Status()) {
          queue.user = findUser
        }
      }
      result.push(queue)
    }
    return res.status(201).json(result)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const queue = new Queue()
    const findQueue = await queue.findId(req.params.id)
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    const result = []
    for (const queue of findQueue) {
      if (queue.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(queue.localization_id)
        if (!localization.error.Status()) {
          queue.localization = findLocalization
        }
      }
      if (queue.service_id != null) {
        const service = new Service()
        const findService = await service.findId(queue.service_id)
        if (!service.error.Status()) {
          queue.service = findService
        }
      }
      if (queue.users_id != null) {
        const user = new User()
        const findUser = await user.findId(queue.users_id)
        if (!user.error.Status()) {
          queue.user = findUser
        }
      }
      result.push(queue)
    }
    return res.status(201).json(result)
  }

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async update (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const queue = new Queue()
    queue.make(req.body)
    const objectData = await queue.save()
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    return res.status(201).json(objectData)
  }

  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const queue = new Queue()
    queue.make(req.body)
    const objectData = await queue.delete(req.body.id)
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    return res.status(201).json(objectData)
  }

  /**
   * Status da fila
   * @param req Request
   * @param res Response
   * @return Response
   */
  async statusQueue (req: Request, res: Response): Promise<Response> {
    const queue = new Queue()
    console.log(req.body)
    const findQueue = await queue.findQueue(req.body.localization, req.body.service)
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    let i = 0
    findQueue.sort((a, b) => {
      if (new Date(a.entry_queue) > new Date(b.entry_queue)) return 1
      if (new Date(a.entry_queue) < new Date(b.entry_queue)) return -1
      return 0
    })
    const result = []
    for (const queue of findQueue) {
      queue.position = i
      if (queue.users_id != null) {
        const user = new User()
        const findUser = await user.findId(queue.users_id)
        if (!user.error.Status()) {
          const cover = new Cover()
          const findCover = await cover.findCover(findUser.cover)
          findUser.cover = findCover
          queue.user = findUser
        }
      }
      result.push(queue)
      i++
    }
    return res.status(201).json(result)
  }

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async exitQueue (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    req.body.status = 'closed'
    console.log(req.body)
    const queue = new Queue()
    queue.make(req.body)
    const objectData = await queue.save()
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error)
    }
    return res.status(201).json(objectData)
  }
}

export default QueueController
