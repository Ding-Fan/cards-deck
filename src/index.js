import "normalize.css";

let cards = document.querySelectorAll(".card");
let soundAllowed = true;
let banner = document.querySelector(".banner");
let bannerMain = banner.querySelector(".main");
let bannerInfo = banner.querySelector(".info");

console.log(bannerMain);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("done");
    if (soundAllowed) {
      playGirlHeh();
    }
  });
});

banner.addEventListener("click", () => {
  if (soundAllowed) {
    bannerMain.innerText = "Silence 🔇";
    bannerInfo.innerText = "click to sound";
  } else {
    bannerMain.innerText = "Sound Alert! 🔊";
    bannerInfo.innerText = "click to mute";
  }

  soundAllowed = !soundAllowed;
});

function playGirlHeh() {
  let audioUrl = require("./assets/sound/NFF-girl-heh.wav");
  let heh = new Audio(audioUrl);
  heh.play();
}
