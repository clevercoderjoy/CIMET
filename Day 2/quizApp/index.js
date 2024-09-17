import { questions } from "./quiz.js";

const btnStart = document.querySelector(".btnStart");
const quizContent = document.querySelector(".quizContent");

btnStart.addEventListener("click", () => {
  quizContent.style.display = "block";
  btnStart.style.display = "none"
  console.log(quizContent.querySelector(".options"))
  startQuiz();
})

const removeAllOptions = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

const showQuestion = (currentQuestion) => {
  quizContent.querySelector("h1").innerText = questions[currentQuestion].question;
  removeAllOptions(quizContent.querySelector(".options"));
  questions[currentQuestion].options.map((option) => {
    const optionContainer = document.createElement("p");
    quizContent.querySelector(".options").appendChild(optionContainer);
    optionContainer.innerText = option
  })
}

const startQuiz = () => {
  let currentQuestionIndex = 0;
  showQuestion(currentQuestionIndex);
  currentQuestionIndex++;
  const intervalId = setInterval(() => {
    if (currentQuestionIndex >= questions.length) {
      clearInterval(intervalId);
    }
    showQuestion(currentQuestionIndex);
    currentQuestionIndex++;
  }, 5000);
}