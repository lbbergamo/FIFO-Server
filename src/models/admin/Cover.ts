import Database from '../Database'

class Cover extends Database {
  protected db = {
    Entity: 'cover',
    RequiredFields: ['id', 'url', 'category'],
    Secure: ['url', 'category']
  }

  public make (object: any) {
    this.data = new CoverModel(object)
  }

  /**
  * findCover
  * @param name
  * @param RequiredFields
  * @return object
  */
  public async findCover (id: string, RequiredFields: Array<String> = this.db.RequiredFields): Promise<any> {
    const find = await this.findId(id)
    find.url = 'covers/' + find.url
    return find
  }

  public async findCategory (category: string, RequiredFields: Array<String> = this.db.RequiredFields): Promise<any> {
    const find = await this.findAny({ category: category })
    return find
  }
}

class CoverModel implements IData {
  readonly id: number
  url: string
  category: string

  constructor (object: any) {
    this.id = object.id
    this.url = object.url
    this.category = object.category
  }

  get CoverModel () {
    return this
  }
}

export default Cover
