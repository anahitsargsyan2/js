const stopButton = document.getElementById("stopButton");
const endButton = document.getElementById("endButton");

stopButton.addEventListener("click", () => {
    if (isRunning) {
        isRunning = false;  
        stopButton.textContent = "Resume";  
    } else {
        isRunning = true;  
        stopButton.textContent = "Stop";  
    }
});

endButton.addEventListener("click", () => {
    isRunning = false;  
    winner = determineWinner();  
    displayWinner(winner); 
});