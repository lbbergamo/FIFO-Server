import Helpers from '@helpers/index'
import Category from '@models/Category'
import Service from '@models/Service'
import { Request, Response } from 'express'

class ServiceController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.name, 'Nome não informado.')
      Helpers.existsOrError(req.body.category_id, 'Categoria não informada.')
    } catch (error) {
      return res.status(400).send({
        message: error
      })
    }
    const service = new Service()
    service.make(req.body)
    const objectData = await service.save()
    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error())
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
    if (findService == null) {
      return res.status(401).send({})
    }
    const result = []
    for (const service of findService) {
      const category = new Category()
      category.requiredFields(['name', 'description', 'cover', 'notes'])
      const findCategory = await category.findId(service.category_id)
      if (!category.erro.Status()) {
        service.category = findCategory
      }
      result.push(service)
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
    const service = new Service()
    const findService = await service.findId(req.params.id)
    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error())
    } else {
      return res.status(201).send(findService)
    }
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
    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error())
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
    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error())
    }
    return res.status(201).json(objectData)
  }
}

export default ServiceController
