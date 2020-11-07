import Database from './Database'

class Service extends Database {
  protected Secure: String[]
  protected RequiredFields: String[]
  protected Entity: string
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

  protected make (object: any): void {
    this.data = object
  }
}

export default Service
