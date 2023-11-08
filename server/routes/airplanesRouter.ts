import express from 'express';
const airplanesRouter = express.Router();
import airplanesController from '../controllers/airplanesController';

airplanesRouter.get('/', airplanesController.getPlanes, (req, res) => {
    console.log('hit the airplane router!!!')
    res.sendStatus(200)
});

export default airplanesRouter;
