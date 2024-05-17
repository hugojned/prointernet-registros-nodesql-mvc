const dbReg = require('../db/db_registro')

const registroCtrl = {
    
    //Controlador de registro de carnets

    //Controlador de cambio de precio al seleccionar la cantidad de carnets
    rtSelectCarnet: async (req, res) => {
        try{
            const body = req.body
            body.numCarnet = Number(body.numCarnet)
            const datosEvento = (await dbReg.recibirDatosEvento(body)).data[0]
            const numCarnet = body.numCarnet
            const carnets = []

            for(let i = 0; i < numCarnet; i++){
                carnets.push({numCarnet: i + 1})
            }

            res.render('registro/registro_carnet_each', {carnets,datosEvento}, (err, htmlCarnets) => {
                if(err){
                    return res.json({status: 'ERROR'})
                }

                res.render('registro/registro_montos_totales', {datosEvento}, (err, htmlMontosTotales) => {
                    if(err){
                        return res.json({status: 'ERROR'})
                    }
    
                    res.json({status: 'OK', datos: {htmlCarnets,htmlMontosTotales}})
                })
            })
        }catch(err){
            res.json({status: 'ERROR'})
        }
    },

    registroVista: async(req, res) => {
        const params = req.params
        const datosEvento = (await db.registro.obtenerDatosEvento(params)).data[0]
        if(datosEvento.RESULT == 'NO-EXISTE'){
            res.redirect('/404')
            return
        }

        res.render('registro/registro', {
            datosEvento,
        })
    }

}