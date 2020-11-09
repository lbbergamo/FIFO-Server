import Database from './Database'

class Category extends Database {
  protected db = {
    Entity: 'category',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes'],
    Secure: ['id']
  }

  public make (object: any) {
    this.data = new CategoryModel(object)
  }
}

class CategoryModel implements IData {
  readonly id: number
  description: string
  name: string
  cover: string
  notes: string

  constructor (object: any) {
    this.id = object.id
    this.description = object.description
    this.name = object.name
    this.cover = object.cover
    this.notes = object.notes
  }

  get CategoryModel () {
    return this
  }
}

export default Category
