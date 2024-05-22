const nodemailer = require('nodemailer');
require('dotenv')

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASSMAIL,
  }
});

async function nMail(correoClienteNM){
    const info = await transporter.sendMail({
        from: '"Hugo Nedzelsky" <angdevirus667@gmail.com>', // sender address
        to: correoClienteNM, // list of receivers
        subject: "Evento PROINTERNET FEST 2K24", 
        html: 'Usted ha registrado correctamente al evento, pronto nos estaremos contactando con usted'
    })
    console.log("Message sent %s", info.messageId);
  }
  
  
  module.exports = nMail;