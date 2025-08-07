const quotes = [
    "Typing fast requires practice and focus.",
    "Speed and accuracy both matter in typing tests.",
    "The quick brown fox jumps over the lazy dog.",
    "Programming is like typing but with problem solving.",
    "Consistent practice improves your typing speed."
];

let timerDisplay = document.getElementById("timer");
let quoteDisplay = document.getElementById("quote");
let inputArea = document.getElementById("inputArea");
let startBtn = document.getElementById("startBtn");
let timeSelect = document.getElementById("timeSelect");
let resultDisplay = document.getElementById("result");

let timeLeft, timer, currentQuote;

startBtn.addEventListener("click", startTest);

function startTest() {
    timeLeft = parseInt(timeSelect.value);
    timerDisplay.textContent = `Time: ${timeLeft}`;
    inputArea.value = "";
    inputArea.disabled = false;
    inputArea.focus();
    resultDisplay.textContent = "";

    // Show random quote
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.textContent = currentQuote;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endTest();
    }
}

function endTest() {
    inputArea.disabled = true;
    let typedText = inputArea.value.trim();
    let wordsTyped = typedText === "" ? 0 : typedText.split(/\s+/).length;

    let accuracy = calculateAccuracy(currentQuote, typedText);
    resultDisplay.innerHTML = `⏱ Time's up!<br>✅ Words per minute: <b>${wordsTyped}</b><br>🎯 Accuracy: <b>${accuracy}%</b>`;
}

function calculateAccuracy(original, typed) {
    let originalWords = original.split(" ");
    let typedWords = typed.split(" ");
    let correctCount = 0;

    for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] === originalWords[i]) {
            correctCount++;
        }
    }
    return Math.round((correctCount / originalWords.length) * 100);
}
