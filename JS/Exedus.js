"use-strict";
const messagePopUp = document.querySelector(".signup-container");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

// FUNCTIONS
const hidePopUp = function () {
  overlay.classList.add("disabled");
  messagePopUp.classList.add("disabled");
};

// POP-UP TIMER
// setTimeout(function () {
//   overlay.classList.remove("disabled");
// }, 4600);
// setTimeout(function () {
//   messagePopUp.classList.remove("disabled");
// }, 4700);
btnClose.addEventListener("click", hidePopUp);
overlay.addEventListener("click", hidePopUp);
