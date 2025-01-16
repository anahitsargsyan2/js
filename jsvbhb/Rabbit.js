class Rabbit extends Character {
    constructor(x, y, index) {
        super(x, y, index);
    }

    eat(){
        super.eat(1, Rabbit, rabbitArr, grassArr);
    }

    move() {
        super.move(0, Rabbit, rabbitArr);
    }
}