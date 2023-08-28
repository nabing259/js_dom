document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector("#file");
    const displayImage = document.querySelector(".displayImage");

    image.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = () => {
                displayImage.innerHTML = `<img src="${reader.result}" alt="No Profile Picture" style="width: 150px">`;
            };
            reader.readAsDataURL(file); 
        }
    })
})

