import {players} from './main.js'
import {findValue,findValue2,cutt,hiddenShowBoard,contExp} from './auxiliar.js'

const turnosPlayer = {
    "Player 1":true,
    "Player 2":false
}

function createBoard(rows, cols, player) {
    const boardContainer = document.getElementById(`board-container${player}`);
    boardContainer.innerHTML = ''; // Limpiar el contenido previo

    const board = document.createElement(`div`);
    board.classList.add(`Player`);
    board.classList.add(`${player}`);
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

function changeBackground(cell,simbol) {
    if(simbol=="O"){cell.style.backgroundColor = 'green'};
    if(simbol=="X"){cell.style.backgroundColor = 'red'}
}

function registroTurnos(turno) {
    if(turnosPlayer[turno]==true){
        //alert("Correcto")
        return true
    } else {
        alert(`NO permitido turno Jugador ${findValue(turnosPlayer)}`);
        return false
    }
}
function displayTurno(value) {
    const selector = document.querySelector("span");
    const data = findValue(turnosPlayer);
    selector.textContent = `Turno de ${data}`;
    if(value==true){
        selector.textContent = "JUEGO FINALIZADO";
        contExp(true);} 
}

function addListenerAllCells() {
    displayTurno();
    let cells = document.querySelectorAll(".cell");
    Array.from(cells).map(cell => {
        cell.addEventListener('click', function () {
               
            let parent = cell.parentNode;
            let pAtt = parent.attributes
            let valuepAtt = pAtt[0].value

            const turno = registroTurnos(valuepAtt);

            let attri = cell.attributes;
            const ok = attri[1].value.split("-")
  
            const data = asignarTurno(turno,ok,valuepAtt);
            displayTurno(data);
        });
})
    hiddenShowBoard(turnosPlayer)
};


function asignarTurno(turno,ok,key) {
    if(turno==true){
        const keyC = cutt(key);
        const player = players[`player${keyC}`]; //Empleamos el obj "player" de main.js
        const selectCell = player.playerAttack(ok[0]-1,ok[1]-1); //Empleamos su metodo "playerAttack"
        console.log(selectCell);
        if(selectCell=="repeat shot"){return "repeat"};//alert("Repetir tiro")
        if(selectCell=="Victoria"){
            alert(`Hay un ganador ${key}`);
            return true
        };
        if(selectCell=="miss"){
            turnosPlayer[findValue2(turnosPlayer)] = true;
            turnosPlayer[key] = false;
            setTimeout(()=>{
                hiddenShowBoard(turnosPlayer);
                const item = document.querySelector('.header');
                const button = document.createElement('button')
                if(!turnosPlayer['Player 1']){
                    button.textContent = "Jugar PC"
                    button.classList.add('buttonPc');
                    item.appendChild(button);
                    button.addEventListener('click',jugarPC)
                } else {
                    document.querySelector('.buttonPc').remove()
                }
            },2000)
        }
    } else {
        return
    }
}

function jugarPC() {
    const coordX = randomNumber(players.player2.returnSize());
    const coordY = randomNumber(players.player2.returnSize());
    const obj = [coordX,coordY];
    console.log(obj)
    const value = asignarTurno(true,obj,"Player 2");
    displayTurno(value);
    if(value=="repeat"){jugarPC()}
}

function randomNumber(size) {
    return Math.floor(Math.random() * size)+1;
}

export  {renderBoard,createBoard,selectorCasilla};
export default addListenerAllCells;