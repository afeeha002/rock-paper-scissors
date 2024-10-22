
let countMoves = 10;
let userScore = 0;
let computerScore = 0;

document.getElementById('start-btn').addEventListener('click', startGame);

function startGame() {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');

    if (startScreen && gameScreen) {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        resetGame();  //for restart the game
    } else {
        console.error('Unable to find the start or game screen elements.');
    }
}

function playGame(playerChoice) {
    if (countMoves > 0) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        console.log(`Computer choice: ${computerChoice}`);

        let result = '';
        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result ='user is win !';
            userScore++;
            document.getElementById('user-score').innerText = `${userScore}`;
        } else {
            result = 'computer is win !';
            computerScore++;
            document.getElementById('computer-score').innerText = `${computerScore}`;
        }

        document.getElementById('moves-count').innerText = --countMoves;


        const resultDiv = document.getElementById('selectedChoices');
        resultDiv.textContent = `Computer choose: ${computerChoice}. ${result}`;


        if (countMoves === 0) {
            document.getElementById('gameOver').textContent = 'Game Over...!'
            document.getElementById('restart-btn').style.display = 'block';
            document.getElementById('moves').style.display = 'none';
            document.getElementById('choices').style.display = 'none';
            document.getElementById('selectedChoices').style.display = 'none';
        }
    }
    else {
        console.log("Game over!");
    }

}

function restartGame() {
    resetGame(); // Reset scores, moves, and hide restart button
    const resultDiv = document.getElementById('selectedChoices');
    document.getElementById('gameOver').textContent = 'MAKE YOUR CHOICE NOW.....!';
    document.getElementById('moves').style.display = 'block';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('selectedChoices').style.display = 'block';
}

function resetGame() {
    // Reset game values
    countMoves = 10;
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').innerText = `${userScore}`;
    document.getElementById('computer-score').innerText = `${computerScore}`;

    // Hide the restart button and reset the display message
    document.getElementById('restart-btn').style.display = 'none';
}
