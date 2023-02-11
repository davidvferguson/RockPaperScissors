

// Rock Paper Scissors Game.



let playerScore = 0;
let computerScore = 0;
game();

//console.log(playRound(playerSelection, computerSelection));

//play 5 rounds
function game(){
   // console.log("game function started")
    for (let i=0; i < 5; i++){
        playRound();
      //  console.log(playRound());
    }
    if (playerScore > computerScore){
        console.log("You Won the Game! " + playerScore + " - " + computerScore)
    }
    else if (playerScore < computerScore){
        console.log("You Lost the Game! " + playerScore + " - " + computerScore)
    }
    else console.log("Game Tied! " + playerScore + " - " + computerScore)
}

// 1 round of game
function playRound(playerChoice, computerChoice)

 {
   // console.log("playRound function started");
    let roundResult = "";
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection)
        {
        roundResult = "Round is a Tie!";
        }

    else if ((playerSelection === "rock" && computerSelection === "scissors")||
        (playerSelection === "scissors" && computerSelection === "paper")||
        (playerSelection === "paper" && computerSelection === "rock"))
        {
        roundResult = "You win this round, " + playerSelection + " beats " + computerSelection;
        playerScore++;
        }

    else 
        {
        roundResult = "You lose this round! " + playerSelection + " is beaten by " + computerSelection;
        computerScore++;
        }

    console.log(roundResult)
    console.log(playerScore + " - " + computerScore)
    return roundResult;
}

// function for computer choice
function getComputerChoice(){
    //console.log("getComputerChoice function started")
    const choice = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * choice.length);
    console.log("Computer picked " + choice[computerChoice]);
    return choice[computerChoice];
    
}

// function for player choice
function getPlayerChoice(){
    //console.log("getPlayerChoice function started")
    let input = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    let playerChoice = input.toLowerCase();
    console.log("You picked " + playerChoice);
    return playerChoice;
    
}
