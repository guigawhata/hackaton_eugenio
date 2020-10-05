import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { Socket } from 'socket.io';

import Totem from '../models/Totem';

interface Request {
  io: Socket;
}

class RefreshPINTotemService {
  public async execute(io: Request): Promise<void> {
    const totemRepository = getRepository(Totem);

    const totems = totemRepository.find({
      where: {
        status: 'offline',
      },
    });

    (await totems).map(async totem => {
      const pin = Math.random().toString(36).substring(7);

      const hashPIN = await hash(pin.toUpperCase(), 8);

      totem.pin = hashPIN;

      await totemRepository.save(totem);

      io.sockets.emit('pin', {
        id: totem.id,
        pin: pin.toUpperCase(),
      });
    });
  }
}

export default RefreshPINTotemService;
