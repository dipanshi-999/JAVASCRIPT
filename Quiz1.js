const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyper Tool Multi Language"
        ],

        correct: 0
    },

    {
        question: "Which keyword declares variable?",

        options: [
            "car",
            "var",
            "house",
            "loop"
        ],

        correct: 1
    }

];

let currentQuestion = 0;

let score = 0;

const questionElement =
    document.getElementById("question");

const buttons = [
    document.getElementById("Option1"),
    document.getElementById("Option2"),
    document.getElementById("Option3"),
    document.getElementById("Option4")
];

function loadQuestion() {

    let q = questions[currentQuestion];

    questionElement.innerHTML =
        q.question;

    buttons.forEach((button, index) => {

        button.innerHTML =
            q.options[index];

    });

}

function checkAnswer(index) {

    let q = questions[currentQuestion];

    if (index === q.correct) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    }
    else {

        document.body.innerHTML =
            "<h1>Quiz Finished!</h1>" +
            "<h2>Your Score: " + score + "</h2>";
    }
}

buttons.forEach((button, index) => {

    button.addEventListener("click", () => {

        checkAnswer(index);

    });

});

loadQuestion();