"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Category = _interopRequireDefault(require("../models/Category"));

var _helpers = _interopRequireDefault(require("../helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoryController {
  /**
   * Realiza o cadastro
   * @param req Request
   * @param res Response
   * @return Response
   */
  async save(req, res) {
    try {
      _helpers.default.existsOrError(req.body.name, 'Nome não informado');

      _helpers.default.existsOrError(req.body.description, 'Descrição não informado');

      _helpers.default.notExistsOrError(req.body.id, 'Favor utilizar a rota update');
    } catch (msg) {
      return res.status(400).send({
        message: msg
      });
    }

    const category = new _Category.default();
    category.make(req.body);
    const categoryData = await category.save();

    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error());
    }

    return res.status(201).json(categoryData);
  }
  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */


  async find(req, res) {
    const category = new _Category.default();
    if (req.params.id == null) return res.status(401).send({
      message: 'Falta o id'
    });
    const categoryData = await category.findId(req.params.id);

    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error());
    } else {
      return res.status(201).json(categoryData);
    }
  }
  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */


  async get(req, res) {
    const category = new _Category.default();
    const categoryData = await category.get();

    if (categoryData == null) {
      return res.status(401).send({});
    } else {
      return res.status(201).json(categoryData);
    }
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
    const category = new _Category.default();
    category.make(req.body);
    const categoryData = await category.save();

    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error());
    }

    return res.status(201).json(categoryData);
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
    const category = new _Category.default();
    category.make(req.body);
    const categoryData = await category.delete(req.body.id);

    if (category.erro.Status()) {
      return res.status(401).send(category.erro.Error());
    }

    return res.status(201).json(categoryData);
  }

}

var _default = CategoryController;
exports.default = _default;