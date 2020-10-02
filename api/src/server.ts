import express from 'express';
import http from 'http';

import routes from './routes';
import setupWebsocket from './websocket';
import './database';

const app = express();
const server = new http.Server(app);
setupWebsocket(server);

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

server.listen(3333, () => {
  console.log('🚀 Server started!');
});
