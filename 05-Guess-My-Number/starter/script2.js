'use strict';

let appState = {};

const check = document.querySelector('.check');
const again = document.querySelector('.again');
const scoreElement = document.querySelector('.score');

function message(text) {
    const message = document.querySelector('.message');

    message.textContent = text;
}

function subtractScore() {
    appState.score--;
    updateScore();
}

function updateScore() {
    scoreElement.textContent = appScore.score;
}

let appScore = {
    scores: [],
    highScore: 0,
    updateHighScore: function () {
        this.highScore = Math.max(this.scores);
    },
}

function initialize() {
    appState = {
        score: 20,
        secretNumber: Math.trunc(Math.random() * 20) + 1,
        guess: null,
    }

    message("🧠 Start guessing...");
    updateScore();
    document.querySelector('.number').textContent = appState.secretNumber;
    check.disabled = false;
}

initialize();

console.log(appState.secretNumber);

updateScore();

check.addEventListener('click', function () {
    appState.guess = Number(document.querySelector('.guess').value);

    if (appState.score > 0) {
        if (!appState.guess) {
            message("⛔ Enter a number!");
        } else if (appState.guess === appState.secretNumber) {
            message("🎉 Correct Number!");
            check.disabled = true;
            appScore.scores.push(appState.score);
            appScore.updateHighScore();
        } else if (appState.guess > appState.secretNumber) {
            message("📈 Too high!");
        } else if (appState.guess < appState.secretNumber) {
            message("📉 Too low!");
        }

        if (appState.guess !== appState.secretNumber) {
            subtractScore();
        }
    }

    if (appState.score <= 0) {
        message("💥 You have lost the game!");
        document.body.style.backgroundColor = "#b3475f";
        check.disabled = true;
    }
})

again.addEventListener('click', function () {
    initialize();
    console.log('initialize')
});