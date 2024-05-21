const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("user_choice");
const resultDisplay = document.getElementById("result_display");
const computerScore = document.getElementById("computer_score");
const userScore = document.getElementById("user_score");

let computerLabel = document.getElementById("computer_label");
let playerLabel = document.getElementById("user_label");

var userChoice;
var computerChoice;
var result;

// Selects the rock weapon icon
function selectRock() {
    userChoice = "Rock";
    userChoiceDisplay.innerHTML = '<button id="Rock" class="button_big button_white"><i class="far fa-hand-rock weapon"></i></button>';
    computerGenerator();
    calculateWinner();
}

// Selects the paper weapon icon
function selectPaper() {
    userChoice = "Paper";
    userChoiceDisplay.innerHTML = '<button id="Paper" class="button_big button_white"><i class="far fa-hand-paper weapon"></i></button>';
    computerGenerator();
    calculateWinner();
}

// Selects the scissors weapon icon
function selectScissors() {
    userChoice = "Scissors";
    userChoiceDisplay.innerHTML = '<button id="Scissors" class="button_big button_white"><td></td><i class="far fa-hand-scissors weapon"></i></button>';
    computerGenerator();
    calculateWinner();
}

// Selects the lizard weapon icon
function selectLizard() {
    userChoice = "Lizard";
    userChoiceDisplay.innerHTML = '<button id="Lizard" class="button_big button_white"><i class="far fa-hand-lizard weapon"></i></button>';
    computerGenerator();
    calculateWinner();
}

// Selects the spock weapon icon
function selectSpock() {
    userChoice = "Spock";
    userChoiceDisplay.innerHTML = '<button id="Spock" class="button_big button_white"><i class="far fa-hand-spock weapon"></i></button>';
    computerGenerator();
    calculateWinner();
}

// Generates computer choice
function computerGenerator() {
    var computerChoiceIcon;

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber === 1) {
        computerChoice = "Rock";
        computerChoiceIcon = '<button id="Rock" class="button_big button_white"><i class="far fa-hand-rock weapon"></i></button>';
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
        computerChoiceIcon = '<button id="Paper" class="button_big button_white"><i class="far fa-hand-paper weapon"></i></button>';
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
        computerChoiceIcon = '<button id="Scissors" class="button_big button_white"><i class="far fa-hand-scissors weapon"></i></button>';
    }
    if (randomNumber === 4) {
        computerChoice = "Lizard";
        computerChoiceIcon = '<button id="Lizard" class="button_big button_white"><i class="far fa-hand-lizard weapon"></i></button>';
    }
    if (randomNumber === 5) {
        computerChoice = "Spock";
        computerChoiceIcon = '<button id="Spock" class="button_big button_white"><i class="far fa-hand-spock weapon"></i></button>';
    }
    computerChoiceDisplay.innerHTML = computerChoiceIcon;
}

// Compares outcomes and calculates a winner
function calculateWinner() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
        computerLabel.style.backgroundColor = "#f4c300";
        playerLabel.style.backgroundColor = "#f4c300";
        resultDisplay.innerHTML = result;
    }
    // Rock
    if (userChoice === "Rock" && computerChoice === "Lizard") {
        result = "Rock crushes Lizard, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        result = "Rock crushes Scissors, you win!!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Rock" && computerChoice === "Spock") {
        result = "Spock vaporizes Rock, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        result = "Paper covers Rock, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    // Lizard
    if (userChoice === "Lizard" && computerChoice === "Paper") {
        result = "Lizard eats Paper, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Spock") {
        result = "Lizard poisons Spock, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Rock") {
        result = "Rock crushes Lizard, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Scissors") {
        result = "Scissors decapitates Lizard, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    // Spock
    if (userChoice === "Spock" && computerChoice === "Scissors") {
        result = "Spock smashes Scissors, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Spock" && computerChoice === "Rock") {
        result = "Spock vaporizes Rock, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Spock" && computerChoice === "Paper") {
        result = "Paper disproves Spock, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    if (userChoice === "Spock" && computerChoice === "Lizard") {
        result = "Lizard poisons Spock, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    // Scissors
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        result = "Scissors cuts Paper, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Lizard") {
        result = "Scissors decapitates Lizard, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        result = "Rock crushes Scissors, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Spock") {
        result = "Spock smashes Scissors, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    // Paper
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "Paper covers Rock, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Paper" && computerChoice === "Spock") {
        result = "Paper disproves Spock, you win!";
        resultDisplay.innerHTML = result;
        incrementUserScore();
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        result = "Scissors cuts Paper, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
    if (userChoice === "Paper" && computerChoice === "Lizard") {
        result = " Lizard eats Paper, you lose!";
        resultDisplay.innerHTML = result;
        incrementComputerScore();
    }
}

// Gets current computer score and increments by 1
function incrementComputerScore() {
    // Gets the current computer score from the DOM and increments it by 1
    let oldScore = computerScore.innerText;
    computerScore.innerText = ++oldScore;
    let newScore = computerScore.innerHTML;
    // Styles the player and computer badges to red or green dependant on the winner
    computerLabel.style.backgroundColor = "#009f3d";
    playerLabel.style.backgroundColor = "#df0024";

    if (newScore == 3) {
        resultDisplay.innerHTML = "<img class='gif' src='assets/images/you-lose.gif'/> <a class='play-again-button' href='start_game.html'>Play Again</a>";
        const choiceArea = document.getElementsByClassName("choice_area");
        const weaponsArea = document.getElementsByClassName("weapons_area");
        while (choiceArea.length > 0) {
            choiceArea[0].parentNode.removeChild(choiceArea[0]);
        }
        while (weaponsArea.length > 0) {
            weaponsArea[0].parentNode.removeChild(weaponsArea[0]);
        }
    }
}

// Gets current user score and increments 1
function incrementUserScore() {
    // Gets the current player score from the DOM and increments it by 1
    let oldScore = userScore.innerText;
    userScore.innerText = ++oldScore;
    let newScore = userScore.innerHTML;
    // Styles the player and computer badges to red or green dependant on the winner
    computerLabel.style.backgroundColor = "#df0024";
    playerLabel.style.backgroundColor = "#009f3d";

    if (newScore == 3) {
        resultDisplay.innerHTML = "<img class='gif' src='assets/images/i-win.gif'/> <a class='play-again-button' href='start_game.html'>Play Again</a>";
        const choiceArea = document.getElementsByClassName("choice_area");
        const weaponsArea = document.getElementsByClassName("weapons_area");
        while (choiceArea.length > 0) {
            choiceArea[0].parentNode.removeChild(choiceArea[0]);
        }
        while (weaponsArea.length > 0) {
            weaponsArea[0].parentNode.removeChild(weaponsArea[0]);
        }
    }
}