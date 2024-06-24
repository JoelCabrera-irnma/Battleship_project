
function deleteItem (ships, target) {
    for (let i = ships.length - 1; i >= 0; i--) {
        if (ships[i].name === target) {
            ships.splice(i, 1);
        }
    }
}

function verificarVictoria (ships, player){
    if(ships.length==0) {
        console.log((player==1)?"Victoria jugador 2":"Victoria jugador 1")}
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
export {deleteItem,verificarVictoria}
export {findValue,findValue2,cutt} 