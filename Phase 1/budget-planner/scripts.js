function showForm() {
	console.log("arrived in showForm()");
	var form = document.getElementById("form");
	form.style.display = "block";
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