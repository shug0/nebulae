/**
* Categorie.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //connection: 'mongoNebulae',
  connection: 'localDiskDb',

  attributes: {
    name:{
      type: "string",
      required: true
    },

    parent_id: {
      type : "integer",
      defaultsTo : null
    }
  }

};

