const grassArr = [];
const side = 20; 
const rabbitArr = [];
const wolfArr = [];
const lionArr = [];
const EMPTY_INDEX = 0;
const GRASS_INDEX = 1;
const RABBIT_INDEX = 2;
const WOLF_INDEX = 3;
const LION_INDEX = 4;

let lionImage, rabbitImage, wolfImage, grassImage;

function preload() {
    lionImage = loadImage('lion.png');   
    rabbitImage = loadImage('rabbit.lpg'); 
    wolfImage = loadImage('wolf.png');   
    grassImage = loadImage('grass.png');  
}