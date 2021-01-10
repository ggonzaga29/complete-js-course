const check = document.querySelector('.check');
const again = document.querySelector('.again');
const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const guessElement = document.querySelector('.guess');

function message(text) {
    messageElement.textContent = text;
}


message("🧠 Start guessing...");

let app = {
    score: 20,
    secretNumber: Math.trunc(Math.random() * 20) + 1,
    guess: null,
    scores: [],
    highScore: 0,
    updateHighScore: function () {
        this.highScore = Math.max.apply(Math, app.scores);
        document.querySelector('.highscore').textContent = this.highScore;
    },
    wonGame: false,
}

function displaySecretNumber() {
    document.querySelector('.number').textContent = app.secretNumber;
}

console.log(app.secretNumber);


function playAgain() {
    app.score = 20;
    app.secretNumber = Math.trunc(Math.random() * 20) + 1;
    app.guess = null;
    app.wonGame = false;
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    message("🧠 Start guessing...");

    guessElement.disabled = false;
    check.disabled = false;

    guessElement.value = '';
    console.log("again");
}

function updateScore() {
    scoreElement.textContent = app.score;
}

updateScore();

function subtractScore() {
    if (app.score > 0 || !app.wonGame) app.score--;
    updateScore();
}

check.addEventListener('click', function () {
    app.guess = Number(document.querySelector('.guess').value);

    if (app.score > 0) {
        if (!app.guess) {
            message("⛔ Enter a number!");
        } else if (app.guess === app.secretNumber) {
            message("🎉 Correct Number!");
            check.disabled = true;
            document.querySelector('.guess').disabled = true;
            app.wonGame = true;
            if (app.wonGame) {
                app.scores.push(app.score);
                app.updateHighScore();

                displaySecretNumber();
                document.body.style.backgroundColor = "#60b347";
            }
        } else if (app.guess > app.secretNumber) {
            message("📈 Too high!");
        } else if (app.guess < app.secretNumber) {
            message("📉 Too low!");
        }

        if (app.guess !== app.secretNumber) {
            subtractScore();
        }
    }

    if (app.score <= 0) {
        message("💥 You have lost the game!");
        document.querySelector('.guess').disabled = true;
        document.body.style.backgroundColor = "#b3475f";
        check.disabled = true;
    }
});

again.addEventListener('click', function () {
    playAgain();
})