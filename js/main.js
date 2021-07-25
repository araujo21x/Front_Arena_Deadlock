import {
  startingGame,
  startingMyGame,
  getMyPlayer,
  getIdPlayer
} from './localStorage.js';
import {
  attPlayersName,
  attResources,
  playButton,
  updatePosition,
  playersPlaying,
  currentDice
} from './game.js';

const socket = io('https://arenadead.herokuapp.com/',
  { transports: ['websocket', 'polling', 'flashsocket'] });

// const socket = io('http://localhost:3000/',
//   { transports: ['websocket', 'polling', 'flashsocket'] });

const button = document.getElementById('buttonModal');
button.addEventListener('click', () => {
  addPlayer();
})
const buttonPlay = document.getElementsByClassName('button_to_play')[0];
buttonPlay.addEventListener('click', () => {
  toPlay();
})

function addPlayer() {
  const name = document.getElementById('name').value
  socket.emit('enterRoom', { idRoom: 'teste01', playerName: name });
  document.getElementById('modal').style.display = 'none';
}
function toPlay() {
  const game = getMyPlayer();
  const idPlayer = getIdPlayer();

  socket.emit('toPlay', { idRoom: 'teste01', idPlayer, game });
}

socket.on('enterRoomAll', (arg) => {
  startingGame(arg);
  attPlayersName(arg.players);
  attResources();
  playButton();
  playersPlaying();
});

socket.on('enterRoomPersonal', (arg) => { startingMyGame(arg) });

socket.on('toPlay', (arg) => {
  startingGame(arg);
  attResources();
  playButton();
  updatePosition();
  playersPlaying();
  currentDice();
});

socket.on('err', (arg) => {
  startingGame(arg);
  attResources();
  playButton();
  playersPlaying();
  currentDice();
  updatePosition();
  alert(arg.msg);
});

socket.on('winner', (arg) => {
  startingGame(arg);
  attResources();
  playButton();
  playersPlaying();
  currentDice();
  updatePosition();
  alert(`Vencedor: Jogador ${arg.playerWinner} da ${arg.teamWinner} `);
});