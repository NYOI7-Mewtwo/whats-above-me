import express from 'express';
const airplanesRouter = express.Router();
import airplanesController from '../controllers/airplanesController';

airplanesRouter.post('/', airplanesController.getPlanes, (req, res) => {
  res.status(200).send(res.locals.planes);
});
export default airplanesRouter;
