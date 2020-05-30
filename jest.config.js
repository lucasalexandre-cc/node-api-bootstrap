module.exports = {
  testMatch: ["**/*.test.js"],
  setupFiles: ["./config/load-env.js", "./test/helpers.js"],
  setupFilesAfterEnv: ["./test/setup.js"],
  testEnvironment: "node",
  collectCoverageFrom: ["src/**", "models/**"],
};
