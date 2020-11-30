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
routes.post('/admin/localization', localizationController.saveLocalization)
routes.put('/admin/localization', localizationController.updateLocalization)
routes.get('/admin/localization/:id', localizationController.findLocalization)
routes.delete('/admin/localization', localizationController.deleteLocalization)

/** Service */
const serviceController = new ServiceController()
routes.post('/admin/service', serviceController.saveService)
routes.get('/admin/service', serviceController.getService)
routes.get('/admin/service/:id', serviceController.findService)
routes.put('/admin/service', serviceController.updateService)
routes.delete('/admin/service', serviceController.deleteService)

/** User */
const userController = new UserController()
routes.get('/admin/user', userController.getUser)
routes.get('/admin/user/:id', userController.findUser)
routes.put('/admin/user', userController.updateUser)
routes.delete('/admin/user', userController.deleteUser)

/** LocalizationService */
const localizationServiceController = new LocalizationServiceController()
routes.post('/admin/localization_service', localizationServiceController.saveLocService)
routes.get('/admin/localization_service', localizationServiceController.getLocService)
routes.put('/admin/localization_service', localizationServiceController.updateLocService)
routes.delete('/admin/localization_service', localizationServiceController.deleteLocService)

/** Queue */
const queueController = new QueueController()
routes.post('/admin/queue', queueController.saveQueue)
routes.get('/admin/queue', queueController.getQueue)
routes.get('/admin/queue/:id', queueController.findQueue)
routes.put('/admin/queue', queueController.updateQueue)
routes.delete('/admin/queue', queueController.deleteQueue)

/** Cover */
const coverController = new CoverController()
routes.post('/admin/cover', coverController.saveCover)
routes.get('/admin/cover', coverController.getCover)
routes.get('/admin/cover/:id', coverController.findCover)
routes.put('/admin/cover', coverController.updateCover)
routes.delete('/admin/cover', coverController.deleteCover)

/** Rotas Publicas */
/** Retornando arquivos */
routes.use('/covers', express.static(path.resolve(__dirname, '..', 'covers')))

/** Buscando as localizações */
routes.get('/localization', localizationController.getLocalization)

/** Cadastrando User
 * @param body informando o e-mail
*/
routes.post('/user/login', userController.loginUser)
/**
 * Cadastrando usuario por um formulario de cadastro
 */
routes.post('/user', userController.save)

/** Localizando serviços da localização */
routes.get('/localization_service/:localization', localizationServiceController.findLocService)

/** Queue */
/** Entrando na fila  */
routes.post('/queue/entryQueue', queueController.saveQueue)

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
