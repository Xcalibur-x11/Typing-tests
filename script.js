const quotes = [
    "The quick brown fox jumps over the lazy dog",
    "Typing fast requires practice and focus",
    "JavaScript powers the interactive web",
    "GitHub helps developers collaborate easily",
    "Speed comes with accuracy and patience"
];

let timeLeft;
let timerInterval;
let selectedTime;
let quoteText;
let startTime;

const quoteElem = document.getElementById("quote");
const inputElem = document.getElementById("input");
const timerElem = document.getElementById("timer");
const resultElem = document.getElementById("result");
const startBtn = document.getElementById("startBtn");
const timeSelect = document.getElementById("timeSelect");

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText = quotes[randomIndex];
    quoteElem.textContent = quoteText;
}

function startTest() {
    selectedTime = parseInt(timeSelect.value);
    timeLeft = selectedTime;
    inputElem.value = "";
    inputElem.disabled = false;
    inputElem.focus();
    resultElem.textContent = "";
    newQuote();

    startTime = Date.now();
    timerElem.textContent = `Time: ${timeLeft}s`;
