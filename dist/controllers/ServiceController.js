"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = _interopRequireDefault(require("../helpers"));

var _Category = _interopRequireDefault(require("../models/Category"));

var _Service = _interopRequireDefault(require("../models/Service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ServiceController {
  /**
  * Realiza o cadastro
  * @param req Request
  * @param res Response
  * @return Response
  */
  async save(req, res) {
    try {
      _helpers.default.existsOrError(req.body.name, 'Nome não informado.');

      _helpers.default.existsOrError(req.body.category_id, 'Categoria não informada.');

      _helpers.default.notExistsOrError(req.body.id, 'Favor utilizar a rota update');
    } catch (error) {
      return res.status(400).send({
        message: error
      });
    }

    const service = new _Service.default();
    service.make(req.body);
    const objectData = await service.save();

    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error());
    }

    return res.status(201).send(objectData);
  }
  /**
   * Realiza a pesquisa
   * @param req Request
   * @param res Response
   * @return Response
   */


  async get(req, res) {
    const service = new _Service.default();
    const findService = await service.get();

    if (findService == null) {
      return res.status(401).send({});
    }

    const result = [];

    for (const service of findService) {
      const category = new _Category.default();
      category.requiredFields(['id', 'name', 'description', 'cover', 'notes']);
      const findCategory = await category.findId(service.category_id);

      if (!category.erro.Status()) {
        service.category = findCategory;
      }

      result.push(service);
    }

    return res.status(201).json(result);
  }
  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */


  async find(req, res) {
    const service = new _Service.default();
    const findService = await service.findId(req.params.id);

    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error());
    }

    const result = [];

    for (const service of findService) {
      const category = new _Category.default();
      category.requiredFields(['id', 'name', 'description', 'cover', 'notes']);
      const findCategory = await category.findId(service.category_id);

      if (!category.erro.Status()) {
        service.category = findCategory;
      }

      result.push(service);
    }

    return res.status(201).json(result);
  }
  /**
  * Realiza o Update pelo id
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */


  async update(req, res) {
    if (req.body.id == null) return res.status(401).send({
      message: 'Falta o id'
    });
    const service = new _Service.default();
    service.make(req.body);
    const objectData = await service.save();

    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error());
    }

    return res.status(201).json(objectData);
  }
  /**
  * Realiza a exclusão pelo ID
  * @param req Request - required ID
  * @param res Response
  * @return Response
  */


  async delete(req, res) {
    if (req.body.id == null) return res.status(401).send({
      message: 'Falta o id'
    });
    const service = new _Service.default();
    service.make(req.body);
    const objectData = await service.delete(req.body.id);

    if (service.erro.Status()) {
      return res.status(401).send(service.erro.Error());
    }

    return res.status(201).json(objectData);
  }

}

var _default = ServiceController;
exports.default = _default;