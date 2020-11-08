import Database from './Database'

class Localization extends Database {
  protected db = {
    Entity: 'localization',
    RequiredFields: ['id', 'name', 'cover', 'notes'],
    Secure: ['id']
  }

  protected data: {
    id: number,
    name: string,
    cover: string,
    notes: string,
  }

  public make (object: any) {
    this.data = object
  }
}

export default Localization
