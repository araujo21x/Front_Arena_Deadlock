export function  startingGame(data) {
  localStorage.setItem('players', JSON.stringify(data.players));
  localStorage.setItem('gameStatusGenerally', data.gameStatusGenerally);
  localStorage.setItem('resources', JSON.stringify(data.resources));
  localStorage.setItem('resourcesTeam1', JSON.stringify(data.resourcesTeam1));
  localStorage.setItem('resourcesTeam2', JSON.stringify(data.resourcesTeam2));
  localStorage.setItem('diceValueTeam1', JSON.stringify(data.diceValueTeam1));
  localStorage.setItem('diceValueTeam2', JSON.stringify(data.diceValueTeam2));
}

export function startingMyGame(data) {
  localStorage.setItem('idPlayer', data.idPlayer);
  localStorage.setItem('playerName', data.playerName);
  localStorage.setItem('game', data.game);
}

export function openGame(idRoom, playerName){
  localStorage.setItem('playerName', playerName);
  localStorage.setItem('idRoom', idRoom);
}

export function getPlayerName(){
  return localStorage.getItem('playerName');
}

export function setPlayerName(playerName){
  localStorage.setItem('playerName', playerName);
}

export function setIdRoom(idRoom){
  localStorage.setItem('idRoom', idRoom);
}

export function getIdRoom(){
  return localStorage.getItem('idRoom');
}

export function getResources() {
  return JSON.parse(localStorage.getItem('resources'));
}

export function getResourcesTeam1() {
  return JSON.parse(localStorage.getItem('resourcesTeam1'));
}

export function getResourcesTeam2() {
  return JSON.parse(localStorage.getItem('resourcesTeam2'));
}

export function getMyPlayer() {
  return localStorage.getItem('game');
}

export function getPlayers() {
  return JSON.parse(localStorage.getItem('players'));
}

export function getGameStatusGenerally() {
  return localStorage.getItem('gameStatusGenerally');
}

export function getIdPlayer() {
  return localStorage.getItem('idPlayer');
}

export function getDiceValueTeam1() {
  return JSON.parse(localStorage.getItem('diceValueTeam1'));
}

export function getDiceValueTeam2() {
  return JSON.parse(localStorage.getItem('diceValueTeam2'));
}