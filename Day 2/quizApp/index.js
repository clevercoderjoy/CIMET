import { questions } from "./quiz.js";

const btnStart = document.querySelector(".btnStart");
const quizContent = document.querySelector(".quizContent");
const getOptions = document.querySelector(".options");
const score = document.querySelector(".scores");
let myScores;
let userChoice;
let intervalId;

btnStart.addEventListener("click", () => {
  quizContent.style.display = "block";
  btnStart.style.display = "none"
  startQuiz();
})

getOptions.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    getOptions.querySelectorAll("button").forEach((tag) => tag.disabled = true);
    userChoice = e.target.innerText;
    e.target.style.backgroundColor = "tomato";
  }
})

const removeAllOptions = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

const showQuestion = (currentQuestionIndex) => {
  if (currentQuestionIndex < questions.length) {
    quizContent.querySelector("h2").innerText = questions[currentQuestionIndex].question;
    removeAllOptions(quizContent.querySelector(".options"));
    questions[currentQuestionIndex].options.map((option) => {
      const optionContainer = document.createElement("button");
      quizContent.querySelector(".options").appendChild(optionContainer);
      optionContainer.innerText = option
    })
  }
}

const checkAnswer = (currentQuestionIndex, userChoice) => {
  if (currentQuestionIndex < questions.length && questions[currentQuestionIndex].answer === Number(userChoice)) {
    myScores++;
    userChoice = "";
  }
  updateScores();
}

const updateScores = () => {
  score.innerHTML = `My Score: ${myScores}`
}

const randomizeArray = (arr) => {

}

const startQuiz = () => {
  let currentQuestionIndex = 0;
  myScores = 0;
  userChoice = "";
  showQuestion(currentQuestionIndex);
  intervalId = setInterval(() => {
    checkAnswer(currentQuestionIndex, userChoice)
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      clearInterval(intervalId);
      return;
    }
    userChoice = "";
    showQuestion(currentQuestionIndex);
  }, 1000);
}


// randomize array
// show a reset button and restart quiz
// show a timer
// skip to next ques on click of next button