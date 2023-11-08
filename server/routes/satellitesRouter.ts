import express from 'express';
const satellitesRouter = express.Router();
import satellitesController from '../controllers/satellitesController';

satellitesRouter.get('/', satellitesController.getSatellites, (req, res) => {
    res.send('hey you hit the SATELLITES router!')
});

export default satellitesRouter;
