import { Request, Response, NextFunction } from 'express';

const weatherController: any = {};

weatherController.getWeather = (req: Request, res: Response, next: NextFunction) => {

  const { long } = req.body
  const { lat } = req.body

  const url: any = `https://api.tomorrow.io/v4/weather/realtime?location=${lat}%2C%20${long}&apikey=LR8WCXpkOMjIiTymXRjL7YgfWypWv2Jd`;

  try {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.locals.weather = data;
    console.log(res.locals.weather);
    next();
  }
  catch (error) {
    console.log(error);
  }
}

export default weatherController;