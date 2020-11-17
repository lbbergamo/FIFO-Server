"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CategoryController = _interopRequireDefault(require("../controllers/CategoryController"));

var _LocalizationController = _interopRequireDefault(require("../controllers/LocalizationController"));

var _LocalizationServiceController = _interopRequireDefault(require("../controllers/LocalizationServiceController"));

var _QueueController = _interopRequireDefault(require("../controllers/QueueController"));

var _ServiceController = _interopRequireDefault(require("../controllers/ServiceController"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

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
/** User */

const userController = new _UserController.default();
routes.post('/user', userController.save);
routes.get('/user', userController.get);
routes.get('/user/:id', userController.find);
routes.put('/user', userController.update);
routes.delete('/user', userController.delete);
/** LocalizationService */

const localizationServiceController = new _LocalizationServiceController.default();
routes.post('/localization_service', localizationServiceController.save);
routes.get('/localization_service', localizationServiceController.get);
routes.get('/localization_service/:id', localizationServiceController.find);
routes.put('/localization_service', localizationServiceController.update);
routes.delete('/localization_service', localizationServiceController.delete);
/** Queue */

const queueController = new _QueueController.default();
routes.post('/queue', queueController.save);
routes.get('/queue', queueController.get);
routes.get('/queue/:id', queueController.find);
routes.put('/queue', queueController.update);
routes.delete('/queue', queueController.delete);
var _default = routes;
exports.default = _default;