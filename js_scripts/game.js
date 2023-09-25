//Game Logic

function getComputerChoice(){
    //0 = Rock, 1 = Paper, 2 = Scissors
    //Math.Floor to round to nearest whole number, if not you get decimals
    let randdomChoice = Math.floor(Math.random() * 3);
    switch(randdomChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
    //console.log(compChoice);
    //return compChoice;
}

function playRound(pSelection, cSelection){

    const pChoice = pSelection.toLowerCase();
    const cChoice = cSelection.toLowerCase();

    //Player wins
    if(pChoice === "rock" && cChoice === "scissors"){
        console.log("You win! Rock beats Scissors.");
        return true;
    }
    if(pChoice === "paper" && cChoice === "rock"){
        console.log("You win! Paper beats Rock.");
        return true;
    }
    if(pChoice === "scissors" && cChoice === "paper"){
        console.log("You win! Scissors beats Paper.");
        return true;
    }

    //Player ties
    if(pChoice === cChoice){
        console.log("You tie");
        return "You tie";
    }

    //Player loses
    if(cChoice === "rock" && pChoice === "scissors"){
        console.log("You lose! Rock beats Scissors.");
        return false;
    }
    if(cChoice === "paper" && pChoice === "rock"){
        console.log("You lose! Paper beats Rock.");
        return false;
    }
    if(cChoice === "scissors" && pChoice === "paper"){
        console.log("You lose! Scissors beats Paper.");
        return false;
    }

}
// const player = "paper"
// const complayer = getComputerChoice();
// console.log(playRound(player, complayer));

function game(){
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++){
        let input = prompt("Please enter your choice:");
        let decision = playRound(input, getComputerChoice());
        //console.log(decision);
        if(decision === true){
            playerScore++;
        }
        if(decision === false){
            compScore++;
        }
        console.log("Player" + playerScore);
        console.log("Comp" + compScore);
    }
    if(playerScore > compScore){
        return "You win, with a score of " + playerScore + " to " + compScore;
    }
    if(playerScore < compScore){
        return "You lose, with a score of " + playerScore + " to " + compScore;
    }
    if(playerScore === compScore){
        return "You tie, with a score of " + playerScore + " to " + compScore;
    }
}