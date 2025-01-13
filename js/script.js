

function getRandNum(probabilities) {
    const rand = Math.random();
    if (rand < probabilities[0]) {
        return 0;
    } else if (rand < probabilities[0] + probabilities[1]) {
        return 1;
    } else {
        return 2;
    }
};

function Matrices(n, m) {
    const mat = [];
    const total = n * m;
    const half = Math.floor(total / 2); 
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for (let j = 0; j < m; j++) {
        const arr = [];
        for (let i = 0; i < n; i++) {
   
            const remaining = total - (count0 + count1 + count2);
            const prob0 = count0 < half ? (half - count0) / remaining : 0;
            const prob1 = (1 - prob0) * 0.75;
            const prob2 = 1 - prob0 - prob1; 

            const arrnum = getRandNum([prob0, prob1, prob2]);
            if (arrnum === 0) count0++;
            if (arrnum === 1) count1++;
            if (arrnum === 2) count2++;



            arr.push(arrnum);
        }
        mat.push(arr); 
    }
    console.log(count0);
    console.log(count1);
    console.log(count2);
    return mat;
};



var matrix = Matrices(14,14);
console.log(matrix);
 var side = 50;
 const grassArr = [];
 
 
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    //noStroke();
    var gr = new Grass(1,2,1);
    var emptyCells = gr.chooseCellByIndex(0);
    console.log(emptyCells);
    console.log("gr", gr);
    const emptyCell = gr.chooseCellByIndex(2)
    console.log('emptyCell', emptyCell)
 }

 function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill('#0f0');
            }
            else if (matrix[y][x] == 0) {
                fill('255');
            }
            else if (matrix[y][x] == 2){
                fill('magenta');
            }
            
         
            rect(x * side, y * side, side, side);
     
     /*
     fill("blue")
     text(x+" "+y, x*side+side/2,y*side+side/2)
     */	
        }
    }
 }

 