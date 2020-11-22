export class Validate implements Validate {
  status?: boolean;
  info: string;
  code: number;
  data?: any;

  constructor () {
    this.status = false
  }

  SetError (obj: IValidate): void {
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

  get Error (): IValidate {
    return {
      code: this.code,
      info: this.info,
      status: this.status,
      data: this.data ?? null
    }
  }

  existCode (value: IValidate): IValidate {
    if (!value.code) {
      this.info = 'Falta o code'
      this.code = 500
      this.status = true
      return this
    }
    return this
  }

  existInfo (value: IValidate): IValidate {
    if (!value.info) {
      this.info = 'Falta a info'
      this.code = 500
      this.status = true
      return this
    }
    return this
  }
}
