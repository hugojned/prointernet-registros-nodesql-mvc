const dbReg = require('../db/db_registro')

const registroCtrl = {
    //Controlador de cambio de precio al seleccionar la cantidad de carnets
    selectCarnetCtrl: async (req, res) => {
        try{
            const body = req.body
            body.numCarnet = Number(body.numCarnet)
            const datosEvento = (await dbReg.recibirDatosEvento(body)).data[0]
            const numCarnet = body.numCarnet
            const carnet = []
            console.log(body)

            for(let i = 0; i < numCarnet; i++){
                carnet.push({numCarnet: i + 1})
            }

            //Aplicación del despliegue de los carnets haciendo uso de handlebars

            //Backend-carnets
            res.render('registroCarnets/backend_carnets', {carnet, datosEvento}, (err, htmlCarnets) => {
                if(err){
                    return res.json({status: 'ERROR'})
                }

                //Backend-tabla-precios
                res.render('registroCarnets/tabla_precios', {datosEvento}, (err, htmlMontosTotales) => {
                    if(err){
                        return res.json({status: 'ERROR'})
                    }
    
                    res.json({status: 'OK', datos: {htmlCarnets, htmlMontosTotales}})
                })
            })
        }catch(err){
            res.json({status: 'ERROR'})
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
    }

    //Controlador de registro de carnets


}

module.exports = registroCtrl