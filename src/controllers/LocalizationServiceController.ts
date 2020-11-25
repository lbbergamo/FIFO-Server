import Localization from '@models/admin/Localization'
import LocalizationService from '@models/admin/LocalizationService'
import Service from '@models/admin/Service'
import { Request, Response } from 'express'

class LocalizationServiceController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })

    const localizationService = new LocalizationService()
    localizationService.make(req.body)
    const objectData = await localizationService.save()
    if (localizationService.error.Status()) {
      return res.status(localizationService.error.code).send(localizationService.error.info)
    }
    return res.status(201).send(objectData)
  }

  /**
   * Realiza a pesquisa
   * @param req Request
   * @param res Response
   * @return Response
   */
  async get (req: Request, res: Response): Promise<Response> {
    const localizationService = new LocalizationService()
    const findLocalizationService = await localizationService.get()
    if (localizationService.error.Status()) {
      return res.status(localizationService.error.code).send(localizationService.error.info)
    }
    const result = []
    for (const localizationService of findLocalizationService) {
      if (localizationService.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(localizationService.localization_id)
        if (!localization.error.Status()) {
          localizationService.localization = findLocalization
        }
      }

      if (localizationService.service_id != null) {
        const service = new Service()
        const findService = await service.findId(localizationService.service_id)
        if (!service.error.Status()) {
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
  async find (req: Request, res: Response): Promise<Response> {
    const localizationService = new LocalizationService()
    const findLocalizationService = await localizationService.findId(req.params.id)
    if (localizationService.error.Status()) {
      return res.status(localizationService.error.code).send(localizationService.error.info)
    }
    const result = []
    for (const localizationService of findLocalizationService) {
      if (localizationService.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(localizationService.localization_id)
        if (!localization.error.Status()) {
          localizationService.localization = findLocalization
        }
      }

      if (localizationService.service_id != null) {
        const service = new Service()
        const findService = await service.findId(localizationService.service_id)
        if (!service.error.Status()) {
          localizationService.service = findService
        }
      }
      result.push(localizationService)
    }
    return res.status(201).json(result)
  }

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async update (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const localizationService = new LocalizationService()
    localizationService.make(req.body)
    const objectData = await localizationService.save()
    if (localizationService.error.Status()) {
      return res.status(localizationService.error.code).send(localizationService.error.info)
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
    const localizationService = new LocalizationService()
    localizationService.make(req.body)
    const objectData = await localizationService.delete(req.body.id)
    if (localizationService.error.Status()) {
      return res.status(localizationService.error.code).send(localizationService.error.info)
    }
    return res.status(201).json(objectData)
  }
}

export default LocalizationServiceController
