function determineWinner() {
    if (lionArr.length > rabbitArr.length && lionArr.length > wolfArr.length && lionArr.length > grassArr.length) {
        return "Lions win!";
    } else if (rabbitArr.length > lionArr.length && rabbitArr.length > wolfArr.length && rabbitArr.length > grassArr.length) {
        return "Rabbits win!";
    } else if (wolfArr.length > lionArr.length && wolfArr.length > rabbitArr.length && wolfArr.length > grassArr.length) {
        return "Wolfs win!";
    } else {
        return "Grass win!";
    } 
}

function displayWinner(winner) {
    alert(winner);  
}