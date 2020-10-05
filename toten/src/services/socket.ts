import io from 'socket.io-client'

const socket = io('http://192.168.1.66:3333', {
  reconnectionDelayMax: 10000,
  autoConnect: false,
  query: {
    totem_id: '6ec4fda4-2898-48fe-b75f-db85eb6de2cb'
  }
})

export default socket