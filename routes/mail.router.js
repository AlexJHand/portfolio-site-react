// Requires
const router = require('express').Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Credentials class to send email from
class Credentials {
    constructor(name, password) {
        this.username = name;
        this.password = password;
    }
}

// Config for email to be sent
class EmailConfig {
    constructor(fromAddress, toAddress, subjectText, bodyHTML) {
        this.from = fromAddress;
        this.to = toAddress;
        this.subject = subjectText;
        this.html = bodyHTML;
    }
}

// Class instance to send email from 
const siteCredentials = new Credentials(process.env.EMAIL_NAME, process.env.EMAIL_PW);

// Alex's email
const alex = 'alex@alexjhand.com';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: siteCredentials.username,
        pass: siteCredentials.password
    }
})

// Post route
router.post('/', (req, res) => {
    console.log('In mail.router post', req.body);
    // Set up the details for the email sent
    let to = alex + ',' + req.body.email;
    let subject = req.body.subject;
    let message = '<p>' + req.body.message + '</p>';

    // Create new EmailConfig
    let mailConfig = new EmailConfig(siteCredentials.username, to, subject, message);

    // Send email
    // transporter.sendMail(mailConfig, function (err, info) {
    //     console.log('In sendMail', info);
    //     console.log('Error', err);
    //     // If error or success
    //     if (err) {
    //         console.log('sendMail error', err);
    //         res.sendStatus(500);
    //     } else {
    //         console.log('Message sent', info.messageId, info.response);
    //         res.sendStatus(201);
    //     }
    // })
});

// Exports
module.exports = router;