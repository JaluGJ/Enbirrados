require("dotenv").config();
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, REFRESH_TOKEN, APP_MAIL} = process.env
const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oauth2Client.setCredentials({
  refresh_token:REFRESH_TOKEN
})

const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
       type: "OAuth2",
       user: APP_MAIL, 
       clientId: CLIENT_ID,
       clientSecret: CLIENT_SECRET,
       refreshToken: REFRESH_TOKEN,
       accessToken: accessToken,
       expires: 3599
  },
  tls: {
    rejectUnauthorized: false
  }
});
 

module.exports={
  sendEmail: async (email, subject, html) => {
    try{
      await smtpTransport.sendMail({
        from:APP_MAIL,
        to: email,
        subject,
        generateTextFromHTML:true,
        html:html
      })
    }
    catch(error){
      console.log('algo no va bien en el mail', error)
    }
  }
}



// smtpTransport.sendMail(mailOptions, (error, response) => {
//   error ? console.log(error) : console.log(response);
//   smtpTransport.close();
// });