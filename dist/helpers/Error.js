"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Error {
  status = false;
  info = [];

  setError(erro) {
    this.status = true;
    this.info.push(erro);
  }

  Status() {
    return this.status;
  }

  Error() {
    return this;
  }

}

var _default = Error;
exports.default = _default;