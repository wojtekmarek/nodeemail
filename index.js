const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer');
const port =8000;


const app = express();
app.use(cors());

app.get('/', (req, res) => {

    const {email, category} = req.query;
    sendEmailNotification();
    res.status(200).send({ message: 'hey' });
});
const API_USER =  'jsapoprawaprac@gmail.com';
const API_PASS = 'biroot123?' ;

const sendEmailNotification = () => {
  
     const transporter = nodemailer.createTransport({
      // SES: new AWS.SES(SESConfig)
      host: "smtp.dpoczta.pl",//"smtp.gmail.com.",
       port: 587,
       secure: false, // true for 465, false for other ports
       auth: {
         user: API_USER,// API_USER, // generated ethereal user
         pass: API_PASS//API_PASS // generated ethereal password
         
       }
     });
     
     transporter.sendMail({
       from: API_USER,
       // to: `${sendReportTo}${sendByEmailJSA ? `, ${email}` : ''}`,
        to:"wojtemarek@gmail.com",
       subject: `Wynik porównania JSA-demo (ID transakcji: )`,
       // html: `<p>Witaj,</p><p>W załączniku znajdziesz twój raport z porównania plików:</p><p>${originalFilename}<br/>${userFilename}</p><p>ID transakcji: ${transactionId}</p><p><strong>Wesprzyj rozwój programu! Dla przyszłych roczników.</strong></p><p><a href="https://poprawaprac.pl/program-antyplagiatowy-wrona/?tid=${transactionId}&donate=true">Wpłać dowolną kwotę, a my przeznaczymy ją na dalszy rozwój systemu.</a></p>`,//. Możesz go pobrać <a href='${reportURL}'>tutaj</a>.</p>`,
       html: `<p>Witaj,</p><p>W załączniku znajdziesz twój raport z porównania plików:</p><p><br/></p><p>ID transakcji: </p>`,//. Możesz go pobrać <a href='${reportURL}'>tutaj</a>.</p>`,
       text: `Witaj,\r\n\r\nW załączniku znajdziesz twój raport z porównania plików:\r\n\r\n\r\n\r\nID transakcji: `,//\r\n\r\njest gotowy. Możesz go pobrać tutaj: ${reportURL}`,
      /* attachments: [{
        
       }],*/
     }, (err/*, info*/) => {
      err && console.log(err);
     });
   }

   NODE_TLS_REJECT_UNAUTHORIZED='0'
   
app.listen(port, () => {
  console.log('Example app listening on port 8000!')
});