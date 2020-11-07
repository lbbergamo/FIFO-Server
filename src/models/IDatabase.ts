interface IDatabase {
  Entity: string
  Secure: Array<String>
  RequiredFields: Array<String>;
  init (): void
}

interface IRequiredFields {
  [index: number]: string;
}

interface IProtected {
  [index: number]: string;
}

interface IInit {
  entity: string
  secure: IProtected
  requiredFields: IRequiredFields;
  __constructor (entity: number, secure: IProtected, requiredFields: IRequiredFields): void;
}
