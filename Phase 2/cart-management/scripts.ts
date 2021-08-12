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

function OnPageLoad(){
    SetCartTotal();
}