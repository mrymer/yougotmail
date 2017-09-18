'use strict';
const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error('Failed to create a testing account.' + err.message);
    return process.exit(1)
  }

  let transporter= nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }

  });

  let mailOptions ={
    from: '"Maria Rymer" <mariaj.rymer@gmail.com>', //sender address
    to: '<rymer.mariaj@gmail.com>', //receiver
    subject: 'Hello', //subject line
    text: 'Hey, what up?', //plain text
    html: '<b> Hey, what up?</b>' //hmtl
  };

  transporter.sendMail(mailOptions,(error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
});
