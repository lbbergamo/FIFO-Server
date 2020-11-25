import { ListQueue } from './ListQueue'

const makeSut = (): ListQueue => {
  return new ListQueue()
}

describe('ListQueue', () => {
  it('get List', () => {
    const object = makeSut()
    const data = new Date()
    object.add({
      socketId: 'string',
      service: 1,
      localization: 1,
      user: 1,
      date: data
    })
    expect(object.getList()).toContainEqual({
      socketId: 'string',
      service: 1,
      localization: 1,
      user: 1,
      date: data
    })
  })
  it('set List', () => {
    const object = makeSut()
    const data = new Date()
    object.add({
      socketId: 'string',
      service: 1,
      localization: 1,
      user: 1,
      date: data
    })
    object.add({
      socketId: 'str21ing',
      service: 121,
      localization: 121,
      user: 121,
      date: data
    })
    expect(object.getList()).toContainEqual({
      socketId: 'string',
      service: 1,
      localization: 1,
      user: 1,
      date: data
    })
  })
  it('return only unique service', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 121, user: 1, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 121, user: 2, date: data })
    object.add({ socketId: 'aqui é o socket id 3 ', service: 2, localization: 121, user: 3, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 4, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 5, date: data })
    object.add({ socketId: 'socket id3', service: 4, localization: 121, user: 6, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 121, user: 7, date: data })

    const list = (object.getFilter(2, 121))
    expect(list.length).toBe(3)
    expect(object.getList().length).toBe(7)
  })
  it('remove item', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 1, date: data })
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 2, date: data })
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 3, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 4, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 5, date: data })
    object.add({ socketId: 'socket id3', service: 4, localization: 121, user: 6, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 121, user: 7, date: data })
    object.remove({ socketId: 'socket id4', service: 4, localization: 121, user: 7 })
    expect(object.getList().length).toBe(6)
  })
  it('getGroup item', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 1, user: 1, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 1, user: 2, date: data })
    object.add({ socketId: 'aqui é o socket id 3 ', service: 2, localization: 1, user: 3, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 2, user: 4, date: data })
    object.add({ socketId: 'socket id2', service: 3, localization: 2, user: 5, date: data })
    object.add({ socketId: 'socket id3', service: 1, localization: 2, user: 6, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 2, user: 7, date: data })
    const list = object.getGroup()
    const teste = []
    for (const localization in list) {
      for (const service in list[localization]) {
        // let i = 0
        list[localization][service].forEach((value) => {
          teste.push(value)
          // i++
        })
      }
    }
    expect(object.getList().length).toBe(teste.length)
  })
  it('remove item with SocketID ', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 1, user: 1, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 1, user: 2, date: data })
    object.add({ socketId: 'aqui é o socket id 3 ', service: 2, localization: 1, user: 3, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 2, user: 4, date: data })
    object.add({ socketId: 'socket id2', service: 3, localization: 2, user: 5, date: data })
    object.add({ socketId: 'socket id3', service: 1, localization: 2, user: 6, date: data })
    object.add({ socketId: 'socket', service: 4, localization: 2, user: 7, date: data })
    object.removeSocket('socket')
    expect(object.getList().length).toBe(6)
  })
  it('add itens diff ', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 1, user: 1, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 1, user: 2, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 1, user: 3, date: data })
    object.add({ socketId: 'socket', service: 4, localization: 2, user: 3, date: data })
    expect(object.getList().length).toBe(3)
  })
})
