"use-strict";
const signupPopUp = document.querySelector(".signup-container");
const btnSignup = document.querySelector(".cta-btn");
const btnSignup1 = document.querySelector(".signup1");
const btnSignup2 = document.querySelector(".signup2");
const btnSignup3 = document.querySelector(".signup3");
const userName = document.querySelector(".full-name");
const bankDetails = document.querySelector(".grid-username");
const userNameTop = document.querySelector(".user-name");
const bankDetailsBtn = document.querySelector(".bank-details");
const homeBtn = document.querySelector(".home");
const accountBtn = document.querySelector(".account");
const transferBtn = document.querySelector(".make-transfer");
const requestLoanBtn = document.querySelector(".request-loan");
const helpSupportBtn = document.querySelector(".help-support");
const signUpBtn = document.querySelector(".signup-btn-submit");

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
  console.log("clicked");
};
// const hideNavSection = function () {
//   bankDetailsBtn.classList.remove("active-nav");
//   homeBtn.classList.remove("active-nav");
//   accountBtn.classList.remove("active-nav");
//   transferBtn.classList.remove("active-nav");
//   requestLoanBtn.classList.remove("active-nav");
//   helpSupportBtn.classList.remove("active-nav");
// };
// hideNavSection;
// homeBtn.addEventListener("click", function () {
//   hideNavSection();
//   homeBtn.classList.add("active-nav");
// });
signUpBtn.addEventListener("click", function () {
  bankDetails.textContent = `${userName.value}`;
  userNameTop.textContent = `Hi ${userName.value}`;
});
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
