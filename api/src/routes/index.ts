import { Router } from 'express';

import usersRouter from './users.routes';
import totemsRouter from './totems.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: '😀 Hello World!' });
});

routes.use('/users', usersRouter);
routes.use('/totems', totemsRouter);

export default routes;
