import RandomPlacement from './randomPlacement.js';

class Board {
    constructor(size) {
        this.size = size;
        this.grid = Array.from({ length: size }, () => Array(size).fill(null));
        this.ships = [];
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
        const positions = RandomPlacement.getRandomPosition(this.grid, ship.size);
        this.placeShip(ship, positions);
    }
    
    receiveAttack(x, y) {
        const target = this.grid[x][y];
        if (target === null) {
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

    displayGrid() {
        return this.grid
    }

    displayShips() {
        return this.ships
    }
}

export default Board;