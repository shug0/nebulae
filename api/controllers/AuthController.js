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
            password: params.password,
            user:{
                firstname: params.firstname,
                lastname: params.lastname,
                birthDate: params.birthDate,
                country: params.country,
                city: params.city
            }
        };

        attr[scopeKey] = params[scopeKey];
        criteria[scopeKey] = attr[scopeKey];

        waterlock.engine.findAuth(criteria, function(err, user) {
            if (user)
                return res.ok({ error: "User already exists"});
            else
                waterlock.engine.findOrCreateAuth(criteria, attr, function(err, auth) {
                    if (err)
                        return res.badRequest(err);
                    delete auth.password;

                    return res.ok(auth);

                });
        });

    }

});