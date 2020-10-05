import io from 'socket.io-client'

const socket = io('http://192.168.1.119:3333', {
  reconnectionDelayMax: 10000,
  autoConnect: false
})

export default socket