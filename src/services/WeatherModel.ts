import {
  WeatherPredictorServiceI,
  WeatherModelI,
  WeatherE,
} from "../utils/types";

class WeatherModel implements WeatherPredictorServiceI, WeatherModelI {
  defaultWeather: { month: string; weather: string }[];
  myDays: { day: Date; weather: string }[];
  
  constructor(defaultWeather: { month: string; weather: string }[]) {
    this.defaultWeather = defaultWeather;
    this.myDays = [];
  }

  public getWeather(date: Date): WeatherE {
    const d = new Date(date);
    const month = this.defaultWeather[d.getMonth()].month;
    const findForDay = this.myDays.find((value) => value.day === date);
    if (findForDay) {
      const predict  = findForDay.weather;
      return WeatherE[`${predict as WeatherE}`] ;
    }
    console.log("getMonth", month);
    const predict = this.defaultWeather.find((value) => value.month === month)!.weather;
    return WeatherE[`${predict as WeatherE}`];
  }
  public updateWeather(date: Date, weather: WeatherE): void {
    this.myDays.push({ day: date, weather: weather });
  }
}

export default WeatherModel;
