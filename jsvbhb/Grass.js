class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiplyIndex = 0;
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



    multiply() {
        const emptyCells = this.chooseCellByIndex(0);
        if (emptyCells.length > 0 ) {
            const randomCells = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            const newX = randomCells[0];
            const newY = randomCells[1];
            const grass = new Grass(newX, newY, this.index);
            console.log(grass);
            grassArr.push(grass);
            matrix[newY][newX] = this.index;
        }
        this.multiplyIndex++
    }
    
}