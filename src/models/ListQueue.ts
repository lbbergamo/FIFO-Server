export class ListQueue {
  private items: Array<IListQueue>

  constructor (items?: Array<IListQueue>) {
    this.items = items ?? []
  }

  public add (value: IListQueue): void {
    value.date ?? new Date()
    this.items.push(value)
  }

  public getList (): Array<IListQueue> {
    return this.items
  }

  public getFilter (service: number, localization: number): Array<IListQueue> {
    return this.items.filter(value => this.filter(value, service, localization))
  }

  private filter (value: IListQueue, service: number, localization: number) {
    return value.service === service && value.localization === localization
  }

  public remove (object: IListQueue): void {
    this.items = this.items.filter(value => {
      if (value.user !== object.user) {
        return value
      }
    })
  }

  public removeSocket (object: string): void {
    this.items = this.items.filter(value => {
      if (value.socketId !== object) {
        return value
      }
    })
    console.log(this.items)
    console.log(object)
  }

  public getGroup (): any {
    const groupLocalization = this.items.reduce(function (r, a) {
      r[a.localization] = r[a.localization] || []
      r[a.localization].push(a)
      return r
    }, Object.create(null))
    for (const localization in groupLocalization) {
      const groupService = groupLocalization[localization].reduce(function (r, a) {
        r[a.service] = r[a.service] || []
        r[a.service].push(a)
        return r
      }, Object.create(null))
      groupLocalization[localization] = groupService
    }
    return groupLocalization
  }

  public delete (value: IListQueue, object: IListQueue) {
    return value.service !== object.service &&
      value.localization !== object.localization &&
      value.user !== object.user
  }
}

interface IListQueue {
  readonly socketId: string,
  service: number,
  localization: number,
  user: number,
  date?: Date
}

/** precisa verificar essa questao */
interface IList {
  [index: number]: Array<IListQueue>
}
