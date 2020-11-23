import Localization from '@models/Localization'
import { Request, Response } from 'express'
import { Validation } from '@helpers/Validation'
import db from '@database/connection'

class LocalizationController {
  /**
   * Realiza a criação
   * @param req Request
   * @param res Response
   * @return Response
   */
  async save (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.save()
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error.info)
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
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error.info)
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
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error.info)
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
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error.info)
    }
    return res.status(201).json(localizationData)
  }
}
export default LocalizationController
