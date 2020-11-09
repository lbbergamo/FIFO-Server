"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Localization = _interopRequireDefault(require("../models/Localization"));

var _helpers = _interopRequireDefault(require("../helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LocalizationController {
  /**
   * Realiza a criação
   * @param req Request
   * @param res Response
   * @return Response
   */
  async save(req, res) {
    try {
      _helpers.default.existsOrError(req.body.name, 'Nome da localização não informado');

      _helpers.default.existsOrError(req.body.description, 'Descrição não informado');

      _helpers.default.notExistsOrError(req.body.id, 'Favor utilizar a rota update');
    } catch (msg) {
      return res.status(400).send(msg);
    }

    const localization = new _Localization.default();
    localization.make(req.body);
    const localizationData = await localization.save();

    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error());
    }

    return res.status(201).send(localizationData);
  }
  /**
  * Realiza a pesquisa
  * @param req Request
  * @param res Response
  * @return Response
  */


  async get(req, res) {
    const localization = new _Localization.default();
    const localizationData = await localization.get();

    if (localizationData == null) {
      return res.status(401).send({});
    } else {
      return res.status(201).send(localizationData);
    }
  }
  /**
  * Realiza a pesquisa pelo ID
  * @param req Request - request ID
  * @param res Response
  * @return Response
  */


  async find(req, res) {
    const localization = new _Localization.default();
    const localizationData = await localization.findId(req.params.id);

    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error());
    } else {
      return res.status(201).send(localizationData);
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
    const localization = new _Localization.default();
    localization.make(req.body);
    const localizationData = await localization.save();

    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error());
    }

    return res.status(201).json(localizationData);
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
    const localization = new _Localization.default();
    localization.make(req.body);
    const localizationData = await localization.delete(req.body.id);

    if (localization.erro.Status()) {
      return res.status(401).send(localization.erro.Error());
    }

    return res.status(201).json(localizationData);
  }

}

var _default = LocalizationController;
exports.default = _default;