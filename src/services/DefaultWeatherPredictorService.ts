import { WeatherE, WeatherPredictorServiceI } from "../utils/types"

class DefaultWeatherPredictorService implements WeatherPredictorServiceI {
    
    public getWeather(date: Date): WeatherE {
        return WeatherE.SUNNY;
    }
    public updateWeather(date: Date, weather: WeatherE): void {
        
    }
}

export default DefaultWeatherPredictorService;