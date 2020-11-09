"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _knex = _interopRequireDefault(require("knex"));

var _databaseConfig = require("../config/database-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const db = (0, _knex.default)({
  client: 'mysql2',
  connection: {
    host: _databaseConfig.HOST_MYSQL,
    database: _databaseConfig.DATABASE_NAME,
    user: _databaseConfig.DATABASE_USER,
    password: _databaseConfig.DATABASE_PASSWORD
  },
  migrations: {
    directory: _path.default.resolve(__dirname, 'src', 'database', 'migrations')
  } // useNullAsDefault: true

});
var _default = db;
exports.default = _default;