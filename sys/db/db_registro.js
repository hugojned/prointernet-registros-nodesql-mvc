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
            
        }
        catch(error){
            
        }
    },

    //Despliega el resumen final del pago 
    // obtenerResumen: async() => {
    //     try{

    //     }
    //     catch(error){
            
    //     }
    // }
}

module.exports = registrarDB