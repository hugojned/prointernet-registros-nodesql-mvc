const dbReg = require('../db/db_registro')
const nMail = require('../config/nodemailer-registro')

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
            console.log('ERROR')
        }
    },

    //Se encarga de la vista del tablero de precios tomando el paramentro del evento
    //Ruta vistas
    registroVistaCtrl: async(req, res) => {
        const params = req.params
        const datosEvento = (await dbReg.recibirDatosEvento(params)).data[0]
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
            const datosRegistro = (await dbReg.nuevoRegistroCarnets(body)).data
            
            res.json({ status: 'OK' })
        }catch(err){
            res.json({ status: 'ERROR' })
        }
    },


    //Resumen
    resumenDatos: async(req,res) =>{
        try{
            const body = req.body
            const datosResumen = (await dbReg.obtenerResumen(body)).data

            const datosEvento = datosResumen[0][0]
            const datosCliente = datosResumen[1][0]
            const datosCarnets = datosResumen[2]
            res.render('resumen/resumen', {datosEvento, datosCliente, datosCarnets})
        }
        catch(err){
            console.log('ERROR')
        }
    },


    //Correo
    enviarCorreo: async(req,res) => {
        try{
            const body = req.body
            console.log(body.correo)
            nMail(body.correo).data
        }
        catch(err){
            throw err
        }
    }
}

module.exports = registroCtrl