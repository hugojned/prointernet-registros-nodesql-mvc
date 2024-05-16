const sql = require('mssql')
const sqlCredentials = require('./sqlCredentials').mssql

const sqlConn = new sql.ConnectionPool(sqlCredentials, (err) => {
	if (err) {
		console.log('Conexion fallida, reintentando...');
		connectSQL();
	} else {
		console.log('Conectado a la BD');
	}
})

const connectSQL = () => {
	sqlConn.connect()
		.then(() => {
			console.log('Conectado a la BD');
		})
		.catch((err) => {
			if (err) {
				console.log('Conexion fallida, reintentando...', err);
				setTimeout(() => {
					connectSQL();
				}, 2500)
			}
		})
}

const sqlFormatoRespuesta = (result) => {
	try {
		if (result.recordsets.length > 1) {
			return { status: 'OK', data: result.recordsets }
		}

		if (!result.recordset) {
			return { status: 'OK', data: [] }
		}

		return { status: 'OK', data: result.recordset }
	} catch (err) {
		return { status: 'ERROR', data: [] }
	}
}

module.exports = {
	sqlConn, sql, sqlFormatoRespuesta
}