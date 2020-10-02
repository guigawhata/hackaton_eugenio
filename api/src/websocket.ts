import socketio from 'socket.io';

let io;

const setupWebsocket = server => {
  io = socketio(server);

  io.on('connection', socket => {
    console.log(`🖥  socket ${socket.id} connected!`);
  });
};

export default setupWebsocket;
