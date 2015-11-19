/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function(req, res) {
        AuthService.login(req.body, function (success) {
            if (success) {
                res.json("Excellent");
                req.session.authenticated = true;
            }
            else {
                res.json("Erreur de connexion");

            }
        })
    }

};

