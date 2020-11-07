import db from '@database/connection'

class Database implements IDatabase {
  public Entity: string
  public Secure: Array<String>
  public RequiredFields: Array<String>

  private constructor (entity: string, secure: Array<String> = ['id'], requiredFields: Array<String> = ['*']) {
    this.Entity = entity
    this.Secure = secure
    this.RequiredFields = requiredFields
  }

  public init () {
    const entity = 'database'
    const secure = ['id']
    const requiredFields = ['id', 'name', 'status']
    this.constructor(entity, secure, requiredFields)
  }

  protected find (name: string, columns: string, RequiredFields: Array<String> = this.RequiredFields, count: boolean = false): Promise<any> {
    return db(this.Entity)
      .select(RequiredFields)
      .where({ columns: name })
      .then(object => { return object })
      .catch(err => { return err })
  }

  protected query () {

  }

  protected save () {

  }

  protected update () {

  }

  protected get (): Promise<any> {
    return db(this.Entity)
      .select(this.RequiredFields)
      .then(object => { return object })
      .catch(err => { return err })
  }

  protected delete (id: number): Promise<any> {
    return db(this.Entity)
      .where({ id: id })
      .del()
      .then(object => { return object })
      .catch(err => { return err })
  }
}

export default Database
