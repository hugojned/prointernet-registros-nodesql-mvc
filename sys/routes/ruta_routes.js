const express = require('express')
const router = express.Router()
const registroCtrl = require('../controllers/control_registro')

//Post de selección del carnet
router.post('/rtSelectCarnet', registroCtrl.selectCarnetCtrl)

//Registro del carnet
router.post('/rtEnviarRegistro', registroCtrl.registroEnviarRegistroCtrl)


module.exports = router
