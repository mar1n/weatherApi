import express from "express"
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json()); 

app.get('/predict', (req, res) => {
    res.send('Well done!');
})

app.post('/update', (req, res) => {
    res.send('Well done!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
