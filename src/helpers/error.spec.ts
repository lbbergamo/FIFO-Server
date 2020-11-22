import { Error } from '@helpers/Error'

describe('helpers - Error', () => {
  it('get Error', () => {
    expect(Error.Status()).toEqual(false)
  })
  it('data null - Error', () => {
    expect(Error.data).toBeNull()
  })
  it('set Error - sem data', () => {
    const code = 400
    const info = 'Setando um status'
    const erro = {
      code: code,
      info: info
    }
    const error = Error.SetError(erro)
    expect(Error.code).toBe(400)
    expect(Error.info).toContain('Setando um status')
    expect(Error.data).toBeDefined()
  })
  it('set Error', () => {
    const code = 400
    const info = 'Setando um status'
    const erro = {
      code: code,
      info: info,
      data: 'HIHISDHAIDHJAI'
    }
    const error = Error.SetError(erro)
    expect(Error.code).toBe(400)
    expect(Error.info).toContain('Setando um status')
    expect(Error.data).toBeNull()
  })

  it('get Status Error ', () => {
    const code = 400
    const info = 'Setando um status'
    const erro = {
      code: code,
      info: info
    }
    const error = Error.SetError(erro)
    expect(Error.Status()).toEqual(true)
  })
})
