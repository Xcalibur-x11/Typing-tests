const textDisplay = document.getElementById("textDisplay");
const textInput = document.getElementById("textInput");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restartBtn");

let timer;
let timeLeft = 60;
let isTyping = false;
let correctChars = 0;
let totalChars = 0;

const paragraphs = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast requires practice and focus every day.",
    "Artificial intelligence is transforming the way we live and work.",
    "Consistency is the key to mastering any skill in life.",
    "Never give up because great things take time.",
    "Technology has made the world more connected than ever before.",
    "Reading books can greatly improve your vocabulary and knowledge.",
    "Discipline and dedication are essential for success.",
    "The internet is a vast source of information and opportunities.",
    "Programming teaches problem solving and logical thinking."
];

function getRandomParagraph() {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

function startTest() {
    let randomText = getRandomParagraph();
    textDisplay.textContent = randomText;
    textInput.value = "";
    timeLeft = 60;
    timeDisplay.textContent = timeLeft;
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = 100;
    correctChars = 0;
    totalChars = 0;
    clearInterval(timer);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
    } else {
        clearInterval(timer);
        textInput.disabled = true;
    }
}

textInput.addEventListener("input", () => {
    if (!isTyping) {
        timer = setInterval(updateTimer, 1000);
        isTyping = true;
    }

    let typedText = textInput.value;
    let originalText = textDisplay.textContent;

    totalChars = typedText.length;
    correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correctChars++;
        }
    }

    let wpm = Math.round((correctChars / 5) / ((60 - timeLeft) / 60));
    let accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100;

    wpmDisplay.textContent = wpm > 0 ? wpm : 0;
    accuracyDisplay.textContent = accuracy;
});

restartBtn.addEventListener("click", () => {
    textInput.disabled = false;
    isTyping = false;
    startTest();
});

startTest();
