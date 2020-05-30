const faker = require("faker");

const models = rootRequire("./src/models");
const Sequelize = require("sequelize");

beforeAll(() => {
  faker.locale = "pt_BR";
});

beforeEach(async () => {
  await truncate();
});

async function truncate() {
  return await Promise.all(
    Object.keys(models).map((key) => {
      if (!isModel(key)) return null;
      return models[key].destroy({
        where: {},
        force: true,
        truncate: true,
        cascade: true,
      });
    })
  );
}

const isModel = (key) =>
  !["sequelize", "Sequelize"].includes(key) &&
  models[key].prototype instanceof Sequelize.Model;
