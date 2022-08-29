import { WeatherE, WeatherPredictorServiceI, WeatherModelI } from "../utils/types";
class DefaultWeatherPredictorService implements WeatherPredictorServiceI, WeatherModelI  {
  defaultWeather: { month: string; weather: string }[];
  myDays: { day: Date; weather: string }[];
  
  constructor(defaultWeather: { month: string; weather: string }[]) {
    this.defaultWeather = defaultWeather;
    this.myDays = [];
  }

  public getWeather(date: Date): WeatherE {
    const month = this.defaultWeather[date.getMonth()].month;
    const findForDay = this.myDays.find((value) => {
      return value.day.toString() === date.toString()
    });
    if (findForDay) {
      const predict = findForDay.weather;
      return WeatherE[`${predict as WeatherE}`];
    }
    const predict = this.defaultWeather.find(
      (value) => value.month === month
    )!.weather;
    return WeatherE[`${predict as WeatherE}`];
  }
  public updateWeather(date: Date, weather: WeatherE): void {
    this.myDays.push({ day: date, weather: weather });
  }
}

export default DefaultWeatherPredictorService;
