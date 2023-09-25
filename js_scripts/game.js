//Game Logic

function getComputerChoice(){
    //0 = Rock, 1 = Paper, 2 = Scissors
    //Math.Floor to round to nearest whole number, if not you get decimals
    let compChoice = Math.floor(Math.random() * 3);
    //console.log(compChoice);
    return compChoice;
}