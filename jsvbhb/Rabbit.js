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
            if (this.directions[i][0] >= 0 && this.directions[i][1] >= 0) {
                //console.log('this dir', this.directions[i]);
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x < matrix[0].length && y < matrix.length) {
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i]);
                    }
                }
            }
        }
        //console.log(found);
        return found;
    }

    eat(){
        const grassCells = this.chooseCellByIndex(1);

        if (grassCells.length > 0){
            const randomCells = grassCells[Math.floor(Math.random() * grassCells.length)];
            const newX = randomCells[0];
            const newY = randomCells[1];
            const rabbit = new Rabbit(newX, newY, this.index);
            grassCells.pop(rabbit);
            rabbitArr.push(rabbit);
            matrix[newY][newX] = this.index;
        }
    }

    move() {
        const emptyCells = this.chooseCellByIndex(0);

        if (emptyCells.length > 0) {
            const newX = emptyCells[0][0];
            const newY = emptyCells[0][1];
            const rabbit = new Rabbit(newX, newY, this.index);
            const move = new Empty(this.x, this.y, 0);
            rabbitArr.pop(move);
            emptyArr.push(move);
            rabbitArr.push(rabbit);
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
        }
          else {
            this.eat();
          }

  }
}