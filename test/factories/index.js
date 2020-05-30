const fs = require("fs");
const path = require("path");

const FILES_TO_IGNORE = ["index.js"];

function getAllFactories() {
  return fs
    .readdirSync(__dirname)
    .filter((fileName) => !FILES_TO_IGNORE.includes(fileName))
    .reduce((acc, fileName) => {
      const baseName = path.basename(fileName, ".js");

      return {
        ...acc,
        [baseName]: require(path.join(__dirname, fileName)),
      };
    }, {});
}

module.exports = getAllFactories();
