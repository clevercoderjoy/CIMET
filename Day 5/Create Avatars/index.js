const avatarsContainer = document.querySelector(".avatarsContainer");
const createAvatarBtn = document.querySelector(".createAvatar");
const modal = document.querySelector(".modal");
let showModal = false;
let currentAvatar = null;
const avatars = [];
let modalType = "";
let avatarToDelete = null;

const renderUserAvatars = () => {
  avatarsContainer.innerHTML = '';
  avatars.forEach((avatar) => avatarsContainer.appendChild(avatar));
  avatarsContainer.appendChild(createAvatarBtn);
}

const getRandomBackgroundColor = () => {
  return Math.floor(Math.random() * 256);
}

const toggleModal = () => {
  showModal = !showModal;
  modal.style.display = showModal ? "flex" : "none";
}

const updateUserAvatar = () => {
  if (modalType === "createUser" && currentAvatar) {
    avatars.push(currentAvatar);
    currentAvatar = null;
    renderUserAvatars();
    toggleModal();
  } else if (modalType === "deleteUser" && avatarToDelete !== null) {
    const avatarIndex = avatars.indexOf(avatarToDelete);
    if (avatarIndex > -1) {
      avatars.splice(avatarIndex, 1);
      renderUserAvatars();
    }
    avatarToDelete = null;
    toggleModal();
  }
}

const createUserAvatars = (userInitials) => {
  const userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  userAvatar.style.position = "relative";

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa-solid", "fa-circle-xmark");
  removeIcon.style.position = "absolute";
  removeIcon.style.display = "block";
  removeIcon.style.cursor = "pointer";

  removeIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    showDeleteConfirmation(userAvatar);
  });

  userAvatar.innerText = userInitials;
  userAvatar.style.backgroundColor = `rgb(${getRandomBackgroundColor()}, ${getRandomBackgroundColor()}, ${getRandomBackgroundColor()})`;

  userAvatar.append(removeIcon);

  currentAvatar = userAvatar;
}

const showDeleteConfirmation = (avatar) => {
  modalType = "deleteUser";
  avatarToDelete = avatar;
  toggleModal();

  const modalContent = modal.children[1];
  modalContent.innerHTML = '';

  const p = document.createElement("p");
  p.classList.add("modalText");
  p.innerText = "Are you sure you want to delete this user?";
  p.style.textAlign = "center";
  p.style.fontWeight = "900";
  p.style.marginBottom = "1rem";
  p.style.fontSize = "20px";

  modalContent.appendChild(p);

  modal.children[0].innerText = "Delete User";
}

const getUser = (e) => {
  const inputValue = e.target.value;
  createUserAvatars(inputValue[0]);
}

const createAvatar = (e) => {
  modalType = "createUser";
  toggleModal();

  const modalContent = modal.children[1];
  modalContent.innerHTML = '';

  modal.children[0].innerText = "New User";

  const p = document.createElement("p");
  p.classList.add("modalText");
  p.innerText = "Enter Name";
  p.style.textAlign = "center";
  p.style.fontWeight = "900";
  p.style.marginBottom = "1rem";
  p.style.fontSize = "20px";

  const input = document.createElement("input");
  input.classList.add("modalInput");
  input.style.padding = "0.5rem";
  input.style.textAlign = "center";
  input.style.fontSize = "20px";
  input.style.fontWeight = "500";
  input.style.width = "15rem";

  modalContent.append(p, input);
  input.addEventListener("input", getUser);
};

createAvatarBtn.addEventListener("click", createAvatar);
modal?.children[3]?.children[0]?.addEventListener("click", toggleModal);
modal?.children[2]?.addEventListener("click", toggleModal);
modal?.children[3]?.children[1]?.addEventListener("click", updateUserAvatar);

renderUserAvatars();