function AddButtonPress(name: string, price: number){
    //console.log("Hit AddButtonPress("+name+","+price+")");
    if(!InStorage(name)){
        // Add to storage
        // Update cart quantity
    }
}

function InStorage(name: string): boolean{
    return sessionStorage.getItem(name) !== null;
}