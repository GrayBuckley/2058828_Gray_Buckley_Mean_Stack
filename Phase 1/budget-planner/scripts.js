function showForm() {
	console.log("arrived in showForm()");
	var form = document.getElementById("form");
	form.style.display = "block";
}

function clearForm() {
	console.log("arrived in clearForm()");
	var cname = document.getElementById("cname");
	cname.value = "";
}