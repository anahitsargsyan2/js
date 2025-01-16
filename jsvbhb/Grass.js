class Grass extends Character {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiplyIndex = 0;
    }

    multiply() {
        const emptyCells = super.chooseCellByIndex(0);
        if (emptyCells.length > 0) {
            const randomCells = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const newX = randomCells[0];
            const newY = randomCells[1];
            const grass = new Grass(newX, newY, this.index);
            grassArr.push(grass);
            matrix[newY][newX] = this.index;
        }
        this.multiplyIndex++;
    }
}