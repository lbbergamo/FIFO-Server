import { Validation } from '@helpers/Validation'
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
    const validate = new Validation()
    validate.existsOrError({
      value: req.body.name,
      msg: 'Nome não informado',
      code: 300
    })
    validate.existsOrError({
      value: req.body.category_id,
      msg: 'Categoria não informado',
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
    const service = new Service()
    service.make(req.body)
    const objectData = await service.save()
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error.info)
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
      category.requiredFields(['id', 'name', 'description', 'cover', 'notes'])
      const findCategory = await category.findId(service.category_id)
      if (!category.error.Status()) {
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
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error.info)
    }
    const result = []
    for (const service of findService) {
      const category = new Category()
      category.requiredFields(['id', 'name', 'description', 'cover', 'notes'])
      const findCategory = await category.findId(service.category_id)
      if (!category.error.Status()) {
        service.category = findCategory
      }
      result.push(service)
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
    const service = new Service()
    service.make(req.body)
    const objectData = await service.save()
    if (service.error.Status()) {
      return res.status(service.error.code).send(service.error.info)
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
      return res.status(service.error.code).send(service.error.info)
    }
    return res.status(201).json(objectData)
  }
}

export default ServiceController
