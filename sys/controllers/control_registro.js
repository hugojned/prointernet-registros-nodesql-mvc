const dbReg = require('../db/db_registro')

const registroCtrl = {
    //Controlador de cambio de precio al seleccionar la cantidad de carnets
    selectCarnetCtrl: async (req, res) => {
        try{
            const body = req.body
            body.numCarnet = Number(body.numCarnetValor)
            const datosEvento = (await dbReg.recibirDatosEvento(body)).data[0]
            const numCarnet = body.numCarnet
            const carnet = []

            for(let i = 0; i < numCarnet; i++){
                carnet.push({numCarnet: i + 1})
            }

            //Aplicación del despliegue de los carnets haciendo uso de handlebars

            //Backend-carnets
            res.render('registroCarnets/backend_carnets', {carnet, datosEvento}, (err, htmlCarnets) => {
                if(err){
                    return res.json({status: 'ERROR'})
                }
                console.log(htmlCarnets)

                //Backend-tabla-precios
                res.render('registroCarnets/tabla_precios', {datosEvento}, (err, htmlMontosTotales) => {
                    if(err){
                        return res.json({status: 'ERROR'})
                    }
                    console.log(htmlMontosTotales)
                    res.json({status: 'OK', datos: {htmlCarnets, htmlMontosTotales}})
                })
            })
        }catch(err){
            res.json({status: 'ERROR'})
            console.log('ERROR')
        }
    },

    //Se encarga de la vista del tablero de precios tomando el paramentro del evento
    //Ruta vistas
    registroVistaCtrl: async(req, res) => {
        const params = req.params
        const datosEvento = (await dbReg.recibirDatosEvento(params)).data[0]
        console.log(datosEvento)
        if(datosEvento.RESULT == 'NO-EXISTE'){
            res.redirect('/404')
            return
        }
        res.render('registroCarnets/evento_registrar', {
            datosEvento,
        })
    },

    //Controlador de registro de carnets
    registroEnviarRegistroCtrl: async(req,res) => {
        try{
            const body = req.body
            const datos = (await dbReg.nuevoRegistroCarnets(body)).data
            console.log(datos)
            res.json({ status: 'OK' })
        }catch(err){
            res.json({ status: 'ERROR' })
        }
    }
}

module.exports = registroCtrl