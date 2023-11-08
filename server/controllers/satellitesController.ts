import { Request, Response, NextFunction } from 'express';

const satellitesController: any = {};

satellitesController.getSatellites = async (req: Request, res: Response, next: NextFunction) => {

  const api_key: any = 'mAYCD9SteNrzSBdJdtQMhG';
  const url: any = `https://api.spectator.earth/satellite/?api_key=${api_key}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.locals.satellites = data.response;
    console.log(res.locals.satellites);
    next();

  } catch (error) {
    console.log(error);
  }
}

export default satellitesController;