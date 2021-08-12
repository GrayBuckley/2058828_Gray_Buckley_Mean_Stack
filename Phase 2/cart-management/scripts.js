function AddButtonPress(name, price) {
    console.log("Hit AddButtonPress(" + name + "," + price + ")");
    if (!InStorage(name)) {
        AddToStorage(name, price);
        // Update cart quantity
    }
}
function InStorage(name) {
    return sessionStorage.getItem(name) !== null;
}
function AddToStorage(name, price) {
    sessionStorage.setItem(name, price.toString());
}
