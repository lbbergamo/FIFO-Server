import Category from '@models/Category'
import { Request, Response } from 'express'
import Helpers from '@helpers/index'
class CategoryController {
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.name, 'Nome não informado')
      Helpers.existsOrError(req.body.description, 'Descrição não informado')
    } catch (msg) {
      return res.status(400).send({ message: msg })
    }

    const category = new Category()
    category.make(req.body)
    const objectData = await category.save()
    if (category.fail.Status()) {
      return res.status(401).send(category.fail.Error())
    }
    return res.status(201).send(objectData)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const category = new Category()
    const findService = await category.findId(req.params.id)
    if (category.fail.Status()) {
      return res.status(401).send(category.fail.Error())
    } else {
      return res.status(201).send(findService)
    }
  }

  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */
  async get (req: Request, res: Response): Promise<Response> {
    const category = new Category()
    const findCategory = await category.get()
    if (findCategory == null) {
      return res.status(401).send({})
    } else {
      return res.status(201).send(findCategory)
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
    const category = new Category()
    category.make(req.body)
    const objectData = await category.save()
    if (category.fail.Status()) {
      return res.status(401).send(category.fail.Error())
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
    const category = new Category()
    category.make(req.body)
    const objectData = await category.delete(req.body.id)
    if (category.fail.Status()) {
      return res.status(401).send(category.fail.Error())
    }
    return res.status(201).json(objectData)
  }
}
export default CategoryController
