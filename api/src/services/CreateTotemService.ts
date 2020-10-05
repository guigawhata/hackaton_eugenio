import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Totem from '../models/Totem';

interface Request {
  qr_reader_id: string;
}

class CreateTotemService {
  public async execute({ qr_reader_id }: Request): Promise<Totem> {
    const totemRepository = getRepository(Totem);

    const pin = Math.random().toString(36).substring(7);

    const hashPIN = await hash(pin.toUpperCase(), 8);

    const totem = totemRepository.create({
      status: 'offline',
      pin: hashPIN,
      qr_reader_id,
    });

    await totemRepository.save(totem);

    return totem;
  }
}

export default CreateTotemService;
