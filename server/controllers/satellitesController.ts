import { Request, Response, NextFunction } from 'express';

const satellitesController: any = {};

satellitesController.getSatellites = async (req: Request, res: Response, next: NextFunction) => {

  const url = `https://api.spectator.earth/satellite/?api_key=mAYCD9SteNrzSBdJdtQMhG`;
  console.log('im inside get');
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    res.locals.satellites = data.response;
    console.log('RES LOCALS SATELITTES', res.locals.satellites);
    next();

  } catch (error) {
    console.log(error);
  }
}

export default satellitesController;