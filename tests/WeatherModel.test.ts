import { mock, instance, verify, capture, reset, when } from "ts-mockito";
import WeatherModel from "../src/services/WeatherModel";
import { expect } from "chai";
import { Weather } from "../src/services/WeatherPredictorService";
import { afterEach } from "mocha";

let mockedWatherModel : WeatherModel;
let actualInstance : WeatherModel;

describe("WeatherModel", () => {
    beforeEach(() => {
        mockedWatherModel = mock(WeatherModel);
        actualInstance = instance(mockedWatherModel);
    })
    afterEach(() => {
        reset(mockedWatherModel);
    })
  it("get weather for month", () => {
    const selectedDate = new Date("2022-08-25");
    when(mockedWatherModel.getWeather(selectedDate)).thenReturn(Weather.SUNNY);

    expect(actualInstance.getWeather(selectedDate)).to.equal("SUNNY");
  });
  it("update weather for single day", () => {
    const selectedDate = new Date("2022-08-22");
    when(mockedWatherModel.getWeather(selectedDate)).thenReturn(Weather.RAINY);

    actualInstance.updateWeather(selectedDate, Weather.RAINY);
    verify(
      mockedWatherModel.updateWeather(selectedDate, Weather.RAINY)
    ).called();
    expect(actualInstance.getWeather(selectedDate)).to.equal("RAINY");
  });
  it("weather for single day does not exist, return defualt weather", () => {
    const selectedDate = new Date("2022-08-22");
    when(mockedWatherModel.getWeather(selectedDate)).thenReturn(Weather.RAINY).thenReturn(Weather.CLOUDY);
    expect(actualInstance.getWeather(selectedDate)).to.equal("RAINY");
    const [argumGet] = capture(mockedWatherModel.getWeather).last();
    expect(argumGet).to.equal(selectedDate);

    actualInstance.updateWeather(selectedDate, Weather.CLOUDY);
    verify(
      mockedWatherModel.updateWeather(selectedDate, Weather.CLOUDY)
    ).called();
    const [argumUpdate] = capture(mockedWatherModel.updateWeather).last();
    expect(argumUpdate).to.equal(selectedDate);
    expect(actualInstance.getWeather(selectedDate)).to.equal("CLOUDY");
  });
});
