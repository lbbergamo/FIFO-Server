"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CategoryController = _interopRequireDefault(require("../controllers/CategoryController"));

var _LocalizationController = _interopRequireDefault(require("../controllers/LocalizationController"));

var _ServiceController = _interopRequireDefault(require("../controllers/ServiceController"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

routes.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Oi, está rota não esta sendo utilizada'
  }).send();
});
/** Localization */

const localizationController = new _LocalizationController.default();
routes.get('/localization', localizationController.get);
routes.post('/localization', localizationController.save);
routes.put('/localization', localizationController.update);
routes.get('/localization/:id', localizationController.find);
routes.delete('/localization', localizationController.delete);
/** Category */

const categoryController = new _CategoryController.default();
routes.post('/category', categoryController.save);
routes.get('/category', categoryController.get);
routes.get('/category/:id', categoryController.find);
routes.put('/category', categoryController.update);
routes.delete('/category', categoryController.delete);
/** Service */

const serviceController = new _ServiceController.default();
routes.post('/service', serviceController.save);
routes.get('/service', serviceController.get);
routes.get('/service/:id', serviceController.find);
routes.put('/service', serviceController.update);
routes.delete('/service', serviceController.delete);
var _default = routes;
exports.default = _default;