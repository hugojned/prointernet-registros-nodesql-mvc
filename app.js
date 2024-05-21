require('dotenv').config()

const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Motor de plantillas
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, `./views`));
hbs.registerPartials(path.join(__dirname, `./views/partials`));
hbs.registerPartials(path.join(__dirname, `./views/registroCarnets`));
hbs.registerPartials(path.join(__dirname, `./views/resumen`));

// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Archivos estaticos
app.use(express.static(path.join(__dirname, './assets')))

//Enruta al indice
app.use(require('./sys/routes/ruta_index'))

app.listen(port, () => {
    console.log('Puerto:', port)
})