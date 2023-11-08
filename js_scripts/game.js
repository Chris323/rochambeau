//Game Logic

function getComputerChoice() {
  //0 = Rock, 1 = Paper, 2 = Scissors
  //Math.Floor to round to nearest whole number, if not you get decimals
  let randdomChoice = Math.floor(Math.random() * 3);
  switch (randdomChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(pSelection, cSelection) {
  const pChoice = pSelection.toLowerCase();
  const cChoice = cSelection.toLowerCase();

  //Player wins
  if (pChoice === "rock" && cChoice === "scissors") {
    console.log("You win! " + pChoice + " beats " + cChoice);
    return true;
  }
  if (pChoice === "paper" && cChoice === "rock") {
    console.log("You win! Paper beats Rock.");
    return true;
  }
  if (pChoice === "scissors" && cChoice === "paper") {
    console.log("You win! Scissors beats Paper.");
    return true;
  }

  //Player ties
  if (pChoice === cChoice) {
    console.log("You tie");
    return "You tie";
  }

  //Player loses
  if (cChoice === "rock" && pChoice === "scissors") {
    console.log("You lose! Rock beats Scissors.");
    return false;
  }
  if (cChoice === "paper" && pChoice === "rock") {
    console.log("You lose! Paper beats Rock.");
    return false;
  }
  if (cChoice === "scissors" && pChoice === "paper") {
    console.log("You lose! Scissors beats Paper.");
    return false;
  }
}

const choice = document.querySelectorAll("button");

const results = document.querySelector(".result");
const para = document.createElement("p");

let playerScore = 0;
let compScore = 0;

choice.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    const para = document.createElement("p");
    let decision = playRound(button.id, getComputerChoice());
    //true, player wins
    if (playerScore < 5 && compScore < 5) {
      if (decision === true) {
        if (button.id === "rock") {
          para.textContent = "You win, " + button.id + " beats scissors";
        }
        if (button.id === "paper") {
          para.textContent = "You win, " + button.id + " beats rock";
        }
        if (button.id === "scissors") {
          para.textContent = "You win, " + button.id + " beats paper";
        }
        results.appendChild(para);
        playerScore++;
//        console.log(playerScore);
        //tie
      } else if (decision === "You tie") {
        para.textContent = "You tie";
        results.appendChild(para);
        //false, player loses
      } else {
        if (button.id === "rock") {
          para.textContent = "You lose, " + button.id + " beats scissors";
        }
        if (button.id === "paper") {
          para.textContent = "You lose, " + button.id + " beats rock";
        }
        if (button.id === "scissors") {
          para.textContent = "You lose, " + button.id + " beats paper";
        }
        results.appendChild(para);
        compScore++;
//        console.log(compScore);
      }
    } else {
      if (playerScore === 5) {
        para.textContent = "You won " + playerScore + " to " + compScore;
        results.appendChild(para);
      }
      if (compScore === 5) {
        para.textContent = "You lost " + playerScore + " to " + compScore;
        results.appendChild(para);
      }
    }
  });
});

// function game() {
//   alert("okay back here");
// }
