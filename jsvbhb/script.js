 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    frameRate(1);
 }

 function drawMatrix(y) {
    if (!isRunning) {
        return;  
    }

    for (let x = 0; x < matrix[y].length; x++) {
        const value = matrix[y][x];

        if (value === GRASS_INDEX) {
            CreateGrass(x, y);
        }

        else if (value === EMPTY_INDEX) {
            fill('255');
        }
        else if (value === WOLF_INDEX) {
            CreateWolf(x, y); 
        }

        else if (value === RABBIT_INDEX) {
            CreateRabbit(x, y); 
        }

        else if (value === LION_INDEX) {
            CreateLion(x, y); 
        }

        rect(x * side, y * side, side, side);
    }
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
 }