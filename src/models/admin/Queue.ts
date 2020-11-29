/* eslint-disable camelcase */
import Database from '../Database'

class Queue extends Database {
  protected db = {
    Entity: 'queues',
    RequiredFields: ['id', 'localization_id', 'service_id', 'users_id', 'entry_queue', 'entry_service', 'status'],
    Secure: ['service_id', 'localization_id', 'users_id']
  }

  public make (object: any) {
    this.data = new QueueModel(object)
  }

  /**
  * findQueue
  * @param name
  * @param RequiredFields
  * @return object
  */
  public async findQueue (localization: string, service: string, status: string = 'pending', RequiredFields: Array<String> = this.db.RequiredFields): Promise<any> {
    const find = await this.findAny({ localization_id: localization, service_id: service, status: status })
    return find
  }

  public async entryQueue (localization: string, service: string, user: string): Promise<any> {
    let find = (await this.findAny({ users_id: user, status: 'pending' }))
    if (this.error.Status()) {
      this.error.reset()
      this.make({ users_id: user, status: 'pending', localization_id: localization, service_id: service })
      find = this.save()
    }
    if (find[0] != null) {
      find = find[0]
    }
    return find
  }
}

class QueueModel implements IData {
  readonly id: number
  localization_id: number
  service_id: number
  users_id: number
  entry_queue: any
  entry_service: any
  status: string

  constructor (object: any) {
    this.id = object.id
    this.localization_id = object.localization_id
    this.service_id = object.service_id
    this.users_id = object.users_id
    this.entry_queue = object.entry_queue
    this.entry_service = object.entry_service
    this.status = object.status ?? 'pending'
  }

  get QueueModel () {
    return this
  }
}

export default Queue
