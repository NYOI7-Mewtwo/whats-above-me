import { Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const starsController: any = {};

starsController.getStars = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // stars api url
  // let's figure out how exactly we're gonna query the stars api
  // im gonna get a location and i want stars that are in a range of that location

  // try
  // try {
  //   // make fetch request
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos"
  //     );
  //     // await fetch request
  //     const body = await response.json();
  //     // do smth with the data
  //     console.log('fetch request worked! here you go: ', body);
  //     return next()
  // } catch {
  //   // catch
  //     // error smth smth
  //   console.log('fetch request failed in stars Controller')
  // }
  console.log('hit STARS controller');
  return next();
};

export default starsController;
