class Localization {
  public id: string
  public name: string
  public description: string
  public cover: string
  public notes: string

  constructor (localization: any) {
    this.name = localization.name
    this.description = localization.description
    this.cover = localization.cover
    this.notes = localization.notes
    return this
  }
}

export default Localization
