import { Request, Response, NextFunction } from 'express';

const satellitesController: any = {};

satellitesController.getSatellites = (req: Request, res: Response, next: NextFunction) => {
  console.log('hit SATELLITE controller')
  return next()
}

export default satellitesController;