const toggle = document.querySelector("#toggle");
let container = document.querySelector("#container");
const body = document.querySelector("body");


const changeTheme = () => {
    container.innerHTML = "";
    if(body.classList.contains("darkTheme")){
        body.classList.remove("darkTheme");
        body.classList.add("lightTheme");
        
        container.innerHTML = `<h1>This is Light Mode</h1>`
    }
    else {
        container.innerHTML = "";
        body.classList.remove("lightTheme");
        body.classList.add("darkTheme");

        container.innerHTML = `<h1>This is Dark Mode</h1>`
    }
}
toggle.addEventListener("click", changeTheme);