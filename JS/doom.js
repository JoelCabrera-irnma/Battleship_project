import {player1, player2} from './main.js'

function renderBoard(board,player) {
    board.map((row,X) => 
        row.map((cell,Y) => {
            if (cell === null) selectorCasilla (X,Y,'.',player);
            
            else selectorCasilla (X,Y,'S',player); 
        }))
}

function selectorCasilla(filaX, columnY, simbol, player) {
    const board = document.querySelector(`#board-container${player}`);
    const cell = board.querySelector(`.cell[data-position='${filaX+1}-${columnY+1}']`);
    cell.textContent = simbol;
    changeBackground(cell,simbol)
}

function createBoard(rows, cols, player) {
    const boardContainer = document.getElementById(`board-container${player}`);
    boardContainer.innerHTML = ''; // Limpiar el contenido previo

    const board = document.createElement(`div`);
    board.classList.add(`board`);
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-position', `${row}-${col}`);
            cell.textContent = `${row}-${col}`; // Mostrar la posición en la celda
            board.appendChild(cell);
        }
    }

    boardContainer.appendChild(board);
}

function changeBackground(cell,simbol) {
    if(simbol=="O"){cell.style.backgroundColor = 'green'};
    if(simbol=="X"){cell.style.backgroundColor = 'red'}
}

function addListenerAllCells(params) {
    let cells = document.querySelectorAll(".cell");
    Array.from(cells).map(cell => {
        cell.addEventListener('click', function () {
           let attri = cell.attributes;
           const obj = attri[1].value
           const ok = obj.split("-")
           console.log(ok[0]-1);
           console.log(ok[1]-1);

           player1.playerAttack(ok[0]-1,ok[1]-1)
        });
})
};
export  {renderBoard,createBoard,selectorCasilla}
export default addListenerAllCells