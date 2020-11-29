import Database from '../Database'

class Cover extends Database {
  protected db = {
    Entity: 'cover',
    RequiredFields: ['id', 'url'],
    Secure: ['url']
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
}

class CoverModel implements IData {
  readonly id: number
  url: string

  constructor (object: any) {
    this.id = object.id
    this.url = object.url
  }

  get CoverModel () {
    return this
  }
}

export default Cover
