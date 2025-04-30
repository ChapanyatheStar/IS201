// Basic quiz functionality for the web app
document.getElementById('start-quiz').addEventListener('click', startQuiz);

function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h3>Health Quiz</h3>
        <p>What is the recommended amount of exercise for adults per week?</p>
        <button onclick="checkAnswer('incorrect')">30 minutes</button>
        <button onclick="checkAnswer('correct')">150 minutes</button>
        <button onclick="checkAnswer('incorrect')">1 hour</button>
    `;
}

function checkAnswer(answer) {
    const quizContainer = document.getElementById('quiz-container');
    if (answer === 'correct') {
        quizContainer.innerHTML = '<p>Correct! Well done!</p>';
    } else {
        quizContainer.innerHTML = '<p>Incorrect. Try again!</p>';
    }
}
