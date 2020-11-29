/* eslint-disable camelcase */
import Database from './../Database'

class Service extends Database {
  protected db = {
    Entity: 'service',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes', 'status'],
    Secure: ['name']
  }

  public make (object: any) {
    this.data = new ServiceModel(object)
  }
}

class ServiceModel implements IData {
  readonly id: number
  name: string
  description: string
  cover: string
  notes: string
  status: string

  constructor (object: any) {
    this.id = object.id
    this.name = object.name
    this.description = object.description
    this.cover = object.cover
    this.notes = object.notes
    this.status = 'pending'
  }

  get ServiceModel () {
    return this
  }
}

export default Service
