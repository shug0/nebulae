NebulaeApp.service('UserSrv', function(Restangular) {
    var user = Restangular.all('user');

    return {

        'getUsers': function() {
            return user.getList({limit: 5, sort: 'createdAt DESC'});
        },
        'addUser': function(userParam) {
            return user.post(userParam);
        },
        'updateUser': function(userParam) {

            user.getList().then(function(users) {
                var userWithId = _.find(users, function(user) {
                    return user.id === userParam.id;
                });
                if (userParam.email !== "") { userWithId.auth.email = userParam.email;  }
                if (userParam.firstname !== "") { userWithId.firstname = userParam.firstname ; }
                if (userParam.lastname!== "") { userWithId.lastname = userParam.lastname; }
                if (userParam.country!== "") { userWithId.country = userParam.country; }
                if (userParam.city!== "") { userWithId.city = userParam.city; }
                userWithId.put();
            });
        },
        'deleteUser': function(userParam) {
            return user.remove(userParam);
        }

    }
});