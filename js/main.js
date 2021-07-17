const socket = io('http://localhost:3000');
socket.emit('enterRoom', {idRoom: 'teste01', playerName:'Lucas'})
socket.on('enterRoom', (arg) => {console.log(arg)})