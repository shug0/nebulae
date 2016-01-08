/**
* Option.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

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
        type: "string",
      required: true
    },

      source: {model: 'source'},

    parameters: {
      type: "json",
      required: true
    },

      widgets: {
          collection: 'WidgetPattern',
          via: 'sourceFunction'
    }

  }
};

