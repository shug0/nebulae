module.exports = {

    addUser: function(req, res) {
        UserService.addUser(req.body, function(success) {
            res.json(success)
        })
    }
}

/*
addUser: function(req, res) {
    sails.log('Dans le controller oklm');

    UserService.createUser(req.body, function(success) {
        res.json(success)
    })
}    
/*
getUsers: function(req, res) {
    UserService.getUsers(function(users) {
        res.json(users)
    })
},
addUser: function(req, res) {
    UserService.addUser(req.body, function(success) {
        res.json(success)
    })
},
removeUser: function(req, res) {
    UserService.removeUser(req.body, function(success) {
        res.json(success)
    })
}
*/

