const fs    = require('fs');
const path  = require('path');
const db    = require('./db');

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file !== 'db.js') && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    //let model = db.sequelize['import'](path.join(__dirname, file));
    let model = require('./' + file); // Requiring directly instead, because of an error on sequelize import (not using new keyword)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  const model = db[modelName];
  const extendsSequelizeModel = model.prototype instanceof db.Sequelize.Model;
  const hasAssociateMethod = !!model.associate;

  if (extendsSequelizeModel && hasAssociateMethod) {
    model.associate(db);
  }
});

module.exports = db;