/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
    restricted:function(req,res){
        return res.ok("If You can see this you are authenticated");
    },
    open:function(req,res){
        return res.ok("This is open to all!!!");
    }
});