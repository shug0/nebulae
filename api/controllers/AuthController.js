/**
 * AuthController
 *
 * @module      :: Controller
 * @description    :: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

md5 = require('js-md5');

module.exports = require('waterlock').waterlocked({

    register: function (req, res) {

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
                city: params.city,
                role: params.role,
                gravatar: md5(params.email)
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

                var subject = 'Confirmation d\'inscription sur Nebulae';

                MailServices.sendMail('mail_confirmation', {email: params.email, subject: subject});

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
                idUser: req.session.user.id,
                firstname: req.session.user.firstname,
                lastname: req.session.user.lastname,
                email: req.session.user.auth.email,
                gravatar: req.session.user.gravatar
                ,dashboards: req.session.user.dashboard
            };
            res.ok(user);
        }
        else {
            res.ok(false);
        }
    }


    });