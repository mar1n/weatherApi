import { WeatherPredictorServiceI, WeatherE } from "../utils/types";

class WeatherModel implements WeatherPredictorServiceI {
    public getWeather(date: Date) {
        return WeatherE.SUNNY;
    }
    public updateWeather(date: Date, weather: WeatherE): void {
    }
}

export default WeatherModel;
