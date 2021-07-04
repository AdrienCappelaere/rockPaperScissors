let possibleChoices = ["Rock", "Paper", "Scissors"];
let computerChoice = "";
let playerChoice = "";
let computerScore = 0
let playerScore = 0

playMatch();

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
    computerChoice = possibleChoices[computerNumber];
    return computerChoice;
}

function playerSelection() {
    playerChoice = "";
    while (possibleChoices.includes(playerChoice) === false) {
        playerChoice = prompt("What do you want to play ? Choose between Rock, Paper and Scissors.");
        playerChoice = capitalizeFirst(playerChoice);
        if (possibleChoices.includes(playerChoice) === false) {
            console.log("Sorry, you must choose between 'Rock', 'Paper' and 'Scissors.");
        }
    }
}

function playRound(computerChoice, playerChoice) {
    console.log("Computer choice: " + computerChoice + " and Player choice: " + playerChoice);
    if (computerChoice === playerChoice) {
        console.log("It's a tie !");
    } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") || 
        (computerChoice === "Scissors" && playerChoice === "Paper") || 
        (computerChoice === "Paper" && playerChoice === "Rock")) {
        computerScore++;
        console.log("The computer wins this round ! Score: " + computerScore);
    } else {
        playerScore++;
        console.log("You win this round ! Score: " + playerScore);
    }
}

function playMatch() {
    while (computerScore !=== 5 && playerScore !=== 5) {
        computerPlay(computerChoice);
        playerSelection(playerChoice);
        playRound(computerChoice, playerChoice);
    }
    if (playerScore === 5) {
        console.log("Congratulations, you won !")
    } else {
        console.log("Sorry, the computer won this time.")
    }
}