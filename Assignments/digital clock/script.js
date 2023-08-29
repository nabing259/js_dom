function currentTime(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const time = `${hours}:${minutes}:${seconds}`;
    const colorCode = `#${hours}${minutes}${seconds}`;

    document.getElementById('display').innerText = time;
    document.body.style.backgroundColor = colorCode;
}

setInterval(currentTime, 1000);

currentTime();