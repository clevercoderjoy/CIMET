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

const setAudioSrc = (src) => {
  audioTag.src = src;
}

const handleEvent = (e) => {
  if (e.type === "keydown") {
    switch (e.key) {
      case "w": {
        setAudioSrc(crashSound);
        break;
      }
      case "a": {
        setAudioSrc(kickSound);
        break;
      }
      case "s": {
        setAudioSrc(snareSound);
        break;
      }
      case "d": {
        setAudioSrc(tomSound);
        break;
      }
    }
  }
  else if (e.type === "click") {
    switch (e.target.alt) {
      case "crash": {
        setAudioSrc(crashSound);
        break;
      }
      case "kick": {
        setAudioSrc(kickSound);
        break;
      }
      case "snare": {
        setAudioSrc(snareSound);
        break;
      }
      case "tom": {
        setAudioSrc(tomSound);
        break;
      }
    }
  }
  audioTag.play();
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
  image.addEventListener("click", (e) => handleEvent(e))
});

document.addEventListener("keydown", handleEvent);