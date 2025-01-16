const grassArr = [];
const side = 20; 
const rabbitArr = [];
const wolfArr = [];
const lionArr = [];



function getRandNum(probabilities) {
    const rand = Math.random();
    if (rand < probabilities[0]) {
        return 0;
    } else if (rand < probabilities[0] + probabilities[1]) {
        return 1;
    } else if (rand < probabilities[0] + probabilities[1] + probabilities[2]) {
        return 2;
    }else if (rand < probabilities[0] + probabilities[1] + probabilities[2] + probabilities[3]){
        return 3;
    }
    else{
        return 4;
    }
};

function Matrices(n, m) {
    const mat = [];
    const total = n * m;
    const half = Math.floor(total / 1.7); 
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    for (let j = 0; j < m; j++) {
        const arr = [];
        for (let i = 0; i < n; i++) {
   
            const remaining = total - (count0 + count1 + count2 + count3 + count4);
            const prob0 = count0 < half ? (half - count0) / remaining : 0;
            const prob1 = (1 - prob0) * 0.4;
            const prob2 = (1 - prob0 - prob1) * 0.3;
            const prob3 = (1 - prob0 - prob1 - prob2) * 0.9
            const prob4 = 1 - prob0 - prob1 - prob2 - prob3

            const arrnum = getRandNum([prob0, prob1, prob2, prob3, prob4]);
            if (arrnum === 0) count0++;
            if (arrnum === 1) count1++;
            if (arrnum === 2) count2++;
            if (arrnum === 3) count3++;
            if (arrnum === 4) count4++;


            arr.push(arrnum);
        }
        mat.push(arr); 
    }
    return mat;
};



const matrix = Matrices(20,20);
 
 function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
 }

 function drawMatrix(y) {
    for (let x = 0; x < matrix[y].length; x++) {
        const value = matrix[y][x];

        if (value == 1) {
            const gr = new Grass(x, y, 1);
            grassArr.push(gr);
            for (let i in grassArr) {
                fill('#0f0');
            }
        }

        else if (value == 0) {
            fill('255');
        }
        else if (value == 3) {
            const wf = new Wolf(x, y, 3);
            wolfArr.push(wf);
            for (let i in wolfArr) {
                fill("#acacac");
            } 
        }

        else if (value == 2) {
            const rb = new Rabbit(x, y, 2);
            rabbitArr.push(rb);
            for (let i in rabbitArr) {
                fill('magenta');
            } 
        }

        else if (value == 4) {
            const ln = new Lion(x, y, 4);
            lionArr.push(ln);
            for (let i in lionArr) {
                fill(color(255, 204, 0));
            } 
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