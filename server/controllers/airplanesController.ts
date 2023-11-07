import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';


export const airplanesController: RequestHandler = (req, res, next) => {
  
};

// interface AirplanesControllerInterface {
//   getPlanes: (req: Request, res: Response, next: NextFunction) => NextFunction;
// }
// const airplanesController: AirplanesControllerInterface = {   

//   getPlanes: (req: Request, res: Response, next: NextFunction) => {
//     return next();
//   },

// }
// export default airplanesController;