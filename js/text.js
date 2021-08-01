export default "Deadlock é o impasse que ocorre em situações em que mais de um processo precisa do mesmo recurso. O termo recursos são entendidos aqui como qualquer recurso computacional que tenha a possibilidade de acesso simultâneo por dois ou mais processos, como variáveis compartilhadas, posições de memória, etc. Segundo Tanenbaum, “Um conjunto de processos estará em situação de impasse se cada processo no conjunto estiver esperando por um evento que apenas outro processo no conjunto pode causar (TANENBAUM, 2015, p. 303)”. Considere a seguinte situação hipotética: o processo “A”, para finalizar precisa de um recurso, porém esse recurso está retido pelo processo “B”, e no mesmo momento o processo “B” preciso de um recurso que está retido pelo processo “A”. Dessa forma, nenhum dos processo irá finalizar porque um precisa de um recurso que pertence ao outro e não haverá troca nem compartilhamento de recurso.";

export function rules() {
  return [
    'Só pode existir um jogador na zona crítica;',
    'Todo recurso tem um valor numérico que o representa, o recurso é capturado pela equipe quando um dos jogadores tira um valor no dado referente ao valor do recurso;',
    'Para andar é necessário o recurso pertencer a sua equipe ou ou disponível para captura;',
    'Quando um jogador está na zona crítica, os jogadores atrás da zona crítica não podem se mexer;',
    'Deadlock: se você tirou um valor e o recurso é da equipe inimiga e aconteceu o mesmo com a equipe inimiga, ambas equipes perdem os recursos e os jogadores da rodada voltam para o começo;',
    'Deadlock: se você e o outro jogador tem o mesmo valor no dado e esse recurso está disponível para captura, ambas equipes perdem os recursos e os jogadores da rodada voltam para o começo.'
  ];
};
