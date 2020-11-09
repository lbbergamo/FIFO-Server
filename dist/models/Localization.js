"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Database = _interopRequireDefault(require("./Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Localization extends _Database.default {
  db = {
    Entity: 'localization',
    RequiredFields: ['id', 'name', 'cover', 'notes'],
    Secure: ['id']
  };

  make(object) {
    this.data = new LocalizationModel(object);
  }

}

class LocalizationModel {
  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.cover = object.cover;
    this.notes = object.notes;
  }

  get LocalizationModel() {
    return this;
  }

}

var _default = Localization;
exports.default = _default;