function getNumBlogs(){
	return parseInt(sessionStorage.getItem("numBlogs"), 10);
}

function onLoad(){
	setNumBlogs(0);
}

function setNumBlogs(x){
	sessionStorage.setItem("numBlogs", x);
}

function getLastRow(){
	return Math.floor((getNumBlogs() - 1)/3);
}

function incrementNumBlogs(){
	setNumBlogs(getNumBlogs() + 1);
}

function addBttnClick(){
	addBlog(
		document.getElementById("titleBox").value,
		document.getElementById("articlesBox").value,
		document.getElementById("imageBox").value
	);
}

function addBlog(title, articles, imageURL){
	incrementNumBlogs();
	var colNum = getNumBlogs() % 3;
	if(colNum == 1)
		addRow();
	var targetCol = document.getElementById("row"+getLastRow()+"col"+colNum);
	
	var imgElement = document.createElement("img");
	imgElement.setAttribute("src", imageURL);
	imgElement.setAttribute("alt", "user-supplied image");
	imgElement.setAttribute("width", "400");
	targetCol.appendChild(imgElement);
	
	var titleElement = document.createElement("h2");
	titleElement.appendChild(document.createTextNode(title));
	targetCol.appendChild(titleElement);
	
	var articlesElement = document.createElement("p");
	articlesElement.appendChild(document.createTextNode(articles));
	targetCol.appendChild(articlesElement);
}

function addRow(){
	var rowNum = getLastRow();
	var newRow = document.createElement("div");
	newRow.setAttribute("class", "row");
	newRow.setAttribute("id", "row"+rowNum);
	var col1 = makeCol(rowNum, 1);
	var col2 = makeCol(rowNum, 2);
	var col0 = makeCol(rowNum, 0);
	newRow.appendChild(col1);
	newRow.appendChild(col2);
	newRow.appendChild(col0);
	document.getElementById("blogs").appendChild(newRow);
}

function makeCol(row, col){
	var newCol = document.createElement("div");
	newCol.setAttribute("class", "col-sm-4");
	newCol.setAttribute("id", "row"+row+"col"+col);
	return newCol;
}
























