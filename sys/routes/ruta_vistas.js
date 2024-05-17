const express = require('express')
const router = express.Router()

//Importación del control inicio
const inicio = require('../controllers/control_inicio')

router.get('/', inicio.inicio)
// router.get('/contacto', contacto.contacto)
// router.get('/404', inicio.r404)
// router.get('/:evento', registro.registro)

module.exports = router
