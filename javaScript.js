// Function to get a random choice from the computer game.

function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//Function that test who wins and return a message.
function playRound(playerPick, computerPick) {
  //making the data got, lower case so it became case insensitive.
  let player = playerPick.toLowerCase().trim();
  let machine = computerPick.toLowerCase();


  //Testing for Rock
  if (player == "rock" && machine == "scissor") {
    return ["You Win! Rock beats Scissor", "player"];
  } else if (player == "rock" && machine == "paper") {
    return ["You Lost! Paper beats Rock", "machine"];
  } else if (player == "rock" && machine == "rock") {
    return ["It's a draw! Rock and Rock makes a wall", "draw"];
    //Testing for Papper
  } else if (player == "paper" && machine == "scissor") {
    return ["You Lost! Scissor beats Paper", "machine"];
  } else if (player == "paper" && machine == "rock") {
    return ["You Win! Paper beats Rock", "player"];
  } else if (player == "paper" && machine == "paper") {
    return ["It's a draw! Paper with Paper makes a book", "draw"];
    //Testing for scissor
  } else if (player == "scissor" && machine == "rock") {
    return ["You Lost! Rock beats Scissor", "machine"];
  } else if (player == "scissor" && machine == "paper") {
    return ["You Win! Scissor beats Paper", "player"];
  } else if (player == "scissor" && machine == "scissor") {
    return ["It's a draw! Scissor with Scissor you loose an eye", "draw"];
  } else {
    return "Please check if you chose among Paper, Rock or Scissor.";
  }
}

//Function to count the number of victories

function winnerResults(result, matchResult) {
  if (result[1] == "player") {
    console.log(result[0]);
    matchResult[0] += 1;
    return;
  } else if (result[1] == "machine") {
    console.log(result[0]);
    matchResult[1] += 1;
    return;
  } else if (result[1] == "draw") {
    console.log(result[0]);
  } else {
    console.log(result);
    console.log("The point goes to Machine this time");
  }
}

function displayResults(resultPlayer, resultMachine) {
  if (resultPlayer > resultMachine) {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("Congratulations!!! Player is the winner this time");
    return;
  } else if (resultMachine > resultPlayer) {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("Not this time!!! Machine is the winner, you can try again");
    return;
  } else {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("OMG, It's a draw!!! You both are locky this time");
    return;
  }
}

// Function to record the scores from 5 rounds of games

function game() {
  let matchResult = [0, 0];

  //sum up the score
  // for (let i = 0; i < 5; i++) {

  // }

  //displaying the results and giving a winner
  displayResults(matchResult[0], matchResult[1]);
}

let playerPick = null;
let matchResult = [0, 0];
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    playerPick = button.id.toString();
    //console.log("player " + playerPick);
    let computerSelection = getComputerChoice();
    playRound(playerPick, computerSelection);

    var previousResult = playRound(playerPick, computerSelection);
    winnerResults(previousResult, matchResult);
  });
}
