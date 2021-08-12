const quantityKey: string = "CART_QUANTITY";

function AddButtonPress(name: string, price: number){
    //console.log("Hit AddButtonPress("+name+","+price+")");
    if(!InStorage(name)){
        AddToStorage(name, price);
        IncrementQuantity();
    }
}

function InStorage(name: string): boolean{
    return sessionStorage.getItem(name) !== null;
}

function AddToStorage(name: string, price: number){
    sessionStorage.setItem(name, price.toString());
}

function IncrementQuantity(){
    let quantity: string = GetQuantity();
    console.log("quantity: "+quantity);
    if(quantity == null){
        sessionStorage.setItem(quantityKey, "1");
    } else {
        sessionStorage.setItem(quantityKey, (parseInt(quantity, 10)+1).toString());
    }
    SetCartTotal();
}

function GetQuantity(): string {
    return sessionStorage.getItem(quantityKey);
}

function SetCartTotal(){
    if(GetQuantity() != null)
        document.getElementById("cartTotal").firstChild.nodeValue = sessionStorage.getItem(quantityKey);
}

function OnStorefrontLoad(){
    SetCartTotal();
}

function OnCheckoutLoad(){
    for(let i in Object.keys(sessionStorage)){
        let key = sessionStorage.key(parseInt(i,10));
        console.log("key: "+key);
        if(key == quantityKey) continue;
        AddTableRow(key);
        // add to total
    }
    // write total
}

function AddTableRow(key: string):number{
    const nameCell = document.createElement("td");
    nameCell.innerHTML = key;
    const price: number = parseInt(sessionStorage.getItem(key),10);
    const priceCell = document.createElement("td");
    priceCell.innerHTML = price.toString();
    const newRow = document.createElement("tr");
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);
    document.getElementById("checkoutTable").appendChild(newRow);
    return price;
}