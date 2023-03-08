"use-strict";
const signupPopUp = document.querySelector(".signup-container");
const btnSignup = document.querySelector(".cta-btn");
const btnSignup1 = document.querySelector(".signup1");
const btnSignup2 = document.querySelector(".signup2");
const btnSignup3 = document.querySelector(".signup3");

const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

// FUNCTIONS
const hideSignup = function () {
  overlay.classList.add("disabled");
  signupPopUp.classList.add("disabled");
};
const showSignup = function () {
  overlay.classList.remove("disabled");
  signupPopUp.classList.remove("disabled");
};

btnSignup.addEventListener("click", showSignup);
btnSignup1.addEventListener("click", showSignup);
btnSignup2.addEventListener("click", showSignup);
btnSignup3.addEventListener("click", showSignup);
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", hideSignup);
// POP-UP TIMER
// setTimeout(function () {
//   overlay.classList.remove("disabled");
// }, 4600);
// setTimeout(function () {
//   signupPopUp.classList.remove("disabled");
// }, 4700);
