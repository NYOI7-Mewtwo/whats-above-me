import express from 'express';
const starsRouter = express.Router();
import starsController from '../controllers/starsController';

starsRouter.get('/', starsController.getStars, (req, res) => {
    res.send('hey you hit the STARS router!')
});

export default starsRouter;

