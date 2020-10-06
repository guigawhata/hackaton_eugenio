import { getRepository } from 'typeorm';

import api from '../utils/api';

import Totem from '../models/Totem';

import AppError from '../errors/AppError';

interface Request {
  client_id: string;
  product_id: string;
  totem_id: string;
}

class TryAromaTotemService {
  public async execute({
    client_id,
    product_id,
    totem_id,
  }: Request): Promise<Totem> {
    const totemRepository = getRepository(Totem);

    const findTotem = await totemRepository.findOne({
      where: {
        id: totem_id,
      },
    });

    if (!findTotem) {
      throw new AppError(`Totem does not exists!`);
    }

    try {
      api.defaults.headers.apikey = '093ioeLvUgwxCS6w0oIX7a1sjXaHpsIn';

      const response = await api.post(
        `/${findTotem.aroma_dispenser_id}/invoke`,
        {
          method: 'sendToDevice',
          payload: {
            client_id,
            product_id,
            totem_id,
          },
          timeout: 10,
        },
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default TryAromaTotemService;
