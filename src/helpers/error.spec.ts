import { Error } from '@helpers/Error'

describe('helpers - Error', () => {
  it('get Error', () => {
    const error = new Error()
    expect(error.Status()).toEqual(false)
  })
  it('data null - Error', () => {
    const error = new Error()
    expect(error.data).toBeUndefined()
  })
  it('set Error - sem data', () => {
    const code = 400
    const info = 'test de status'
    const erro = {
      code: code,
      info: info
    }
    const error = new Error()
    error.SetError(erro)
    expect(error.code).toBe(400)
    expect(error.info).toContain('test de status')
    expect(error.data).toBeUndefined()
  })
  it('set Error', () => {
    const code = 400
    const info = 'test de status'
    const erro = {
      code: code,
      info: info,
      data: 'test'
    }
    const error = new Error()
    error.SetError(erro)
    expect(error.code).toBe(400)
    expect(error.info).toContain('test de status')
    expect(error.data).toBeUndefined()
  })

  it('get Status Error ', () => {
    const code = 400
    const info = 'test de status'
    const erro = {
      code: code,
      info: info
    }
    const error = new Error()
    error.SetError(erro)
    expect(error.Status()).toEqual(true)
  })
})
