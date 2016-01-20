NebulaeApp.service('DashboardSrv', function(Restangular) {
    var
        dashboard      =   Restangular.all('auth/logout');

    return {

        'getDashboard': function(user) {

        },

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