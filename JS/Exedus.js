"use-strict";
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");
const signupPopUp = document.querySelector(".signup-container");
const btnSignup = document.querySelectorAll(".cta");
const userName = document.querySelector(".full-name");
const userEmail = document.getElementById("email");
const accountEmail = document.querySelector(".email-address");
const homePage = document.querySelector(".general-home");
const signUpBtn = document.querySelector(".signup-btn-submit");
const bankDetails = document.querySelectorAll(".grid-username");
const userNameTop = document.querySelector(".user-name");
const topTextDescription = document.querySelector(".dashboard-description");

// DASHBOARD BUTTONS
const homeBtn = document.querySelector(".home");
const accountBtn = document.querySelector(".account");
const transferBtn = document.querySelector(".make-transfer");
const requestLoanBtn = document.querySelector(".request-loan");
const overviewBtn = document.querySelector(".overview");
const bankDetailsBtn = document.querySelector(".bank-details");
const helpSupportBtn = document.querySelector(".help-support");
const updateDetailsBtn = document.querySelector(".update-details");

// DASHBOARD
const dashboardPage = document.querySelector(".general-dashboard");
const homeBottom = document.querySelector(".home-bottom");
const accountBottom = document.querySelector(".account-bottom");
const makeTransferBottom = document.querySelector(".make-transfer-bottom");
const requestLoanBottom = document.querySelector(".request-loan-bottom");
const overviewBottom = document.querySelector(".overview-bottom");
const bankDetailsBottom = document.querySelector(".bank-details-bottom");
const helpSupportBottom = document.querySelector(".help-support-bottom");
const updateDetailsBottom = document.querySelector(".update-details-bottom");
const accountUserName = document.querySelector(".account-user-name");
const transferShowDetails = document.querySelector(".tranfer-btn-show-details");
const transferExistingUsers = document.querySelector(
  ".transfer-existing-users"
);

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
  homeBtn.classList.remove("active-nav");
  accountBtn.classList.remove("active-nav");
  transferBtn.classList.remove("active-nav");
  requestLoanBtn.classList.remove("active-nav");
  overviewBtn.classList.remove("active-nav");
  bankDetailsBtn.classList.remove("active-nav");
  helpSupportBtn.classList.remove("active-nav");
  updateDetailsBtn.classList.remove("active-nav");
  return e.classList.add("active-nav");
};
const removeActivePageExcept = function (e) {
  homeBottom.classList.add("disabled");
  accountBottom.classList.add("disabled");
  makeTransferBottom.classList.add("disabled");
  requestLoanBottom.classList.add("disabled");
  overviewBottom.classList.add("disabled");
  bankDetailsBottom.classList.add("disabled");
  helpSupportBottom.classList.add("disabled");
  updateDetailsBottom.classList.add("disabled");
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
  removeActivePageExcept(homeBottom);
  topTextDescription.textContent = `Get started with Exedus`;
});
accountBtn.addEventListener("click", function () {
  removeActiveNavExcept(accountBtn);
  removeActivePageExcept(accountBottom);
  topTextDescription.textContent = `My Account`;
  accountUserName.textContent = userName.value;
  // if ((userEmail.value = " ")) {
  //   accountEmail.textContent = "user-email@example.com";
  // } else {
  //   accountEmail.textContent = userEmail.value;
  // }
});
transferBtn.addEventListener("click", function () {
  removeActiveNavExcept(transferBtn);
  removeActivePageExcept(makeTransferBottom);
  topTextDescription.textContent = `Make Transfer`;
});
transferShowDetails.addEventListener("click", function () {
  transferExistingUsers.classList.toggle("disabled");
});
requestLoanBtn.addEventListener("click", function () {
  removeActiveNavExcept(requestLoanBtn);
  removeActivePageExcept(requestLoanBottom);
  topTextDescription.textContent = "Request Loan";
});
overviewBtn.addEventListener("click", function () {
  removeActiveNavExcept(overviewBtn);
  removeActivePageExcept(overviewBottom);
  topTextDescription.textContent = "Transaction Overview";
});
bankDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(bankDetailsBtn);
  removeActivePageExcept(bankDetailsBottom);
  topTextDescription.textContent = `Bank Details`;
});
helpSupportBtn.addEventListener("click", function () {
  removeActiveNavExcept(helpSupportBtn);
  removeActivePageExcept(helpSupportBottom);
  topTextDescription.textContent = `Help & Support`;
});
updateDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(updateDetailsBtn);
  removeActivePageExcept(updateDetailsBottom);
  topTextDescription.textContent = `Update Details`;
});

btnSignup.forEach((btn) => btn.addEventListener("click", showSignup));
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", hideSignup);
