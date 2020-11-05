class Category {
  public id: number
  public description: string
  public name: string
  public cover: string
  public notes: string

  constructor (category: any) {
    this.description = category.description
    this.name = category.name
    this.cover = category.cover
    this.notes = category.notes
    return this
  }
}

export default Category
