const express = require('express')
const router = express.Router()
const registroCtrl = require('../controllers/control_registro')

//Post de selección del carnet
router.post('/rtSelectCarnet', registroCtrl.selectCarnetCtrl)

//Registro del carnet
router.post('/rtEnviarRegistro', registroCtrl.registroEnviarRegistroCtrl)


//Vista del resumen GET
//router.get()

module.exports = router
