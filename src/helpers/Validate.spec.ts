import { Validate } from './Validate'

const makeSut = (): Validate => {
  return new Validate()
}

describe('helpers - Validate', () => {
  it('get Validate', () => {
    const error = makeSut()
    expect(error.Status()).toEqual(false)
  })
  it('data null - Validate', () => {
    const error = makeSut()
    expect(error.data).toBeUndefined()
  })
  it('set Validate - sem data', () => {
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
  it('set Validate', () => {
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

  it('!info - Validate ', () => {
    const erro = {
      code: 400,
      info: null
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.Status()).toEqual(true)
  })
  it('!code - Validate ', () => {
    const erro = {
      code: null,
      info: '200'
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.Status()).toEqual(true)
  })
})
