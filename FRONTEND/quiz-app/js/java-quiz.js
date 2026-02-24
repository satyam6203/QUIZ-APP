let currentQuestionIndex = 0;
let questions = [];
let correctAnswers = 0; // Variable to track the number of correct answers
let totalQuestions = 0; // This will be set dynamically based on the API response

// Function to fetch questions from the API
async function fetchQuestions() {
    try {
        const response = await fetch('http://localhost:8080/quiz/java/all-question'); // API URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        questions = await response.json(); // Assume API returns an array of question objects
        totalQuestions = questions.length; // Set totalQuestions based on fetched data
        document.getElementById('total-questions').textContent = totalQuestions; // Update the total questions in the HTML
        displayQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
        document.getElementById('question-text').textContent = "Failed to load questions. Please try again.";
    }
}

function displayQuestion() {
    if (questions.length === 0) return;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = questions[currentQuestionIndex];

    // Update this line to match the correct property
    questionText.textContent = currentQuestion.questionText;
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.onclick = () => checkAnswer(option); // Call checkAnswer on click
        optionsContainer.appendChild(button);
    });

    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    // Update this line to match the correct property
    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswers++; // Increment score if the answer is correct
    }

    // Automatically move to the next question after selecting an answer
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Quiz Completed: Save score and redirect to results page
        localStorage.setItem('quizScore', correctAnswers); // Save the score
        localStorage.setItem('totalQuestions', totalQuestions); // Save total questions
        window.location.href = 'result.html'; // Redirect to results page
    }
}

let totalTime = 60; // total time in seconds (example: 1 minute)
let timerInterval;

function startTimer() {

    let timeLeft = totalTime;

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // format like 01:05 instead of 1:5
        let formattedTime =
            String(minutes).padStart(2, '0') + ":" +
            String(seconds).padStart(2, '0');

        document.getElementById("timer").textContent = formattedTime;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            nextQuestion(); // move to next question automatically
        }

    }, 1000);
}
window.onload = fetchQuestions;