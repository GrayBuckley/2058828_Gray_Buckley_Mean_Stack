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