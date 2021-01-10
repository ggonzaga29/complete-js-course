'use strict';

// highlights

/* 
* Variables
playerOne 
playerTwo
currentPlayer 
gamefinished

*/

class Player {
    constructor(name, score = 0) {
        this.score = score;
        this.name = name;
        this.currentScore = 0;
    }

    holdScore() {
        this.score = this.currentScore;
    }

    updateCurrentScore(currentScore) {
        this.currentScore += currentScore;
    }

}

/* HTML Elements */
const p1ScoreEl = document.querySelector('#score--0');
const p2ScoreEl = document.querySelector('#score--1');
const bntNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');

/* Player Variables */
const playerOne = new Player('Player 1');

const playerTwo = new Player('Player 2');

const players = [playerOne, playerTwo];

/* Game Variables */
let currentPlayer = players[0];

/* Game Functions */

function rollDice() {
    console.log('roll');
    const rndNum = Math.trunc(Math.random() * 6) + 1;
    if (rndNum !== 1) {
        currentPlayer.updateCurrentScore(rndNum);
    } else {
        currentPlayer.currentScore = 0;
        switchPlayer();
    }
}

function hold() {
    currentPlayer.holdScore();
    console.log(currentPlayer.score);
}

function newGame() {

}

function switchPlayer() {
    if (currentPlayer.name === "Player 1") {
        currentPlayer = players[1];
    } else if (currentPlayer.name === "Player 2") {
        currentPlayer = players[0];
    }

    console.log(currentPlayer);
}

/* Onclick Events */

bntRoll.addEventListener('click', rollDice);
bntHold.addEventListener('click', hold);