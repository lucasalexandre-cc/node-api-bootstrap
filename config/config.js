require("./load-env");

const getEnvs = (isTest = false) => ({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: isTest ? process.env.DB_TEST_DATABASE : process.env.DB_DATABASE,
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  logging: !isTest,
});

const envs = getEnvs();
const testEnvs = getEnvs(true);

module.exports = {
  development: envs,
  test: testEnvs,
  production: envs,
};
