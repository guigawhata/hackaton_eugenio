import { Router } from 'express';

import CreateTotemService from '../services/CreateTotemService';
import ActivateTotemService from '../services/ActivateTotemService';

const totemsRouter = Router();

totemsRouter.post('/', async (request, response) => {
  const { qr_reader_id } = request.body;

  const storeUser = new CreateTotemService();

  const totem = await storeUser.execute({ qr_reader_id });

  delete totem.pin;

  return response.json(totem);
});

totemsRouter.post('/activate', async (request, response) => {
  const { qr_reader_id, pin } = request.body;

  const storeUser = new ActivateTotemService();

  const totem = await storeUser.execute({ qr_reader_id, pin });

  delete totem.pin;

  return response.json(totem);
});

export default totemsRouter;
