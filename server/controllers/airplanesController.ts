import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const airplanesController: any = {};

airplanesController.getPlanes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url: string = `https://api.aviationstack.com/v1/flights`;

  const params = {
    access_key: `080b533612925fe0d9f2c18cd47184a4`,
  };

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: new URLSearchParams(params).toString()
  });

  if(!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const data = await response.json();
  console.log('fetch backend');
  console.log(data);
  
  
  console.log('hitting airplane controller!');
  return next();
};
export default airplanesController;
