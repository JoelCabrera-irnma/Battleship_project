class Ship {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.hits = 0;
        this.positions = [];
    }

    isSunk() {
        return this.hits >= this.size;
    }

    hit() {
        this.hits += 1;
    }

    setPosition(positions) {
        this.positions = positions;
    }
}

export default Ship;