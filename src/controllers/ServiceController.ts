import db from '@database/connection'
import Helpers from '@helpers/index'
import Service from '@models/Service'
import { Request, Response } from 'express'

class ServiceController {
  async save (req: Request, res: Response): Promise<Response> {
    const service = new Service(req.body)
    try {
      Helpers.existsOrError(service.name, 'Nome não informado.')
      Helpers.existsOrError(service.category_id, 'Categoria não informada.')
    } catch (error) {
      return res.status(400).send({
        message: error
      })
    }
    return db('service')
      .insert(service)
      .then(services => {
        return db('service')
          .select('id', 'name', 'description', 'cover', 'notes', 'status', 'category_id')
          .where({ id: services })
          .first()
          .then(services => res.status(201).json(services).send())
      })
      .catch(error => res.status(500).send(error))
  }

  async get (req: Request, res: Response): Promise<Response> {
    return db('service')
      .select('id', 'name', 'description', 'cover', 'notes', 'status', 'category_id')
      .then(service => res.status(201).json(service ?? { message: 'Não foi encontrado nenhum objeto.' }).send())
      .catch(error => res.status(500).send(error))
  }

  async find (req: Request, res: Response): Promise<Response> {
    return db('service')
      .select('id', 'name', 'description', 'cover', 'notes', 'status', 'category_id')
      .where({ id: req.params.id })
      .first()
      .then(service => res.json(service ?? { message: 'Não foi encontrado nenhum objeto.' }).send())
      .catch(err => res.status(500).send(err))
  }

  async update (req: Request, res: Response): Promise<Response> {
    const service = new Service(req.body)
    return db('Service')
      .update(service)
      .where({
        id: req.body.id
      })
      .then(service => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }

  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    return db('service')
      .where({
        id: req.body.id
      })
      .del()
      .then(service => res.status(200).send())
      .catch(err => res.status(500).send(err))
  }
}

export default ServiceController
