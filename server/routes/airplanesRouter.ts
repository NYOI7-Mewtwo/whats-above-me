import express from 'express';
const airplanesRouter = express.Router();
import airplanesController from '../controllers/airplanesController';

airplanesRouter.get('/', airplanesController.getPlanes, (req, res) => {
    console.log('hit the airplane router!!!')
    res.send('hey you hit the airplanes router!')
});

export default airplanesRouter;
