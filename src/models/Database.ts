import db from '@database/connection'

abstract class Database {
  protected abstract db: IDatabase
  protected abstract data: IData
  protected abstract make (object: any): void
  private error = {
    status: false,
    info: null
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

  async get (): Promise<any> {
    const data = await db(this.db.Entity)
      .select(this.db.RequiredFields)
      .then(object => { return object })
      .catch(err => { return err })
    return data
  }

  /**
   * Delete id
   * @param id number
   * @return resultado
   */
  async delete (id: number): Promise<any> {
    const data = await db(this.db.Entity)
      .where({ id: id })
      .del()
      .then(object => { return object })
      .catch(err => { return err })
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
      .then(objects => { return (objects != null ? object.id : this.setError('Erro ao fazer o Update')) })
      .catch(err => this.setError(err))
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
      .catch(err => { return this.setError(err) })
    return data
  }

  /**
   * Save DB
   * @param returnData
   */
  async save (returnData: boolean = true): Promise<any> {
    let result = null
    /** Verifica se tem objeto */
    if (this.data == null || this.db == null) {
      return { message: 'Objeto data não iniciado' }
    }
    if (this.data.id != null) {
      result = await this.update(this.data)
    } else {
      result = await this.create(this.data)
    }
    if (this.fail()) {
      return this.error
    }
    if (returnData) {
      result = this.findId(result)
    }
    return result
  }

  /**
   * *********
   * Helpers *
   * *********
   */

  /**
   * requiredFields
   * @param requiredFields
   */
  public requiredFields (requiredFields: Array<string>): void {
    this.db.RequiredFields = requiredFields
  }

  /**
   * @return Error Status
   */
  private fail () {
    return this.error.status
  }

  /**
   * SetError
   * @param error
   */
  private setError (error) {
    this.error.status = true
    this.error.info = error
  }
}

export default Database
