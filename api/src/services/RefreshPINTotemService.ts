import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import Totem from '../models/Totem';

class RefreshPINTotemService {
  public async execute(): Promise<void> {
    const totemRepository = getRepository(Totem);

    const pin = Math.random().toString(36).substring(7);

    const hashPIN = await hash(pin.toUpperCase(), 8);

    const totems = totemRepository.find({
      where: {
        status: 'offline',
      },
    });

    (await totems).map(totem => {
      totem.pin = hashPIN;

      return totemRepository.save(totem);
    });
  }
}

export default RefreshPINTotemService;
