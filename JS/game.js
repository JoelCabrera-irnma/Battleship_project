import Board from './board.js';
class Player {
    constructor(boardSize, player) {
        this.playerBoard = new Board(boardSize,player);
        this.boardSize = boardSize
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

    clearBoard() {
        return this.playerBoard.clearAll();
    }

    returnSize() {
        return this.boardSize
    }
    //OTROS
    getTableroPlayer(){
        return this.playerBoard.displayGrid()
    }

    getShipsPlayer(){
        return this.playerBoard.displayShips()
    }

    showCoord () {
        return (this.playerBoard.displayCoord())
    }
}


export default Player;