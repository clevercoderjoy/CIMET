const root = document.querySelector(".root");
const undo = document.querySelector("#undo");
const reset = document.querySelector("#reset");
const redo = document.querySelector("#redo");

let circleContainer = [];
let undoContainer = [];

const generateRandomColor = () => {
  return randomNumber = Math.floor(Math.random() * (256 - 0) + 0);
}

const displayCircles = () => {
  circleContainer.map((element) => root.append(element));
  undo.disabled = circleContainer.length === 0;
  reset.disabled = circleContainer.length === 0;
  redo.disabled = undoContainer.length === 0;
}

document.addEventListener("click", (e) => {
  const div = document.createElement("div");
  div.classList.add("circle");
  div.style.top = `${e.clientY - 23}px`;
  div.style.left = `${e.clientX - 10}px`;
  let randomColor = `rgb(${generateRandomColor()} ${generateRandomColor()} ${generateRandomColor()})`;
  div.style.backgroundColor = randomColor;
  circleContainer.push(div);
  displayCircles();
})

reset.addEventListener("click", (e) => {
  e.stopPropagation();
  undo.disabled = true;
  reset.disabled = true;
  redo.disabled = true;
  circleContainer.forEach((circle) => circle.remove());
  circleContainer = [];
  undoContainer = [];
  displayCircles();
})

undo.addEventListener("click", (e) => {
  e.stopPropagation();
  if (circleContainer.length > 0) {
    const elementToRemove = circleContainer.pop();
    undoContainer.push(elementToRemove);
    elementToRemove.remove();
    displayCircles();
  }
})

redo.addEventListener("click", (e) => {
  e.stopPropagation();
  if (undoContainer.length > 0) {
    const CurrentCircleToPush = undoContainer.pop();
    circleContainer.push(CurrentCircleToPush);
    root.append(CurrentCircleToPush);
    displayCircles();
  }
})