interface IDatabase {
  Entity: String
  Secure: Array<String>
  RequiredFields: Array<String>
  init (): void
}

interface IInit {
  __constructor (entity: number, secure: Array<String>, requiredFields: Array<String>): void;
}
