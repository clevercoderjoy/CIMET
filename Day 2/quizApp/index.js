import { questions } from "./quiz.js";

const btnStart = document.querySelector(".btnStart");
const quizContent = document.querySelector(".quizContent");
const btnNext = document.querySelector(".btnNext");
const getOptions = document.querySelector(".options");
const score = document.querySelector(".scores");
let myScores = 0;
let userChoice = 0;
let intervalId;


btnStart.addEventListener("click", () => {
  quizContent.style.display = "block";
  btnStart.style.display = "none"
  console.log(quizContent.querySelector(".options"))
  startQuiz();
})

getOptions.addEventListener("click", (e) => {
  getOptions.querySelectorAll("p").forEach((tag) => tag.style.backgroundColor = "");
  userChoice = e.target.innerText;
  e.target.style.backgroundColor = "tomato";
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
      const optionContainer = document.createElement("p");
      quizContent.querySelector(".options").appendChild(optionContainer);
      optionContainer.innerText = option
    })
  }
}

const checkAnswer = (currentQuestionIndex, userChoice) => {
  if (currentQuestionIndex < questions.length && questions[currentQuestionIndex].answer === Number(userChoice)) {
    myScores++;
    userChoice = 0;
  }
}

const updateScores = () => {
  score.innerHTML = `My Score: ${myScores}`
}

const startQuiz = () => {
  let currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
  checkAnswer(currentQuestionIndex, userChoice)
  updateScores();
  intervalId = setInterval(() => {
    if (currentQuestionIndex >= questions.length) {
      clearInterval(intervalId);
    }
    checkAnswer(currentQuestionIndex, userChoice)
    updateScores();
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }, 3000);
}