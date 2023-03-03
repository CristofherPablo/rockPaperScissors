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
    return "You Win! Rock beats Scissor";
  } else if (player == "rock" && machine == "paper") {
    return "You Lost! Paper beats Rock";
  } else if (player == "rock" && machine == "rock") {
    return "It's a draw! Rock and Rock makes a wall";
    //Testing for Papper
  } else if (player == "paper" && machine == "scissor") {
    return "You Lost! Scissor beats Paper";
  } else if (player == "paper" && machine == "rock") {
    return "You Win! Paper beats Rock";
  } else if (player == "paper" && machine == "paper") {
    return "It's a draw! Paper with Paper makes a book";
    //Testing for scissor
  } else if (player == "scissor" && machine == "rock") {
    return "You Lost! Rock beats Scissor";
  } else if (player == "Scissor" && machine == "Paper") {
    return "You Win! Scissor beats Paper";
  } else if (player == "scissor" && machine == "scissor") {
    return "It's a draw! Scissor with Scissor you loose an eye";
  } else {
    return "Please check if you chose among Paper, Rock or Scissor.";
  }
}

// Function to record the scores from 5 rounds of games

function game() {
  let playerPoints = 0;
  let machinePoints = 0;

  //sum up the score
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Chose among Rock, Paper or Scissor");
    let computerSelection = getComputerChoice();

    var previousResult = playRound(playerSelection, computerSelection);

    let resultPlayer = 0;
    let resultMachine = 0;

    if (previousResult[1] == "player") {
      console.log(previousResult[0]);
      resultPlayer++;
    } else if (previousResult[1] == "machine") {
      console.log(previousResult[0]);
      resultMachine++;
    } else if (previousResult[1] == "draw") {
      console.log(previousResult[0]);
    } else {
      console.log(previousResult[0]);
      console.log("The point goes to Machine this time");
      resultMachine++;
    }
  }

  //displaying the results and giving a winner
  if (resultPlayer > resultMachine) {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("Congratulations!!! Player is the winner this time");
  } else if (resultMachine > resultPlayer) {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("Not this time!!! Machine is the winner, you can try again");
  } else {
    console.log("The result is:");
    console.log("Player: " + resultPlayer);
    console.log("Machine: " + resultMachine);
    console.log("OMG, It's a draw!!! You both are locky this time");
  }
}
