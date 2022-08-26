import { expect } from "chai";
import DefaultWeatherPredictorService from "../src/services/DefaultWeatherPredictorService";

describe("DefaultWeatherPredictorService", () => {
  describe("getWeather", () => {
    const weater = new DefaultWeatherPredictorService();
    const date = new Date("2022-08-26");
    expect(weater.getWeather(date)).to.equal("CLOUDY");
  });
});
