var quantityKey = "CART_QUANTITY";
function AddButtonPress(name, price) {
    //console.log("Hit AddButtonPress("+name+","+price+")");
    if (!InStorage(name)) {
        AddToStorage(name, price);
        IncrementQuantity();
    }
}
function InStorage(name) {
    return sessionStorage.getItem(name) !== null;
}
function AddToStorage(name, price) {
    sessionStorage.setItem(name, price.toString());
}
function IncrementQuantity() {
    var quantity = GetQuantity();
    console.log("quantity: " + quantity);
    if (quantity == null) {
        sessionStorage.setItem(quantityKey, "1");
    }
    else {
        sessionStorage.setItem(quantityKey, (parseInt(quantity, 10) + 1).toString());
    }
    SetCartTotal();
}
function GetQuantity() {
    return sessionStorage.getItem(quantityKey);
}
function SetCartTotal() {
    if (GetQuantity() != null)
        document.getElementById("cartTotal").firstChild.nodeValue = sessionStorage.getItem(quantityKey);
}
function OnStorefrontLoad() {
    SetCartTotal();
}
function OnCheckoutLoad() {
    for (var i in Object.keys(sessionStorage)) {
        var key = sessionStorage.key(parseInt(i, 10));
        console.log("key: " + key);
        if (key == quantityKey)
            continue;
        AddTableRow(key);
        // add to total
    }
    // write total
}
function AddTableRow(key) {
    var nameCell = document.createElement("td");
    nameCell.innerHTML = key;
    var price = parseInt(sessionStorage.getItem(key), 10);
    var priceCell = document.createElement("td");
    priceCell.innerHTML = price.toString();
    var newRow = document.createElement("tr");
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    document.getElementById("checkoutTable").appendChild(newRow);
    return price;
}
