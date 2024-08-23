document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let score = 0;
    const questions = document.querySelectorAll('fieldset');
    
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.dataset.correct === "true") {
            score++;
        }
    });
    
    document.getElementById('result').textContent = `Tu puntaje es: ${score} de ${questions.length}`;
});
