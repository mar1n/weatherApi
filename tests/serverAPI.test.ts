const request = require("supertest");
const createServer = require("../src/index");
const app = createServer()


describe("server", () => {
  it("predict", () => {
    request(app)
      .get("/predict")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err: any, res: any) {
        if (err) throw err;
      });
  });
  it("update", () => {
    request(app)
      .post("/update")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err: any, res: any) {
        if (err) throw err;
      });
  });
});
