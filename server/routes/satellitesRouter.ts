import express from 'express';
const satellitesRouter = express.Router();
import satellitesController from '../controllers/satellitesController';

satellitesRouter.get('/', satellitesController.getSatellites, (req, res) => {
    res.status(200).send(res.locals.satellites);
});

export default satellitesRouter;
