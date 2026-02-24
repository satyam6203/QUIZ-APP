function startQuiz(quizType) {
    alert(`Starting ${quizType.charAt(0).toUpperCase() + quizType.slice(1)} Quiz!`);
    
    // Convert to lowercase for consistency
    const normalizedType = quizType.toLowerCase();

    // Redirect to the quiz page with the quiz type as a parameter
    window.location.href = `Quiz.html?type=${normalizedType}`;
}
