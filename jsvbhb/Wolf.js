class Wolf extends Character {
    constructor(x, y, index) {
        super(x, y, index);
    }

    eat(){
        super.eat(2, Wolf, wolfArr, rabbitArr);
    }

  move(){
    super.move(0, Wolf, wolfArr);
  }
}