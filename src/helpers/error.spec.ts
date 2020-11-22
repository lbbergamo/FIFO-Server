import { Error } from '@helpers/Error'

describe('helpers - Error', () => {
  it('get Error', () => {
    expect(Error.Status()).toEqual(false)
  })
  it('set Error', () => {
    const code = 400
    const info = 'Setando um status'
    const erro = {
      code: code,
      info: info
    }
    const error = Error.SetError(erro)
    expect(Error.code).toBe(400)
    expect(Error.info).toEqual(['Setando um status'])
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
