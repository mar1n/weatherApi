export enum WeatherE {
  SUNNY = "SUNNY",
  RAINY = "RAINY",
  CLOUDY = "CLOUDY",
  HAIL = "HAIL",
  SNOW = "SNOW",
}

export interface WeatherPredictorServiceI {
  getWeather(date: Date): WeatherE;
  updateWeather(date: Date, weather: WeatherE): void;
}

export interface defaultWeatherI {
  month: string;
  weather: string;
}

export interface weatherDayI {
  day: Date;
  weather: string;
}
