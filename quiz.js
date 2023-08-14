//  ================================= Questions array =================================
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



// ======================= globals variables =======================
let currentQuestion = 1;
let score = 0;
const totalQuestions = Questions.length;
const trackerID = document.getElementById('tracker');



// function to display the score
function trackScore() {
    htmlCode = "";
    htmlCode += `
        <div class="Score"> Score: ${score} </div>
        <div class="round"> ${currentQuestion} of ${totalQuestions} </div>
    `;
    trackerID.innerHTML = htmlCode;
}


// function to go to the next question
function displayNextQuestion() {
    clearFeedBack();

    if (currentQuestion < Questions.length - 1) {
        currentQuestion++;
        loadQuestions();
    } else {
        document.getElementById("answers").remove()
        document.getElementById("question").remove()
    }
}

// disable radio button after timer end
function switchOffRadioButton() {
    var radio = document.getElementsByName("answers");
    var len = radio.length;

    for (var i = 0; i < len; i++) {
        radio[i].disabled = true;
    }
}

// function to display timer
function timer() {
    var timeLeft = 5; // TODO reset to 30
    const elem = document.getElementById('timer');

    var downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            elem.innerHTML = "Finished";
            switchOffRadioButton();
            checkAnswer();
        } else {
            elem.innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
}


// ======================= loading and display the question ========================
function loadQuestions() {

    // change the display value of button start quizz
    document.getElementById("startBtn").style.display = 'none';

    const question = document.getElementById("question");
    const answers = document.getElementById("answers");

    question.textContent = Questions[currentQuestion].q;
    answers.innerHTML = "";

    trackScore();

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

    timer();
}

// function to check the answer
function checkAnswer() {
    const selectedAns = parseInt(document.querySelector('input[name="answers"]:checked').value);

    // check if user selected an answer
    if (selectedAns != null) {
        if (Questions[currentQuestion].a[selectedAns].isCorrect) {
            score++;
            displayFeedback("Well done ! That's the correct answer !")
        } else {
            displayFeedback("Too bad it's not the right answer !")
        }
    }
    else {
        displayFeedback("You didn't selected an answer !!!")
    }

    trackScore();

    // display the button for next question
    document.getElementById("nextQButton").style.display = "block";
}

// display feedback
function displayFeedback(sentences) {
    const question = document.getElementById("feedback");
    const feedbackLabel = document.createElement("label");

    feedbackLabel.textContent = sentences;
    feedbackLabel.id = "feedbackLabel"
    question.appendChild(feedbackLabel);
}

function clearFeedBack() {
    const feedback = document.getElementById("feedbackLabel")
    feedback.textContent = "";
}
