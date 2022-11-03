module.exports = {
  changePasswordTemp: (name) => {
    return `
  <head>
    <style>
    img{
      width: 90px;
      height: 90px;
    }
    h2{
      font-family: Arial, Helvetica, sans-serif;
    }

    p{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  </style>
</head>
<body>
  <div>
    <h2>Hello ${name}!</h2>
    <p>This email it was sent to inform about a password change <br>
    If it wasn't you, please contact with us, to give you a solution</p>
    <p>Thanks to keep using our services.</p>
    <img src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png" alt="embirrados logo">
  </div>
</body>
    `
  },
  meetingModificationsTemp: (name, meeting) => {
    return `
    <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      width: 90px;
      height: 90px;
    }

    h3,
    h2 {
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .equip {
      font-size: small;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  </style>
</head>

<body>
  <div>
    <h2>Hello ${name}!</h2>
    <h3>There were changes on ${meeting.name}!</h3>
    <p>The meeting has slight changes due to some necesities. <br>
      Please, check your invitation of the meeting or the meeting to know this changes</p>
    <p>As before, don't forget to bring joy and enough energy to celebrate!</p>
    <p>Thanks to keep using our services</p>
    <p class="equip">The Enbirrados team <img
        src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
        alt="embirrados logo"></p>
  </div>
</body>

</html>
    `
  },
  invitationModificationsTemp: (name, invitation) => {
    return `
    <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      width: 90px;
      height: 90px;
    }

    h3,
    h2 {
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .equip {
      font-size: small;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  </style>
</head>

<body>
  <div>
    <h2>Hello ${name}!</h2>
    <h3>There were changes on ${invitation.name}!</h3>
    <p>The invitation has slight changes due to some necesities. <br>
      Please, check your invitation or the meeting to know this changes</p>
    <p>As before, don't forget to bring joy and enough energy to celebrate!</p>
    <p>Thanks to keep using our services</p>
    <p class="equip">The Enbirrados team <img
        src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
        alt="embirrados logo"></p>
  </div>
</body>

</html>
    `
  },

  successfulChangesTemp: (name) => {
    return`
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      width: 90px;
      height: 90px;
    }

    h3,
    h2 {
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .equip {
      font-size: small;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  </style>
</head>

<body>
  <div>
    <h2>Hello ${name}!</h2>
    <h3>There were changes on your profile!</h3>
    <p>If werent you who made those changes, please, contact with us vi this email.</p>
    <p>Thanks to keep using our services</p>
    <p class="equip">The Enbirrados team <img
        src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
        alt="embirrados logo"></p>
  </div>
</body>

</html>
    ` },

  registerSuccesTemp: (name) => { 
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      width: 90px;
      height: 90px;
    }

    h3,
    h2 {
      font-family: Arial, Helvetica, sans-serif;
    }

    p {
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .equip {
      font-size: small;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  </style>
</head>

<body>
  <div>
    <h2>WELCOME ${name}!</h2>
    <h3>Welcome to the best app to organize your meetings with your colleagues</h3>
    <p>You have just register to the app "Enbrirrados", the best app to organize with your colleagues, your <br>
      friday meetings and your celebrations events!</p>
    <p>This app calculates, approximately, the amount of beers you and your friends must buy for your party </p>
    <p>Hope you enjoy it and have a wornderfull time</p>
    <br>
    <h3>I didn't make this account! </h3>
    <p>If you didn't make this acount, please, contact with us, and inmediately we will revoke it form our db</p>

    <p>Thanks to use our services</p>
    <p class="equip">The Enbirrados team <img
        src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
        alt="embirrados logo"></p>
  </div>
</body>

</html>`
  },
  invitationTemp: (name, meeting) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img{
      width: 90px;
      height: 90px;
    }
    h3,
    h2{
      font-family: Arial, Helvetica, sans-serif;
    }

    p{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .equip{
      font-size: small;
      font-style: italic;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  </style>
</head>
<body>
  <div>
    <h2>Hello ${name}!</h2>
    <h3>You where invited to ${meeting.name}!</h3>
    <p>We are glad to tell you that you were invited to the ${meeting.name} meeting, which is going to be on ${meeting.date}. <br>
    Soon, the host will tell you where is going to be celebrated</p>
    <p>Don't forget to bring joy and enough energy to celebrate!</p>
    <p>Thanks to keep using our services</p>
    <p class="equip">The Enbirrados team <img src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png" alt="embirrados logo"></p>
  </div>
</body>
</html>
    `
  },
  rejectedTemp: (name, meeting) => { 
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        img {
          width: 90px;
          height: 90px;
        }
    
        h3,
        h2 {
          font-family: Arial, Helvetica, sans-serif;
        }
    
        p {
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    
        .equip {
          font-size: small;
          font-style: italic;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }
      </style>
    </head>
    
    <body>
      <div>
        <h2>We are sorry ${name}!</h2>
        <h3>You were removed form the meeting ${meeting.name} </h3>
        <p>For any reason, you were removed form the list of the meeting</p>
        <p>If you think this is a mistake, please, contact with the host ${meeting.hostName} for this </p>
        <p>Thanks to use our services</p>
        <p class="equip">The Enbirrados team <img
            src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
            alt="embirrados logo"></p>
      </div>
    </body>
    
    </html>
    `
  },
  otherMail: (name, email) => {
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        img {
          width: 90px;
          height: 90px;
        }
    
        h3,
        h2 {
          font-family: Arial, Helvetica, sans-serif;
        }
    
        p {
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    
        .equip {
          font-size: small;
          font-style: italic;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 20px;
        }
      </style>
    </head>
    
    <body>
      <div>
        <h2>Somebody is trying to use your emai ${name}!</h2>
        <p>Somebody tryed to sign up with your email, that already exist</p>
        <p>contact with us to try to find the scamer </p>
        <p>Thanks to use our services</p>
        <p class="equip">The Enbirrados team <img
            src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
            alt="embirrados logo"></p>
      </div>
    </body>
    
    </html>
    `
  },
  adminTemp:(name, isAdmin)=>{  return`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      img {
        width: 90px;
        height: 90px;
      }
  
      h3,
      h2 {
        font-family: Arial, Helvetica, sans-serif;
      }
  
      p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      }
  
      .equip {
        font-size: small;
        font-style: italic;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
      }
    </style>
  </head>
  
  <body>
    <div>
      ${isAdmin ? 
        `<h2>Congratulations ${name}!</h2>
      <p>You were upgraded to admin thanks to the actual admins of the page</p>
      `
      :
      `<h2>I'm sorry ${name}!</h2>
      <p>You're not an admin anymore</p>
      <p>The admin's team have decided to downgrade you.</p>`
    }
      <p>Thanks to use our services</p>
      <p class="equip">The Enbirrados team <img
          src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
          alt="embirrados logo"></p>
    </div>
  </body>
  
  </html>
  `},
  bannedTemp:(name, banned)=>{  return`<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      img {
        width: 90px;
        height: 90px;
      }
  
      h3,
      h2 {
        font-family: Arial, Helvetica, sans-serif;
      }
  
      p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      }
  
      .equip {
        font-size: small;
        font-style: italic;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
      }
    </style>
  </head>
  
  <body>
    <div>
    ${banned ? 
      `<h2>Oh no ${name}!</h2>
    <p>You were banned form this page! you're not allowed to get in at the moment</p>
    <p>If you think this is unfare, talk to the anyother admins</p>
    `
    :
    `<h2>Welcome back ${name}!</h2>
    <p>It look like you could return, right? Welcome back. Now, it's time to drink and celebrate</p>`
  }
      <p>Thanks to use our services</p>
      <p class="equip">The Enbirrados team <img
          src="https://res.cloudinary.com/dvzgzgzln/image/upload/v1667323320/Embirrados/party_tgimhe.png"
          alt="embirrados logo"></p>
    </div>
  </body>
  
  </html>
  `}
}