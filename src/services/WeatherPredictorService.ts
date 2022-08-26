export enum Weather {
  SUNNY = "SUNNY",
  RAINY = "RAINY",
  CLOUDY = "CLOUDY",
  HAIL = "HAIL",
  SNOW = "SNOW",
}

export interface WeatherPredictorService {
  getWeather(date: Date): Weather;
  updateWeather(date: Date, weather: Weather): void;
}
