import Database from './Database'

class Localization extends Database {
  protected Secure: String[]
  protected RequiredFields = ['id', 'name', 'description', 'notes']
  protected Entity = 'localization'

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
