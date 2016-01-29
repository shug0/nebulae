NebulaeApp.service('DashboardSrv', function(Restangular) {
    var
        dashboard      =   Restangular.all('dashboard');

    return {

        'getDashboard': function(user) {
            return dashboard.get(user.id)
        },
        'getDashboardsByUser': function(userId){
            return user = Restangular.one('user', userId).customGET("dashboard");
        }

    }
});