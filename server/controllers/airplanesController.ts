import { Request, Response, NextFunction } from 'express';
import { getRadius } from '../../utils/getRadius';
import { PlaneData } from '../../utils/interface';

const airplanesController: any = {};

airplanesController.getPlanes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(req.body);
  const { latitude, longitude } = req.body;

  const newCoordinates = getRadius(latitude, longitude, 10);
  const { lat, lng } = newCoordinates;

  const url = `https://airlabs.co/api/v9/flights?api_key=6b90ff34-a3ae-45b5-a857-f250ef7f4045&bbox=${latitude},${longitude},${lat},${lng}`;
  // console.log(url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.locals.planes = data.response;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default airplanesController;
