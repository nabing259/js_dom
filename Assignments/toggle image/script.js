const status = document.getElementById("status");
const image = document.getElementById("image");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    if(image.classList.contains("hidden")){
        image.classList.remove("hidden");
        status.innerText = "The Image is visible";
    } else {
        image.classList.add("hidden");
        status.innerText = "The Image is hidden";
    }
})