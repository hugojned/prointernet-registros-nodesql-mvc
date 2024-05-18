const express = require('express')
const router = express.Router()
const registroCtrl = require('../controllers/control_registro')

router.post('/rtSelectCarnet', registroCtrl.rtSelectCarnet)

module.exports = router
