"use-strict";
const signupPopUp = document.querySelector(".signup-container");
const btnSignup = document.querySelector(".cta-btn");
const btnSignup1 = document.querySelector(".signup1");
const btnSignup2 = document.querySelector(".signup2");
const btnSignup3 = document.querySelector(".signup3");
const userName = document.querySelector(".full-name");
const bankDetails = document.querySelectorAll(".grid-username");
const userNameTop = document.querySelector(".user-name");
const topTextDescription = document.querySelector(".dashboard-description");
const bankDetailsBtn = document.querySelector(".bank-details");
const homeBtn = document.querySelector(".home");
const accountBtn = document.querySelector(".account");
const transferBtn = document.querySelector(".make-transfer");
const requestLoanBtn = document.querySelector(".request-loan");
const helpSupportBtn = document.querySelector(".help-support");
const signUpBtn = document.querySelector(".signup-btn-submit");
const updateDetailsBtn = document.querySelector(".update-details");
const homePage = document.querySelector(".general-home");
const dashboardPage = document.querySelector(".general-dashboard");
const bankHomeBottom = document.querySelector(".home-bottom");
const accountBottom = document.querySelector(".account-bottom");
const bankDetailsBottom = document.querySelector(".bank-details-bottom");
const makeTransferBottom = document.querySelector(".make-transfer-bottom");
const accountUserName = document.querySelector(".account-user-name");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");

//****************FUNCTIONS *************************************/
const hideSignup = function () {
  overlay.classList.add("disabled");
  signupPopUp.classList.add("disabled");
};
const showSignup = function () {
  overlay.classList.remove("disabled");
  signupPopUp.classList.remove("disabled");
  console.log("clicked");
};
const removeActiveNavExcept = function (e) {
  bankDetailsBtn.classList.remove("active-nav");
  homeBtn.classList.remove("active-nav");
  accountBtn.classList.remove("active-nav");
  transferBtn.classList.remove("active-nav");
  requestLoanBtn.classList.remove("active-nav");
  helpSupportBtn.classList.remove("active-nav");
  updateDetailsBtn.classList.remove("active-nav");
  return e.classList.add("active-nav");
};
const removeActivePageExcept = function (e) {
  bankDetailsBottom.classList.add("disabled");
  accountBottom.classList.add("disabled");
  bankHomeBottom.classList.add("disabled");
  makeTransferBottom.classList.add("disabled");
  return e.classList.remove("disabled");
};

//*******************EVENT LISTENERS *************************/
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  homePage.classList.add("disabled");
  dashboardPage.classList.remove("disabled");
  bankDetails.forEach((acc) => (acc.textContent = userName.value));
  userNameTop.textContent = `Welcome, ${userName.value.split(" ")[0]}`;
});

homeBtn.addEventListener("click", function () {
  removeActiveNavExcept(homeBtn);
  removeActivePageExcept(bankHomeBottom);
  topTextDescription.textContent = `Get started with Exedus`;
});
accountBtn.addEventListener("click", function () {
  removeActiveNavExcept(accountBtn);
  removeActivePageExcept(accountBottom);
  topTextDescription.textContent = `My Account`;
  accountUserName.textContent = userName.value;
});
transferBtn.addEventListener("click", function () {
  removeActiveNavExcept(transferBtn);
  removeActivePageExcept(makeTransferBottom);
  topTextDescription.textContent = `Make Transfer`;
});
bankDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(bankDetailsBtn);
  removeActivePageExcept(bankDetailsBottom);
  topTextDescription.textContent = `Bank Details`;
});

btnSignup.addEventListener("click", showSignup);
btnSignup1.addEventListener("click", showSignup);
btnSignup2.addEventListener("click", showSignup);
btnSignup3.addEventListener("click", showSignup);
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", hideSignup);
