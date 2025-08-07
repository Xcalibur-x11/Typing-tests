let timeLeft = 30;
let timer;
let isTyping = false;

const timerDisplay = document.getElementById("time");
const textDisplay = document.getElementById("text-display");
const inputArea = document.getElementById("input-area");
const startBtn = document.getElementById("start-btn");
const timeSelect = document.getElementById("time-select");

const textSamples = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast is a skill you can improve.",
    "Practice makes perfect when learning to type.",
    "Accuracy is more important than speed at first."
];

function startTest() {
    let randomText = textSamples[Math.floor(Math.random() * textSamples.length)];
    textDisplay.textContent = randomText;
    inputArea.value = "";
    inputArea.disabled = false;
    inputArea.focus();

    timeLeft = parseInt(timeSelect.value);
    timerDisplay.textContent = timeLeft;
    isTyping = true;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    } else {
        clearInterval(timer);
        isTyping = false;
        inputArea.disabled = true;
        alert("Time's up!");
    }
}

startBtn.addEventListener("click", startTest);
