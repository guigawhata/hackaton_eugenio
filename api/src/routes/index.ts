import { Router } from 'express';

import usersRouter from './users.routes';
import totemsRouter from './totems.routes';
import cartsRouter from './carts.routes';

const routes = Router();

routes.get('/', (request, response) => {
  console.log(request);
  return response.json({ message: '😀 Hello World!' });
});

routes.use('/users', usersRouter);
routes.use('/totems', totemsRouter);
routes.use('/carts', cartsRouter);

export default routes;
