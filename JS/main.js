import Player from './game.js';
import Ship from './ship.js';
import addListenerAllCells from './doom.js'
import contExp from './auxiliar.js'

const players = {
    player1: new Player(5, 1),
    player2: new Player(5, 2)
}

const ships = [
    // new Ship('Carrier', 5),
    // new Ship('Battleship', 4),
    new Ship('Cruiser', 3),
    new Ship('Submarine', 3),
    new Ship('Destroyer', 2)
];
function inicio() {
    // Colocar barcos en el tablero del Oponente
    players.player1.start(ships.map(ship => new Ship(ship.name+"1", ship.size)))
    // Colocar barcos en el tablero del Jugador
    players.player2.start(ships.map(ship => new Ship(ship.name+"2", ship.size)))
}
inicio();

//Mostrar tablero Oponente
console.log(players.player1.displayPlayerBoard());

//Realizar un ataque del Jugador al Oponente
console.log(players.player1.playerAttack(0, 0)); // Output: 'hit'
console.log(players.player1.playerAttack(0, 4));
// console.log(players.player1.playerAttack(1, 1));
// console.log(players.player1.playerAttack(2, 1));
// console.log(players.player1.playerAttack(1, 2));
// console.log(players.player1.playerAttack(1, 3));
// console.log(players.player1.playerAttack(1, 7));
// console.log(players.player1.playerAttack(1, 4));
// console.log(players.player1.playerAttack(5, 7));
// console.log(players.player1.playerAttack(5, 4));
// console.log(players.player1.playerAttack(5, 8));

console.log(players.player1.displayPlayerBoard());


console.log(players.player1.getTableroPlayer())
console.log(players.player1.getShipsPlayer())

console.log(players.player2.getTableroPlayer())

players.player1.showCoord()

addListenerAllCells();

document.querySelector("button").addEventListener("click",clearLocalStorage)
function clearLocalStorage () {
    localStorage.clear();
    players.player1.clearBoard()
    players.player2.clearBoard()
    inicio();
    addListenerAllCells();
    contExp();
}

document.querySelector("#show").addEventListener("click",()=>{
    console.log(players.player1.returnSize())
})

export {players}