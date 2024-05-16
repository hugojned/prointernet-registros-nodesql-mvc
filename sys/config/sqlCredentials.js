require('dotenv').config();

const sqlCredentials = {
    mssql: {
        user: process.env.USERDB,
        password: process.env.PASSDB,
        server: process.env.SERVER,
        database: process.env.DATABASE,
        port: process.env.PORTDB,
        encrypt: true,
        options: {
            trustedConnection: true,
            trustServerCertificate: true
        }
    }
}

module.exports = sqlCredentials;