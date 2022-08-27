import express from "express";
import bodyParser from "body-parser";

function createServer() {
  const app = express();
  app.use(bodyParser.json());
  
  app.get("/predict", (req, res) => {
    res.status(200);
    res.json({message: "Well done!"});
  });
  
  app.post("/update", (req, res) => {
    res.status(200);
    res.json({message: "Well done!"});
  });
  
  app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
  });
  return app;
}

module.exports = createServer;


