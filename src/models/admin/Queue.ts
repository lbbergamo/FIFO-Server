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
    this.status = 'pending'
  }

  get QueueModel () {
    return this
  }
}

export default Queue