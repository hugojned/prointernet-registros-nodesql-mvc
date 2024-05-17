const ctrlinicio = {
    inicio: (req, res) => {
        res.render('index')
    },
    r404: (req, res) => {
        res.send('404 - Pagina no encontrada')
    },
}

module.exports = ctrlinicio