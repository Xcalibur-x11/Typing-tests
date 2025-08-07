const quotes = [
  "Practice makes perfect.",
  "Typing fast is fun and useful.",
  "Never give up on learning.",
  "Accuracy is more important than speed.",
  "JavaScript powers the web."
];

let quote = "";
let timer = 60;
let interval = null;
let started = false;

const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  quote = getRandomQuote();
  quoteDisplay.innerHTML = "";
  quote.split("").forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    quoteDisplay.appendChild(span);
  });
}

function startTimer() {
  interval = setInterval(() => {
    timer--;
    timerDisplay.innerText = timer;
    if (timer === 0) {
      clearInterval(interval);
      quoteInput.disabled = true;
    }
  }, 1000);
}

quoteInput.addEventListener("input", () => {
  const input = quoteInput.value.split("");
  const quoteChars = quoteDisplay.querySelectorAll("span");

  let correct = 0;
  quoteChars.forEach((charSpan, index) => {
    const char = input[index];
    if (char == null) {
      charSpan.classList.remove("correct", "incorrect");
    } else if (char === charSpan.innerText) {
      charSpan.classList.add("correct");
      charSpan.classList.remove("incorrect");
      correct++;
    } else {
      charSpan.classList.add("incorrect");
      charSpan.classList.remove("correct");
    }
  });

  const accuracy = Math.round((correct / quote.length) * 100);
  const wordsTyped = input.join("").split(" ").length;
  const wpm = Math.round((wordsTyped / (60 - timer)) * 60) || 0;

  accuracyDisplay.innerText = accuracy + "%";
  wpmDisplay.innerText = wpm;

  if (!started) {
    started = true;
    startTimer();
  }
});

function restartTest() {
  clearInterval(interval);
  timer = 60;
  started = false;
  quoteInput.disabled = false;
  quoteInput.value = "";
  timerDisplay.innerText = timer;
  wpmDisplay.innerText = 0;
  accuracyDisplay.innerText = "100%";
  displayQuote();
}

restartTest();
