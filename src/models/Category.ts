import Database from './Database'

class Category extends Database {
  protected db = {
    Entity: 'category',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes'],
    Secure: ['id']
  }

  protected data: {
    id: number,
    description: string,
    name: string,
    cover: string,
    notes: string
  }
}

export default Category
