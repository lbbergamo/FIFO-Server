import Localization from '@models/Localization'
import e, { Request, Response } from 'express'
import Helpers from '@helpers/index'
import db from '@database/connection'

class LocalizationController {
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.name, 'Nome da localização não informado')
      Helpers.existsOrError(req.body.description, 'Descrição não informado')
      Helpers.notExistsOrError(req.body.id, 'Favor utilizar a rota update')
    } catch (msg) {
      return res.status(400).send(msg)
    }
    const localization = new Localization()
    localization.make(req.body)
    const objectData = await localization.save()
    return res.status(201).send(objectData)
  }

  async get (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const findLocalization = await localization.get()
    if (findLocalization == null) {
      return res.status(401).send({})
    } else {
      return res.status(201).send(findLocalization)
    }
  }

  async find (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const findLocalization = await localization.findId(req.params.id)
    if (localization.fail.Status()) {
      return res.status(401).send(localization.fail.Error())
    } else {
      return res.status(201).send(findLocalization)
    }
  }

  async update (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    localization.make(req.body)
    const objectData = await localization.save()
    if (localization.fail.Status()) {
      return res.status(401).send(localization.fail.Error())
    }
    return res.status(201).json(objectData)
  }

  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const localization = new Localization()
    localization.make(req.body)
    const objectData = await localization.delete(req.body.id)
    if (localization.fail.Status()) {
      return res.status(401).send(localization.fail.Error())
    }
    return res.status(201).json(objectData)
  }
}
export default LocalizationController
