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

  public find () {

  }

  public save () {

  }

  public update () {

  }
}

export default Database
