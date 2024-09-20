const right = document.querySelector("#right");
const audioTag = document.createElement("audio");
audioTag.src = "";


const crashSound = "/Day 5/Drum Kit/assets/crash.mp3";
const kickSound = "/Day 5/Drum Kit/assets/kick.mp3";
const snareSound = "/Day 5/Drum Kit/assets/snare.mp3";
const tomSound = "/Day 5/Drum Kit/assets/tom.mp3";

const crashImg = "/Day 5/Drum Kit/assets/crash.png";
const kickImg = "/Day 5/Drum Kit/assets/kick.png";
const snareImg = "/Day 5/Drum Kit/assets/snare.png";
const tomImg = "/Day 5/Drum Kit/assets/tom.png";

const media = [
  { src: crashImg, alt: "crash" },
  { src: kickImg, alt: "kick" },
  { src: snareImg, alt: "snare" },
  { src: tomImg, alt: "tom" },
]

const handleEvent = (e) => {
  if (e.type === "keydown") {
    if (e.key === "w") {
      audioTag.src = snareSound;
      audioTag.play();
    }
  }
  else if (e.type === "click") { }
  console.log(e)
}

const addMultipleEventListeners = (image, event) => {
  image.addEventListener(event, (e) => handleEvent(e));
}

media.map(({ src, alt }) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.height = 200;
  image.width = 200;
  image.classList.add(".box", ".key");
  image.setAttribute("id", alt)
  right.append(image)
  addMultipleEventListeners(image, "click")
});

document.addEventListener("keydown", handleEvent);

console.log(audioTag)

// enable audio play on key press
// enable audio play on clicks