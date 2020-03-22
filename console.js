 require('./config/load-env');

var repl = require("repl");
var models = require('./src/models');
var replServer = repl.start({});

replServer.context.models = models;

replServer.context.c = function(promise, field = null) {
  promise.then(result => {
    if(field != null) {
      console.log(result[field])
    } else {
      console.log(result);
    }
  });
};