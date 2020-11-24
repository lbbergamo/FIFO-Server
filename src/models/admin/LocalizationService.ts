/* eslint-disable camelcase */
import Database from './../Database'

class LocalizationService extends Database {
  protected db = {
    Entity: 'localization_service',
    RequiredFields: ['id', 'localization_id', 'service_id'],
    Secure: ['description', 'localization_id']
  }

  public make (object: any) {
    this.data = new LocalizationServiceModel(object)
  }
}

class LocalizationServiceModel implements IData {
  readonly id: number
  localization_id: number
  service_id: number

  constructor (object: any) {
    this.id = object.id
    this.localization_id = object.localization_id
    this.service_id = object.service_id
  }

  get LocalizationServiceModel () {
    return this
  }
}

export default LocalizationService
