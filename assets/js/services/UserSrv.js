NebulaeApp.service('UserSrv', function(Restangular) {
    var
        user    =   Restangular.all('user'),
        jwt   =   Restangular.all('user/jwt');

    return {

        'getUsers': function(user) {
            return user.getList(user);
        },
        'addUser': function(user) {
            return user.post(user);
        },
        'updateUser': function(user) {
            return user.put(user);
        },
        'deleteUser': function(user) {
            return user.delete(user);
        },
        'getTokenUser': function(user) {
            return jwt.get(user);
        }

    }
});