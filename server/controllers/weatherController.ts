import { Request, Response, NextFunction } from 'express';

interface WeatherControllerInterface {
  getWeather: (req: Request, res: Response, next: NextFunction) => NextFunction;
}

const weatherController: WeatherControllerInterface = {
  getWeather: (req: Request, res: Response, next: NextFunction) => {
    return next();
  },
};

export default weatherController;
