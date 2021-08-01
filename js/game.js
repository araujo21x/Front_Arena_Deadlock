import {
  getResources,
  getResourcesTeam1,
  getResourcesTeam2,
  getMyPlayer,
  getGameStatusGenerally,
  getPlayers,
  getDiceValueTeam1,
  getDiceValueTeam2,
  getIdRoom
} from './localStorage.js';

export function attPlayersName(players) {
  for (let i = 1; i <= 4; i++) {
    if (players[`player${i}`].playerName) {
      const namePlayer = document.getElementById(`namePlayer${i}`)
      namePlayer.innerHTML = players[`player${i}`].playerName;
      const img = document.createElement('img');
      img.id = `imgPlayer${i}`;
      img.src = 'img/dicePlayer.png';
      namePlayer.appendChild(img);
    }
  }
}

export function attResources() {
  const myPlayer = getMyPlayer();
  const resources = getResources();
  let myResources;
  
  if (myPlayer === 'player1' || myPlayer === 'player2') {
    myResources = getResourcesTeam1();
  } else {
    myResources = getResourcesTeam2();
  }

  for (let i = 1; i <= 6; i++) {
    if (!resources[i]) {
      document.getElementById(`allResource${i}`).style.display = 'none'
    } else {
      document.getElementById(`allResource${i}`).style.display = 'inline'
    }

    if (!myResources[i]) {
      document.getElementById(`myResource${i}`).style.display = 'none'
    }
    else {
      document.getElementById(`myResource${i}`).style.display = 'inline'
    }
  }
}

export function playButton() {
  const myPlayer = getMyPlayer();
  const players = getPlayers()
  const statusGame = getGameStatusGenerally();

  if (statusGame === 'inGame') {
    if (players[myPlayer].gameStatus === 'playing') {
      document.getElementsByClassName('button_to_play')[0].disabled = false;
    } else {
      document.getElementsByClassName('button_to_play')[0].disabled = true;
    }
  } else {
    document.getElementsByClassName('button_to_play')[0].disabled = true;
  }
}

export function updatePosition() {
  const player = getPlayers();
  for (let i = 1; i <= 4; i++) {
    const piece = document.getElementById(`player${i}`);
    const currentPosition = player[`player${i}`].currentPosition < 25
      ? player[`player${i}`].currentPosition : 25;
    const newPosition = document.getElementsByClassName(`zone_${i}_${currentPosition}`)[0];
    newPosition.appendChild(piece);
  }
}

export function playersPlaying() {
  const player = getPlayers();
  for (let i = 1; i <= 4; i++) {
    if(player[`player${i}`].gameStatus){
      const display = player[`player${i}`].gameStatus !== 'wait' ? 'inline' : 'none';
      document.getElementById(`imgPlayer${i}`).style.display = display;
    }
  }
}

export function currentDice() {
  const diceValueTeam1 = getDiceValueTeam1();
  const diceValueTeam2 = getDiceValueTeam2();
  const myTeam = getMyPlayer();
  diceDisable();

  if(myTeam === 'player1' || myTeam === 'player2' ){
    document.getElementById(`dice_1_${diceValueTeam1}`).style.display = 'inline';
    document.getElementById('advDiceValue').innerHTML = diceValueTeam2;
  }else{
    document.getElementById(`dice_1_${diceValueTeam2}`).style.display = 'inline';
    document.getElementById('advDiceValue').innerHTML = diceValueTeam1;
  }
}
export function attRoomCode(){
  document.getElementById('codeZoneIdRoom').innerHTML = getIdRoom();
}

function diceDisable() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`dice_1_${i}`).style.display = 'none';
  }
}