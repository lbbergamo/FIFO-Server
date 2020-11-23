import { Helpers } from './Helpers'

const makeSut = (): Helpers => {
  return new Helpers()
}

describe('helpers - Helpers', () => {
  it('get Helpers', () => {
    const error = makeSut()
    expect(error.Status()).toEqual(false)
  })
  it('data null - Helpers', () => {
    const error = makeSut()
    expect(error.data).toBeUndefined()
  })
  it('set Helpers - sem data', () => {
    const erro = {
      code: 400,
      info: 'test de status'
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.code).toBe(400)
    expect(error.info).toContain('test de status')
    expect(error.data).toBeUndefined()
  })
  it('set Helpers', () => {
    const erro = {
      code: 400,
      info: 'test de status',
      data: 'test'
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.code).toBe(400)
    expect(error.info).toContain('test de status')
    expect(error.data).not.toBeUndefined()
  })

  it('!info - Helpers ', () => {
    const erro = {
      code: 400,
      info: null
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.Status()).toEqual(true)
  })
  it('!code - Helpers ', () => {
    const erro = {
      code: null,
      info: '200'
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.Status()).toEqual(true)
  })
})
