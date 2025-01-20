class Grass extends Character {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiplyIndex = 0;
    }

    multiply() {
        const emptyCells = super.chooseCellByIndex(EMPTY_INDEX);
        if (emptyCells.length > 0 && this.multiplyIndex>5) {
            const randomCells = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const [newX, newY] = randomCells;
            const grass = new Grass(newX, newY, this.index);
            grassArr.push(grass);
            matrix[newY][newX] = this.index;
        }
        this.multiplyIndex++;
    }
}