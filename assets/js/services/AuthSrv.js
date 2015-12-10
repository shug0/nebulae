NebulaeApp.service('AuthSrv', function(Restangular) {
    var
        register    =   Restangular.all('auth/register'),
        login       =   Restangular.all('auth/login'),
        logout      =   Restangular.all('auth/logout');

    return {

        'login': function(user) {
            return login.post(user);
        },

        'register': function(user) {
            return register.post(user);
        },

        'logout': function(user) {
            return logout.post(user);
        }

    }
});