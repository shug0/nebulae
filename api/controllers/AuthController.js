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

        var params = req.params.all(),
            def = waterlock.Auth.definition,
            criteria = { },
            scopeKey = def.email !== undefined ? 'email' : 'username';

        var attr = {
            password: params.password
        };
        attr[scopeKey] = params[scopeKey];
        criteria[scopeKey] = attr[scopeKey];

        waterlock.engine.findAuth(criteria, function(err, user) {
            if (user) {
                return res.badRequest("User already exists");
            } else {
                waterlock.engine.findOrCreateAuth(criteria, attr, function (err, newuser) {
                    if (err)
                        return res.badRequest(err);
                    delete newuser.password;

                    return res.ok(newuser);
                });

                var subject = 'Confirmation';

                var content = '<h1>Confirmation sur Nebulae</h1>' +
                    '<p>Votre email est '+params.email+'</p>' +
                   // '<p>Votre token est : '+jwt['token']+'</p>' +
                    '<p>Cliquez sur le lien qui n\'existe pas encore ! Excellent.</p>';

                MailServices.sendMail({email: params.email, subject: subject, content: content});

            }

        });

    }


});