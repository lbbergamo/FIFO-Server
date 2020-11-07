import Database from './Database'

class Localization extends Database implements IDatabase {
  public id: string
  public name: string
  public description: string
  public cover: string
  public notes: string

  init (): void {
    const entity = 'localization'
    const secure = ['id']
    const requiredFields = ['id', 'name', 'description', 'cover', 'notes']
    this.__constructor(entity, secure, requiredFields)
  }

  constructor (localization: any) {
    super()
    this.name = localization.name
    this.cover = localization.description
    this.cover = localization.cover
    this.notes = localization.notes
  }
}

export default Localization
