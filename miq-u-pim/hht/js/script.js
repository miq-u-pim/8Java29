'use strict';

// トップページの要素
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('game');
const startBtn = document.getElementById('startBtn');
const playRuleBtn = document.getElementById('playRuleBtn');
const settingBtn = document.getElementById('settingBtn');
const backToTopBtn = document.getElementById('backToTopBtn');
const gameImage = document.querySelector('.game-image');

// ゲームページの要素
const entered = document.getElementById('entered');
const remained = document.getElementById('remained');
const inputText = document.getElementById('inputText');
const message = document.getElementById('message');
const replayBtn = document.getElementById('replayBtn');
const timerText = document.getElementById('timerText');
const progressBar = document.getElementById('progressBar');

const questions = ["これはテストです", "タイピングゲーム", "JavaScriptは楽しい"];

let timeLeft = 60;
let timerInterval;
let gameStarted = false;

// ボタンイベント
startBtn.addEventListener('click', () => {
    homePage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    setQuestion();
    startTimer();
});

backToTopBtn.addEventListener('click', () => {
    gamePage.classList.add('hidden');
    homePage.classList.remove('hidden');
});

playRuleBtn.addEventListener('click', () => {
    homePage.classList.add('hidden');
    gameImage.src = "../miq-u-pim/Happy Halloween Typing/images/typing.png";  // PLAY RULEの画像を表示
    gamePage.classList.remove('hidden');
});

settingBtn.addEventListener('click', () => {
    homePage.classList.add('hidden');
    gameImage.src = "../miq-u-pim/Happy Halloween Typing/images/typing.png";  // SETTINGの画像を表示
    gamePage.classList.remove('hidden');
});

// タイピングゲームの処理
function setQuestion() {
    const question = questions[Math.floor(Math.random() * questions.length)];
    enteredTextWords = [];
    remainedTextWords = question.split('');
    remained.innerHTML = remainedTextWords.join('');
    entered.innerHTML = enteredTextWords.join('');
    inputText.value = '';
}

function checkInput(enteredText) {
    const currentWord = remainedTextWords[0];
    if (enteredText === currentWord) {
        enteredTextWords.push(currentWord);
        entered.innerHTML = enteredTextWords.join('');
        remainedTextWords.shift();
        remained.innerHTML = remainedTextWords.join('');
        inputText.value = '';
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.innerHTML = timeLeft;
        progressBar.style.width = `${(timeLeft / 60) * 100}%`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishGame();
        }
    }, 1000);
}

function finishGame() {
    gamePage.classList.add('hidden');
    message.classList.remove('hidden');
}

replayBtn.addEventListener('click', () => {
    message.classList.add('hidden');
    homePage.classList.remove('hidden');
});

const topButton = document.getElementById('topButton');
topButton.addEventListener('click', () => {
    homePage.classList.remove('hidden');
    message.classList.add('hidden');
    gamePage.classList.add('hidden');
});
