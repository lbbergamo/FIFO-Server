import Helpers from '@helpers/index'
import Localization from '@models/Localization'
import LocalizationService from '@models/LocalizationService'
import Service from '@models/Service'
import User from '@models/User'
import { Request, Response } from 'express'

class LocalizationServiceController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    try {
      Helpers.existsOrError(req.body.localization_id, 'Id localization não encontrado.')
      Helpers.existsOrError(req.body.service_id, 'Id service não encontrado.')
    } catch (error) {
      return res.status(400).send({
        message: error
      })
    }
    const localizationService = new LocalizationService()
    localizationService.make(req.body)
    const objectData = await localizationService.save()
    if (localizationService.erro.Status()) {
      return res.status(401).send(localizationService.erro.Error())
    }
    return res.status(201).send(objectData)
  }

  /**
   * Realiza a pesquisa
   * @param req Request
   * @param res Response
   * @return Response
   */
  async get (res: Response): Promise<Response> {
    const localizationService = new LocalizationService()
    const findLocalizationService = await localizationService.get()
    if (findLocalizationService == null) {
      return res.status(401).send({})
    }
    const result = []
    for (const localizationService of findLocalizationService) {
      if (localizationService.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(localizationService.localization_id)
        if (!localization.erro.Status()) {
          localizationService.localization = findLocalization
        }
      }

      if (localizationService.service_id != null) {
        const service = new Service()
        const findService = await service.findId(localizationService.service_id)
        if (!service.erro.Status()) {
          localizationService.service = findService
        }
      }
      result.push(localizationService)
    }
    return res.status(200).json(result)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */

  /**
  async find (req: Request, res: Response): Promise<Response> {
    const user = new User()
    const findUser = await user.findId(req.params.id)
    if (user.erro.Status()) {
      return res.status(401).send(user.erro.Error())
    }
    const result = []
    for (const user of findUser) {
      if (user.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(user.localization_id)
        if (!localization.erro.Status()) {
          user.localization = findLocalization
        }
      }
      result.push(user)
    }
    return res.status(201).json(result)
  }
  */

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */

  /**
  async update (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const user = new User()
    user.make(req.body)
    const objectData = await user.save()
    if (user.erro.Status()) {
      return res.status(401).send(user.erro.Error())
    }
    return res.status(201).json(objectData)
  }
  */

  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */

  /**
  async delete (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const user = new User()
    user.make(req.body)
    const objectData = await user.delete(req.body.id)
    if (user.erro.Status()) {
      return res.status(401).send(user.erro.Error())
    }
    return res.status(201).json(objectData)
  }
  */
}

export default LocalizationServiceController
