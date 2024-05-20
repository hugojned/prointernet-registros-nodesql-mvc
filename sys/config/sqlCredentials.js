require('dotenv').config();

const sqlCredentials = {
    mssql: {
        user: process.env.USERDB,
        password: process.env.PASSDB,
        server: process.env.SERVER,
        database: process.env.DATABASE,
        port: parseInt(process.env.PORTDB), //pasar a entero o da error
        encrypt: true,
        options: {
            trustedConnection: true,
            trustServerCertificate: true
        }
    }
}

module.exports = sqlCredentials;