function displayResult() {
    const score = localStorage.getItem('quizScore'); // Get score from localStorage
    const totalQuestions = localStorage.getItem('totalQuestions'); // Get total questions
    const feedback = document.getElementById('feedback');

    if (score !== null) {
        document.getElementById('score').innerText = `You scored ${score} out of ${totalQuestions}`;

        // Optional: Provide feedback based on score
        const percentage = (score / totalQuestions) * 100;
        if (percentage >= 80) {
            feedback.innerText = 'Excellent work! Keep it up!';
        } else if (percentage >= 50) {
            feedback.innerText = 'Good job! You can do even better!';
        } else {
            feedback.innerText = 'Don’t give up! Try again!';
        }
    } else {
        document.getElementById('score').innerText = 'No score available.';
    }
}

// Call the displayResult function when the page loads
window.onload = displayResult;