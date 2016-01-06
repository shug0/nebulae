
module.exports = {

    sendMail: function(options) {

        var mail = sails.config.waterlock.authMethod.passwordReset.mail;
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport(mail.protocol, mail.options);
        transporter.sendMail({
            to: options.email,
            subject: options.subject,
            html: options.content
        }, function (error) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent to: ' + options.email + ', subject : ' + options.subject);
            console.log('Ok');
        });

    }
};