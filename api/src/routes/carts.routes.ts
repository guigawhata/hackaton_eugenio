import { Router } from 'express';

import CreateCartService from '../services/CreateCartService';
import uploadConfig from '../config/upload';

const cartsRouter = Router();

cartsRouter.post('/', async (request, response) => {
  const { name, username, email, password } = request.body;

  const storeUser = new CreateCartService();

  const user = await storeUser.execute({
    name,
    email,
    username,
    password,
  });

  delete user.password;

  return response.json(user);
});

export default cartsRouter;
