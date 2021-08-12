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
    let quantity: string = sessionStorage.getItem(quantityKey);
    console.log("quantity: "+quantity);
    if(quantity == null){
        sessionStorage.setItem(quantityKey, "1");
    } else {
        sessionStorage.setItem(quantityKey, (parseInt(quantity, 10)+1).toString());
    }
    document.getElementById("cartTotal").firstChild.nodeValue = sessionStorage.getItem(quantityKey);
}

// On load - load cart quantity