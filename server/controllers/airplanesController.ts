import { Request, Response, NextFunction } from 'express';
import { PlaneData } from '../../utils/interface';

const airplanesController: any = {};


airplanesController.getPlanes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = `https://airlabs.co/api/v9/flights?api_key=6b90ff34-a3ae-45b5-a857-f250ef7f4045&bbox=40.7002,-74.0119,40.8785,-73.9106`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = (await response.json()) as { response: PlaneData[] };
    res.locals.planes = data.response;
    console.log(res.locals.planes);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default airplanesController;