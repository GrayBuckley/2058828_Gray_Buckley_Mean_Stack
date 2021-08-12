function AddButtonPress(name: string, price: number){
    console.log("Hit AddButtonPress("+name+","+price+")");
    if(!InStorage(name)){
        AddToStorage(name, price);
        // Update cart quantity
    }
}

function InStorage(name: string): boolean{
    return sessionStorage.getItem(name) !== null;
}

function AddToStorage(name: string, price: number){
    sessionStorage.setItem(name, price.toString());
}