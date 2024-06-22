let timer;
let running = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

function startTimer() {
    running = true;
    startStopButton.textContent = 'Stop';
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 1000);
}

function stopTimer() {
    running = false;
    startStopButton.textContent = 'Start';
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.textContent = '00:00:00';
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
