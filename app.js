let timer = 0;
let counter = document.getElementById('counter');
let timerId = '';

function start() {
    timerId = setInterval(() => {
        timer++;
        counter.innerText = timer;
    }, 1000)
}

function reset() {
    clearInterval(timerId);
    timer = 0;
    counter.innerText = timer;
}