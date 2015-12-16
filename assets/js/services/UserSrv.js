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
            return user.put(userParam);
        },
        'deleteUser': function(userParam) {
            return user.remove(userParam);
        }

    }
});