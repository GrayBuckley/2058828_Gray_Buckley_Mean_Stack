function AddButtonPress(name, price) {
    //console.log("Hit AddButtonPress("+name+","+price+")");
    if (!InStorage(name)) {
        // Add to storage
        // Update cart quantity
    }
}
function InStorage(name) {
    return sessionStorage.getItem(name) !== null;
}
