import Cover from '@models/admin/Cover'
import { Request, Response } from 'express'

class CoverController {
  /**
   * Realiza o cadastro
   * @param req Request
   * @param res Response
   * @return Response
   */
  async saveCover (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const cover = new Cover()
    cover.make(req.body)
    const coverData = await cover.save()
    if (cover.error.Status()) {
      return res.status(cover.error.code).send(cover.error)
    }
    return res.status(201).json(coverData)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async findCover (req: Request, res: Response): Promise<Response> {
    const cover = new Cover()
    if (req.params.id == null) return res.status(401).send({ message: 'Falta o id' })
    const coverData = await cover.findCover(req.params.id)

    if (cover.error.Status()) {
      return res.status(cover.error.code).send(cover.error)
    } else {
      return res.status(201).json(coverData)
    }
  }

  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */
  async getCover (req: Request, res: Response): Promise<Response> {
    const cover = new Cover()
    const coverData = await cover.get()
    if (cover.error.Status()) {
      return res.status(cover.error.code).send(cover.error)
    }
    return res.status(200).json(coverData)
  }

  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async updateCover (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const cover = new Cover()
    cover.make(req.body)
    const coverData = await cover.save()
    if (cover.error.Status()) {
      return res.status(cover.error.code).send(cover.error)
    }
    return res.status(200).json(coverData)
  }

  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */
  async deleteCover (req: Request, res: Response): Promise<Response> {
    if (req.body.id == null) return res.status(401).send({ message: 'Falta o id' })
    const cover = new Cover()
    cover.make(req.body)
    const coverData = await cover.delete(req.body.id)
    if (cover.error.Status()) {
      return res.status(cover.error.code).send(cover.error)
    }
    return res.status(201).json(coverData)
  }
}
export default CoverController
