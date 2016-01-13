/**
 * AuthController
 *
 * @module      :: Controller
 * @description    :: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({

    register: function (req, res) {

        // On peut pas aller plus loin mdr -_-
        //sails.log(config.authMethod.passwordReset.mail);

        var params = req.params.all(),
            def = waterlock.Auth.definition,
            criteria = {},
            scopeKey = def.email !== undefined ? 'email' : 'username';

        var attr = {
            password: params.password,
            user: {
                firstname: params.firstname,
                lastname: params.lastname,
                birthDate: params.birthDate,
                country: params.country,
                city: params.city
            }
        };
        attr[scopeKey] = params[scopeKey];
        criteria[scopeKey] = attr[scopeKey];

        waterlock.engine.findAuth(criteria, function (err, user) {
            if (user) {
                return res.badRequest("User already exists");
            } else {
                waterlock.engine.findOrCreateAuth(criteria, attr, function (err, user) {
                    if (err)
                        return res.badRequest(err);
                    delete user.password;

                    return res.ok(user);
                });

                var subject = 'Confirmation';

                var content = '<h1>Confirmation sur Nebulae</h1>' +
                    '<p>Votre email est ' + params.email + '</p>' +
                        // '<p>Votre token est : '+jwt['token']+'</p>' +
                    '<p>Cliquez sur le lien qui n\'existe pas encore ! Excellent.</p>';

                MailServices.sendMail({email: params.email, subject: subject, content: content});
            }
        });
    },

    isConnected: function (req, res) {
        res.ok(req.session.authenticated);
    },

    sessionUser: function (req, res) {

        if (req.session.authenticated) {

            var user = {
                id: req.session.user.auth.id,
                firstname: req.session.user.firstname,
                lastname: req.session.user.lastname,
                email: req.session.user.auth.email
            };
            res.ok(user);
        }
        else {
            res.ok(false);
        }
    }

});