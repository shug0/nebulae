NebulaeApp.service('DashboardSrv', function(Restangular) {
    var
        userDashboards = [],
        currentDashboard = {},
        dashboard      =   Restangular.all('dashboard');

    return {

        'getDashboard': function(user) {
            return dashboard.get(user.id)
        },
        'getDashboardsByUser': function(userId){
            return dashboard.getList({owner: userId});
        },
        'addDashboard': function(newDashboard){
            return dashboard.post(newDashboard);
        }

    }
});