NebulaeApp.service('ReqSrv', function($http, $q) {
    return {
        'test': function(api) {
            console.log("FUCK SERVICE"+api)
            //
            ////var http = require('http')
            //options = {
            //    host : "http://www.lequipe.fr/rss/actu_rss.xml"
            //};
            //
            //var webservice_data = "";
            //
            //var webservice_request = $http.request(options, function(webservice_response)
            //{
            //    webservice_response.on('error', function(e){ console.log(e.message); });
            //    webservice_response.on('data', function(chunk){ webservice_data += chunk;});
            //    webservice_response.on('end', function(){res.send(webservice_data);});
            //    console.log('coucou');
            //});

            return "In the fucking request service"+api;
        }
    }});