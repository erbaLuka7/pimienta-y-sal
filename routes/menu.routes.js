const express = require('express')
const router = express.Router()
const controladorMenu = require('../controllers/menu')

router.get('/', controladorMenu.detalle)

module.exports = router