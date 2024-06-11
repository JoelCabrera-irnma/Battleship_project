import RandomPlacement from './randomPlacement.js';

class Board {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array(size).fill(null));
        this.ships = [];
        this.registerCoord = []
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
            this.registerCoord.push([x,y])
            return 'miss';
        } else {
            target.hit();
            if (target.isSunk()) {
                return `sunk ${target.name}`;
            } else {
                return 'hit';
            }
        }
    }

    display() {
        return this.grid.map(row => 
            row.map(cell => cell === null ? '.' : 'S').join(' ')
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
        console.log(this.registerCoord)
    }
}

export default Board;