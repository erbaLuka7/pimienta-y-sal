const express = require('express')
const router = express.Router()
const controladorIndex = require('../controllers/index')

router.get('/', controladorIndex.home)

module.exports = router