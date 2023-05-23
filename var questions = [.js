var questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: 1
    },
    {
        question: "Which programming language is used to build Android apps?",
        options: ["Java", "Python", "C++", "Ruby"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Venus", "Jupiter", "Saturn", "Mars"],
        answer: 1
    }
];

var questionIndex = 0;
var score = 0;

var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var submitButton = document.getElementById('submit-btn');

function showQuestion() {
    var currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("div");
        option.className = "option";
        option.textContent = currentQuestion.options[i];
        option.setAttribute("data-index", i);
        option.addEventListener('click', handleOptionClick);
        optionsElement.appendChild(option);
    }
}

function handleOptionClick(event) {
    var selectedOptionIndex = event.target.getAttribute("data-index");
    var currentQuestion = questions[questionIndex];

    if (selectedOptionIndex == currentQuestion.answer) {
        score++;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "Your score: " + score + "/" + questions.length;
    submitButton.style.display = "none";
}

submitButton.addEventListener('click', showQuestion);

// Start the quiz
showQuestion();