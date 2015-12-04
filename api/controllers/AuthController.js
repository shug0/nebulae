/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({

    register: function(req, res) {

        // On peut pas aller plus loin mdr -_-
        sails.log(sails.config.waterlock.authMethod);

        var params = req.params.all(),
            def = waterlock.Auth.definition,
            criteria = { },
            scopeKey = def.email !== undefined ? 'email' : 'username';

        var attr = {
            password: params.password
        }
        attr[scopeKey] = params[scopeKey];
        criteria[scopeKey] = attr[scopeKey];

        //var mail = sails.config.waterlock.authMethod;

        waterlock.engine.findAuth(criteria, function(err, user) {
            if (user)
                return res.badRequest("User already exists");
            else
                waterlock.engine.findOrCreateAuth(criteria, attr, function(err, user) {
                    if (err)
                        return res.badRequest(err);
                    delete user.password;
                    return res.ok(user);
                });



               /* var transporter = nodemailer.createTransport(mail.protocol, mail.options);

                transporter.sendMail(mail, function(error, info){
                    if(error){
                        return console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                    console.log('Ok');
                });*/

        });

    }

});