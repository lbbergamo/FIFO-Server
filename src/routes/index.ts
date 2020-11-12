import CategoryController from '@controllers/CategoryController'
import LocalizationController from '@controllers/LocalizationController'
import LocalizationServiceController from '@controllers/LocalizationServiceController'
import ServiceController from '@controllers/ServiceController'
import UserController from '@controllers/UserController'
import express from 'express'

const routes = express.Router()
routes.get('/', (request, response) => {
  return response.status(200).json({ message: 'Oi, está rota não esta sendo utilizada' }).send()
})

/** Localization */
const localizationController = new LocalizationController()
routes.get('/localization', localizationController.get)
routes.post('/localization', localizationController.save)
routes.put('/localization', localizationController.update)
routes.get('/localization/:id', localizationController.find)
routes.delete('/localization', localizationController.delete)

/** Category */
const categoryController = new CategoryController()
routes.post('/category', categoryController.save)
routes.get('/category', categoryController.get)
routes.get('/category/:id', categoryController.find)
routes.put('/category', categoryController.update)
routes.delete('/category', categoryController.delete)

/** Service */
const serviceController = new ServiceController()
routes.post('/service', serviceController.save)
routes.get('/service', serviceController.get)
routes.get('/service/:id', serviceController.find)
routes.put('/service', serviceController.update)
routes.delete('/service', serviceController.delete)

/** User */
const userController = new UserController()
routes.post('/user', userController.save)
routes.get('/user', userController.get)
routes.get('/user/:id', userController.find)
routes.put('/user', userController.update)
routes.delete('/user', userController.delete)

/** LocalizationService */
const localizationServiceController = new LocalizationServiceController()
routes.post('/localization_service', localizationServiceController.save)
routes.get('/localization_service', localizationServiceController.get)

export default routes
