NebulaeApp.service('AuthSrv', function(Restangular) {
    var
        register        =   Restangular.all('auth/register'),
        login           =   Restangular.all('auth/login'),
        logout          =   Restangular.all('auth/logout'),
        isConnected     =   Restangular.all('auth/isConnected'),
        sessionUser     =   Restangular.all('auth/sessionUser'),
        resetPassword   =   Restangular.all('auth/reset');

    return {

        'login': function(user) {
            return login.post(user);
        },

        'register': function(user) {
            return register.post(user);
        },

        'logout': function(user) {
            return logout.post(user);
        },

        'isConnected': function() {
            return isConnected.post();
        },

        'sessionUser': function() {
            return sessionUser.post();
        },
        'resetPassword': function(user) {
            return resetPassword.post(user);
        }

    }
});