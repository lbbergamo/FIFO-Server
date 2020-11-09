"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Database = _interopRequireDefault(require("./Database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Category extends _Database.default {
  db = {
    Entity: 'category',
    RequiredFields: ['id', 'name', 'description', 'cover', 'notes'],
    Secure: ['id']
  };

  make(object) {
    this.data = new CategoryModel(object);
  }

}

class CategoryModel {
  constructor(object) {
    this.id = object.id;
    this.description = object.description;
    this.name = object.name;
    this.cover = object.cover;
    this.notes = object.notes;
  }

  get CategoryModel() {
    return this;
  }

}

var _default = Category;
exports.default = _default;