import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';
import Cart from '../models/Cart';

interface Request {
  user_id: string;
}

class CreateCartService {
  public async execute({ user_id }: Request): Promise<Cart> {
    const userRepository = getRepository(User);
    const cartRepository = getRepository(Cart);

    const cart = cartRepository.create({});

    await cartRepository.save(cart);

    return cart;
  }
}

export default CreateCartService;
