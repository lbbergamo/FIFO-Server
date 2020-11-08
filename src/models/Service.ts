import Database from './Database'

class Service extends Database {
  protected db = {
    Entity: 'service',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes', 'status', 'category_id'],
    Secure: ['id']
  }

  protected data: {
    id: number,
    name: string,
    description: string,
    cover: string,
    notes: string,
    status: string,
    // eslint-disable-next-line camelcase
    category_id: number,
  }

  public make (object: any) {
    object.status = 'pending'
    this.data = object
  }
}

export default Service
