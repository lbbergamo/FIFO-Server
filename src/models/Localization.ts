import Database from './Database'

class Localization extends Database {
  protected db: IDatabase
  protected data: {
    id: number,
    name: string,
    cover: string,
    notes: string,
  }

  public make (object: any) {
    this.data = object
  }
}

export default Localization
