export function startingGame(data) {
  localStorage.setItem('players', JSON.stringify(data.players));
  localStorage.setItem('gameStatusGenerally', data.gameStatusGenerally);
  localStorage.setItem('resources', JSON.stringify(data.resources));
  localStorage.setItem('resourcesTeam1', JSON.stringify(data.resourcesTeam1));
  localStorage.setItem('resourcesTeam2', JSON.stringify(data.resourcesTeam2));
}

export function startingMyGame(data) {
  localStorage.setItem('idPlayer', data.idPlayer);
  localStorage.setItem('playerName', data.playerName);
  localStorage.setItem('game', data.game);
}

export function getResources(){
  return JSON.parse(localStorage.getItem('resources'));
}

export function getResourcesTeam1(){
  return JSON.parse(localStorage.getItem('resourcesTeam1'));
}

export function getResourcesTeam2(){
  return JSON.parse(localStorage.getItem('resourcesTeam2'));
}

export function getMyPlayer(){
  return localStorage.getItem('game');
}

export function getPlayers(){
  return JSON.parse(localStorage.getItem('players'));
}

export function getGameStatusGenerally(){
  return localStorage.getItem('gameStatusGenerally');
}