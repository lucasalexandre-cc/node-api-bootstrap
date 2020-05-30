const path = require("path");

global.rootRequire = function (givenPath) {
  if (!givenPath.startsWith("./")) return require(givenPath);

  const rootPath = "./";
  const fullPath = path.resolve(rootPath, givenPath);
  return require(fullPath);
};
