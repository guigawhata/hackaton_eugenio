import { Router } from 'express';

import CreateCartService from '../services/CreateCartService';

const cartsRouter = Router();

cartsRouter.post('/', async (request, response) => {
  const { id, qr_reader_id } = request.body;

  const { io } = request;

  const { connectedTotems } = request;

  const createCart = new CreateCartService();

  const cart = await createCart.execute({
    id,
    qr_reader_id,
    io,
    connectedTotems,
  });

  return response.json(cart);
});

export default cartsRouter;
