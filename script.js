/*


*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
    console.log(playerChoice);
    console.log(playerChoice.toUpperCase());
}

computerPlay();
playerSelection();  