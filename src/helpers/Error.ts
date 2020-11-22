export class Error implements IError {
  status?: boolean;
  info: string;
  code: number;
  data?: any;

  constructor () {
    this.status = false
  }

  SetError (Error: IError): void {
    this.status = Error.status ?? true
    this.info = Error.info
    this.code = Error.code
  }

  Status () {
    return (this.status ?? false)
  }

  get Error (): IError {
    return {
      code: this.code,
      info: this.info,
      status: this.status,
      data: this.data ?? null
    }
  }
}
