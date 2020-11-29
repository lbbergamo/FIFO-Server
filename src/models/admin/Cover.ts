import Database from '../Database'

class Cover extends Database {
  protected db = {
    Entity: 'category',
    RequiredFields: ['id', 'url'],
    Secure: ['url']
  }

  public make (object: any) {
    this.data = new CoverModel(object)
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
