import Player from './game.js'
import Ship from './ship.js'

const player1 = new Player(10);
const player2 = new Player(10);


const ships = [
    new Ship('Carrier', 5),
    new Ship('Battleship', 4),
    new Ship('Cruiser', 3),
    new Ship('Submarine', 3),
    new Ship('Destroyer', 2)
];
// Colocar barcos en el tablero del Oponente
player1.start(ships)
// Colocar barcos en el tablero del Jugador
player2.start(ships.map(ship => new Ship(ship.name, ship.size)))


//Mostrar tablero Oponente
console.log(player1.displayPlayerBoard());

//Realizar un ataque del Jugador al Oponente
console.log(player1.playerAttack(0, 0)); // Output: 'hit'
console.log(player1.playerAttack(0, 4));

console.log(player1.getTableroPlayer())
console.log(player1.getShipsPlayer())

console.log(player2.getTableroPlayer())

function showCoord (){
    player1.showCoord()
}
// Mostrar el tablero del oponente después del ataque
//console.log(player1.displayOpponentBoard());
