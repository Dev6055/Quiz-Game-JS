const questions = [
  {
    question : "Which type of language is JavaScript?",
    answers : [
      {text : "Object-Oriented" , correct : true},
      {text : "Object-Based" , correct : false},
      {text : "Assembly-language" , correct :false},
      {text : "All of the above" , correct : false},

    ]
  },
  {
    question : "Which of the following are closures in Javascript?",
    answers : [
      {text : "Variables" , correct : false},
      {text : "Functions" , correct : false},
      {text : "Objects" , correct : false},
      {text : "All of the above" , correct : true},

    ]
  },
  {
    question : "What keyword is used to declare an asynchronous function in Javascript?",
    answers : [
      {text : "Async" , correct : true},
      {text : "Await" , correct : false},
      {text : "setTimeout" , correct : false},
      {text : "None of the above" , correct : false},

    ]
  },
  {
    question : "Which of the following methods is used to access HTML elements using Javascript?",
    answers : [
      {text : "getElementbyId()" , correct : false},
      {text : "getElementsByClassName()" , correct : false},
      {text : "Both A and B" , correct : true},
      {text : "None of the above" , correct : false},

    ]
  }
];

// variable for important tags
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();

}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question ;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click" , selectAnswer);
  });
}

function resetState(){
  nextButton.style.display ="none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
 }
 else{
  selectedBtn.classList.add("incorrect");
 }
 Array.from(answerButtons.children).forEach(button => {
  if (button.dataset.correct == "true") {
    button.classList.add("correct");
  }
  button.disabled = true;
 })
 nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = " Play Again ";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else{
    showScore();
  }
}

nextButton.addEventListener("click" , () => {
  if(currentQuestionIndex < questions.length ){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})
startQuiz();



// Key Point

// Quiz app made using concepts of handling DOM dynamically through javascript and using Event listners



