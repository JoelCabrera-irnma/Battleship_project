
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
export {deleteItem,verificarVictoria}