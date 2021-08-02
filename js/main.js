import {
  startingGame,
  startingMyGame,
  getMyPlayer,
  getIdPlayer,
  getPlayerName,
  getIdRoom
} from './localStorage.js';
import {
  attPlayersName,
  attResources,
  playButton,
  updatePosition,
  playersPlaying,
  currentDice,
  attRoomCode,
  verifyWinner
} from './game.js';

const socket = io('https://arenadead.herokuapp.com/',
  { transports: ['websocket', 'polling', 'flashsocket'] });

// const socket = io('http://localhost:3000/',
//   { transports: ['websocket', 'polling', 'flashsocket'] });
attRoomCode();
addPlayer();

const buttonPlay = document.getElementsByClassName('button_to_play')[0];
buttonPlay.addEventListener('click', () => {
  toPlay();
})

function addPlayer() {
  const playerName = getPlayerName();
  const idRoom = getIdRoom();
  socket.emit('enterRoom', { idRoom, playerName });
}
function toPlay() {
  const game = getMyPlayer();
  const idPlayer = getIdPlayer();
  const idRoom = getIdRoom();

  socket.emit('toPlay', { idRoom, idPlayer, game });
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
  verifyWinner();
});

socket.on('err', (arg) => {
  startingGame(arg);
  attResources();
  playButton();
  playersPlaying();
  currentDice();
  updatePosition();
  alert(arg.msg);
  verifyWinner();
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