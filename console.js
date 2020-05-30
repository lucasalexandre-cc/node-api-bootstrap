require("./config/load-env");

const repl = require("repl");
const models = require("./src/models");

const replServer = repl.start({});

replServer.context.models = models;

replServer.context.c = function (promise, field = null) {
  promise.then((result) => {
    if (field != null) {
      console.log(result[field]);
    } else {
      console.log(result);
    }
  });
};
