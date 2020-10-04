import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import Totem from '../models/Totem';

class CreateTotemService {
  public async execute(): Promise<Totem> {
    const totemRepository = getRepository(Totem);

    const pin = Math.random().toString(36).substring(7);

    const hashPIN = await hash(pin.toUpperCase(), 8);

    const totem = totemRepository.create({
      status: 'offline',
      pin: hashPIN,
    });

    await totemRepository.save(totem);

    return totem;
  }
}

export default CreateTotemService;
