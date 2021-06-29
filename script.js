/*


*/
let computerChoice = "";
let playerChoice = "";

computerPlay(computerChoice);
playerSelection(playerChoice);

console.log("Computer choice: " + computerChoice + " and Player choice: " + playerChoice);

playRound(computerChoice, playerChoice);

// Function to define a random int in a given range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to capitalize the first element of a string
function capitalizeFirst(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function computerPlay() {
    let computerNumber = getRandomInt(3);
    if (computerNumber === 0) {
        computerChoice = "Rock";
    } else if (computerNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log("Computer choice: " + computerChoice);
    return computerChoice;
}

function playerSelection() {
    playerChoice = prompt("What do you want to play ? Choose between Rock, Paper and Scissors.");
    playerChoice = capitalizeFirst(playerChoice);
    console.log("Player choice: " + playerChoice);
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {
    console.log("Player choice: " + playerChoice);
    console.log("Computer choice: " + computerChoice);
    if (computerChoice === playerChoice) {
        console.log("It's a tie !");
    } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") || 
        (computerChoice === "Scissors" && playerChoice === "Paper") || 
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        console.log("The computer wins this round !");
    } else {
        console.log("You win this round !");
    }
}

