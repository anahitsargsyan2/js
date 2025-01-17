class Wolf extends Character {
    constructor(x, y, index) {
        super(x, y, index);
    }

    eat(){
        super.eat(RABBIT_INDEX, Wolf, wolfArr, rabbitArr);
    }

  move(){
    super.move(EMPTY_INDEX, Wolf, wolfArr);
  }
}