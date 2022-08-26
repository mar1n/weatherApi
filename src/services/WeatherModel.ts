import { WeatherPredictorService, Weather } from "../services/WeatherPredictorService"

class WeatherModel implements WeatherPredictorService {
    public getWeather(date: Date) {
        return Weather.SUNNY;
    }
    public updateWeather(date: Date, weather: Weather): void {
        
    }
}

export default WeatherModel;
