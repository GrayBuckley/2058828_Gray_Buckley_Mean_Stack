const serverURL = "http:127.0.0.1:8080/";

function addClick(){
    let eid = (document.getElementById("eidInput") as HTMLInputElement).value;
    let tid = (document.getElementById("tidInput") as HTMLInputElement).value;
    let taskDesc = (document.getElementById("tdescInput") as HTMLInputElement).value;
    let due = (document.getElementById("deadlineInput") as HTMLInputElement).value;
    fetch(serverURL+"add?eid="+eid+"&tid="+tid+"&task="+taskDesc+"&due="+due);
    listClick();
}
function deleteClick(){
    let tid = (document.getElementById("tidDelete") as HTMLInputElement).value;
    fetch(serverURL+"delete?tid="+tid);
    listClick();
}
function listClick(){
    clearTable(document.getElementById("table") as HTMLTableElement);
    fetch(serverURL+"get").then(res => getRecieved(res));
}
function getRecieved(res:Response){
    res.blob().then(blob => {
    blob.text().then(txt => {
    var a = JSON.parse(txt) as any[];
    a.forEach(t => {
        var row = document.createElement("tr");
        var eidD = document.createElement("td");
        var tidD = document.createElement("td");
        var descD = document.createElement("td");
        var dueD = document.createElement("td");
        eidD.innerText = t.empID;
        tidD.innerText = t.taskID;
        descD.innerText = t.task;
        dueD.innerText = t.deadline;
        row.appendChild(eidD);
        row.appendChild(tidD);
        row.appendChild(descD);
        row.appendChild(dueD);
        document.getElementById("table").appendChild(row);
    })})});
}

function clearTable(table:HTMLTableElement){
    var rows = table.rows;
    var i = rows.length;
    while (--i) 
        rows[i].parentNode.removeChild(rows[i]);
}