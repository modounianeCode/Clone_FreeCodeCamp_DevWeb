// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-test");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions=[
    {
        question:"What is the capital of France?",
        answers:[
            {text : "London",correct:false},
            {text : "Berlin",correct:false},
            {text : "Paris",correct:true},
            {text : "Madrid",correct:false},
        ],
    },
    {
        question:"What book is the most valuable for the muslims?",
        answers:[
            {text : "Quran",correct:true},
            {text : "Bible",correct:false},
            {text : "Mohamed",correct:false},
            {text : "Torah",correct:false},
        ],
    },
    {
        question:"What is the last religion revealed?",
        answers:[
            {text :"Judaisme",correct:false},
            {text : "Christianisme",correct:false},
            {text : "Islam",correct:true},
            {text : "Buddhisme",correct:false},
        ],
    },
    {
        question:"Who is the president of Senegal?",
        answers:[
            {text : "Ousmane Sonko",correct:false},
            {text : "Bassirou Diomaye Faye",correct:true},
            {text : "Malick Gakou",correct:false},
            {text : "Macky Sall",correct:false},
        ],
    },
    {
        question:"What is the capital of Senegal",
        answers:[
            {text : "Fass Delorme",correct:false},
            {text : "Thies",correct:false},
            {text : "Saint-Louis",correct:false},
            {text : "Dakar",correct:true},
        ],
    }
]
//Quiz State Vars
// window.addEventListener('load',()=>{
//     console.log(quizQuestions[0].question);
//    console.log(quizQuestions[0].answers[0].correct);
// });
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event Listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// Functions
function startQuiz() {
    // console.log(answersContainer.children);
    //reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent=0;
    //classlist? The classList property of an element returns the class names of the element as a DOMTokenList object. 
    // It provides methods to add, remove, toggle, and check for the presence of specific classes on the element. 
    // In this case, we are using classList to remove the "active" class from the start screen and add it to the quiz screen, effectively showing the quiz screen and hiding the start screen when the quiz starts.
    startScreen.classList.remove("active");
    quizScreen.classList.add("active");
    showQuestion();
}

function showQuestion() {
    //reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");
        //what is dataset? dataset is a property of the HTMLElement interface that provides access to all the custom data attributes (data-*) set on the element.
        //It allows you to store and retrieve custom data associated with an HTML element without using additional properties or classes.
        //In this case, we are using dataset to store whether the answer is correct or not, which can be accessed later when the user selects an answer.
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    if(answersDisabled) return;
    answersDisabled = true;
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    //What is Array.from? Array.from() is a static method that creates a new, shallow-copied Array instance from an array-like or iterable object. 
    //In this case, we are using Array.from() to convert the HTMLCollection of answer buttons (which is returned by answersContainer.children) into a regular array, allowing us to use array methods like forEach to iterate over the buttons and apply the appropriate classes based on whether they are correct or incorrect.
    Array.from(answersContainer.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }else if(button === selectedButton){
            button.classList.add("incorrect");
        }
    });
    if(isCorrect){
        score++;
        scoreSpan.textContent = score;
    }
    setTimeout(()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex < quizQuestions.length){
            showQuestion();
        }else{
            showResults();
        }
    },100);
}
function showResults() {    
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");
    finalScoreSpan.textContent = score;
   const percentage = (score / quizQuestions.length) * 100;
    if(percentage === 100){
     resultMessage.textContent = "Excellent work!";
    }else if(percentage <= 80 && percentage >= 60){
     resultMessage.textContent = "Good job!";
    }else if(percentage < 60 && percentage >= 40){ 
     resultMessage.textContent = "Better luck next time!";
    }
    else if(percentage < 40 && percentage >= 20){
     resultMessage.textContent = "Keep practicing!";
    }else{
     resultMessage.textContent = "Don't give up!";
    }
    resultMessage.style.fontSize = "1.5rem";
    resultMessage.style.color ="#e86a33";
}

function restartQuiz() {
    // console.log("quiz re-started");
    resultScreen.classList.remove("active");
    startQuiz();
}
