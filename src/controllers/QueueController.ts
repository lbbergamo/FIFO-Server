import { Validation } from '@helpers/Validation'
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
    const validate = new Validation()
    validate.existsOrError({
      value: req.body.service_id,
      msg: 'Serviço não informado',
      code: 300
    })
    validate.existsOrError({
      value: req.body.localization_id,
      msg: 'Localização não informado',
      code: 300
    })
    validate.existsOrError({
      value: req.body.users_id,
      msg: 'Usuário não informado.',
      code: 300
    })
    validate.notExistsOrError({
      value: req.body.id,
      msg: 'Favor utilizar a rota update',
      code: 400
    })

    if (validate.status) {
      return res.status(validate.code).send({ message: validate.info })
    }
    const queue = new Queue()
    queue.make(req.body)
    const objectData = await queue.save()
    if (queue.error.Status()) {
      return res.status(queue.error.code).send(queue.error.info)
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
      return res.status(queue.error.code).send(queue.error.info)
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
      return res.status(queue.error.code).send(queue.error.info)
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
      return res.status(queue.error.code).send(queue.error.info)
    }
    return res.status(201).json(objectData)
  }
}

export default QueueController
