import db from '@database/connection'

abstract class Database {
  // private Entity: string
  protected abstract Secure: Array<String> = ['id']
  protected abstract RequiredFields: Array<String> = ['*']
  protected abstract Entity: string
  protected abstract data: IData
  protected abstract make (object: any): void
  private error: boolean = false
  private errorList
  public findId (name: string, RequiredFields: Array<String> = this.RequiredFields): Promise<any> {
    return db(this.Entity)
      .select(RequiredFields)
      .where({ id: name })
      .then(object => { return object })
      .catch(err => { return err })
  }

  public requiredFields (requiredFields: Array<string>): void {
    this.RequiredFields = requiredFields
  }

  async get (): Promise<any> {
    const data = await db(this.Entity)
      .select(this.RequiredFields)
      .then(object => { return object })
      .catch(err => { return err })
    return data
  }

  async delete (id: number): Promise<any> {
    const data = await db(this.Entity)
      .where({ id: id })
      .del()
      .then(object => { return object })
      .catch(err => { return err })
    return data
  }

  private fail () {

  }

  async update (): Promise<any> {

  }

  private async create (object: any): Promise<any> {
    const data = await db(this.Entity)
      .insert(object)
      .then(object => { return object })
      .catch(err => { return err })
    return data
  }

  async save (returnData: boolean = true): Promise<any> {
    let id = null
    let result = null
    /** Verifica o objeto */
    if (this.data.id != null) {
      /** Update */

    } else {
      id = this.create(this.data)
      if (this.fail()) {

      }
    }
    if (returnData) {
      result = this.findId(id)
    }
    return result
  }
}

export default Database
