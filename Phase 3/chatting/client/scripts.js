function onPageLoad(){
    setNameDisplay();
    // connect socket
}

function setNameDisplay(){
    const name = sessionStorage.getItem("name");
    const nameElement = document.getElementById("clientName");
    nameElement.innerHTML = name;
}