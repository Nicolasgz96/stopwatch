// Global variables
let timer;
let startTime;
let elapsedTime = 0;
let running = false;

// DOM elements
const timerDisplay = document.getElementById('txt');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Format milliseconds to HH:MM:SS
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update timer display
function updateTimer() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timerDisplay.textContent = formatTime(elapsedTime);
}

// Start the timer
function startTimer() {
    if (!running) {
        running = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    if (running) {
        running = false;
        clearInterval(timer);
    }
}

// Reset the timer
function resetTimer() {
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00';
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);