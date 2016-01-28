/**
 * SourceFunctionController
 *
 * @description :: Server-side logic for managing Sourcefunctions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    doRequest: function(id){

        SourceFunction.findOne({id:24}).exec(function findOneCB(err, found){
            console.log('We found '+found.name);
        });


    }

};

