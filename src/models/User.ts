/* eslint-disable camelcase */
import Database from './Database'

class User extends Database {
    protected db = {
        Entity: 'user',
        RequiredFields: [ 'id', 'name', 'email', 'last_socket_id', 'localization_id', 'cover' ],
        Secure: [ 'id' ]
    }

    public make (object: any) {
        this.data = new UserModel(object)
    }
}

class UserModel implements IData {
    readonly id: number
    name: string
    email: string
    cover: string
    last_socket_id: number
    localization_id: number    

    constructor (object: any) {
        this.name = object.name
        this.email = object.email
        this.cover = object.cover
        this.last_socket_id = object.last_socket_id
        this.localization_id = object.localization_id
        
    }

    get UserModel () {
        return this
    }
}

export default User
