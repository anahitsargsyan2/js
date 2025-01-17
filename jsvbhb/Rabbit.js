class Rabbit extends Character {
    constructor(x, y, index) {
        super(x, y, index);
    }

    eat(){
        super.eat(GRASS_INDEX, Rabbit, rabbitArr, grassArr);
    }

    move() {
        super.move(EMPTY_INDEX, Rabbit, rabbitArr);
    }
}