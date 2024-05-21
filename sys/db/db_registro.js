const { sql, sqlConn, sqlFormatoRespuesta } = require('../config/conexion')

const registrarDB = {

    //Recibe la cantidad de carnets para calcular el precio de este
    recibirDatosEvento: async(datos) => {
        try{
            let resultado = await sqlConn.request()
                .input('CANTIDAD', sql.Float, datos.numCarnet || 1)
                .execute('PRECIO_EVENTO')
            return sqlFormatoRespuesta(resultado)
        }
        catch(error){
            throw error
        }
    },

    //Manda los datos del cliente y los carnets
    nuevoRegistroCarnets: async(datos) => {
        try{
            let resultado = await sqlConn.request()
                .input('ID_EVENTO', sql.VarChar, datos.idEvento)
                .input('NOMBRE_CLIENTE', sql.VarChar, datos.registro.txtNombreCliente)
                .input('APELLIDO_CLIENTE', sql.VarChar, datos.registro.txtApellidosCliente)
                .input('CORREO_CLIENTE', sql.VarChar, datos.registro.txtCorreoCliente)
                .input('TELEFONO_CLIENTE', sql.VarChar, datos.registro.txtTelefonoCliente)
                .input('CELULAR_CLIENTE', sql.VarChar, datos.registro.txtCelularCliente)
                .input('COMENTARIOS_CLIENTE', sql.VarChar, datos.registro.txtComentariosCliente)
                .input('NUM_CARNETS', sql.VarChar, datos.registro.listNumCarnets)
                .input('CARNETS', sql.NVarChar, JSON.stringify(datos.carnetsArray))
                .execute('REGISTRO_CARNETS')
            return sqlFormatoRespuesta(resultado)
        }
        catch(error){
            throw error
        }
    },

    //Despliega el resumen final del pago 

    obtenerResumen: async() => {
        try{
            let resultado = await sqlConn.request()
                .execute('RESUMEN_CLIENTE_CARNETS')
            return sqlFormatoRespuesta(resultado)
        }
        catch(error){
            throw error
        }
    }
}

module.exports = registrarDB