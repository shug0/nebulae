
module.exports = {

    sendMail: function(templateName, options) {

        var mail = sails.config.waterlock.authMethod.passwordReset.mail;
        var nodemailer = require('nodemailer');
        var EmailTemplate = require('email-templates').EmailTemplate;
        var transporter = nodemailer.createTransport(mail.protocol, mail.options);

        var path = require('path');
        var template = new EmailTemplate(path.join(sails.config.paths.views, templateName));


        template.render(options, function (err, result) {
            if (err) {
                return console.error(err);
            }
            transporter.sendMail({
                to: options.email,
                subject: options.subject,
                html: result.html
            }, function (error, responseStatus) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent to: ' + options.email + ', subject : ' + options.subject);
                console.log(responseStatus.message);
            });
        });

    }
};