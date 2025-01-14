class Rabbit {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCellByIndex(character) {
        const found = [];
        for (let i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }

    move() {
        const emptyCells = this.chooseCellByIndex(0) || this.chooseCellByIndex(1);
        if (emptyCells > 0) {
            const newX = emptyCells[0];
            const newY = emptyCells[1];
            const rabbit = new Rabbit(newX, newY, this.index);
            rabbitArr.pop(this.x, this.y);
            rabbitArr.push(rabbit);
        }

        


    }
}