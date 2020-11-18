import Localization from '@models/Localization'
import { Request, Response } from 'express'
import Helpers from 'src/helpers2/index'
import db from '@database/connection'

class LocalizationController {
  /**
   * Realiza a criação
   * @param req Request
   * @param res Response
   * @return Response
   */
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
    const localizationData = await localization.save()
    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error())
    }
    return res.status(201).send(localizationData)
  }

  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */
  async get (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const localizationData = await localization.get()
    if (localizationData == null) {
      return res.status(401).send({})
    } else {
      return res.status(201).send(localizationData)
    }
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const localizationData = await localization.findId(req.params.id)
    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error())
    } else {
      return res.status(201).send(localizationData)
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
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.save()
    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error())
    }
    return res.status(201).json(localizationData)
  }

  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.delete(req.body.id)
    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error())
    }
    return res.status(201).json(localizationData)
  }
}
export default LocalizationController
