class Lion {
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
            if (this.directions[i][0] >= 0 && this.directions[i][1] >= 0) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x < matrix[0].length && y < matrix.length) {
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i]);
                    }
                }
            }
        }
        return found;
    }

    eat(){
        const wolfCells = this.chooseCellByIndex(3);
        console.log(wolfCells);

        if (wolfCells.length > 0){
            const randomCells = wolfCells[Math.floor(Math.random() * wolfCells.length)];
            const newX = randomCells[0];
            const newY = randomCells[1];
            const lion = new Lion(newX, newY, this.index);
            wolfCells.pop(lion);
            lionArr.push(lion);
            matrix[newY][newX] = this.index;
        }
    }

    move() {
        const emptyCells = this.chooseCellByIndex(0);

        if (emptyCells.length > 0) {
            const newX = emptyCells[0][0];
            const newY = emptyCells[0][1];
            const lion = new Lion(newX, newY, this.index);
            lionArr.push(lion);
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
        }
          else {
            this.eat();
          }

  }
}