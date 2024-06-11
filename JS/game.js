import Board from './board.js';
class Player {
    constructor(boardSize) {
        this.playerBoard = new Board(boardSize);
    }

    placePlayerShip(ship, positions) {
        this.playerBoard.placeShip(ship, positions);
    }

    placeShipsAutomatically(board, ships) {
        ships.forEach(ship => board.placeShipRandomly(ship));
    }

    start(ships) {
        this.placeShipsAutomatically(this.playerBoard, ships);
    }
    
    playerAttack(x, y, player) {
        return this.playerBoard.receiveAttack(x, y);
    }

    displayPlayerBoard() {
        return this.playerBoard.display();
    }

    //otros
    getTableroPlayer(){
        return this.playerBoard.displayGrid()
    }

    getShipsPlayer(){
        return this.playerBoard.displayShips()
    }

}

// class Game {
//     constructor(boardSize) {
//         this.playerBoard = new Board(boardSize);
//         this.opponentBoard = new Board(boardSize);
//     }

//     placePlayerShip(ship, positions) {
//         this.playerBoard.placeShip(ship, positions);
//     }

//     placeOpponentShip(ship, positions) {
//         this.opponentBoard.placeShip(ship, positions);
//     }

//     playerAttack(x, y) {
//         return this.opponentBoard.receiveAttack(x, y);
//     }

//     opponentAttack(x, y) {
//         return this.playerBoard.receiveAttack(x, y);
//     }

//     displayPlayerBoard() {
//         return this.playerBoard.display();
//     }

//     displayOpponentBoard() {
//         return this.opponentBoard.display();
//     }

//     //otros
//     getTableroPlayer(){
//         return this.playerBoard.displayGrid()
//     }

//     getShipsPlayer(){
//         return this.playerBoard.displayShips()
//     }

//     getTableroOponent(){
//         return this.opponentBoard.displayGrid()
//     }

//     getShipsOponent(){
//         return this.playerBoard.displayShips()
//     }
// }

export default Player;