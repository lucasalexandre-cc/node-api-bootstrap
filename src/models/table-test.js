const models = require("./db");

class TableTest extends models.Sequelize.Model {
  static associate(models) {}
}

TableTest.init(
  {
    name: models.Sequelize.STRING,
    createdAt: models.Sequelize.DATE,
    updatedAt: models.Sequelize.DATE,
  },
  { sequelize: models.sequelize }
);

module.exports = TableTest;
