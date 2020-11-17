"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.port = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

require('dotenv/config');

const port = process.env.PORT;
exports.port = port;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_index.default); // catch all

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
});
app.listen(port, () => console.log(`\n\n\n **** Server is running, port: ${port} ****\n\n\n`));