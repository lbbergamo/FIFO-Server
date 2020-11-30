import Localization from '@models/admin/Localization'
import { Request, Response } from 'express'

class LocalizationController {
  /**
   * Realiza a criação
   * @param req Request
   * @param res Response
   * @return Response
   */
  async saveLocalization (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.save()
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error)
    }
    return res.status(201).send(localizationData)
  }

  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */
  async getLocalization (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const localizationData = await localization.get()
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error)
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
  async findLocalization (req: Request, res: Response): Promise<Response> {
    const localization = new Localization()
    const localizationData = await localization.findId(req.params.id)
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error)
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
  async updateLocalization (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.save()
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error)
    }
    return res.status(201).json(localizationData)
  }

  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async deleteLocalization (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const localization = new Localization()
    localization.make(req.body)
    const localizationData = await localization.delete(req.body.id)
    if (localization.error.Status()) {
      return res.status(localization.error.code).send(localization.error)
    }
    return res.status(201).json(localizationData)
  }
}
export default LocalizationController
