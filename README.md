# Front-end - Arena Deadlock

<h3 align="center">🚧 Software em construção 🚧</h3>
<p align="center">
   
  <img width="auto" height="23em" src="https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E" >
  <img width="auto" height="23em" src="https://img.shields.io/badge/HTML-323330?style=flat&&logo=html5&logoColor=red">
  <img width="auto" height="23em" src="https://img.shields.io/badge/CSS-323330?&style=flat&&logo=css3&logoColor=blue">
  
</p>

# Sumario 
* [Sobre](#sobre)
* [Pré-Requisito](#pré-requisito)
* [Executando o projeto](#executando-o-projeto)
* [Tecnologias](#tecnologias)
* [Autores](#autores)

<br> 

___
# Sobre

<p align="center">

  <img width="auto" height="220em" src="https://raw.githubusercontent.com/araujo21x/Front_Arena_Deadlock/main/img/GitHubImgReadme/arenaDeadlock01.png">
  <img width="auto" height="220em" src="https://raw.githubusercontent.com/araujo21x/Front_Arena_Deadlock/main/img/GitHubImgReadme/arenaDeadlock02.png">
</p>
<br> 
<p align="justify">Para acessar e testar o jogo basta clicar neste <a href="https://front-arena-deadlock.vercel.app/" target="_blank">link</a>, mas é necessário 4 jogadores para a partida funcionar </p>

<p align="justify">Arena deadlocké um jogo de tabuleiro analogico desenvolvidos por mim e alguns amigos do graduação, apartir dessa versão analogica eu construir a versão digital um sistema web. De maneira resumida o jogo necessita de 4 jogadores simultâneos, que são divididos em duas equipes, equipe “A” e “B”. Uma equipe fica nos campos verticais e a outra nos campos horizontais. Cada jogador tem como objetivo atravessar os 25 campos para conseguir a vitória do seu time. No centro do tabuleiro, os campos verticais e horizontais se encontram e essa área é chamada de seção crítica. Assim, só pode existir um jogador por vez nessa zona e, caso tenha um, os demais participantes que estão em campos anteriores a seção crítica não podem se mover até esse jogador sair.</p>

<p align="justify">Cada rodada é dividida em dois turnos. Em cada turno um jogador de cada equipe vai jogar o dado e no turno seguinte os outros dois jogadores. A face do dado que cada jogador tira em seu turno serve para indicar o número de campos que ele vai movimentar-se e recolher um recursos para seu time de acordo com a face do dado que tirou.</p>

<p align="justify">No jogo existem 6 recursos, cada um com sua numeração que é vinculada com uma face do dado. Os recursos iniciam na Zona de recursos, área no canto inferior esquerdo da primeira imagem apresentada. Quando um recurso está nessa zona, ele pode ser recolhido pelo time que tirou a face do dado equivalente ao número do recurso e com isso o recurso vai para a área de recursos daquele time. O jogador da equipe só pode movimentar-se, se o recurso estiver disponível na zona de recursos ou pertencer a sua equipe. Desta maneira se o recurso pertencer a equipe adversária ele não vai mover-se. Os recursos também podem causar o deadlock nas seguintes situações:</p>
<ul>
  <li><p align="justify">Caso o recurso esteja na zona de recursos e dois jogadores tirarem o valor do dado que o represente em um turno; </p></li>
  <li><p align="justify">No turno se cada jogador tira um valor no dado de um recurso que pertence a equipe adversária.</p></li>
</ul>
<p align="justify">Quando o deadlock acontece, todos os recursos retornam para o status de disponível e os jogadores do turno voltam para o  início do jogo. A principal diferença do software desenvolvido para o jogo analógico é que jogo analógico possui um modo que todos os jogadores voltam para o início do jogo ao ocorrer o deadlock.</p>
<p align="justify">Quanto mais recurso um um time retém, melhor são as probabilidades de se movimentar e evitar o deadlock na partida. Entretanto, para vencer a partida, é necessário sorte, já que a cada turno pode acontecer deadlock e os jogadores do turno voltam para o começo e perdem os recursos do time.</p>

---
# Pré-Requisito

<br> 

  <p align="justify">Caso deseje baixar o código fonte, para que funcione é necessário clonar a API do projeto que pode ser acessada neste <a href="https://github.com/araujo21x/Back_Arena_Deadlock" target="_blank">link</a> e fazer ela rodar.</p>

---
# Executando o projeto

<br> 

<strong>1 - </strong>  Clone este repositório:

```bash
$ git clone https://github.com/araujo21x/Front_Arena_Deadlock.git
```

<strong>2 - </strong>  Abra a basta do projeto e abra o arquivo index.html.

# Tecnologias 

<p align="justify"> Foi-se utilizado JavaScript Vanilla, HTML 5, CSS 3 e Socket.io. <strong>Não</strong> se utilizou nenhum framework JS.</p>

___
# Autores 

<br> 

## Lucas de Araujo Cirqueira:
* [GitHub](https://github.com/araujo21x);
* [LinkedIn](https://www.linkedin.com/in/lucas-araujo-cirqueira-a1402519b/)
