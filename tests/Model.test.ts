import { mock, instance, verify, capture, reset, when } from "ts-mockito";
import { expect } from "chai";
import { WeatherE, WeatherPredictorServiceI, WeatherModelI } from "../src/utils/types";
import { afterEach, beforeEach } from "mocha";
import { defaultWeather } from "../src/utils/helpers";

let mockedWeatherPredictorService : WeatherPredictorServiceI & WeatherModelI;
let weatherPredictorService : WeatherPredictorServiceI & WeatherModelI;
const date = new Date("2022-08-22");

describe("Model", () => {
    beforeEach(() => {
        mockedWeatherPredictorService = mock<WeatherPredictorServiceI & WeatherModelI>();
        weatherPredictorService = instance(mockedWeatherPredictorService);
    })
    afterEach(() => {
        reset(mockedWeatherPredictorService)
    })
  it("get weather", () => {
    when(mockedWeatherPredictorService.defaultWeather).thenReturn(defaultWeather)
    when(mockedWeatherPredictorService.getWeather(date)).thenReturn(WeatherE.CLOUDY);

    expect(weatherPredictorService.defaultWeather).to.equal(defaultWeather);
    expect(weatherPredictorService.getWeather(date)).to.equal("CLOUDY");
  });
  it("update weather", () => {
    when(mockedWeatherPredictorService.defaultWeather).thenReturn(defaultWeather)
    when(mockedWeatherPredictorService.myDays).thenReturn([]);
    when(mockedWeatherPredictorService.getWeather(date)).thenReturn(WeatherE.RAINY);

    weatherPredictorService.updateWeather(date, WeatherE.RAINY);
    verify(
        mockedWeatherPredictorService.updateWeather(date, WeatherE.RAINY)
    ).called();
    when(mockedWeatherPredictorService.myDays).thenReturn([{ day: date, weather: "RAINY" }])

    expect(weatherPredictorService.myDays).to.deep.equal([{ day: date, weather: "RAINY" }]);
    expect(weatherPredictorService.getWeather(date)).to.equal("RAINY");
  });
  it("weather for single day does not exist, return defualt weather", () => {
    when(mockedWeatherPredictorService.defaultWeather).thenReturn(defaultWeather)
    when(mockedWeatherPredictorService.myDays).thenReturn([]);
    when(mockedWeatherPredictorService.getWeather(date)).thenReturn(WeatherE.RAINY).thenReturn(WeatherE.CLOUDY);
    
    expect(weatherPredictorService.getWeather(date)).to.equal("RAINY");
    const [argumGet] = capture(mockedWeatherPredictorService.getWeather).last();
    expect(argumGet).to.equal(date);
    expect(weatherPredictorService.myDays).to.deep.equal([]);

    weatherPredictorService.updateWeather(date, WeatherE.CLOUDY);
    verify(
        mockedWeatherPredictorService.updateWeather(date, WeatherE.CLOUDY)
    ).called();
    when(mockedWeatherPredictorService.myDays).thenReturn([{ day: date, weather: "CLOUDY" }])
    const [argumUpdate] = capture(mockedWeatherPredictorService.updateWeather).last();
    expect(argumUpdate).to.equal(date);

    expect(weatherPredictorService.myDays).to.deep.equal([{ day: date, weather: "CLOUDY" }]);
    expect(weatherPredictorService.getWeather(date)).to.equal("CLOUDY");
  });
});
