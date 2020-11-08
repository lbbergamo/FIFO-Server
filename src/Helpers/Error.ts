class Error implements IError {
  public status = false
  public info = []

  setError (erro: any): void {
    this.status = true
    this.info.push(erro)
  }

  Status () {
    return this.status
  }

  Error () {
    return this
  }
}

export default Error
