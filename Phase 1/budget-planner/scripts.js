function showForm() {
	//console.log("arrived in showForm()");
	var form = document.getElementById("form");
	form.style.display = "block";
}

function budgetButtonClick(){
	showTable();
	cleanTable();
	var total = 0;
	var records = getRecords();
	records.forEach(record => {
		insertTableRow(record.cname, record.pname, record.budget);
		total += parseInt(record.budget,10);
	});
	insertTableRow("Total", "", total);
}

function showTable() {
	document.getElementById("tableDiv").style.display = "block";
}

function numTableRows() {
	return document.getElementById("table").rows.length;
}

function cleanTable(){
	var table = document.getElementById("table");
	while(numTableRows() > 1) table.deleteRow(1);
}

function insertTableRow(cname, pname, budget){
	var table = document.getElementById("table");
	var row = table.insertRow(-1);
	var cnameCell = row.insertCell(0);
	var pnameCell = row.insertCell(1);
	var budgetCell = row.insertCell(2);
	cnameCell.innerHTML = cname;
	pnameCell.innerHTML = pname;
	budgetCell.innerHTML = budget;
}

function clearForm() {
	console.log("arrived in clearForm()");
	document.getElementById("cname").value = "";
	document.getElementById("pname").value = "";
	document.getElementById("budget").value = "";
}

function hideForm() {
	var form = document.getElementById("form");
	form.style.display = "none";
}

function addBttnOnClick() {
	hideForm();
	newBudget(
		document.getElementById("cname").value,
		document.getElementById("pname").value,
		document.getElementById("budget").value
	);
	clearForm();
}

function buildStorageRecord(cname, pname, budget) {
	var o = {
		cname: cname,
		pname: pname,
		budget: budget
	}
	return o;
}

function getRecords() {
	return JSON.parse(localStorage.getItem("records"));
}

function appendRecord(newRecord){
	var records = getRecords();
	if(records === null) records = [];
	//console.log(records);
	records.push(newRecord);
	//console.log(records);
	localStorage.setItem("records", JSON.stringify(records));
}

function newBudget(cname, pname, budget) {
	appendRecord(buildStorageRecord(cname, pname, budget));
}