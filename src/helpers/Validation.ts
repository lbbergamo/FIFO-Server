import { Validate } from './Validate'
export class Validation extends Validate {
  status?: boolean
  info: string
  code: number
  data?: any

  existsOrError (value: IValidation): IValidate {
    this.info = value.msg
    this.code = value.code
    if (!value.value) {
      this.status = true
      return this
    }
    if (Array.isArray(value) && value.length === 0) {
      this.status = true
      return this
    }
    if (typeof value.value === 'string' && !value.value.trim()) {
      this.status = true
      return this
    }
    this.existCode({ info: value.msg, code: value.code })
    this.existInfo({ info: value.msg, code: value.code })
    return this
  }

  validateEmail (value: IValidation): IValidate {
    this.info = value.msg
    this.code = value.code
    var re = /\S+@\S+\.\S+/
    if (!re.test(value.value)) {
      this.status = true
      this.code = 500
      this.info = 'email invalido'
      return this
    }
    this.existCode({ info: value.msg, code: value.code })
    this.existInfo({ info: value.msg, code: value.code })
    return this
  }

  notExistsOrError (value: IValidation): IValidate {
    const erro = this.existsOrError(value)
    if (erro.status) {
      this.status = true
      return this
    }
    this.status = false
    this.existCode({ info: value.msg, code: value.code })
    this.existInfo({ info: value.msg, code: value.code })
    return this
  }
}
