/**
* Widget.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //connection: 'mongoNebulae',
  connection: 'localDiskDb',

  attributes: {

    name: {
      type: "string",
      required: true
    },

    type: {
      type: "string"
    },

    template: {
      type: "string",
      required: true
    },

    design: {
      type: "json",
      defaultsTo : null
    }

  }
};

