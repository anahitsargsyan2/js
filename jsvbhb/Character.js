class Character {
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
                const[x, y] = this.directions[i];
                if (x < matrix[0].length && y < matrix.length) {
                    if (matrix[y][x] == character) {
                        found.push(this.directions[i]);
                    }
                }
            }
        }
        return found;
    }

    eat(index, character, array, delCharFromArr){
        const Cells = this.chooseCellByIndex(index);

        if (Cells.length > 0){
            const randomCells = Cells[Math.floor(Math.random() * Cells.length)];
            const [newX, newY] = randomCells;
            const char = new character(newX, newY, this.index);
            const charIndex = delCharFromArr.findIndex(char => char.x === newX && char.y === newY);
            if (charIndex !== -1) {
                delCharFromArr.splice(charIndex, 1);
            }            
            array.push(char);
            matrix[newY][newX] = this.index;
        }
    }
    


    move(index, character, array) {
        const emptyCells = this.chooseCellByIndex(index);

        if (emptyCells.length > 0) {
            const [newX, newY] = emptyCells[0];
            const char = new character(newX, newY, this.index);
            array.push(char);
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
        }
        else {
            this.eat();
        }
  }
}