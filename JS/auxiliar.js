
function deleteItem (ships, target) {
    for (let i = ships.length - 1; i >= 0; i--) {
        if (ships[i].name === target) {
            ships.splice(i, 1);
        }
    }
}

export {deleteItem}