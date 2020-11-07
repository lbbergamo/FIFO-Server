import db from '@database/connection'

abstract class Database implements IDatabase {
  public Entity: string
  public Secure: Array<String>
  public RequiredFields: Array<String>

  abstract init (): void

  protected __constructor (entity: string, secure: Array<String> = ['id'], requiredFields: Array<String> = ['*']) {
    this.Entity = entity
    this.Secure = secure
    this.RequiredFields = requiredFields
  }

  public find (name: string, columns: string, RequiredFields: Array<String> = this.RequiredFields, count: boolean = false): Promise<any> {
    return db(this.Entity)
      .select(RequiredFields)
      .where({ columns: name })
      .then(object => { return object })
      .catch(err => { return err })
  }

  public query () {

  }

  public update () {

  }

  public get (): Promise<any> {
    return db(this.Entity)
      .select(this.RequiredFields)
      .then(object => { return object })
      .catch(err => { return err })
  }

  public delete (id: number): Promise<any> {
    return db(this.Entity)
      .where({ id: id })
      .del()
      .then(object => { return object })
      .catch(err => { return err })
  }
}

export default Database
