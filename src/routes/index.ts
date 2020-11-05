import CategoryController from '@controllers/CategoryController'
import LocalizationController from '@controllers/LocalizationController'
import express from 'express'

const routes = express.Router()
routes.get('/', (request, response) => {
  return response.status(200).json({ message: 'First route' })
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

export default routes
