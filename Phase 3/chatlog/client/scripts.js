let socket = null;
let clientName = null;
function onPageLoad(){
    setNameDisplay();
    socket = io('http://localhost:8080');
    socket.on("msg", (txt) => updateRecentMessage(txt));
    socket.emit('name',clientName);
}

function setNameDisplay(){
    clientName = sessionStorage.getItem("name");
    const nameElement = document.getElementById("clientName");
    nameElement.innerHTML = clientName;
}

function onSendClick(){
    const recipient = document.getElementById("recipientName").value;
    const txt = document.getElementById("messageTxt").value;
    const msg = {name: recipient, txt:txt};
    socket.emit('send', JSON.stringify(msg));
}

function updateRecentMessage(txt){
    const recievedDiv = document.getElementById("recievedDiv");
    const recievedP = document.getElementById("recievedP");
    recievedP.innerText = txt;
    recievedDiv.hidden = false;
}