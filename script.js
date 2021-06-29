/*


*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalizeFirst(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function computerPlay() {
    let computerNumber = getRandomInt(3);
    let computerChoice = "";

    if (computerNumber === 0) {
        computerChoice = "Rock";
    } else if (computerNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

function playerSelection() {
    let playerChoice = prompt("What do you want to play ? Choose between Rock, Paper and Scissors.");
    playerChoice = capitalizeFirst(playerChoice);
    console.log(playerChoice);
}

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie !");
    } else if (computerChoice == "Rock" && playerChoice == "Scissors" || computerChoice == "Scissors" && playerChoice == "Paper" || computerChoice == "Paper" && playerChoice == "Rock") {
        console.log("The computer wins this round !");
    } else {
        console.log("You win this round !");
    }
}

computerPlay();
playerSelection();
playRound();