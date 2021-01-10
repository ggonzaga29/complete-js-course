let playing;

// Player Elements
const p0El = document.querySelector('.player--0');
const p1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const curScore0El = document.querySelector('#current--0');
const curScore1El = document.querySelector('#current--1');

// Game Buttons
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');

class Player {
    constructor() {
        this.totalScore = 0;
        this.currentScore = 0;
    }
}

const p0 = new Player();
const p1 = new Player();

const players = [p0, p1];
let currentPlayer = 0;

function displayCurrentScore() {
    document.querySelector(`#current--${currentPlayer}`).textContent = players[currentPlayer].currentScore;
}

function displayTotalScore() {
    document.querySelector(`#score--${currentPlayer}`).textContent = players[currentPlayer].totalScore;
}

function newGame() {
    playing = true;

    for (player in players) {
        player.totalScore = 0;
        player.currentScore = 0;
        document.querySelector(`#current--${player}`).textContent = 0;
        document.querySelector(`#score--${player}`).textContent = 0;
    }

    diceImg.style.display = "block";

    currentPlayer = 0;

    p0El.classList.remove("player--winner");
    p1El.classList.remove("player--winner");

    p1El.classList.remove("player--active");
    p0El.classList.add("player--active");

}

newGame();

function switchPlayer() {
    p0El.classList.toggle("player--active");
    p1El.classList.toggle("player--active");

    players[currentPlayer].currentScore = 0;
    displayCurrentScore();
    currentPlayer = currentPlayer === 0 ? 1 : 0;

    console.log(`active player switched to Player ${currentPlayer + 1}!`);
}

function rollDice() {
    if (playing) {
        // Generate random number between 1 and 6
        const rndNum = Math.trunc(Math.random() * 6) + 1;
        // Display dice roll
        diceImg.src = `dice-${rndNum}.png`;

        if (rndNum === 1) {
            // switch player
            switchPlayer();

        } else if (rndNum !== 1) {
            players[currentPlayer].currentScore += rndNum;
            displayCurrentScore();
        }
    }
}

function hold() {
    if (playing) {
        players[currentPlayer].totalScore += players[currentPlayer].currentScore;
        displayTotalScore();

        if (players[currentPlayer].totalScore >= 100) {
            diceImg.style.display = "none";
            console.log("winner");
            document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
            playing = false;
        } else if (players[currentPlayer].totalScore < 100) {
            switchPlayer();
        }
    }
}

btnRoll.addEventListener('click', rollDice);
btnNew.addEventListener('click', newGame);
btnHold.addEventListener('click', hold);