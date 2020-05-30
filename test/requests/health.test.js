const request = require("supertest");

const app = rootRequire("./app");

describe("GET /health", () => {
  test("It should response 200", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
  });
});
