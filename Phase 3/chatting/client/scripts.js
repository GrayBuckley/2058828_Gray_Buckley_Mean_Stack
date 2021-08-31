function onPageLoad(){
    setNameDisplay();
    // connect socket
}

function setNameDisplay(){
    const name = sessionStorage.getItem("name");
    const nameElement = document.getElementById("clientName");
    nameElement.innerHTML = name;
}

function onSendClick(){
    const recipient = document.getElementById("recipientName").value;
    const txt = document.getElementById("messageTxt").value;
    const msg = {name: recipient, txt:txt};
    // send msg over socket
}

function updateRecentMessage(txt){
    const recievedDiv = document.getElementById("recievedDiv");
    const recievedP = document.getElementById("recievedP");
    recievedP.innerText = txt;
    recievedDiv.hidden = false;
}