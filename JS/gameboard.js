import {Ship, log} from './script.js'
function gameBoard (a,b,c) {
    return{
        ship1: Ship(a),
        ship2: Ship(b),
        ship3: Ship(c)
    }
};

const board = gameBoard(3, 5, 1);

log(board.ship1.getLength())

alert("impronta")