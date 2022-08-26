import { defaultWeatherI, weatherDayI } from "./types";

const defaultWeather: defaultWeatherI[] = [
  { month: "January", weather: "SNOW" },
  { month: "February", weather: "SNOW" },
  { month: "March", weather: "RAINY" },
  { month: "April", weather: "RAINY" },
  { month: "May", weather: "CLOUDY" },
  { month: "June", weather: "SUNNY" },
  { month: "July", weather: "SUNNY" },
  { month: "August", weather: "CLOUDY" },
  { month: "September", weather: "CLOUDY" },
  { month: "October", weather: "CLOUDY" },
  { month: "November", weather: "HAIL" },
  { month: "December", weather: "SNOW" },
];

const weatherDay: weatherDayI[] = [];

let getMonth = (date: Date) => {
  const d = new Date(date);
  return defaultWeather[d.getMonth()].month;
};

let updateWeatherForDay = (date: Date, weather: string) => {
  weatherDay.push({ day: date, weather: weather });
};

let getWeather = (date: Date) => {
  const findForDay = weatherDay.find((value) => value.day === date);
  if (findForDay) {
    return findForDay.weather;
  }
  const month = getMonth(date);
  return defaultWeather.find((value) => value.month === month)!.weather;
};
