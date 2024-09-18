const board = document.querySelector(".board");
const form = document.querySelector("form");
const leaderBoard = [];

const formElements = Array.from(document.forms[0].children);
formElements.pop();
console.log(formElements);

const getFormData = (e) => {
  e.preventDefault();
  const playerData = {};
  console.log(formElements)
  formElements.map((data) => { playerData[data.id] = data.id === "score" ? Number(data.value) : data.value });
  return playerData;
}

form.addEventListener("submit", (e) => {
  const player = getFormData(e);
  leaderBoard.push(player)
  form.reset();
  formElements[0].focus();
  updateLeaderBoard();
})

const updateLeaderBoard = () => {
  console.log(leaderBoard)
  board.innerHTML = "";

  leaderBoard.map((player) => {
    console.log(player)
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("playerRecord");
    const fNameDiv = document.createElement("div");
    fNameDiv.innerText = player.fname;
    const lNameDiv = document.createElement("div");
    lNameDiv.innerText = player.lname;
    const countryDiv = document.createElement("div");
    countryDiv.innerText = player.country;
    const scoreDiv = document.createElement("div");
    scoreDiv.innerText = player.score;
    const actionButtons = document.createElement("div");
    actionButtons.classList.add("actionButtons");
    const increment = document.createElement("button");
    increment.innerText = "+ 5";
    const del = document.createElement("button");
    del.innerText = "DEL";
    const decrement = document.createElement("button");
    decrement.innerText = "- 5";
    actionButtons.append(increment, del, decrement);
    playerDiv.append(fNameDiv, lNameDiv, countryDiv, scoreDiv, actionButtons);
    board.append(playerDiv);
  })
}