NebulaeApp.service('UserSrv', function(Restangular) {
    var user    =   Restangular.all('user');

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
        }

    }
});