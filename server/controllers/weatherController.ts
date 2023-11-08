import { Request, Response, NextFunction } from 'express';

const weatherController: any = {};

weatherController.getWeather = (req: Request, res: Response, next: NextFunction) => {
  console.log('hit WEATHER controller')
  return next()
}

export default weatherController;