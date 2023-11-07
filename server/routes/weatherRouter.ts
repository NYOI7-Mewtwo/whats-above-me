import express from 'express';
const weatherRouter = express.Router();
import weatherController from '../controllers/weatherController';

weatherRouter.get('/', weatherController.getWeather, (req, res) => {
    res.send('hey you hit the WEATHER router!')
});

export default weatherRouter;
