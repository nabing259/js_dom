const buttonRgb = document.querySelector('#rgb');
const buttonHex = document.querySelector('#hex');
let colorCode = document.querySelector('.color');

// for rgb color change

buttonRgb.addEventListener('click', changeColorRgb);

function changeColorRgb(){
    const color = getRandomColor();
    console.log(color)
    document.body.style.backgroundColor = color;
    colorCode.innerText = color;
    colorCode.style.color = color;
    buttonRgb.style.color = color;
    buttonHex.style.color = color;
};

const getRandomColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// for hex color change

buttonHex.addEventListener('click', changeColorHex);

function changeColorHex(){
    const color = getRandomHexColor();
    console.log(color)
    document.body.style.backgroundColor = color;
    colorCode.innerText = color;
    colorCode.style.color = color;
    buttonHex.style.color = color;
    buttonRgb.style.color = color;
}

const getRandomHexColor = () =>{
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
