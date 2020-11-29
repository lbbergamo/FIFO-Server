interface IHelpers {
  readonly status?: boolean,
  info: string,
  code: number
  data?: any
}

interface IValidation {
  value: any,
  msg: string,
  code: number
}

interface Helpers {
  readonly status?: boolean,
  info: string,
  code: number
  readonly data?: any
  existCode (obj: IHelpers): IHelpers
  existInfo (obj: IHelpers): IHelpers
}
