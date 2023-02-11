

// Rock Paper Scissors Game.
let choices = ["rock", "paper", "scissors"]

// Full game has 5 rounds. Loop 'round' 5 times

// Each round choices are compared and a winner or tie is announced

// Player chooses from the 3 options

// function for computer choice
function getComputerChoice(choices){
    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}