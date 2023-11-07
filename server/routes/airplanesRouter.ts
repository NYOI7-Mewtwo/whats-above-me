import express from 'express';
const airplanesRouter = express.Router();
import airplanesController from '../controllers/airplanesController';

airplanesRouter.get('/', airplanesController.getPlanes, (req, res) => {

  res.send('hey you hit the airplanes router!');
});
export default airplanesRouter;
