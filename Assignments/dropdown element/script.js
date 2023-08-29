const languages = ["Java", "Javascript", "C", "C++", "Python"];
const container = document.querySelector("#language");

languages.forEach(language => {
    const option = document.createElement("option");
    option.value = language;
    option.innerText = language;
    container.appendChild(option);
})