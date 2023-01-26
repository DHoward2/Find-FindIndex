function findUserByUsername(arr, value){
    return arr.find(function(val){
        return val['username'] === value;
    })
}

function removeUser(arr, value){
    let toBeRemoved = arr.findIndex(function(val){
        return val['username'] === value;
    })
    if(toBeRemoved !== -1){
        let removed = arr.splice(toBeRemoved,1);
        return removed[0];
    }
    return undefined;
}