/**
* Option.js
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

    description:{
      type: "string",
      required: true
    },

    type: {
      type : "integer",
      required: true
    },

    parameters: {
      type: "json",
      required: true
    },

      widgets: {
          collection: 'widget',
          via: 'provider'
    }

  }
};

