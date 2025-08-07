let timer;
let timeLeft;
let isTyping = false;

const timerSelect = document.getElementById("timerSelect");
const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const textInput = document.getElementById("textInput");
const sampleText = document.getElementById("sampleText");

// Typing test ka sample text
const texts = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed is a great skill to improve.",
    "Practice makes a person perfect in typing."
];

function startTest() {
    let selectedTime = parseInt(timerSelect.value);
    if (isNaN(selectedTime) || selectedTime <= 0) {
        alert("Please select a valid time.");
        return;
    }

    // Random text set karo
    sampleText.textContent = texts[Math.floor(Math.random() * texts.length)];
    textInput.value = "";
    textInput.disabled = false;
    textInput.focus();

    timeLeft = selectedTime;
    timerDisplay.textContent = timeLeft;
    isTyping = true;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(timer);
    isTyping = false;
    textInput.disabled = true;
    alert("Time's up! Test completed.");
}

startBtn.addEventListener("click", () => {
    if (!isTyping) {
        startTest();
    }
});
