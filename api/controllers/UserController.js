module.exports = {

    addUser: function(req, res) {
        UserService.addUser(req.body, function(success) {
            res.json(success)
        })
    },




}


