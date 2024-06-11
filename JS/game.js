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
    
    playerAttack(x, y) {
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

    showCoord () {
        return this.playerBoard.displayCoord()
    }
}


export default Player;