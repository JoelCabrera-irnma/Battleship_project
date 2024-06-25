
function deleteItem (ships, target) {
    for (let i = ships.length - 1; i >= 0; i--) {
        if (ships[i].name === target) {
            ships.splice(i, 1);
        }
    }
}

function verificarVictoria (ships, player){
    if(ships.length==0) {
        return true }
    else console.log(ships)
}

function findValue(playerTurn) {
    for (let player in playerTurn) {
        if (playerTurn[player] === true) {
            return player;
        }
    }
    return null; // Retorna null si no se encuentra coincidencia
}

function findValue2(playerTurn) {
    for (let player in playerTurn) {
        if (playerTurn[player] === false) {
            return player;
        }
    }
    return null; // Retorna null si no se encuentra coincidencia
}

function cutt(arg) {
    const ele = arg.split(" ");
    return ele[1]
}

function hiddenShowBoard(turnosPlayer) {
    for (let item in turnosPlayer) {
        const select = document.querySelector(`[class="${item}"]`);
        const nodeCell = select.querySelectorAll(".cell");

        if (turnosPlayer[item] === true) {
            nodeCell.forEach(cell => {
                if (!cell.dataset.originalContent) {
                    cell.dataset.originalContent = cell.textContent;
                }
                cell.textContent = "";
            });
        } else {
            nodeCell.forEach(cell => {
                cell.textContent = cell.dataset.originalContent || cell.textContent;
            });
        }
    }
}

function contExp(params) {
    const item = document.querySelector(".mainConteiner");
    if(item.style.display === 'flex'){
        item.style.display = 'none'
    } else {
        item.style.display = 'flex'
    }
}

export {deleteItem,verificarVictoria}
export {findValue,findValue2,cutt,hiddenShowBoard,contExp} 
export default contExp