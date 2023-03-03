// Function to get a random choice from the computer game.

function getComputerChoice(){
    var choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    return choices [Math.floor(Math.random()*choices.length)];
};
