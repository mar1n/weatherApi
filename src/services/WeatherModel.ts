import {
  WeatherPredictorServiceI,
  WeatherModelI,
  WeatherE,
} from "../utils/types";

class WeatherModel implements WeatherPredictorServiceI, WeatherModelI {
  defaultMonths: { month: string; weather: string }[];
  myDays: { day: Date; weather: string }[];
  constructor(defaultMonths: { month: string; weather: string }[]) {
    this.defaultMonths = defaultMonths;
    this.myDays = [];
  }
  public getWeather(date: Date) {
    return WeatherE.SUNNY;
  }
  public updateWeather(date: Date, weather: WeatherE): void {}
}

export default WeatherModel;
