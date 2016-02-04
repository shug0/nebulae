NebulaeApp.service('UserSrv', function(Restangular) {
    var
        user    =   Restangular.all('user'),
        jwt     =   Restangular.all('user/jwt'),
        reset   =   Restangular.all('auth/reset');

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
                if (userParam.password !== "") { userWithId.auth.password = userParam.password; }
                if (userParam.firstname !== "") { userWithId.firstname = userParam.firstname ; }
                if (userParam.lastname!== "") { userWithId.lastname = userParam.lastname; }
                if (userParam.country!== "") { userWithId.country = userParam.country; }
                if (userParam.city!== "") { userWithId.city = userParam.city; }
                if (userParam.role!== "") { userWithId.role = userParam.role; }
                if (userParam.gravatar!== "") { userWithId.gravatar= userParam.gravatar; }


                userWithId.put();
            });
        },
        'deleteUser': function(userParam) {
            console.log(userParam);
            return user.remove(userParam);
        },
        'sendResetPassUser': function(email) {
            return reset.post(email);
        },
        'addTokenUser': function(user) {
            return jwt.get(user);
        }

    }
});