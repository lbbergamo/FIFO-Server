interface IValidate {
  readonly status?: boolean,
  info: string,
  code: number
  data?: any
}

interface IValidation {
  value: string,
  msg: string,
  code: number
}

interface Validate {
  readonly status?: boolean,
  info: string,
  code: number
  readonly data?: any
  existCode (obj: IValidate): IValidate
  existInfo (obj: IValidate): IValidate
}
