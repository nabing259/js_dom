const search = document.getElementById("search");
const results = document.getElementById("result");

search.addEventListener("input", () => {
    const keywords = search.value.toLowerCase();

    for(let i of results.children){
        let item = i.firstChild.textContent.toLowerCase();
        if(item.indexOf(keywords) != -1){
            i.style.display = "block";
        }
        else{
            i.style.display = "none";
        }
    }
})