import "normalize.css";

let cards = document.querySelectorAll(".card");
let soundAllowed = true;
let banner = document.querySelector(".banner");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("done");
    if (soundAllowed) {
      playGirlHeh();
    }
  });
});

banner.addEventListener("click", () => {
  let content;
  if (soundAllowed) {
    content = ` 
      <div class="main">
        Silence 🔇  
      </div>
      <div class="info">
        click to sound
      </div>
    `;
  } else {
    content = ` 
      <div class="main">
        Sound Alert! 🔊
      </div>
      <div class="info">
        click to mute
      </div>
    `;
  }

  banner.innerHTML = content;
  soundAllowed = !soundAllowed;
});

function playGirlHeh() {
  let heh = new Audio("./assets/sound/NFF-girl-heh.wav");
  heh.play();
}
