const express = require('express')
const router = express.Router()

//Importación del control inicio y 404
const inicio = require('../controllers/control_inicio')

//Importación de los métodos de registro para obtener los parametros
const rtRegistro = require('../controllers/control_registro')

router.get('/', inicio.inicio)
router.get('/404', inicio.r404)

//Params required
router.get('/registro', rtRegistro.registroVistaCtrl)

// router.get('/contacto', contacto.contacto)
// router.get('/404', inicio.r404)
// router.get('/:evento', registro.registro)

module.exports = router
