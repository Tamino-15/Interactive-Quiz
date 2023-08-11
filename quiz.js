// Questions array
const Questions = [{
    q: "What is capital of France?",
    a: [{ text: "Toulouse", isCorrect: false },
    { text: "Lyon", isCorrect: false },
    { text: "Paris", isCorrect: true },
    { text: "Marseille", isCorrect: false }
    ]
},
{
    q: "What is the capital of Germany?",
    a: [{ text: "Cologne", isCorrect: false, isSelected: false },
    { text: "Munich", isCorrect: false },
    { text: "Hambourg", isCorrect: false },
    { text: "Berlin", isCorrect: true }
    ]
},
{
    q: "What is the capital of Ireland",
    a: [{ text: "Limerick", isCorrect: false },
    { text: "Galway", isCorrect: false },
    { text: "Dublin", isCorrect: true },
    { text: "Cork", isCorrect: false }
    ]
},
{
    q: "What is the capital of Italy",
    a: [{ text: "Naples", isCorrect: false },
    { text: "Florence", isCorrect: false },
    { text: "Rome", isCorrect: true },
    { text: "Bari", isCorrect: false }
    ]
},
{
    q: "What is the capital of Spain",
    a: [{ text: "Seville", isCorrect: false },
    { text: "Barcelone", isCorrect: false },
    { text: "Madrid", isCorrect: true },
    { text: "Valencia", isCorrect: false }
    ]
}
]


// globals variables
let currentQuestion = 0;
let score = 0;
const totalQuestions = Questions.length();

// ======================= loading and display the question = =======================
function loadQuestions() {
    const question = document.getElementById("question");
    const answers = document.getElementById("answers");

    question.textContent = Questions[currentQuestion].q;
    answers.innerHTML = "";

    // loop for create every answer option to 1 question
    for (let i = 0; i < Questions[currentQuestion].a.length; i++) {
        const div = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answers";
        choice.value = i;

        choiceLabel.textContent = Questions[currentQuestion].a[i].text;

        div.appendChild(choice);
        div.appendChild(choiceLabel);
        answers.appendChild(div);
    }
}