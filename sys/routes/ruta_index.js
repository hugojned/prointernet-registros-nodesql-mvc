const express = require('express')
const router = express.Router()

//Redirige a diferentes rutas
router.use(require('./ruta_routes'))

//Redirige a las vistas
router.use(require('./ruta_vistas'))

module.exports = router