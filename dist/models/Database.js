"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _Error = _interopRequireDefault(require("../helpers/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Database {
  erro = new _Error.default();
  /**
   * make - transforma o objeto
   * @param object || any
   * @return void
   */

  make(object) {
    this.data = object;
  }
  /**
   * FindId
   * @param name
   * @param RequiredFields
   * @return object
   */


  findId(name, RequiredFields = this.db.RequiredFields) {
    return (0, _connection.default)(this.db.Entity).select(RequiredFields).where({
      id: name
    }).then(object => {
      return object;
    }).catch(err => {
      return err;
    });
  }
  /**
   * Get
   * @return object||Array
   */


  async get() {
    const data = await (0, _connection.default)(this.db.Entity).select(this.db.RequiredFields).then(object => {
      return object;
    }).catch(err => {
      return err;
    });
    return data;
  }
  /**
   * Delete id
   * @param id : number
   * @return resultado
   */


  async delete(id) {
    const data = await (0, _connection.default)(this.db.Entity).where({
      id: id
    }).del().then(object => {
      return object ? {
        message: 'Item excluído com sucesso'
      } : this.erro.setError('Não foi possível realizar o delete');
    }).catch(err => {
      return err;
    });
    return data;
  }
  /**
   * Set update
   * @param object object
   * @return object
   */


  async update(object) {
    return (0, _connection.default)(this.db.Entity).update(object).where({
      id: object.id
    }).then(objects => {
      return objects != null && objects ? object.id : this.erro.setError('Erro ao fazer o Update');
    }).catch(err => {
      return this.erro.setError(err);
    });
  }
  /**
   * Create DB
   * @param object Object
   * @return object
   */


  async create(object) {
    const data = await (0, _connection.default)(this.db.Entity).insert(object).then(object => {
      return object;
    }).catch(err => {
      return this.erro.setError(err);
    });
    return data;
  }
  /**
   * Save DB
   * @param returnData
   * @return result
   */


  async save(returnData = true) {
    let result = null;
    /** Verifica se tem objeto */

    if (this.data == null || this.db == null) {
      return {
        message: 'Ocorreu um error no model iniciado'
      };
    }

    if (this.data.id != null) {
      result = await this.update(this.data);
    } else {
      result = await this.create(this.data);
    }

    if (this.erro.Status()) {
      return this.erro.Error();
    }

    if (returnData) {
      result = this.findId(result);
    }

    return result;
  }
  /**
   * *************
   * ** Helpers **
   * *************
   */

  /**
   * requiredFields
   * @param requiredFields
   * @return void
   */


  requiredFields(requiredFields) {
    this.db.RequiredFields = requiredFields;
  }

}

var _default = Database;
exports.default = _default;