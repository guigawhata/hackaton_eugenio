import { Socket } from 'socket.io';

declare namespace Express {
  export interface Request {
    connectedTotems: Record<string, unknown>;
    io: Socket;
  }
}
