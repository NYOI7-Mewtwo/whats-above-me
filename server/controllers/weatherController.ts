import { RequestHandler} from 'express';

export const weatherController: RequestHandler = (req, res, next) => {
  console.log('hi')
};