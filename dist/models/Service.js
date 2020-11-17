"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Database = _interopRequireDefault(require("./Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
class Service extends _Database.default {
  db = {
    Entity: 'service',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes', 'status', 'category_id'],
    Secure: ['id']
  };

  make(object) {
    this.data = new ServiceModel(object);
  }

}

class ServiceModel {
  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.description = object.description;
    this.cover = object.cover;
    this.notes = object.notes;
    this.status = 'pending';
    this.category_id = object.category_id;
  }

  get ServiceModel() {
    return this;
  }

}

var _default = Service;
exports.default = _default;