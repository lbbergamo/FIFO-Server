import Category from '@models/Category'
import { Request, Response } from 'express'
import db from '@database/connection'
import Helpers from '@helpers/index'
class CategoryController {
  async save (req: Request, res: Response): Promise<Response> {
    const category = new Category(req.body)

    try {
      Helpers.existsOrError(category.name, 'Nome não informado')
      Helpers.existsOrError(category.description, 'Descrição não informado')
    } catch (msg) {
      return res.status(400).send({ message: msg })
    }

    return db('category')
      .insert(category)
      .then(category => {
        return db('category')
          .select('id', 'name', 'description', 'notes', 'cover')
          .where({ id: category })
          .first()
          .then(category => res.json(category).status(201).send())
      })
      .catch(err => res.status(500).send(err))
  }

  async get (req: Request, res: Response): Promise<Response> {
    return db('category')
      .select('id', 'name', 'description', 'notes', 'cover')
      .then(category => res.json(category).status(201).send())
      .catch(err => res.status(500).send(err))
  }

  async find (req: Request, res: Response): Promise<Response> {
    return db('category')
      .select('id', 'name', 'description', 'notes', 'cover')
      .where({ id: req.params.id })
      .then(category => res.json(category).status(201).send())
      .catch(err => res.status(500).send(err))
  }

  async update (req: Request, res: Response): Promise<Response> {
    const category = new Category(req.body)
    if (req.body.id == null) {
      return res.status(400).send({ message: 'Favor informar o id' })
    }
    return db('category')
      .update(category)
      .where({ id: req.body.id })
      .then(_ => res.status(200).json({ message: 'Update success' }).send())
      .catch(err => res.status(500).send(err))
  }

  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    return db('category')
      .where({ id: req.body.id })
      .del()
      .then(_ => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }
}
export default CategoryController
