import { Request, Response, NextFunction } from 'express';

interface AirplanesControllerInterface {
  getPlanes: (req: Request, res: Response, next: NextFunction) => NextFunction;
}

const airplanesController = {

  getPlanes: () => {

  },

}

export default airplanesController;