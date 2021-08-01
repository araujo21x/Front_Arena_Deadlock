import deadlock, { rules } from './text.js';
import { openGame, setIdRoom, setPlayerName } from './localStorage.js';

function generateRoomId() {
  return Math.random().toString(36).substring(7);
}

document.getElementsByClassName('close')[0].addEventListener('click', () => {
  close();
})

document.getElementById('colPlay').addEventListener('click', () => openModalPlayer());

document.getElementById('menuRules').addEventListener('click', () => openModalRules());
document.getElementById('colRules').addEventListener('click', () => openModalRules());

document.getElementById('menuDeadlock').addEventListener('click', () => openModalDeadlock());
document.getElementById('colDeadlock').addEventListener('click', () => openModalDeadlock());

function openModalPlayer() {
  document.getElementById('modalZone').className = 'miniModal';
  const modal = document.getElementById('modal');
  const text = document.getElementsByClassName('textModal')[0];
  modal.style.display = 'flex';
  text.innerHTML = '';

  const buttonGenerateRoom = document.createElement('button');
  const buttonOpenRoom = document.createElement('button');

  buttonGenerateRoom.innerHTML = 'Criar Sala';
  buttonOpenRoom.innerHTML = 'Acessar Sala';

  buttonGenerateRoom.addEventListener('click', () => createRoom());
  buttonOpenRoom.addEventListener('click', () => accessRoom());
  text.appendChild(buttonGenerateRoom)
  text.appendChild(buttonOpenRoom)
}

function openModalRules() {
  document.getElementById('modalZone').className = 'modal';
  const modal = document.getElementById('modal')
  modal.style.display = 'flex';

  const h1 = document.getElementsByClassName('TitleModal')[0];
  const text = document.getElementsByClassName('textModal')[0];
  h1.innerHTML = 'Regras do Jogo';
  text.innerHTML = '';

  const ul = document.createElement('ul');
  const rulesText = rules();

  rulesText.forEach(element => {
    const li = document.createElement('li');
    li.innerHTML = element;
    ul.appendChild(li);
  });
  text.appendChild(ul);
}

function openModalDeadlock() {
  document.getElementById('modalZone').className = 'modal';
  const modal = document.getElementById('modal')
  modal.style.display = 'flex';

  const h1 = document.getElementsByClassName('TitleModal')[0];
  const text = document.getElementsByClassName('textModal')[0];
  h1.innerHTML = 'O que é Deadlock';
  text.innerHTML = deadlock;

}

function close() {
  document.getElementById('modal').style.display = 'none';
}

function createRoom() {
  const h1 = document.getElementsByClassName('TitleModal')[0];
  const text = document.getElementsByClassName('textModal')[0];
  h1.innerHTML = 'Informe seu nome';
  text.innerHTML = '';

  const input = document.createElement('input');
  const buttonOpenGame = document.createElement('button');
  input.type = 'text';
  input.id = 'name';
  input.name = 'name'

  buttonOpenGame.innerHTML = 'Confirmar'
  buttonOpenGame.addEventListener('click', ()=> {
    const name = document.getElementById('name').value
    openGame(generateRoomId(), name);
    window.location.href = '../game.html';
  });
  text.appendChild(input);
  text.appendChild(buttonOpenGame);
}

function accessRoom() {
  const h1 = document.getElementsByClassName('TitleModal')[0];
  const text = document.getElementsByClassName('textModal')[0];
  h1.innerHTML = 'Código da Sala';
  text.innerHTML = '';

  const form = document.createElement('form');
  const input = document.createElement('input');
  const buttonOpenName = document.createElement('button');
  input.type = 'text';
  input.id = 'name';
  input.name = 'name'
  form.appendChild(input);

  buttonOpenName.innerHTML = 'Confirmar'
  buttonOpenName.addEventListener('click', ()=> {
    const idRoom = document.getElementById('name').value;
    setIdRoom(idRoom);
    openRoom();
  });
  form.appendChild(buttonOpenName);
  text.appendChild(form);
}

function openRoom(){
  const h1 = document.getElementsByClassName('TitleModal')[0];
  const text = document.getElementsByClassName('textModal')[0];
  h1.innerHTML = 'Informe seu nome';
  text.innerHTML = '';

  const input = document.createElement('input');
  const buttonOpenGame = document.createElement('button');
  input.type = 'text';
  input.id = 'name';
  input.name = 'name'

  buttonOpenGame.innerHTML = 'Confirmar'
  buttonOpenGame.addEventListener('click', ()=> {
    const name = document.getElementById('name').value
    setPlayerName(name)
    window.location.href = '../game.html';
  });
  text.appendChild(input);
  text.appendChild(buttonOpenGame);
}