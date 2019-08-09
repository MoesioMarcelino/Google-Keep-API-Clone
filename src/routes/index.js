const express = require('express')

const UserController = require('../controllers/UserController')
const NoteController = require('../controllers/NoteController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send({ message: 'Ok!' })
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/notes/:username', NoteController.index)
routes.post('/users/notes/:username', NoteController.store)

module.exports = routes
