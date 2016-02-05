NebulaeApp.service('CategorySrv', function(Restangular) {
    var category    =   Restangular.all('category'),
        currentCategory = {} ;

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
        'setCurrentCategory': function(catId){
            var request = Restangular.one('category', catId);
            request.then(function(categoryFound){
                currentCategory = categoryFound.plain();
            });
        },
        'putCategory': function(cat) {
            return category.put(cat);
        },
        'deleteCategory': function(cat) {
            return category.delete(cat);
        }

    }
});