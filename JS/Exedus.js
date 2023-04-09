"use-strict";
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-close");
const signupPopUp = document.querySelector(".signup-container");
const btnSignup = document.querySelectorAll(".cta");
const userName = document.querySelector(".full-name");
const balanceDiv = document.querySelector(".balance-div");
const userEmail = document.getElementById("email");
const accountEmail = document.querySelector(".email-address");
const homePage = document.querySelector(".general-home");
const signUpBtn = document.querySelector(".signup-btn-submit");
const bankDetails = document.querySelectorAll(".grid-username");
const userNameTop = document.querySelector(".user-name");
const topTextDescription = document.querySelector(".dashboard-description");
const loanOverviewLink = document.querySelector(".request-loan-span-link");
const containerMovements = document.querySelector(".movements");
const balanceValue = document.querySelector(".balance-value");
const balanceIn = document.querySelector(".overview-in-figures");
const balanceOut = document.querySelector(".overview-out-figures");
const balanceInterest = document.querySelector(".overview-interest-figures");
const inputLoginPin = document.getElementById("pin");
const transferBtnSubmit = document.querySelector(".transfer-btn-submit");
const inputTransferAmount = document.querySelector(".amount");
const inputTransferTo = document.querySelector(".account-destination-name");
const inputNarration = document.querySelector(".narration");
const loanBtnSubmit = document.querySelector(".loan-btn-submit");
const inputLoanAmount = document.querySelector(".loan-amount");
const loanReceiverName = document.querySelector(".loan-account-name");
const loanReceiverNumber = document.querySelector(".loan-account-number");

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
const showBalance = (e) => e.classList.remove("disabled");
const hideBalance = (e) => e.classList.add("disabled");

//////////////////// ACCOUNTS /////////////////////////////////////
const account1 = {
  owner: "Jessica Davis",
  pin: 1111,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 30, -100],
  bankName: "Firstbank",
  accountNumber: 1009345243,
  accountType: "Dollar Account",
};
const account2 = {
  owner: "Steven Thomas Williams",
  pin: 2222,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankName: "Zenithbank",
  accountNumber: 2009445243,
  accountType: "Naira Account",
};
const account3 = {
  owner: "Sarah Smith",
  pin: 3333,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankName: "GTbank",
  accountNumber: 2009445243,
  accountType: "Naira Account",
};
const account4 = {
  owner: "Lawrence Okim",
  pin: 4444,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankName: "UBA",
  accountNumber: 3009445243,
  accountType: "Dollar Account",
};
const account5 = {
  owner: userName.value,
  pin: 5555,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankName: "UBA",
  accountNumber: 7009445243,
  accountType: "Dollar Account",
};
const accounts = [account1, account2, account3, account4, account5];

const displayMovements = function (movement) {
  containerMovements.innerHTML = "";

  movement.forEach(function (mov) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const receiverAcc = accounts.find(
      (acc) => acc.username === inputTransferTo.value || loanReceiverName.value
    );
    const html = `
          <div class="movements-row movements-style">
            <div class="movements-reference-value flex-align">${Math.floor(
              100000 + Math.random() * 200000
            )}</div>
            <div class="movements-beneficiary flex-align">${receiverAcc}</div>
            <div class="movements-type-${type} movements-type-style flex-align">${type}</div>
            <div class="movements-value flex-align">${Math.abs(mov)} ₦</div>
            <div class="movements-date flex-align">3 days ago</div>
          </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, acc.movements[0]);
  balanceValue.textContent = `${acc.balance} ₦`;
};
// calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur);
  balanceIn.textContent = `${incomes} ₦`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  balanceOut.textContent = `${Math.abs(out)} ₦`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  balanceInterest.textContent = `${Math.abs(interest)} ₦`;
};
// calcDisplaySummary(account1);

const createUsername = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""))
  );
};
createUsername(accounts);

const updateUI = function (acc) {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
};

//*********************************EVENT LISTENERS ***********************************/
////////// signup button //////////////
let currentAccount;
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.owner.toLowerCase() === userName.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    userNameTop.textContent = `Welcome, ${currentAccount.owner.split(" ")[0]}`;
    accountEmail.textContent = userEmail.value;
    userName.required = true;
    homePage.classList.add("disabled");
    dashboardPage.classList.remove("disabled");
    bankDetails.forEach((acc) => (acc.textContent = currentAccount.owner));
    updateUI(currentAccount);
  }
});
////////// transfer button //////////////
transferBtnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferAmount.value =
      inputTransferTo.value =
      inputNarration.value =
        "";
    inputTransferAmount.blur();
    inputTransferTo.blur();
    inputNarration.blur();
  }
});
////////// loan button //////////////
loanBtnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === loanReceiverName.value
  );
  const receiverAccNumber = accounts.find(
    (acc) => acc.accountNumber === Number(loanReceiverNumber.value)
  );
  if (
    amount > 0 &&
    receiverAcc &&
    receiverAccNumber &&
    receiverAcc.username === currentAccount.username &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = "";
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
homeBtn.addEventListener("click", function () {
  removeActiveNavExcept(homeBtn);
  removeActivePageExcept(homeBottom);
  hideBalance(balanceDiv);
  topTextDescription.textContent = `Get started with Exedus`;
});
accountBtn.addEventListener("click", function () {
  removeActiveNavExcept(accountBtn);
  removeActivePageExcept(accountBottom);
  topTextDescription.textContent = `My Account`;
  accountUserName.textContent = currentAccount.owner;
  showBalance(balanceDiv);
  // if ((userEmail.value = " ")) {
  //   accountEmail.textContent = "user-email@example.com";
  // } else {
  //   accountEmail.textContent = userEmail.value;
  // }
});
transferBtn.addEventListener("click", function () {
  removeActiveNavExcept(transferBtn);
  removeActivePageExcept(makeTransferBottom);
  showBalance(balanceDiv);
  topTextDescription.textContent = `Make Transfer`;
});
transferShowDetails.addEventListener("click", function () {
  transferExistingUsers.classList.toggle("disabled");
});
requestLoanBtn.addEventListener("click", function () {
  removeActiveNavExcept(requestLoanBtn);
  removeActivePageExcept(requestLoanBottom);
  topTextDescription.textContent = "Request Loan";
  showBalance(balanceDiv);
});
overviewBtn.addEventListener("click", function () {
  removeActiveNavExcept(overviewBtn);
  removeActivePageExcept(overviewBottom);
  showBalance(balanceDiv);
  topTextDescription.textContent = "Transaction Overview";
});
loanOverviewLink.addEventListener("click", function () {
  removeActiveNavExcept(overviewBtn);
  removeActivePageExcept(overviewBottom);
  showBalance(balanceDiv);
  topTextDescription.textContent = "Transaction Overview";
});
bankDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(bankDetailsBtn);
  removeActivePageExcept(bankDetailsBottom);
  topTextDescription.textContent = `Bank Details`;
  hideBalance(balanceDiv);
});
helpSupportBtn.addEventListener("click", function () {
  removeActiveNavExcept(helpSupportBtn);
  removeActivePageExcept(helpSupportBottom);
  topTextDescription.textContent = `Help & Support`;
  hideBalance(balanceDiv);
});
updateDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(updateDetailsBtn);
  removeActivePageExcept(updateDetailsBottom);
  topTextDescription.textContent = `Update Details`;
  hideBalance(balanceDiv);
});

btnSignup.forEach((btn) => btn.addEventListener("click", showSignup));
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", hideSignup);

/*ATTENTION
1. make the beneficiary's name show ie who's getting the money
2. check OR and AND gate properties
3. tried making it in a way that anybody can log in and get their own account details
4. make popup to show some login details
*/
