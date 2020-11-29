import CoverController from '@controllers/CoverController'
import LocalizationController from '@controllers/LocalizationController'
import LocalizationServiceController from '@controllers/LocalizationServiceController'
import QueueController from '@controllers/QueueController'
import ServiceController from '@controllers/ServiceController'
import UserController from '@controllers/UserController'
import express from 'express'

const routes = express.Router()
const path = require('path')
routes.get('/', (request, response) => {
  return response.sendFile(path.join('index.html'), { root: './src/views' })
})

/** Rotas Adm */
/** Localization */
const localizationController = new LocalizationController()
routes.post('/admin/localization', localizationController.save)
routes.put('/admin/localization', localizationController.update)
routes.get('/admin/localization/:id', localizationController.find)
routes.delete('/admin/localization', localizationController.delete)

/** Service */
const serviceController = new ServiceController()
routes.post('/admin/service', serviceController.save)
routes.get('/admin/service', serviceController.get)
routes.get('/admin/service/:id', serviceController.find)
routes.put('/admin/service', serviceController.update)
routes.delete('/admin/service', serviceController.delete)

/** User */
const userController = new UserController()
routes.get('/admin/user', userController.get)
routes.get('/admin/user/:id', userController.find)
routes.put('/admin/user', userController.update)
routes.delete('/admin/user', userController.delete)

/** LocalizationService */
const localizationServiceController = new LocalizationServiceController()
routes.post('/admin/localization_service', localizationServiceController.save)
routes.get('/admin/localization_service', localizationServiceController.get)
routes.put('/admin/localization_service', localizationServiceController.update)
routes.delete('/admin/localization_service', localizationServiceController.delete)

/** Queue */
const queueController = new QueueController()
routes.post('/admin/queue', queueController.save)
routes.get('/admin/queue', queueController.get)
routes.get('/admin/queue/:id', queueController.find)
routes.put('/admin/queue', queueController.update)
routes.delete('/admin/queue', queueController.delete)

/** Cover */
const coverController = new CoverController()
routes.post('/admin/cover', coverController.save)
routes.get('/admin/cover', coverController.get)
routes.get('/admin/cover/:id', coverController.find)
routes.put('/admin/cover', coverController.update)
routes.delete('/admin/cover', coverController.delete)

/** Rotas Publicas */
/** Retornando arquivos */
routes.use('/covers', express.static(path.resolve(__dirname, '..', 'covers')))

/** Buscando as localizações */
routes.get('/localization', localizationController.get)

/** Cadastrando User
 * @param body informando o e-mail
*/
routes.post('/user/login', userController.login)
/**
 * Cadastrando usuario por um formulario de cadastro
 */
routes.post('/user', userController.save)

/** Localizando serviços da localização */
routes.get('/localization_service/:localization', localizationServiceController.findLocalization)

/** Queue */
/** Entrando na fila  */
routes.post('/queue/entryQueue', queueController.save)

/** status da fila
 * @param body - localization and service
*/
routes.post('/queue/statusQueue', queueController.statusQueue)

/**
 * Saindo da fila
 * @param body - id da fila
 */
routes.post('/queue/exitQueue', queueController.exitQueue)

export default routes
