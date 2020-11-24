import { Validation } from './Validation'

const makeSut = (): Validation => {
  return new Validation()
}

describe('helpers - Validation', () => {
  it('existsOrError - !values', () => {
    const validation = makeSut()
    const error = {
      value: null,
      msg: 'any',
      code: 500
    }
    const test = validation.existsOrError(error)
    expect(test.status).toEqual(true)
  })
  it('existsOrError - full - Validation', () => {
    const validation = makeSut()
    const error = {
      value: 'any',
      msg: 'any',
      code: 500
    }
    const test = validation.existsOrError(error)
    expect(test.status).toEqual(false)
  })
  it('existsOrError - null ', () => {
    const erro = {
      code: null,
      info: '200',
      value: ''
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.status).toEqual(true)
  })
  it('existsOrError - array null ', () => {
    const erro = {
      code: null,
      info: '200',
      value: ['']
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.status).toEqual(true)
  })
  it('existsOrError - 0 ', () => {
    const erro = {
      code: null,
      info: '200',
      value: 0
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.status).toEqual(true)
  })
  it('existsOrError - 1 ', () => {
    const erro = {
      code: null,
      info: '200',
      value: 0
    }
    const error = makeSut()
    error.SetError(erro)
    expect(error.status).toEqual(true)
  })
  it('validateEmail - validated ', () => {
    const erro = {
      code: 200,
      msg: '200',
      value: 'joao@este.com'
    }
    const error = makeSut()
    error.validateEmail(erro)
    expect(error.status).toEqual(false)
    expect(error.code).toEqual(200)
    expect(error.info).toEqual('200')
  })
  it('validateEmail - !validated ', () => {
    const erro = {
      code: 200,
      msg: '200',
      value: 'joa'
    }
    const error = makeSut()
    error.validateEmail(erro)
    expect(error.status).toEqual(true)
    expect(error.code).toEqual(400)
    expect(error.info).toEqual('E-mail inválido')
  })
  it('validateEmail - !validated value@domain ', () => {
    const erro = {
      code: 200,
      msg: '200',
      value: 'joa@sxa'
    }
    const error = makeSut()
    error.validateEmail(erro)
    expect(error.status).toEqual(true)
    expect(error.code).toEqual(400)
    expect(error.info).toEqual('E-mail inválido')
  })
  it('notExistsOrError - true ', () => {
    const erro = {
      code: 200,
      msg: '200',
      value: 'joa@'
    }
    const error = makeSut()
    error.notExistsOrError(erro)
    expect(error.status).toEqual(false)
  })
  it('notExistsOrError - not msg ', () => {
    const erro = {
      code: 200,
      msg: '',
      value: 'joa@'
    }
    const error = makeSut()
    error.notExistsOrError(erro)
    expect(error.status).toEqual(true)
  })
})
