import Database from './Database'

class Localization extends Database {
  protected data: {
    id: number,
    name: string,
    cover: string,
    notes: string,
  }

  protected Secure: String[]
  protected RequiredFields: String[]
  protected Entity = 'localization'

  protected id: number

  public make (object: any) {
    this.data = object
  }
}

export default Localization
