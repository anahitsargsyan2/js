class Lion extends Character {
    constructor(x, y, index) {
        super(x, y, index);
    }

    eat(){
        super.eat(WOLF_INDEX, Lion, lionArr, wolfArr);
    }

    move(){
        super.move(EMPTY_INDEX, Lion, lionArr);
        this.superpower();
    }

    superpower() {
        if (wolfArr.length > 0) {
            const randomIndex = Math.floor(Math.random() * wolfArr.length);
            const randomWolf = wolfArr[randomIndex];
            
            if (randomWolf) {
                const newX = randomWolf.x;
                const newY = randomWolf.y;
                wolfArr.splice(randomIndex, 1);
                matrix[newY][newX] = 0;
            }
        }
        setTimeout(() => this.superpower(), 5000);
    }
}