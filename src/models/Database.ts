import db from '@database/connection'

abstract class Database {
  // private Entity: string
  protected abstract Secure: Array<String> = ['id']
  protected abstract RequiredFields: Array<String> = ['*']
  protected abstract Entity: string
  protected readonly abstract id: number
  protected abstract data: IData
  protected abstract make (object: any): void

  public findById (name: string, columns: string, RequiredFields: Array<String> = this.RequiredFields): Promise<any> {
    return db(this.Entity)
      .select(RequiredFields)
      .where({ columns: name })
      .then(object => { return object })
      .catch(err => { return err })
  }

  async get (): Promise<any> {
    return await db(this.Entity)
      .select(this.RequiredFields)
      .then(object => { return object })
      .catch(err => { return err })
  }

  async delete (id: number): Promise<any> {
    return await db(this.Entity)
      .where({ id: id })
      .del()
      .then(object => { return object })
      .catch(err => { return err })
  }

  async save (): Promise<any> {
    let data = null
    /** Verifica o objeto */
    if (this.data.id != null) {
      /** Update */

    } else {
      data = await db(this.Entity)
        .insert(this.data)
        .then(async object => {
          const findId = await db(this.Entity)
            .select('*')
            .where({ id: object })
            .first()
            .then(objects => { return objects })
          return findId
        })
        .catch(err => { return err })
    }
    return data
  }
}

export default Database
