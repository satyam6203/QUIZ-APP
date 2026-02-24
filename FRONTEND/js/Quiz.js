let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0;
let totalQuestions = 0;

const params = new URLSearchParams(window.location.search);
const quizType = params.get("type") || "java";

const API_BASE = "http://localhost:8080/api";

async function fetchQuestions() {
try {
const response = await fetch(`${API_BASE}/${quizType}/quiz/questions`);
if (!response.ok) throw new Error("API error");

questions = await response.json();
    totalQuestions = questions.length;

    document.getElementById("total-questions").textContent = totalQuestions;
    document.getElementById("quiz-title").textContent = quizType.toUpperCase() + " Quiz";

    displayQuestion();
    startTimer();

} catch (err) {
    console.error(err);
    document.getElementById("question-text").textContent = "Failed to load quiz";
}
}

function displayQuestion() {
if (!questions.length) return;

const q = questions[currentQuestionIndex];

document.getElementById("question-text").textContent = q.questionText;
document.getElementById("current-question").textContent = currentQuestionIndex + 1;

const container = document.getElementById("options-container");
container.innerHTML = "";

q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;

    btn.onclick = () => {
        if (option === q.correctAnswer) correctAnswers++;
        nextQuestion();
    };

container.appendChild(btn);
});
}

function nextQuestion() {
clearInterval(timerInterval);

if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
    startTimer();
} else {
    localStorage.setItem("quizScore", correctAnswers);
    localStorage.setItem("totalQuestions", totalQuestions);
    localStorage.setItem("quizType", quizType);
window.location.href = "result.html";
}
}

let timerInterval;
const totalTime = 60;

function startTimer() {
let timeLeft = totalTime;

timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
nextQuestion();
    }
}, 1000);

}

window.onload = fetchQuestions;
