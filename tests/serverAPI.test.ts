import { expect } from "chai";

const request = require("supertest");
const createServer = require("../src/server");
const app = createServer()

const date = Date.parse("2022-08-29")

describe("server", () => {
  it("predict", async () => {
    const response = await request(app)
      .get(`/predict?date=${date}`)
      .expect("Content-Type", /json/)
      .expect(200)

      const { body } = await response;
      expect(body.weather).to.equal("CLOUDY");
  });
  it("update", async () => {
    const response = await request(app)
      .post("/update")
      .send({
        date: date,
        weather1: "SUNNY"
      })
      .expect("Content-Type", /json/)
      .expect(200)

      const { body } = await response;
      expect(body.message).to.equal("Well done!");

      const response2 = await request(app)
      .get(`/predict?date=${date}`)
      .expect("Content-Type", /json/)
      .expect(200)

      const body2 = await response2.body;
      expect(body2.weather).to.equal("SUNNY");
  });
});
