const express = require('express')
const controller = require('../controllers/movieController')
const router = express.Router()

router.use('/post', controller.post)
router.use('/add-film', controller.add)
router.use('/', controller.show)

module.exports = router