const ctrlinicio = {

    //Index o raíz '/'
    inicio: (req, res) => {
        res.render('index')
    },

    //Página no encontrada
    r404: (req, res) => {
        res.send('404 - Pagina no encontrada')
    },
}

module.exports = ctrlinicio