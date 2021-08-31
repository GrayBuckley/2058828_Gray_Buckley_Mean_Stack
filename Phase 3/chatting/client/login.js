function login(){
    const name = document.getElementById("nameInput").value;
    sessionStorage.setItem("name", name);
}