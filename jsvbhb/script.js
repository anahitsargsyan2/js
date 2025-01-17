 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    frameRate(1);
 }

 function drawMatrix(y) {
    for (let x = 0; x < matrix[y].length; x++) {
        const value = matrix[y][x];

        if (value == GRASS_INDEX) {
            CreateGrass(x, y);
        }

        else if (value == EMPTY_INDEX) {
            fill('255');
        }
        else if (value == WOLF_INDEX) {
            CreateWolf(x, y); 
        }

        else if (value == RABBIT_INDEX) {
            CreateRabbit(x, y); 
        }

        else if (value == LION_INDEX) {
            CreateLion(x, y); 
        }

        rect(x * side, y * side, side, side);
    }
}

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

 function draw() {

    for (let y = 0; y < matrix.length; y++) {
        drawMatrix(y);
    }

    for(let i in wolfArr) {
        wolfArr[i].move();
    }

    for(let i in rabbitArr) {
        rabbitArr[i].move();
    }

    for(let i in lionArr) {
        lionArr[i].move();
    }

    for(let i in grassArr) {
        grassArr[i].multiply();
    }

    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         value = matrix[y][x];
    //         //console.log(value);
    //     }
    // }

 }

 console.log(lionArr);
 console.log(rabbitArr);
 console.log(wolfArr.lenght);
 console.log(grassArr);