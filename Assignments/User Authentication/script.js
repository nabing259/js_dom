const inbtn = document.getElementById("login");
const outbtn = document.getElementById("logout");
const display = document.getElementById("display");

inbtn.addEventListener("click", () => {
    loginUser();
})

outbtn.addEventListener("click", () => {
    logoutUser();
})

function loginUser(){
    localStorage.setItem("userStatus", true);
    display.innerText = "User has logged in";
}

function logoutUser(){
    localStorage.removeItem("userStatus");
    display.innerText = "User has not logged in";
}