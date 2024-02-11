"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const SIButton = document.querySelector(".btn--SI");
const NOButton = document.querySelector(".btn--NO");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

SIButton.addEventListener("click", handleSIClick);

NOButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeSIButton();
    updateNOButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleSIClick() {
  titleElement.innerHTML = "AQUI EN MI CORAZON TU MANDA Y TU PONES LAS CONDICIONES CHEKETETA";
  buttonsContainer.classList.add("hidden");
  changeImage("SI");
}

function resizeSIButton() {
  const computedStyle = window.getComputedStyle(SIButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  SIButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "NO",
    "SEGURA?",
    "SEGURISIMA",
    "A POCO SI MUY VERGA",
    "ORALE PUES...",
    "DUREN",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
