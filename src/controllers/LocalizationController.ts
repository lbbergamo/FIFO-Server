// eslint-disable-next-line no-unused-vars
import Localization from '@models/Localization'
import Validation from '@models/Validation'
// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
// eslint-disable-next-line no-unused-vars
import db from '../database/connection'

class LocalizationController {
  async index (req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'First route ta cehgando aqui' })
  }

  async save (req: Request, res: Response): Promise<Response> {
    const localization = new Localization(req.body)
    try {
      Validation.existsOrError(localization.name, 'Nome da localização não informado')
      Validation.existsOrError(localization.description, 'Descrição não informado')
    } catch (msg) {
      return res.status(400).send(msg)
    }
    if (localization.id) {
      return res.status(401).send({ message: 'Utilize o update' })
    }
    return db('localization')
      .insert(localization)
      .then(localization => {
        return db('localization')
          .select('id', 'name', 'cover', 'description', 'notes')
          .where({ id: localization })
          .first()
          .then(localization => res.json(localization).send())
      })
      .catch(err => res.status(500).send(err))
  }

  async get (req: Request, res: Response): Promise<Response> {
    return db('localization')
      .select('id', 'name', 'cover', 'description', 'notes')
      .then(localization => res.json(localization))
      .catch(err => res.status(500).send(err))
  }

  async find (req: Request, res: Response): Promise<Response> {
    return db('localization')
      .select('id', 'name', 'cover', 'description', 'notes')
      .where({ id: req.params.id })
      .first()
      .then(localization => res.json(localization).send())
      .catch(err => res.status(500).send(err))
  }

  async update (req: Request, res: Response): Promise<Response> {
    const localization = new Localization(req.body)
    return db('localization')
      .update(localization)
      .where({
        id: req.body.id
      })
      .then(localization => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }

  async delete (req: Request, res: Response) : Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    return db('localization')
      .where({
        id: req.body.id
      })
      .del()
      .then(localization => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }
}
export default LocalizationController
