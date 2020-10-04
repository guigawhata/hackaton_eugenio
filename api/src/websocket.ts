import socketio from 'socket.io';
import RefreshPINTotemService from './services/RefreshPINTotemService';

let io;

async function refreshPIN() {
  const storeUser = new RefreshPINTotemService();

  await storeUser.execute();

  setTimeout(refreshPIN, 10 * 1000);
}

// refreshPIN();

const setupWebsocket = server => {
  io = socketio(server);

  io.on('connection', socket => {
    // eslint-disable-next-line no-console
    console.log(`🖥  socket ${socket.id} connected!`);

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log(`🖥  socket ${socket.id} disconnected!`);
    });
  });
};

export default setupWebsocket;
