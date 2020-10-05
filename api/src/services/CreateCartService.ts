import { getRepository } from 'typeorm';
import { Socket } from 'socket.io';

import AppError from '../errors/AppError';

import User from '../models/User';
import Cart from '../models/Cart';
import Totem from '../models/Totem';

interface Request {
  id: string;
  qr_reader_id: string;
  io: Socket;
  connectedTotems: Record<string, unknown>;
}

class CreateCartService {
  public async execute({
    id: user_id,
    qr_reader_id,
    io,
    connectedTotems,
  }: Request): Promise<Cart> {
    const userRepository = getRepository(User);
    const cartRepository = getRepository(Cart);
    const totemRepository = getRepository(Totem);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError(`User don't exists`);
    }

    const findTotem = await totemRepository.findOne({
      where: {
        qr_reader_id,
        status: 'online',
      },
    });

    if (!findTotem) {
      throw new AppError('Totem Offline');
    }

    const socket = connectedTotems[findTotem.id];

    io.to(socket).emit('welcome', `Olá ${user.name}`);

    const checkExistingCart = await cartRepository.findOne({
      where: {
        client: user_id,
        finished_at: null,
      },
    });

    if (checkExistingCart) {
      return checkExistingCart;
    }

    const cart = new Cart();

    cart.client = user;

    await cartRepository.save(cart);

    return cart;
  }
}

export default CreateCartService;
