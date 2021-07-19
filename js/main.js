import { startingGame, startingMyGame } from './localStorage.js';
import { attPlayersName, attResources, playButton} from './game.js';

const socket = io('https://arenadead.herokuapp.com/');

const button = document.getElementById('buttonModal');
button.addEventListener('click', () => {
  addPlayer()
})

function addPlayer() {
  const name = document.getElementById('name').value
  socket.emit('enterRoom', { idRoom: 'teste01', playerName: name });
  document.getElementById('modal').style.display = 'none';
}

socket.on('enterRoomAll', (arg) => {
  startingGame(arg);
  attPlayersName(arg.players);
  attResources();
  playButton();
});
socket.on('enterRoomPersonal', (arg) => { startingMyGame(arg) });
//
// setTimeout(() => {
//   console.log(info)
//   socket.emit('toPlay', { idRoom: 'teste01', playerName: info.playerName, game: info.game });
//   socket.on('enterRoom', (arg) => {
//     console.log(arg)
//     info = arg
//   });
// }, 1000)
