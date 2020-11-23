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
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id 3 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id3', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 121, user: 121, date: data })

    const list = (object.getFilter(2, 121))
    expect(list.length).toBe(3)
    expect(object.getList().length).toBe(7)
  })
  it('remove unique item', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id 1 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id 2 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id 3 ', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id3', service: 4, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 121, user: 121, date: data })
    object.remove({ socketId: '', service: 4, localization: 121, user: 121 })
    expect(object.getList().length).toBe(0)
  })
  it('remove item', () => {
    const object = makeSut()
    const data = new Date()
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'aqui é o socket id', service: 2, localization: 121, user: 121, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 12, date: data })
    object.add({ socketId: 'socket id2', service: 4, localization: 121, user: 12, date: data })
    object.add({ socketId: 'socket id3', service: 4, localization: 121, user: 12, date: data })
    object.add({ socketId: 'socket id4', service: 4, localization: 121, user: 12, date: data })
    object.remove({ socketId: 'socket id4', service: 4, localization: 121, user: 12 })
    expect(object.getList().length).toBe(3)
  })
})
