let i = 0;

document.querySelector("#increment").addEventListener("click", () => {
    i++;
    document.querySelector("#count").innerText = i;
});

document.querySelector("#decrement").addEventListener("click", () => {
    i--;
    if(i < 0) {
        alert("Counter is going beyond Zero")
    }
    document.querySelector("#count").innerText = i;
})