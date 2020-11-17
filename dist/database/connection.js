"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv/config');

const db = (0, _knex.default)({
  client: 'mysql2',
  connection: {
    host: process.env.HOST_MYSQL,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  migrations: {
    directory: _path.default.resolve(__dirname, 'src', 'database', 'migrations')
  }
});
var _default = db;
exports.default = _default;