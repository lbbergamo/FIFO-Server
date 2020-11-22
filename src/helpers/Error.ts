export class Error implements IError {
  private static status: boolean = false;
  info: string
  code: number
  static info = []
  static code: number

  static SetError (Error: IError): void {
    this.status = Error.status ?? true
    this.info.push(Error.info)
    this.code = Error.code
  }

  static Status () {
    return (this.status ?? false)
  }

  get Error (): IError {
    return {
      code: this.code,
      info: this.info,
      status: Error.Status()
    }
  }
}
