// RandomPlacement.js
export default class RandomPlacement {
    static canPlaceShip(grid, size, x, y, horizontal) {
        const gridSize = grid.length;

        if (horizontal) {
            if (y + size > gridSize) return false;
            for (let i = 0; i < size; i++) {
                if (grid[x][y + i] !== null) return false;
            }
        } else {
            if (x + size > gridSize) return false;
            for (let i = 0; i < size; i++) {
                if (grid[x + i][y] !== null) return false;
            }
        }
        return true;
    }

    static getRandomPosition(grid, size) {
        const gridSize = grid.length;
        const horizontal = Math.random() >= 0.5;
        let x, y;

        do {
            x = Math.floor(Math.random() * gridSize);
            y = Math.floor(Math.random() * gridSize);
        } while (!this.canPlaceShip(grid, size, x, y, horizontal));

        const positions = [];
        for (let i = 0; i < size; i++) {
            if (horizontal) {
                positions.push([x, y + i]);
            } else {
                positions.push([x + i, y]);
            }
        }

        return positions;
    }
}
