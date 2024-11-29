const board = document.getElementById('board');
const scoreboard = document.getElementById('scoreboard');
const resetButton = document.getElementById('resetButton');

let currentPlayer = 'X';
let boardState = Array(9).fill('');
let scores = { X: 0, O: 0 };

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function renderBoard() {
    board.innerHTML = boardState.map((cell, i) =>
        `<div class="cell" onclick="handleCellClick(${i})">${cell}</div>`
    ).join('');
}

function handleCellClick(index) {
    if (boardState[index] || checkWinner()) return;
    boardState[index] = currentPlayer;
    if (checkWinner()) {
        scores[currentPlayer]++;
        alert(`Игрок ${currentPlayer} выиграл!`);
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    renderBoard();
    updateScoreboard();
}

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
    });
}

function updateScoreboard() {
    scoreboard.innerText = `Игрок 1 (X): ${scores.X} | Игрок 2 (O): ${scores.O}`;
}

resetButton.onclick = () => {
    boardState.fill('');
    scores = { X: 0, O: 0 };
    currentPlayer = 'X';
    renderBoard();
    updateScoreboard();
};

renderBoard();
