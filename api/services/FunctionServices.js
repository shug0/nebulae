
module.exports = {

    request: function() {
        var http = require('http');

        var options = {
            host: 'api.openweathermap.org'
            //,port: 80,
            ,path: '/data/2.5/weather?q=Bordeaux&appid=626e5c5c2ce6311e345e7fa2d59110dc'
            //method: 'GET',
            //headers: {'Authorization': 'Basic ' + 'SuperSecretLoginAndPassword'}
        };

        //https.request(options, function(response) {
        http.get(options, function(response) {
            var responseData = '';
            //response.setEncoding('utf8');

            response.on('data', function(chunk){
                responseData += chunk;
                console.log("Dans le response.on('data')")
            });

            /*
            response.once('error', function(err){
                // Some error handling here, e.g.:
                res.serverError(err);
                console.log("Dans le response.once('error')")
            });
            */
            response.on('end', function(){
                console.log("Dans le response.on('end')")
                console.log(responseData)
              /*  try {
                    // response available as `responseData` in `yourview`
                    res.locals.requestData = JSON.parse(responseData);
                } catch (e) {
                    sails.log.warn('Could not parse response from options.hostname: ' + e);
                }
              */
                //res.view('yourview');
            });
        }).end();

    },

    getFunctionById : function(theId){

        SourceFunction.findOne({id:theId}).exec(function findOneCB(err, found){
            console.log(found.parameters);
        });
    }
};