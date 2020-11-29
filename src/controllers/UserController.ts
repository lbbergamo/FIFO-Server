import Localization from '@models/admin/Localization'
import User from '@models/admin/User'
import { Request, Response } from 'express'

class UserController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save (req: Request, res: Response): Promise<Response> {
    if (req.body.id != null) return res.status(401).send({ message: 'Favor utilizar a rota de update' })
    const user = new User()
    user.make(req.body)
    const objectData = await user.save()
    if (user.error.Status()) {
      return res.status(user.error.code).json({ message: user.error, data: user.error.data })
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
    const user = new User()
    const findUser = await user.get()
    if (user.error.Status()) {
      return res.status(user.error.code).send(user.error)
    }
    const result = []
    for (const user of findUser) {
      if (user.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(user.localization_id)
        if (!localization.error.Status()) {
          user.localization = findLocalization
        }
      }
      result.push(user)
    }
    return res.status(201).json(result)
  }

  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */
  async find (req: Request, res: Response): Promise<Response> {
    const user = new User()
    const findUser = await user.findId(req.params.id)
    if (user.error.Status()) {
      return res.status(user.error.code).send(user.error)
    }
    const result = []
    for (const user of findUser) {
      if (user.localization_id != null) {
        const localization = new Localization()
        const findLocalization = await localization.findId(user.localization_id)
        if (!localization.error.Status()) {
          user.localization = findLocalization
        }
      }
      result.push(user)
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
    const user = new User()
    user.make(req.body)
    const objectData = await user.save()
    if (user.error.Status()) {
      return res.status(user.error.code).send(user.error)
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
    const user = new User()
    user.make(req.body)
    const objectData = await user.delete(req.body.id)
    if (user.error.Status()) {
      return res.status(user.error.code).send(user.error)
    }
    return res.status(201).json(objectData)
  }

  /**
   * Realiza o login
   * @param req Request
   * @param res Response
   * @return Response
   */
  async login (req: Request, res: Response): Promise<Response> {
    let user = new User()
    const findUser = await user.findEmail(req.body.email)
    let result

    if (user.error.Status()) {
      user = new User()
      user.make(req.body)
      result = await user.save()
    } else {
      result = findUser[0]
    }
    if (user.error.Status()) {
      return res.status(user.error.code).send(user.error)
    }
    return res.status(201).json(result)
  }
}

export default UserController
