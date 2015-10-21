/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	createPlayer: function(req, res) {
 		Player.create( { 

 			username: req.param('pseudo'), 
 			email: req.param('mail') }, 

 			function(err,created){
 				if(!err) {
 					console.log('Utilisateur créé : '+created.username+', ayant pour mail : '+created.email+' ayant pour ID : '+created.id+'.');
 					Player.find({}, function(err, found){
 						res.view( 'user_list', {players: found} );
 					});
 				}
 				else {
 					return err;
 				}
 			});
 	},
 	listPlayer : function(req, res) {
 		Player.find({}, function(err, found){
       	 	res.view( 'user_list', {players: found} );
    	});
 	}



 };

