'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('TableTests', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('TableTests')
};
