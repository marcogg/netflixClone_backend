// Loading node modules
const express = require('express')
const router = express.Router()
const {getMovies, postMovies} = require('../controllers/moviesController')

router.get('/', getMovies)
router.post('/movies', postMovies)

module.exports = router