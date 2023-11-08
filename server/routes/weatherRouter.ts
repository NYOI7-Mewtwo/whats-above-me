import express from 'express';
const weatherRouter = express.Router();
import weatherController from '../controllers/weatherController';

weatherRouter.get('/', weatherController.getWeather, (req, res) => {
    res.status(200).send(res.locals.weather);
});

export default weatherRouter;
