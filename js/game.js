import {
  getResources,
  getResourcesTeam1,
  getResourcesTeam2,
  getMyPlayer,
  getGameStatusGenerally,
  getPlayers
} from './localStorage.js';

export function attPlayersName(players) {
  for (let i = 1; i <= 4; i++) {
    if (players[`player${i}`].playerName) {
      document.getElementById(`namePlayer${i}`)
        .innerHTML = players[`player${i}`].playerName;
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

export function updatePosition(){
  const player = getPlayers();
  for(let i = 1; i <= 4; i++){
    const piece = document.getElementById(`player${i}`);
    const currentPosition = player[`player${i}`].currentPosition;
    const newPosition = document.getElementsByClassName(`zone_${i}_${currentPosition}`)[0];
    newPosition.appendChild(piece);
  }
}