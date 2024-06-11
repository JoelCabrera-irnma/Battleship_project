
function log(para) {
    console.log(para)
}

function Ship (leng) {
    let length = leng
    let hitReceived = 0
    let sunk = false
    return{
        hit: () => hitReceived += 1,
        isSunk: () => (hitReceived == length) ?sunk=true :sunk=false,
        gethitReceived: () => hitReceived,
        getSunk: () => sunk,
        getLength: () => length
    }
};

const ship1 =  Ship ()


console.log(ship1.getSunk());

ship1.isSunk();
console.log(ship1.getSunk());

export {Ship, log}