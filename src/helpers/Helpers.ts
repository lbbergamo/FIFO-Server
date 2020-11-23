export class Helpers implements Helpers {
  status?: boolean;
  info: string;
  code: number;
  data?: any;

  constructor () {
    this.status = false
  }

  SetError (obj: IHelpers): void {
    this.info = obj.info
    this.code = obj.code
    this.status = obj.status ?? true
    this.data = obj.data
    this.existCode(obj)
    this.existInfo(obj)
  }

  Status () {
    return (this.status ?? false)
  }

  get Error (): IHelpers {
    return {
      code: this.code,
      info: this.info,
      status: this.status,
      data: this.data ?? null
    }
  }

  existCode (value: IHelpers): IHelpers {
    if (!value.code) {
      this.info = 'Falta o code'
      this.code = 500
      this.status = true
      return this
    }
    return this
  }

  existInfo (value: IHelpers): IHelpers {
    if (!value.info) {
      this.info = 'Falta a info'
      this.code = 500
      this.status = true
      return this
    }
    return this
  }
}
