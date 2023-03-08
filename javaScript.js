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

//function to display the scores live
function scoreBoard(matchResult) {
  const scoreboard = document.querySelector(".scoreboard");

  const player = scoreboard.querySelector("p:nth-of-type(1) span");
  player.textContent = matchResult[0];

  const machine = scoreboard.querySelector("p:nth-of-type(3) span");
  machine.textContent = matchResult[1];

  const draw = scoreboard.querySelector("p:nth-of-type(2) span");
  draw.textContent = matchResult[2];
}

//Function to count the number of victories

function winnerResults(result, matchResult) {
  const para = document.querySelector(".displayer > p");

  if (result[1] == "player") {
    para.innerText = result[0];
    matchResult[0] += 1;
    scoreBoard(matchResult);
    return;
  } else if (result[1] == "machine") {
    para.innerText = result[0];
    matchResult[1] += 1;
    scoreBoard(matchResult);
    return;
  } else {
    para.innerText = result[0];
    matchResult[2] += 1;
    scoreBoard(matchResult);
  }
}

// Function to display the final winner after 5 rounds

function displayResults(resultPlayer, resultMachine, draw) {
  const para = document.querySelector(".displayer > p");

  if (resultPlayer == 5) {
    para.innerText = "The result is: \n" + "Player: " + resultPlayer + "\n" + "Machine: " + resultMachine +"\n" + "Congratulations!!! Player is the winner this time";
    
    return;
  } else if (resultMachine == 5) {
    para.innerText = "The result is: \n" + "Player: " + resultPlayer + "\n" + "Machine: " + resultMachine +"\n" + "Not this time!!! Machine is the winner, you can try again";
    return;
  } else if ( draw == 5){
    para.innerText = "The result is: \n" + "Player: " + resultPlayer + "\n" + "Machine: " + resultMachine +"\n" + "OMG, It's a draw!!! You both are lucky this time";
    return;
  }
}

let matchResult = [0, 0, 0];
const refresh = document.querySelector(".restart");
refresh.style.display = "none";
// Function to record the scores from 5 rounds of games

let buttons = document.getElementsByClassName("choice-button");
let playerPick = null;
for (let button of buttons) {
  button.addEventListener("click", () => {
    playerPick = button.id.toString();

    let computerSelection = getComputerChoice();
    playRound(playerPick, computerSelection);

    var previousResult = playRound(playerPick, computerSelection);
    winnerResults(previousResult, matchResult);

    if (matchResult[0] == 5 || matchResult[1] == 5 || matchResult[2] == 5) {
      displayResults(matchResult[0], matchResult[1], matchResult[2]);
      
      for(let button of buttons){
        button.disabled = true;
      };
      refresh.style.display = "block";
      refresh.disabled = false;
      refresh.addEventListener("click", () =>{
        //location.reload();
        matchResult = [0, 0, 0];
        refresh.style.display = "none";
        for(let button of buttons){
          button.disabled = false;
        };
        const para = document.querySelector(".displayer > p");
        para.innerText = "Let's Play Again!!!!";
        scoreBoard(matchResult);
      });
    };
  });
}
