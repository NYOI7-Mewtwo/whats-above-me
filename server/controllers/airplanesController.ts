import { Request, Response, NextFunction } from 'express';

const airplanesController: any = {};

airplanesController.getPlanes = (req: Request, res: Response, next: NextFunction) => {
  console.log('hit airplane controller')
  return next()
}

export default airplanesController;