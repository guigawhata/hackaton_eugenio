import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import http from 'http';
import socketio from 'socket.io';

import './database';
import AppError from './errors/AppError';

import routes from './routes';
import uploadConfig from './config/upload';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
const server = new http.Server(app);
const io = socketio(server);

const connectedTotems = {};

io.on('connection', socket => {
  const { totem_id } = socket.handshake.query;

  // eslint-disable-next-line no-console
  console.log(`🖥  socket ${socket.id} connected!`);

  connectedTotems[totem_id] = socket.id;

  // eslint-disable-next-line no-console
  console.log(connectedTotems);

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(`🖥  socket ${socket.id} disconnected!`);

    delete connectedTotems[totem_id];

    // eslint-disable-next-line no-console
    console.log(connectedTotems);
  });
});

app.use((request: Request, _: Response, next: NextFunction) => {
  request.connectedTotems = connectedTotems;
  request.io = io;
  next();
});

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
});

server.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started!');
});
