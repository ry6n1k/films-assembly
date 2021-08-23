const express = require('express')
const controller = require('./controller')
const router = express.Router()

router.get('/films', controller.show)
router.get('/film/:id', controller.get)

module.exports = router