import Service from '@models/admin/Service'
import { Request, Response } from 'express'

class ServiceController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const service = new Service()
    service.make(req.body)
    const objectData = await service.save()
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error)
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
    const service = new Service()
    const findService = await service.get()
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error)
    }
    return res.status(201).json(findService)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const service = new Service()
    const findService = await service.findId(req.params.id)
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error)
    }
    return res.status(200).json(findService)
  }

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async update (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const service = new Service()
    service.make(req.body)
    const objectData = await service.save()
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error)
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
    const service = new Service()
    service.make(req.body)
    const objectData = await service.delete(req.body.id)
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error)
    }
    return res.status(201).json(objectData)
  }
}

export default ServiceController
