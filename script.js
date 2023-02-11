

// Rock Paper Scissors Game.

let playerScore = 0
let computerScore = 0

//console.log(playRound(playerSelection, computerSelection));

//play 5 rounds
function game(){
    console.log("game function started")
    for (let i=0; i < 5; i++){
        playRound();
        console.log(roundResult);
    }
    if (playerScore > computerScore){
        console.log("You Win! " + playerScore + " - " + computerScore)
    }
    else if (playerScore < computerScore){
        console.log("You Lose! " + playerScore + " - " + computerScore)
    }
    else console.log("Game Tied! " + playerScore + " - " + computerScore)
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// 1 round of game
function playRound(playerSelection, computerSelection){
    console.log("playRound function started")
    let roundResult = "";
    if (playerSelection === computerSelection){
    roundResult = "Tie!";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "rock")){
    roundResult = "You win this round, " + playerSelection + "beats " + computerSelection;
    playerScore++;
    }
    else {
        roundResult = "You lose this round!" + playerSelection + "is beaten by " + computerSelection;
    computerScore++;
    }
    return roundResult;
}

// function for computer choice
function getComputerChoice(){
    console.log("getComputerChoice function started")
    const computerChoice = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[choice];
    console.log("Computer picked " + computerChoice);
}

// function for player choice
function getPlayerChoice(){
    console.log("getPlayerChoice function started")
    let input = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    let playerChoice = input.toLowerCase();
    return playerChoice;
    console.log("You picked " + playerChoice);
}
