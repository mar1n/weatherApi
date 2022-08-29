import express from "express";
import bodyParser from "body-parser";
import DefaultWeatherPredictorService from "./services/DefaultWeatherPredictorService";
import { defaultWeather } from "./utils/helpers";
const weather = new DefaultWeatherPredictorService(defaultWeather);
import { convertToDate } from "./utils/helpers";

function createServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get("/predict", (req, res) => {
    const date = req.query.date;
    const predictWeather = weather.getWeather(
      convertToDate(date as unknown as number)
    );
    res.status(200);
    res.json({ message: "Well done!", weather: predictWeather });
  });

  app.post("/update", (req, res) => {
    const { date, weather1 } = req.body;
    weather.updateWeather(convertToDate(date), weather1);
    res.status(200);
    res.json({ message: "Well done!" });
  });

  app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
  });
  return app;
}
if (false) {
  createServer();
} else {
  module.exports = createServer;
}
