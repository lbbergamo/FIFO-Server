interface IError {
  readonly status?: boolean,
  info: string,
  code: number
  readonly data?: any
}
