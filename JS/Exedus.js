"use-strict";
const overlay = document.querySelector(".overlay");
const successfulOverlay = document.querySelector(".successful-overlay");
const btnClose = document.querySelector(".btn-close");
const signupPopUp = document.querySelector(".signup-container");
const successfulPopup = document.querySelector(".successful-popup");
const btnSignup = document.querySelectorAll(".cta");
const userName = document.querySelectorAll(".full-name");
const userName2 = document.querySelectorAll(".full-name2");
const balanceDiv = document.querySelector(".balance-div");
const userEmail = document.getElementById("email");
const userEmail2 = document.getElementById("email2");
const accountEmail = document.querySelector(".email-address");
const homePage = document.querySelector(".general-home");
const signUpBtn = document.querySelector(".signup-btn-submit");
const signUpBtn2 = document.querySelector(".signup-btn-submit2");
const bankDetails = document.querySelector(".grid-username");
const userNameTop = document.querySelector(".user-name");
const topTextDescription = document.querySelector(".dashboard-description");
const loanOverviewLink = document.querySelector(".request-loan-span-link");
const containerMovements = document.querySelector(".movements");
const movementsBeneficiary = document.querySelectorAll(
  ".movements-beneficiary"
);
const balanceValue = document.querySelector(".balance-value");
const balanceIn = document.querySelector(".overview-in-figures");
const balanceOut = document.querySelector(".overview-out-figures");
const balanceInterest = document.querySelector(".overview-interest-figures");
const inputLoginPin = document.getElementById("pin");
const inputLoginPin2 = document.getElementById("pin2");
const transferBtnSubmit = document.querySelector(".transfer-btn-submit");
const inputTransferAmount = document.querySelector(".amount");
const inputTransferTo = document.querySelector(".account-destination-name");
const inputNarration = document.querySelector(".narration");
const loanBtnSubmit = document.querySelector(".loan-btn-submit");
const inputLoanAmount = document.querySelector(".loan-amount");
const loanReceiverName = document.querySelector(".loan-account-name");
const loanReceiverNumber = document.querySelector(".loan-account-number");
const bankName = document.querySelectorAll(".bank-name");
const bankUsersContainer = document.querySelector(".bank-users-details");
const inputReceiver = document.querySelectorAll(".receiver");
const bankAccountNumber = document.querySelectorAll(".bank-account-number");
const ExistingUsersDetails = document.querySelector(".transfer-existing-users");
const selectAccountBtn = document.querySelectorAll(".select-account");
const ExistingUsersSignup = document.querySelectorAll(
  ".existing-users-wrapper"
);
const headerEl = document.querySelector(".header");
const signupImg = document.querySelector(".signup-img-div");
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
const hideSuccessPopup = function () {
  successfulOverlay.classList.add("disabled");
  successfulPopup.classList.add("disabled");
};
const showSignup = function () {
  signupPopUp.classList.remove("disabled");
  overlay.classList.remove("disabled");
};
const showSuccessPopup = function () {
  successfulPopup.classList.remove("disabled");
  successfulOverlay.classList.remove("disabled");
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

////////// mobile nav button //////////////
const btnNavOpen = document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    headerEl.classList.add("nav-open");
  });
const btnNavClose = document
  .querySelector(".nav-btn-close")
  .addEventListener("click", function () {
    headerEl.classList.remove("nav-open");
  });

//////////////////// ACCOUNTS /////////////////////////////////////
const account1 = {
  owner: "Jessica Davis",
  pin: 1111,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 30, -100],
  bankNameShort: "Firstbank",
  accountNumber: 1009345243,
  accountType: "Dollar Account",
};
const account2 = {
  owner: "Steven Thomas Williams",
  pin: 2222,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankNameShort: "Zenithbank",
  accountNumber: 2009445243,
  accountType: "Naira Account",
};
const account3 = {
  owner: "Sarah Smith",
  pin: 3333,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankNameShort: "GTbank",
  accountNumber: 3009445243,
  accountType: "Naira Account",
};
const account4 = {
  owner: "Lawrence Okim",
  pin: 4444,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000],
  bankNameShort: "UBA",
  accountNumber: 4009445243,
  accountType: "Dollar Account",
};
const account5 = {
  owner: "Guest",
  pin: 5555,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 600],
  bankNameShort: "UBA",
  accountNumber: 5009445243,
  accountType: "Dollar Account",
};
const accounts = [account1, account2, account3, account4, account5];

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
  balanceInterest.textContent = `${Math.round(Math.abs(interest) * 10) / 10} ₦`;
};
// calcDisplaySummary(account1);

const createUsername = function (accs) {
  accs.forEach(
    (acc) => (acc.username = acc.owner.toLowerCase())
    // .split(" ")
    // .map((name) => name[0])
    // .join("")
  );
};
createUsername(accounts);

function capitalizeFirstLetter(string) {
  const first = string.split(" ")[0].charAt(0).toUpperCase();
  const others = string.split(" ")[0].slice(1);
  console.log(first, others);
  return first + others;
}

const updateUI = function (acc) {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
};

const displayBankDetails = function () {
  bankUsersContainer.innerHTML = "";

  const html = `
          <div class="grid-card template">
            <div class="grid-slot-1">
              <p class="grid-username">${(bankDetails.textContent =
                currentAccount.owner)}</p>
              <div class="account-type"><span class="account-flag"><img src="/images/Property 1=usa-flag-2496027.png"
                    alt="usa flag"></span>Dollar account</div>
              <i class="fa-regular fa-trash-can"></i>
            </div>
            <div class="grid-slot-2">
              <div class="text-left">
                <p class="bank-desc">Bank Name</p>
                <p class="bank-name">${(bankName.textContent =
                  currentAccount.bankNameShort)}</p>
              </div>
              <div class="text-right">
                <p class="bank-desc">Bank Account Number</p>
                <p class="bank-name-right bank-account-number">${(bankAccountNumber.textContent =
                  currentAccount.accountNumber)}</p>
              </div>
            </div>
            <div class="grid-slot-3">
              <div class="text-left">
                <p class="bank-desc">Lorem ipsum dolor sit amet consectetur,<br> adipisicing elit!</p>
              </div>
              <div class="text-right">
                <button class="account-status-complete">Completed</button>
              </div>
            </div>
          </div>
  `;
  bankUsersContainer.insertAdjacentHTML("afterbegin", html);
};
const displayUsersDetails = function () {
  transferExistingUsers.innerHTML = "";

  const html = `
            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account1.owner}</p>
                <div class="account-type"><span class="account-flag"><img src="/images/Property 1=usa-flag-2496027.png"
                      alt="usa flag"></span>${account1.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account1.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Bank Account Number</p>
                  <p class="bank-number">${account1.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account1.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">Login</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account2.owner}</p>
                <div class="account-type"><span class="account-flag"><img
                      src="/images/Property 1=nigeria-flag-2495945.png" alt="usa flag"></span>${account2.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account2.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Bank Account Number</p>
                  <p class="bank-number">${account2.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account2.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">Login</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account3.owner}</p>
                <div class="account-type"><span class="account-flag"><img
                      src="/images/Property 1=nigeria-flag-2495945.png" alt="usa flag"></span>${account3.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account3.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Bank Account Number</p>
                  <p class="bank-number">${account3.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account3.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">Login</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account4.owner}</p>
                <div class="account-type"><span class="account-flag"><img src="/images/Property 1=usa-flag-2496027.png"
                      alt="usa flag"></span>${account4.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account4.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Bank Account Number</p>
                  <p class="bank-number">${account4.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account4.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">Login</button>
                </div>
              </div>
            </div>
  `;
  transferExistingUsers.insertAdjacentHTML("afterbegin", html);
};
displayUsersDetails();
//*********************************EVENT LISTENERS ***********************************/
selectAccountBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    ExistingUsersSignup.forEach((btn) => btn.classList.toggle("disabled"));
    signupImg.classList.toggle("disabled");
    ExistingUsersSignup.forEach((displays) => (displays.innerHTML = ""));
    const html = `
    <div class="grid-card template existing-user">
              <div class="grid-slot-1">
                <p class="existing-username">${account1.owner}</p>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank</p>
                  <p class="bank-name-duplicate">${account1.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Pin</p>
                  <p class="bank-number">${account1.pin}</p>
                </div>
              </div>
            </div>
            <div class="grid-card template existing-user">
              <div class="grid-slot-1">
                <p class="existing-username">${account2.owner}</p>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank</p>
                  <p class="bank-name-duplicate">${account2.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Pin</p>
                  <p class="bank-number">${account2.pin}</p>
                </div>
              </div>
            </div>
            <div class="grid-card template existing-user">
              <div class="grid-slot-1">
                <p class="existing-username">${account3.owner}</p>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank</p>
                  <p class="bank-name-duplicate">${account3.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Pin</p>
                  <p class="bank-number">${account3.pin}</p>
                </div>
              </div>
            </div>
            <div class="grid-card template existing-user">
              <div class="grid-slot-1">
                <p class="existing-username">${account4.owner}</p>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank</p>
                  <p class="bank-name-duplicate">Firstbank</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Pin</p>
                  <p class="bank-number">${account4.pin}</p>
                </div>
              </div>
            </div>
            <div class="grid-card template existing-user">
              <div class="grid-slot-1">
                <p class="existing-username">${account5.owner}</p>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank</p>
                  <p class="bank-name-duplicate">${account5.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Pin</p>
                  <p class="bank-number">${account5.pin}</p>
                </div>
              </div>
            </div>
  `;
    ExistingUsersSignup.forEach((displays) =>
      displays.insertAdjacentHTML("afterbegin", html)
    );
  })
);
////// Display AccountSwitch message ///////
const displaySuccessfulSwitch = function () {
  successfulPopup.innerHTML = "";
  html = `
    <div class="verified-left flex-align">
        <p class="template-heading"><i class="fa-sharp fa-solid fa-info"></i></p>
        <p class="template-description">Successfully signed-in as <span class='template-desc-user'>${currentAccount.owner}</span></p>
      </div>
  `;
  successfulPopup.insertAdjacentHTML("afterbegin", html);
};
btnSignup.forEach((btn) => btn.addEventListener("click", showSignup));
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", hideSignup);
successfulOverlay.addEventListener("click", hideSuccessPopup);

////////// signup button //////////////
let currentAccount;
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // currentAccount = accounts.find((acc) => acc.username === userName.value);to login with username.
  currentAccount = accounts.find(
    (acc) => acc.pin === Number(inputLoginPin.value)
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    userNameTop.textContent = `Welcome, ${capitalizeFirstLetter(
      currentAccount.username
    )}`;
    accountEmail.textContent = userEmail.value;
    homePage.classList.add("disabled");
    dashboardPage.classList.remove("disabled");
    hideSignup();
    updateUI(currentAccount);
    displayBankDetails();
    inputLoginPin.value = "";
    userName.value = "";
  }
});
signUpBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  // currentAccount = accounts.find((acc) => acc.username === userName.value);to login with username.
  currentAccount = accounts.find(
    (acc) => acc.pin === Number(inputLoginPin2.value)
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin2.value)) {
    userNameTop.textContent = `Welcome, ${capitalizeFirstLetter(
      currentAccount.username
    )}`;
    accountEmail.textContent = userEmail2.value;
    homePage.classList.add("disabled");
    dashboardPage.classList.remove("disabled");
    showSuccessPopup();
    displaySuccessfulSwitch();
    removeActiveNavExcept(homeBtn);
    removeActivePageExcept(homeBottom);
    hideBalance(balanceDiv);
    topTextDescription.textContent = `Get started with Exedus`;
    hideSignup();
    updateUI(currentAccount);
    displayBankDetails();
    inputLoginPin2.value = "";
    userName2.value = "";
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

const displayMovements = function (movement) {
  containerMovements.innerHTML = "";
  const receiverAcc = accounts.find(
    (acc) => acc.username === loanReceiverName.value
  );
  movement.forEach(function (mov) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
          <div class="movements-row movements-style">
            <div class="movements-reference-value flex-align">${Math.floor(
              100000 + Math.random() * 200000
            )}</div>
            <div class="movements-beneficiary flex-align">unknown</div>
            <div class="movements-type-${type} movements-type-style flex-align">${type}</div>
            <div class="movements-value flex-align">${Math.abs(mov)} ₦</div>
            <div class="movements-date flex-align">3 days ago</div>
          </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);
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
  showSignup();
  removeActiveNavExcept(updateDetailsBtn);
  removeActivePageExcept(updateDetailsBottom);
  topTextDescription.textContent = `Sign-in to others`;
  hideBalance(balanceDiv);
});

/*ATTENTION
1. make the beneficiary's name show ie who's getting the money
2. check OR and AND gate properties
3. tried making it in a way that anybody can log in and get their own account details
4. make popup to show some login details
5. transfered amount isn't showing at receiver's end
*/
