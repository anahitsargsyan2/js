function CreateLion(x, y) {
    lionArr.push(new Lion(x, y, LION_INDEX));
    fill(color(255, 204, 0));
}

function CreateRabbit(x, y) {
    rabbitArr.push(new Rabbit(x, y, RABBIT_INDEX));
    fill('magenta');
}

function CreateWolf(x, y) {
    wolfArr.push(new Wolf(x, y, WOLF_INDEX));
    fill("#acacac");    
}

function CreateGrass(x, y) {
    grassArr.push(new Grass(x, y, GRASS_INDEX));
    fill('#0f0');
}