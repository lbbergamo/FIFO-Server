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
    this.data = new LocalizationModel(object)
  }
}

class LocalizationModel implements IData {
  readonly id: number
  name: string
  cover: string
  notes: string

  constructor (object: any) {
    this.id = object.id
    this.name = object.name
    this.cover = object.cover
    this.notes = object.notes
  }

  get LocalizationModel () {
    return this
  }
}
export default Localization
