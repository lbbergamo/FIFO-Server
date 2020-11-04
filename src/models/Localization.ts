class Localization {
  public id: string
  public name: string
  public description: string
  public cover: string
  public notes: string

  constructor (name: string, description: string, cover: string, notes: string) {
    this.name = name
    this.description = description
    this.cover = cover
    this.notes = notes
    return this
  }
}

export default Localization
