import { Router } from 'express';

import CreateTotemService from '../services/CreateTotemService';

const totemsRouter = Router();

totemsRouter.post('/', async (request, response) => {
  const storeUser = new CreateTotemService();

  const totem = await storeUser.execute();

  delete totem.pin;

  return response.json(totem);
});

export default totemsRouter;
