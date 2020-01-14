const {Router} = require('express')
const DevController = require('./Controllers/DevController')
const SearchController = require('./Controllers/SearchController')

const routes = Router()

routes.post('/api/devs',DevController.store )

routes.get('/api/devs',DevController.index)
routes.get('/api/search',SearchController.index)

 module.exports = routes