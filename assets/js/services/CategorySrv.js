NebulaeApp.service('CategorySrv', function(Restangular) {
    var category    =   Restangular.all('category')

    return {

        'getCategories': function() {
            return category.getList();
        },
        'getCategorieById': function(cat){
            return Restangular.one('category', cat).get();
        },
        'addCategory': function(catParam) {
            return category.post(catParam);
        },
        'putCategory': function(cat) {
            return category.put(cat);
        },
        'deleteCategory': function(cat) {
            return category.delete(cat);
        }

    }
});