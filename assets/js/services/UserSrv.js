NebulaeApp.service('UserSrv', function(Restangular) {
    var user = Restangular.all('user');

    return {

        'getUsers': function(userParam) {
            return user.getList(userParam);
        },
        'addUser': function(userParam) {
            return user.post(userParam);
        },
        'updateUser': function(userParam) {
            return user.put(userParam);
        },
        'deleteUser': function(userParam) {
            return user.delete(userParam);
        }

    }
});