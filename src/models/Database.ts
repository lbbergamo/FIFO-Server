import db from '@database/connection'
import { Helpers } from '@helpers/Helpers'

abstract class Database {
  protected abstract db: IDatabase
  protected data
  public error = new Helpers()
  /**
   * make - transforma o objeto
   * @param object || any
   * @return void
   */
  public make (object: any): void {
    this.data = object
  }

  /**
   * FindId
   * @param name
   * @param RequiredFields
   * @return object
   */
  public findId (name: string, RequiredFields: Array<String> = this.db.RequiredFields): Promise<any> {
    return db(this.db.Entity)
      .select(RequiredFields)
      .where({ id: name })
      .then(object => { return object })
      .catch(err => { return err })
  }

  /**
   * Get
   * @return object||Array
   */
  async get (): Promise<any> {
    const data = await db(this.db.Entity)
      .select(this.db.RequiredFields)
      .then(object => { return object })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro de conexão no banco de dados',
          data: err,
          code: 200
        })
      })
    return data
  }

  /**
   * Delete id
   * @param id : number
   * @return resultado
   */
  async delete (id: number): Promise<any> {
    const data = await db(this.db.Entity)
      .where({ id: id })
      .del()
      .then(object => {
        return object ? { message: 'Item excluído com sucesso' } : this.error.SetError({
          info: 'Erro de conexão no banco de dados',
          code: 200
        })
      })
      .catch(err => { return this.error.SetError({ info: 'Erro de conexão no banco de dados', data: err, code: 200 }) })
    return data
  }

  /**
   * Set update
   * @param object object
   * @return object
   */
  private async update (object: any): Promise<any> {
    return db(this.db.Entity)
      .update(object)
      .where({
        id: object.id
      })
      .then(objects => {
        return ((objects != null && objects) ? object.id : this.error.SetError({
          info: 'Erro ao fazer o Update - Update',
          code: 200
        }))
      })
      .catch(err => { return this.error.SetError({ info: 'Erro de conexão no banco de dados', data: err, code: 445 }) })
  }

  /**
   * Create DB
   * @param object Object
   * @return object
   */
  private async create (object: any): Promise<any> {
    const data = await db(this.db.Entity)
      .insert(object)
      .then(object => { return object })
      .catch(err => {
        return this.error.SetError({
          info: 'Problemas com o banco de dados - create - ' + err.msg,
          data: err,
          code: 445
        })
      })
    return data
  }

  /**
   * Save DB
   * @param returnData
   * @return result
   */
  async save (returnData: boolean = true): Promise<any> {
    let result = null
    /** Verifica se tem objeto */
    if (this.data == null || this.db == null) {
      return { message: 'Ocorreu um error no model iniciado' }
    }
    if (this.data.id != null) {
      result = await this.update(this.data)
    } else {
      result = await this.create(this.data)
    }
    if (this.error.Status()) {
      return this.error.info
    }
    if (returnData) {
      result = this.findId(result)
    }
    return result
  }

  /**
   * *************
   * ** Helpers **
   * *************
   */

  /**
   * requiredFields
   * @param requiredFields
   * @return void
   */
  public requiredFields (requiredFields: Array<string>): void {
    this.db.RequiredFields = requiredFields
  }
}

export default Database
