/**
* Source.js
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

    category: {
        model: 'category'
    },
    // API URL, Version, Tokens if needed
    optionslist: {
        type: 'json'
    },

    functions: {
        collection: 'sourceFunction',
        via: 'source'
    },

    enabled:{
      type: "boolean",
      defaultsTo: false
    }

  }

};

