import Database from './../Database'

class Localization extends Database {
  protected db = {
    Entity: 'localization',
    RequiredFields: ['id', 'name', 'notes', 'description'],
    Secure: ['name', 'description']
  }

  public make (object: any) {
    this.data = new LocalizationModel(object)
  }
}

class LocalizationModel implements IData {
  readonly id: number
  name: string
  notes: string
  description: string

  constructor (object: any) {
    this.id = object.id
    this.name = object.name
    this.notes = object.notes
    this.description = object.description
  }

  get LocalizationModel () {
    return this
  }
}
export default Localization
