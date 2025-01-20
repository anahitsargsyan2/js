function getRandNum(probabilities) {
    const rand = Math.random();
    if (rand < probabilities[0]) {
        return 0;
    } else if (rand < probabilities[0] + probabilities[1]) {
        return 1;
    } else if (rand < probabilities[0] + probabilities[1] + probabilities[2]) {
        return 2;
    } else if (rand < probabilities[0] + probabilities[1] + probabilities[2] + probabilities[3]){
        return 3;
    } else{
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

const matrix = Matrices(35,35);