import database from '@database/connection'
import { Helpers } from '@helpers/Helpers'
import { Validation } from '@helpers/Validation'
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
    return database(this.db.Entity)
      .select(RequiredFields)
      .where({ id: name })
      .then(object => {
        return (object[0] == null)
          ? this.error.SetError({
            info: 'Item inexistente no banco de dados',
            code: 402
          }) : object[0]
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro de conexão no banco de dados',
          data: err,
          code: 500
        })
      })
  }

  /**
 * FindId
 * @param name
 * @param RequiredFields
 * @return object
 */
  public findAny (search: object, RequiredFields: Array<String> = this.db.RequiredFields): Promise<any> {
    return database(this.db.Entity)
      .select(RequiredFields)
      .where(search)
      .then(object => {
        return (object[0] == null)
          ? this.error.SetError({
            info: 'Item inexistente no banco de dados',
            code: 402
          }) : object
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro de conexão no banco de dados',
          data: err,
          code: 500
        })
      })
  }

  /**
   * Get
   * @return object||Array
   */
  async get (): Promise<any> {
    const data = await database(this.db.Entity)
      .select(this.db.RequiredFields)
      .then(object => {
        return (object[0] == null)
          ? this.error.SetError({
            info: 'Item inexistente no banco de dados',
            code: 402
          }) : object
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro de conexão no banco de dados',
          data: err,
          code: 500
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
    const data = await database(this.db.Entity)
      .where({ id: id })
      .del()
      .then(object => {
        return object ? { message: 'Item excluído com sucesso' } : this.error.SetError({
          info: 'Item inexistente no banco de dados',
          code: 402
        })
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro no banco de dados',
          data: err,
          code: 500
        })
      })
    return data
  }

  /**
   * Set update
   * @param object object
   * @return object
   */
  private async update (object: any): Promise<any> {
    return database(this.db.Entity)
      .update(object)
      .where({
        id: object.id
      })
      .then(objects => {
        return ((objects != null && objects) ? object.id : this.error.SetError({
          info: 'Não foi possível fazer a atualização',
          code: 501
        }))
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro no banco de dados',
          data: err,
          code: 500
        })
      })
  }

  /**
   * Create DB
   * @param object Object
   * @return object
   */
  private async create (object: any): Promise<any> {
    return await database(this.db.Entity)
      .insert(object)
      .then(object => {
        return ((object != null && object) ? object : this.error.SetError({
          info: 'Não foi possível fazer a atualização',
          code: 501
        }))
      })
      .catch(err => {
        return this.error.SetError({
          info: 'Erro no banco de dados',
          data: err.sqlState,
          code: 500
        })
      })
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
      this.secure(this.data)
      if (this.error.Status()) {
        return this.error.info
      }
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

  /**
   * Realiza a verificação de objetos
   * @param value
   */
  private secure (value: object): void {
    const validation = new Validation()
    for (const field of this.db.Secure) {
      if (!value[field]) {
        validation.existsOrError({
          value: value[field],
          msg: field + ' não informado',
          code: 400
        })
      }
    }
    if (validation.status) {
      this.error = validation
    }
  }
}

export default Database
