import RandomPlacement from './randomPlacement.js';
import {deleteItem, verificarVictoria} from './auxiliar.js'
import {renderBoard,createBoard} from './doom.js'

class Board {
    constructor(size, player) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array(size).fill(null));
        this.ships = [];
        this.missAttackCoord = []
        this.player = player
    }

    placeShip(ship, positions) {
        for (let position of positions) {
            const [x, y] = position;
            if (this.grid[x][y] !== null) {
                throw new Error('Invalid position: a ship is already placed here.');
            }
        }

        ship.setPosition(positions);
        for (let position of positions) {
            const [x, y] = position;
            this.grid[x][y] = ship;
        }
        this.ships.push(ship);
        createBoard(this.size,this.size,this.player);
        renderBoard(this.grid,this.player)
    }

    placeShipRandomly(ship) {
        const savedData = JSON.parse(localStorage.getItem(`${ship.name}`));
        if(savedData!==null){
            this.placeShip(ship, savedData);
        } else {
            const positions = RandomPlacement.getRandomPosition(this.grid, ship.size);
            localStorage.setItem(`${ship.name}`, JSON.stringify(positions));
            this.placeShip(ship, positions);
        }
                
    }
    
    receiveAttack(x, y) {
        const target = this.grid[x][y];
        if (target === null) {
            this.missAttackCoord.push([x,y]);
            this.grid[x][y] = "O";
            return 'miss';
        } else if (target === "O"||target ==="X"){
            return "repeat shot" 
        } else {
            target.hit();
            if (target.isSunk()) {
                //eliminar barcos de this.ships
                deleteItem(this.ships,target.name);
                this.grid[x][y] = "X";
                //Verificar si hay un ganador
                setTimeout(()=>verificarVictoria(this.ships,this.player),0)
                
                return `sunk ${target.name}`;
            } else {
                this.grid[x][y] = "X";
                return 'hit';
            }
        }
    }

    
    display() {
        return this.grid.map(row => 
            row.map(cell => {
                if (cell === null) return '.';
                if (cell === 'O') return 'O';
                if (cell === 'X') return 'X';
                return 'S'; 
            }).join(' ')
        ).join('\n');
    }
    

    //Otras funciones
    displayGrid() {
        return this.grid
    }

    displayShips() {
        return this.ships
    }

    displayCoord (){
        console.log(this.missAttackCoord)
    }
}

export default Board;