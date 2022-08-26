import { expect } from "chai";
import DefaultWeatherPredictorService from "../src/services/DefaultWeatherPredictorService";
import { WeatherE } from "../src/utils/types"
describe("DefaultWeatherPredictorService", () => {
  describe("getWeather", () => {
    const weather = new DefaultWeatherPredictorService();
    const date = new Date("2022-08-26");
    expect(weather.getWeather(date)).to.equal("CLOUDY");
  });
  describe('updateWeather', () => { 
    const weather = new DefaultWeatherPredictorService();
    const date = new Date("2022-06-11");
    expect(weather.getWeather(date)).to.equal("SUNNY");
    weather.updateWeather(date, WeatherE.RAINY);
    expect(weather.getWeather(date)).to.equal("RAINY");
   })
});
