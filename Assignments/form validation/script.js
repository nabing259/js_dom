document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    if (name.length < 3 || password.length < 8 || password.length < 8 && name.length < 3) {
        alert("Form Validation Failed");
    }
    else {
        alert("Form Validation Successful");
    }
}