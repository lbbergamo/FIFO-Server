export class ListQueue {
  private items: Array<IListQueue>

  constructor (items?: Array<IListQueue>) {
    this.items = items ?? []
  }

  /**
   * Add only single user or Update
   * @param value : IListQueue
   * @return Void
   */
  public add (value: IListQueue): void {
    value.date ?? new Date()
    const getUser = this.getUser(value.user)[0]
    if (getUser != null) {
      getUser.socketId = value.socketId
    } else {
      this.items.push(value)
    }
  }

  /**
   * @return Array<IListQueue>
   */
  public getList (): Array<IListQueue> {
    return this.items
  }

  /**
   * Get filter
   * @param service
   * @param localization
   * @return Array<IListQueue>
   */
  public getFilter (service: number, localization: number): Array<IListQueue> {
    return this.items.filter(value => value.service === service && value.localization === localization)
  }

  /**
   * @param user
   * @return Array<IListQueue>
   */
  private getUser (user: number): Array<IListQueue> {
    return this.items.filter(value => value.user === user)
  }

  /**
   * Remove User
   * @param object : IListQueue
   * @return Void
   */
  public remove (object: IListQueue): void {
    this.items = this.items.filter(value => {
      if (value.user !== object.user) {
        return value
      }
    })
  }

  /**
   * Remove Socket
   * @param object : socketID
   * @return void
   */
  public removeSocket (object: string): void {
    this.items = this.items.filter(value => {
      if (value.socketId !== object) {
        return value
      }
    })
  }

  /**
   * GetGroup
   * @return Array Object
   */
  public getGroup (): Array<Object> {
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
}
