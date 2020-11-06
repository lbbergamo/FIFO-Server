/* eslint-disable camelcase */
class Service {
    public id: number
    public name: string
    public description: string
    public cover: string
    public notes: string
    public status: string
    public category_id: number

    constructor (service: any) {
      this.name = service.name
      this.cover = service.description
      this.cover = service.cover
      this.notes = service.notes
      this.status = service.status
      this.category_id = service.category_id
    }
}

export default Service
