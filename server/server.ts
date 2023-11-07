import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler,
} from 'express';
import path from 'path';
import airplanesRouter from './routes/airplanesRouter';
import satellitesRouter from './routes/satellitesRouter';
import starsRouter from './routes/starsRouter';
import weatherRouter from './routes/weatherRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../dist')));

/* ROUTERS */
// app.use('/api', (req, res) => {
//   res.send('hi');
// })
app.use('/api/airplanes', (req, res) => {
  res.send('airplanes');
});
// app.use('/api/airplanes', airplanesRouter);
// app.use('/api/satellites', satellitesRouter);
// app.use('/api/stars', starsRouter);
// app.use('/api/weather', weatherRouter);

/* ERROR HANDLING */
// Page not found error handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('Page not found.');
});

// Global error handler
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultError = {
      log: 'Global error handler caught an error somewhere.',
      status: 500,
      message: { error: 'You hit the global error. Unknown middleware error.' },
    };
    const modifiedErrorObj = Object.assign({}, defaultError, err);
    console.log(modifiedErrorObj.log);
    return res.status(modifiedErrorObj.status).json(modifiedErrorObj.message);
  }
);

app.listen(3000, () => console.log('Server is listening on port 3000.'));
