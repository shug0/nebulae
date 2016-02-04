NebulaeApp.service('CategorySrv', function(Restangular) {
    var category    =   Restangular.all('category');

    return {

        'getCategories': function() {
            return category.getList();
        },
        "getCategoryById": function(cat){
            return Restangular.one('category', cat).get();
        },
        'getSourcesByCategory': function(catId){
            return source = Restangular.one('category', catId).customGET("sources");
        },
        'addCategory': function(catParam) {
            console.log(catParam);
            return category.post({name:catParam});
        },
        'putCategory': function(cat) {
            return category.put(cat);
        },
        'deleteCategory': function(cat) {
            return category.delete(cat);
        }

    }
});