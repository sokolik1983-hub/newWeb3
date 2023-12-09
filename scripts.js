console.clear()
let rightAnswers = 0;
let multiplier = 5;
let type = 'standart';
let timeoutId;
window.onload = setValues('standart'), blockContainer();

function setValues() {
    if(type === 'reload') {
        document.getElementById('input1').value = multiplier;
        document.getElementById('input2').value = Math.floor(Math.random() * 11);
    } else if( type === 'shortTable') {
        document.getElementById('input1').value = Math.floor(Math.random() * 8) + 2;
        document.getElementById('input2').value = Math.floor(Math.random() * 8) + 2;
    } else {
        document.getElementById('input1').value = Math.floor(Math.random() * 11);
        document.getElementById('input2').value = Math.floor(Math.random() * 11);
    }
}



function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('input3').value);
    let rightResult = parseInt(document.getElementById('input1').value) * parseInt(document.getElementById('input2').value)

    if (rightResult === userAnswer) {
        eraseImageSource();

        document.querySelector('.result').innerText = 'Ответ верный';
        document.getElementById('input3').value = '';
        document.querySelector('.result').classList.remove('notRight');
        document.querySelector('.result').classList.add('right');
        setValues();
        rightAnswers++;
        document.querySelector('#finalResult').innerText = `Кол-во правильных ответов: ${rightAnswers}`
        insertRandomImage(1);
    } else {
        eraseImageSource();
        document.querySelector('.result').innerText = 'Ответ неверный';
        document.getElementById('input3').value = '';
        document.querySelector('.result').classList.remove('right');
        document.querySelector('.result').classList.add('notRight');
        insertRandomImage(2);
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(eraseImageSource, 4000);
}



function insertRandomImage(randomNumber) {
    let array1 = [
        'https://media3.giphy.com/media/yiWwzfXwV3R6/giphy.gif?cid=ecf05e47e2l38a938q4vib3djuvd8p0z9l3wjgr9fk7u8ucw&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media1.giphy.com/media/0bBGQgpJTUfTVzY6Xo/giphy.gif?cid=ecf05e471kx6ccyl9x003z6t30iu5qj4vki68b77cd5xrnte&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'https://media4.giphy.com/media/241LfGhONZv5EWosVV/giphy.gif?cid=ecf05e477yp5vmulvk3ue2cqbv5d76rb1yagq4fhy3rcs6j1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media1.giphy.com/media/0bBGQgpJTUfTVzY6Xo/giphy.gif?cid=ecf05e471kx6ccyl9x003z6t30iu5qj4vki68b77cd5xrnte&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/2NRfpwCwymVJMvPeQ6/giphy.gif?cid=ecf05e47jzwqizonqg6gc89c6q1pyu0oz3nrvp00frrn75vj&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/K3Sbp8fOgKye4/giphy.gif?cid=ecf05e47a9q3afyqsaxhswgcelygw61u7d4xwzt9q3qkc4tb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/pcj6EnckfPCgM/giphy.gif?cid=ecf05e47yodz1y6c177liywufxkx5vr91aikocjaj3ey0xd1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media0.giphy.com/media/VKwspRV2pafJu/giphy.gif?cid=ecf05e47838q8z5leb0h8fbmg9ret95zib68jj85o31qhjs1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/l0HlU9jZoIQdlZbkQ/giphy.gif?cid=ecf05e477yxkufhpmy1zgwe6gejndlev48s50zwvl6rjg0nb&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media4.giphy.com/media/mIZ9rPeMKefm0/giphy.gif?cid=ecf05e47838q8z5leb0h8fbmg9ret95zib68jj85o31qhjs1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczA1eTQ0Z2xhaXN2dmpyaDJ0ZjUzbnpuejNobXZ0bnlkNW00aW9oNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsX3YMWYzDPjAARfeg/giphy.gif',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzAweGEwOXM5MjZsY3FlbHMzd3Q5eHJpdzJ0MGh3a2RmbGc2OWo2aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9w475hDWEPVlu/giphy.gif',
        'https://media3.giphy.com/media/QwtRckmQTX0GOVs8oH/giphy.gif?cid=ecf05e470k0wa0ck0wg6icdwgxw3eqd9xf7hk0ssdeivvwi1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media4.giphy.com/media/RlU75EK1AJRNbi78VR/giphy.gif?cid=ecf05e47ia9tkwf44pfodz7qxkclaf2chnc4rd81lfa4a8zt&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVrNGhsOWJlaGF6cXJsaDk1amFoMTJ2YXQ2ZnVvNGt5OHZwdW1lYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRrxm7AjW8bFsqHy09/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWkwa2VtOWphNHduYmtidHJrMWg5aWRtdWNobDRwZ2dnMWppYjJvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHNqdzdzMjhmNjRwMXA4OG9jcWhzaWM0dmc3OTdnaG05dWN1c3ZtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HUqMNPvUmAZXY8E/giphy.gif',
        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjA3b2FremYybnNoc2hqY29ndWF2enhkOTg1dThuMXptcWx6aXB0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8zYunr3Hg8XPq/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjl2MjVlbXg1b2lxMGxkcmEwN3JmbXo3MG5wdTI4dmVicmg2OGE3eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/108M7gCS1JSoO4/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjk0OGk4Z2F2YXVvZTFydHpiOXIydzkzMWdwMmZ6bmtlcjZwOWJreCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cFdHXXm5GhJsc/giphy.gif',
        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVxYjI1NW1sZHdkZ3prN2Z4eDhlNjIwbGU0OWxvdmd1aTV6dDFlaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LlYjGi9rErbLjyaMNr/giphy.gif',
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGl3ODJreXU2ZGlnNmtiaDhoaXhvdXlhbWwxYWVtcnZuNnZhcGZwYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRzozg4TCBXv6QU/giphy.gif',
        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm92cTdxYW03ZmJnMnMwb3gwMXl0bnRwbzM1ZHp3YXk5MXR5bzlnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eGmKeueVnk31yCRQW5/giphy.gif',
    ]; // первый массив картинок

    let array2 = [
        'https://media0.giphy.com/media/E9vTsgFCGdymPWBOGC/giphy.gif?cid=ecf05e47l77y7myeq695mhhhduk7cgjf6267peix73u7juwy&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media1.giphy.com/media/ASGyFWC2Q2rY7NmlrV/giphy.gifcid=ecf05e472bk5zo6rc1f33wh2pek9g823kwxz1ndm22jq78px&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'https://media4.giphy.com/media/69iAVQekQ4XcnVr6E9/giphy.gif?cid=ecf05e472bk5zo6rc1f33wh2pek9g823kwxz1ndm22jq78px&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'https://media3.giphy.com/media/oZal60wTnRVK0meAcf/giphy.gif?cid=ecf05e47jh26n74kksywiod0iwqpp83ssu1ntyxx6w3fhspq&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media1.giphy.com/media/yEhSiKrcazxHnVbmbU/giphy.gif?cid=ecf05e477yp5vmulvk3ue2cqbv5d76rb1yagq4fhy3rcs6j1&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media4.giphy.com/media/V7YygwVnPUyQg/giphy.gif?cid=ecf05e472bk5zo6rc1f33wh2pek9g823kwxz1ndm22jq78px&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://media2.giphy.com/media/YZpUlyGLndm48/giphy.gif?cid=ecf05e47i7z93kwv75xvvzx42z0a0t77o0kpe2bwxtl9kbu0&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    ]; // второй массив картинок
    let imgTag = document.getElementById('randomImage');

    if (randomNumber === 1) {
        let randomIndex = Math.floor(Math.random() * array1.length);
        let randomImage = array1[randomIndex];
        imgTag.src = randomImage;
    } else if (randomNumber === 2) {
        let randomIndex = Math.floor(Math.random() * array2.length);
        let randomImage = array2[randomIndex];
        imgTag.src = randomImage;
    } else {
        console.log('Некорректное значение randomNumber. Ожидается 1 или 2.');
    }
}

function eraseImageSource() {
    let imgTag = document.getElementById('randomImage');
    imgTag.removeAttribute('src');
    document.querySelector('.result').innerText = '';
}

function reload() {
    type = 'reload';
    rightAnswers = 0;
    const inputElement = document.getElementById('input4');
    multiplier = inputElement.value;
    document.querySelector('.typeInfo').innerText = `Режим: Умножение на ${multiplier}`
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('notActive')
    setValues();
}
function standart() {
    type = 'standart';
    rightAnswers = 0;
    document.querySelector('.typeInfo').innerText = 'Режим: Стандартная таблица'
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('notActive')
    setValues()
};
function shortTable() {
    type = 'shortTable';
    rightAnswers = 0;
    document.querySelector('.typeInfo').innerText = 'Режим: Таблица без 0, 1 и 10';
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('notActive')
    setValues()
};
function validateInput(event) {
    const input = event.target;
    const value = input.value;

    if (value < 0 || value > 10) {
        input.setCustomValidity("Введите число от 0 до 10.");
    } else {
        input.setCustomValidity("");
    }
}

function blockContainer() {
    const overlay = document.getElementById('overlay');
        overlay.classList.add('notActive');
        event.preventDefault();
}


