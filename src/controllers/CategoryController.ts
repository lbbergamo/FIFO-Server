import Category from '@models/Category'
import { Request, Response } from 'express'
import Helpers from '@helpers/index'
class CategoryController {
  /**
   * Realiza o cadastro
   * @param req Request
   * @param res Response
   * @return Response
   */
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.name, 'Nome não informado')
      Helpers.existsOrError(req.body.description, 'Descrição não informado')
      Helpers.notExistsOrError(req.body.id, 'Favor utilizar a rota update')
    } catch (msg) {
      return res.status(400).send({ message: msg })
    }

    const category = new Category()
    category.make(req.body)
    const categoryData = await category.save()
    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error())
    }
    return res.status(201).json(categoryData)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const category = new Category()
    if (req.params.id == null) return res.status(401).send({ message: 'Falta o id' })
    const categoryData = await category.findId(req.params.id)
    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error())
    } else {
      return res.status(201).json(categoryData)
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
    const categoryData = await category.get()
    if (categoryData == null) {
      return res.status(401).send({})
    } else {
      return res.status(201).json(categoryData)
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
    const categoryData = await category.save()
    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error())
    }
    return res.status(201).json(categoryData)
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
    const categoryData = await category.delete(req.body.id)
    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error())
    }
    return res.status(201).json(categoryData)
  }
}
export default CategoryController
