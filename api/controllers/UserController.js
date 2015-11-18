module.exports = {

    addUser: function(req, res) {
        UserService.addUser(req.body, function(success) {
            res.json(success)
        })
    },

    login: function(req, res) {
        UserService.login(req.body, function(success) {
            if(success) {
                res.json("Excellent");
            }
            else {
                res.json("Erreur de connexion");
            }
        })
    }


}


