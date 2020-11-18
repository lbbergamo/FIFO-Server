import Helpers from 'src/helpers2/index'
import Localization from '@models/Localization'
import Queue from '@models/Queue'
import Service from '@models/Service'
import User from '@models/User'
import { Request, Response } from 'express'

class QueueController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.service_id, 'Serviço não informado.')
      Helpers.existsOrError(req.body.localization_id, 'Localização não informado.')
      Helpers.existsOrError(req.body.users_id, 'Usuário não informado.')
      Helpers.notExistsOrError(req.body.id, 'Favor utilizar a rota update')
    } catch (error) {
      return res.status(400).send({
        message: error
      })
    }
    const queue = new Queue()
    queue.make(req.body)
    const objectData = await queue.save()
    if (queue.erro.Status()) {
      return res.status(401).send(queue.erro.Error())
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
    if (findQueue == null) {
      return res.status(401).send({})
    }
    const result = []
    for (const queue of findQueue) {
      if (queue.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(queue.localization_id)
        if (!localization.erro.Status()) {
          queue.localization = findLocalization
        }
      }
      if (queue.service_id != null) {
        const service = new Service()
        const findService = await service.findId(queue.service_id)
        if (!service.erro.Status()) {
          queue.service = findService
        }
      }
      if (queue.users_id != null) {
        const user = new User()
        const findUser = await user.findId(queue.users_id)
        if (!user.erro.Status()) {
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
    if (queue.erro.Status()) {
      return res.status(401).send(queue.erro.Error())
    }
    const result = []
    for (const queue of findQueue) {
      if (queue.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(queue.localization_id)
        if (!localization.erro.Status()) {
          queue.localization = findLocalization
        }
      }
      if (queue.service_id != null) {
        const service = new Service()
        const findService = await service.findId(queue.service_id)
        if (!service.erro.Status()) {
          queue.service = findService
        }
      }
      if (queue.users_id != null) {
        const user = new User()
        const findUser = await user.findId(queue.users_id)
        if (!user.erro.Status()) {
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
    if (queue.erro.Status()) {
      return res.status(401).send(queue.erro.Error())
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
    if (queue.erro.Status()) {
      return res.status(401).send(queue.erro.Error())
    }
    return res.status(201).json(objectData)
  }
}

export default QueueController
