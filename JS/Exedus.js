"use-strict";
const nav = document.querySelector(".desktop-nav");
const copyrightYear = document.querySelector(".copyright-year");
const btnNavOpen = document.querySelector(".btn-mobile-nav");
const btnNavClose = document.querySelector(".nav-btn-close");
const overlay = document.querySelector(".overlay");
const invalidOverlay = document.querySelector(".invalid-overlay");
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
const userNameTop = document.querySelector(".currentuser-display");
const labelDate = document.querySelector(".date");
const labelMovementDate = document.querySelector(".movements-date");
const topTextDescription = document.querySelector(".dashboard-description");
const loanOverviewLink = document.querySelector(".request-loan-span-link");
const containerMovements = document.querySelector(".movements");
const row = document.querySelector(".movements-row");
const movementsBeneficiary = document.querySelectorAll(
  ".movements-beneficiary"
);
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const btnLearnMore = document.querySelector(".btn-learn-more");
const section1 = document.querySelector(".section-how");
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
const btnUsernameContainer = document.querySelector(".currentuser-container");
const btnUsernameDropdown = document.querySelector(".currentuser-dropdown");
const headerEl = document.querySelector(".header");
const signupImg = document.querySelector(".signup-img-div");
const dashboardNav = document.querySelector(".navigation");
const dashboardCloseBtn = document.querySelector(".dashboard-btn-close");
const dashboardOpenBtn = document.querySelector(".btn-dashboard-nav");
const btnSort = document.querySelector(".sort");
const btnCloseAccountSubmit = document.querySelector(
  ".close-account-btn-submit"
);
const inputCloseUsername = document.querySelector(".close-account-name");
const inputClosePin = document.querySelector(".close-account-pin");
const invalidMessage = document.querySelector(".invalid-message-popup");

// DASHBOARD NAV BUTTONS
const homeBtn = document.querySelector(".home");
const accountBtn = document.querySelector(".account");
const transferBtn = document.querySelector(".make-transfer");
const requestLoanBtn = document.querySelector(".request-loan");
const overviewBtn = document.querySelector(".overview");
const bankDetailsBtn = document.querySelector(".bank-details");
const helpSupportBtn = document.querySelector(".help-support");
const updateDetailsBtn = document.querySelector(".update-details");
const btnCloseAccount = document.querySelector(".btn-close-account");

// DASHBOARD BOTTOMS
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
const closeAccountBottom = document.querySelector(".close-account");

//////////////////// ACCOUNTS /////////////////////////////////////
const account1 = {
  owner: "Jessica Davis",
  pin: 1111,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 30],
  bankNameShort: "Firstbank",
  accountNumber: 1009345243,
  accountType: "Dollar Account",
  referenceNumber: [
    18490321, 13390355, 10555777, 19626289, 14432765, 12989018, 13387966,
  ],
  beneficiary: ["bank", "bank", "bank", "bank", "bank", "bank"],
  movementsDates: [
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-26T16:33:06.386Z",
    "2023-04-29T14:43:26.374Z",
    "2023-05-18T18:49:59.371Z",
    "2023-05-19T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
const account2 = {
  owner: "Abdul Usman",
  pin: 2222,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 40],
  bankNameShort: "Zenithbank",
  accountNumber: 2009445243,
  accountType: "Naira Account",
  referenceNumber: [
    18490321, 13390355, 10555777, 19626289, 14432765, 12989018, 13387966,
  ],
  beneficiary: ["bank", "bank", "bank", "bank", "bank", "bank"],
  movementsDates: [
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-26T16:33:06.386Z",
    "2023-04-29T14:43:26.374Z",
    "2023-05-18T18:49:59.371Z",
    "2023-05-19T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};
const account3 = {
  owner: "Tobi Adedoyin",
  pin: 3333,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, -90],
  bankNameShort: "GTbank",
  accountNumber: 3009445243,
  accountType: "Naira Account",
  referenceNumber: [
    18490321, 13390355, 10555777, 19626289, 14432765, 12989018, 13387966,
  ],
  beneficiary: ["bank", "bank", "bank", "bank", "bank", "bank"],
  movementsDates: [
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-26T16:33:06.386Z",
    "2023-04-29T14:43:26.374Z",
    "2023-05-18T18:49:59.371Z",
    "2023-05-19T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};
const account4 = {
  owner: "Lawrence Okim",
  pin: 4444,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, -100],
  bankNameShort: "UBA",
  accountNumber: 4009445243,
  accountType: "Naira Account",
  referenceNumber: [
    18490321, 13390355, 10555777, 19626289, 14432765, 12989018, 13387966,
  ],
  beneficiary: ["bank", "bank", "bank", "bank", "bank", "bank"],
  movementsDates: [
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-26T16:33:06.386Z",
    "2023-04-29T14:43:26.374Z",
    "2023-05-18T18:49:59.371Z",
    "2023-05-19T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};
const account5 = {
  owner: "Nazor Chinonye",
  pin: 5555,
  interestRate: 1.2,
  movements: [100, 200, 250, 4000, -1000, 600],
  bankNameShort: "UBA",
  accountNumber: 5009445243,
  accountType: "Naira Account",
  referenceNumber: [
    18490321, 13390355, 10555777, 19626289, 14432765, 12989018, 13387966,
  ],
  beneficiary: ["bank", "bank", "bank", "bank", "bank", "bank"],
  movementsDates: [
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-26T16:33:06.386Z",
    "2023-04-29T14:43:26.374Z",
    "2023-05-18T18:49:59.371Z",
    "2023-05-19T12:01:20.894Z",
  ],
  currency: "NGN",
  locale: "en-NG",
};
const accounts = [account1, account2, account3, account4, account5];

copyrightYear.textContent = new Date().getFullYear();
//***************************** FUNCTIONS **********************************/
const hideMobileNav = function () {
  dashboardNav.classList.remove("open");
  headerEl.classList.remove("nav-open");
  overlay.classList.add("disabled");
};
const showMobileNav = function () {
  dashboardNav.classList.add("open");
  headerEl.classList.add("nav-open");
  overlay.classList.remove("disabled");
};
const handleHover = function (e) {
  if (e.target.classList.contains("desktop-nav-link-hover")) {
    const link = e.target;
    const siblings = link
      .closest(".desktop-nav")
      .querySelectorAll(".desktop-nav-link-hover");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

let curSlide = 0;
const maxSlide = slides.length;
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};
const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};
const createDot = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide = '${i}'></button>`
    );
  });
};
const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide = "${slide}"]`)
    .classList.add("dots__dot--active");
};
const init = function () {
  goToSlide(0);
  createDot();
  activateDot(0);
};
init();
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

const hideSignup = function () {
  overlay.classList.add("disabled");
  signupPopUp.classList.add("disabled");
};
const hideSuccessPopup = function () {
  invalidOverlay.classList.add("disabled");
  successfulPopup.classList.add("disabled");
};
const hideInvalidMessagePopup = function () {
  invalidOverlay.classList.add("disabled");
  invalidMessage.classList.add("disabled");
};
const showInvalidMessagePopup = function () {
  invalidOverlay.classList.remove("disabled");
  invalidMessage.classList.remove("disabled");
};
const showSignup = function () {
  signupPopUp.classList.remove("disabled");
  overlay.classList.remove("disabled");
};
const showSuccessPopup = function () {
  successfulPopup.classList.remove("disabled");
  invalidOverlay.classList.remove("disabled");
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
  btnCloseAccount.classList.remove("active-nav");
  return e.classList.add("active-nav");
};
const removeActivePageExcept = function (e) {
  homePage.classList.add("disabled");
  homeBottom.classList.add("disabled");
  accountBottom.classList.add("disabled");
  makeTransferBottom.classList.add("disabled");
  requestLoanBottom.classList.add("disabled");
  overviewBottom.classList.add("disabled");
  bankDetailsBottom.classList.add("disabled");
  helpSupportBottom.classList.add("disabled");
  updateDetailsBottom.classList.add("disabled");
  closeAccountBottom.classList.add("disabled");
  return e.classList.remove("disabled");
};
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(Math.abs(value));
};
const showBalance = (e) => e.classList.remove("disabled");
const hideBalance = (e) => e.classList.add("disabled");
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, acc.movements[0]);
  balanceValue.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};
// calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur);
  balanceIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  balanceOut.textContent = formatCurrency(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  balanceInterest.textContent = formatCurrency(
    Math.round(interest * 10) / 10,
    acc.locale,
    acc.currency
  );
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
  // console.log(first, others);
  return first + others;
}

const updateUI = function (acc) {
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
  displayMovements(acc);
};

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  //else
  return new Intl.DateTimeFormat(locale).format(date);
};
const createDateTime = function () {
  const now = new Date();
  const options = {
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };
  // const locale = navigator.language;
  const locale = currentAccount.locale;
  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
};
const randomNumberRange = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const reference = acc.referenceNumber[i];
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const FormattedMovements = formatCurrency(mov, acc.locale, acc.currency);
    const displayBeneficiary = acc.beneficiary[i];

    const html = `
          <div class="movements-row movements-style">
            <div class="movements-reference-value flex-align">${reference}</div>
            <div class="movements-beneficiary flex-align">${displayBeneficiary}</div>
            <div class="movements-type-${type} movements-type-style flex-align">${type}</div>
            <div class="movements-value flex-align">${FormattedMovements}</div>
            <div class="movements-date flex-align">${displayDate}</div>
          </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

const displayBankDetails = function () {
  bankUsersContainer.innerHTML = "";
  const flag =
    currentAccount.accountType === "Dollar Account"
      ? '"/images/Property 1=usa-flag-2496027.png"'
      : '"/images/Property 1=nigeria-flag-2495945.png"';

  const html = `
          <div class="grid-card template">
            <div class="grid-slot-1">
              <p class="grid-username">${currentAccount.owner}</p>
              <div class="account-type"><span class="account-flag"><img src=${flag}
                    alt="flag"></span>${currentAccount.accountType}</div>
              <i class="fa-regular fa-trash-can"></i>
            </div>
            <div class="grid-slot-2">
              <div class="text-left">
                <p class="bank-desc">Bank Name</p>
                <p class="bank-name">${currentAccount.bankNameShort}</p>
              </div>
              <div class="text-right">
                <p class="bank-desc">Bank Account Number</p>
                <p class="bank-name-right bank-account-number">${currentAccount.accountNumber}</p>
              </div>
            </div>
            <div class="grid-slot-3">
              <div class="text-left">
                <p class="bank-desc">Pin<br>${currentAccount.pin}</p>
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
                <div class="account-type"><span class="account-flag"><img src=${
                  account1.accountType === "Dollar Account"
                    ? '"/images/Property 1=usa-flag-2496027.png"'
                    : '"/images/Property 1=nigeria-flag-2495945.png"'
                } alt="flag"></span>${account1.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account1.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Number</p>
                  <p class="bank-number">${account1.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account1.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">active</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account2.owner}</p>
                <div class="account-type"><span class="account-flag"><img
                     src=${
                       account2.accountType === "Dollar Account"
                         ? '"/images/Property 1=usa-flag-2496027.png"'
                         : '"/images/Property 1=nigeria-flag-2495945.png"'
                     } 
                    alt="flag"></span>${account2.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account2.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Number</p>
                  <p class="bank-number">${account2.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account2.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">active</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account3.owner}</p>
                <div class="account-type"><span class="account-flag"><img
                       src=${
                         account3.accountType === "Dollar Account"
                           ? '"/images/Property 1=usa-flag-2496027.png"'
                           : '"/images/Property 1=nigeria-flag-2495945.png"'
                       } 
                    alt="flag"></span>${account3.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account3.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Number</p>
                  <p class="bank-number">${account3.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account3.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">active</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account4.owner}</p>
                <div class="account-type"><span class="account-flag"><img src=${
                  account4.accountType === "Dollar Account"
                    ? '"/images/Property 1=usa-flag-2496027.png"'
                    : '"/images/Property 1=nigeria-flag-2495945.png"'
                } 
                    alt="flag"></span>${account4.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account4.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Number</p>
                  <p class="bank-number">${account4.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account4.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">active</button>
                </div>
              </div>
            </div>

            <div class="grid-card template">
              <div class="grid-slot-1">
                <p class="existing-username">${account5.owner}</p>
                <div class="account-type"><span class="account-flag"><img src=${
                  account5.accountType === "Dollar Account"
                    ? '"/images/Property 1=usa-flag-2496027.png"'
                    : '"/images/Property 1=nigeria-flag-2495945.png"'
                } 
                    alt="flag"></span>${account5.accountType}</div>
                <i class="fa-regular fa-trash-can"></i>
              </div>
              <div class="grid-slot-2">
                <div class="text-left">
                  <p class="bank-desc">Bank Name</p>
                  <p class="bank-name-duplicate">${account5.bankNameShort}</p>
                </div>
                <div class="text-right">
                  <p class="bank-desc">Account Number</p>
                  <p class="bank-number">${account5.accountNumber}</p>
                </div>
              </div>
              <div class="grid-slot-3">
                <div class="text-left">
                  <p class="bank-desc">${account5.pin}</p>
                </div>
                <div class="text-right">
                  <button class="cta-btn2">active</button>
                </div>
              </div>
            </div>
  `;
  transferExistingUsers.insertAdjacentHTML("afterbegin", html);
};
displayUsersDetails();

// Display AccountSwitch message ///////
const displaySuccessfulSwitch = function () {
  successfulPopup.innerHTML = "";
  html = `
  <div class="congrats-wrapper">
    <div class="verified-left flex-align">
        <p class="template-heading"><i class="fa-solid fa-check fa-info" style="color: green; border: 0.3rem solid green"></i></p>
        <p class="template-description">Successfully signed-in as <span class='template-desc-user'>${currentAccount.owner}.</span><br> Auto-logout in 5 minutes!</p>
      </div>
  </div>
  `;
  successfulPopup.insertAdjacentHTML("afterbegin", html);
};

// Display AccountSwitch message ///////
const displaySuccessfulAccountClosed = function (e) {
  successfulPopup.innerHTML = "";
  html = `
  <div class="congrats-wrapper">
    <div class="verified-left flex-align">
        <p class="template-heading"><i class="fa-solid fa-check fa-info" style="color: green; border: 0.3rem solid green"></i></p>
        <p class="template-description">Successfully Deleted <span class='template-desc-user'>${e}</span>'s Account</p>
      </div>
  </div>
  `;
  successfulPopup.insertAdjacentHTML("afterbegin", html);
};

// Display InvalidMessage popup ///////
const displayInvalidMessage = function (e) {
  invalidMessage.innerHTML = "";
  html = `
    <div class="invalid-wrapper">
      <div class="verified-left flex-align">
        <p class="template-heading"><i class="fa-solid fa-xmark fa-info" style="color: red; border: 0.3rem solid red"></i></p>
        <p class="template-description">Error finding <span class='template-desc-user'>${e}</span>. Please check
          inputs.
        </p>
      </div>
    </div>
  `;
  invalidMessage.insertAdjacentHTML("afterbegin", html);
};

const setLogoutTimer = function () {
  let time = 300;
  const countDown = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    if (time === 0) {
      removeActivePageExcept(homePage);
      dashboardPage.classList.add("disabled");
      dashboardNav.classList.remove("open");
      headerEl.classList.remove("nav-open");
      invalidOverlay.classList.add("disabled");
      successfulPopup.classList.add("disabled");
      hideSignup();
    }
    time--;
  };
  countDown();
  const timer = setInterval(countDown, 1000);
  return timer;
};

//************************************************************************************/
//************************************************************************************* */
//*********************************EVENT LISTENERS ***********************************/
// mobile nav buttons //////
btnNavOpen.addEventListener("click", showMobileNav);
btnNavClose.addEventListener("click", hideMobileNav);
dashboardOpenBtn.addEventListener("click", showMobileNav);
dashboardCloseBtn.addEventListener("click", hideMobileNav);
btnUsernameContainer.addEventListener("click", function () {
  btnUsernameDropdown.classList.toggle("active");
  // if(btnUsernameDropdown.classList.contains('active'))
});
nav.addEventListener("mouseover", handleHover.bind(0.3));
nav.addEventListener("mouseout", handleHover.bind(1));

btnLearnMore.addEventListener("click", function () {
  // const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

/////////
selectAccountBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("show");
    ExistingUsersSignup.forEach((btn) => btn.classList.toggle("disabled"));
    ExistingUsersSignup.forEach((displays) => (displays.innerHTML = ""));

    if (btn.classList.contains("show")) {
      btn.textContent = "hide";
    } else {
      btn.textContent = "Show";
    }

    const html = `
          <p class="grid-card-desc">Choose account to log-in as below.</p>
          <div class="grid-card-container">
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
            </div>
  `;

    ExistingUsersSignup.forEach((displays) =>
      displays.insertAdjacentHTML("afterbegin", html)
    );
  })
);

btnSignup.forEach((btn) => btn.addEventListener("click", showSignup));
btnClose.addEventListener("click", hideSignup);
overlay.addEventListener("click", function () {
  hideSignup();
  hideMobileNav();
});
invalidOverlay.addEventListener("click", function () {
  hideInvalidMessagePopup();
  hideSuccessPopup();
});

////////// signup button //////////////
let currentAccount, timer;
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // currentAccount = accounts.find((acc) => acc.username === userName.value);to login with username.
  currentAccount = accounts.find(
    (acc) => acc.pin === Number(inputLoginPin.value)
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    userNameTop.textContent = `${capitalizeFirstLetter(
      currentAccount.username
    )}`;
    accountEmail.textContent = userEmail.value;
    dashboardPage.classList.remove("disabled");
    hideMobileNav();
    showSuccessPopup();
    displaySuccessfulSwitch();
    removeActivePageExcept(homeBottom);
    removeActiveNavExcept(homeBtn);
    hideSignup();
    displayBankDetails();
    createDateTime();
    inputLoginPin.value = "";
    accountEmail.value = "";
    userName.value = "";

    clearInterval(timer);
    timer = setLogoutTimer();

    updateUI(currentAccount);
  } else {
    showInvalidMessagePopup();
    displayInvalidMessage("Account User");
  }
});
/////////////////////////////// switching account //////////////////////////////////////////////
signUpBtn2.addEventListener("click", function (e) {
  e.preventDefault();
  // currentAccount = accounts.find((acc) => acc.username === userName.value);to login with username.
  currentAccount = accounts.find((acc) => acc.pin === +inputLoginPin2.value);
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin2.value) {
    userNameTop.textContent = `${capitalizeFirstLetter(
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
    displayBankDetails();
    createDateTime();
    inputLoginPin2.value = "";
    userName2.value = "";

    clearInterval(timer);
    timer = setLogoutTimer();

    updateUI(currentAccount);
  } else {
    showInvalidMessagePopup();
    displayInvalidMessage("Account");
  }
});
////////// transfer button //////////////
transferBtnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value.toLowerCase()
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.beneficiary.push(currentAccount.username);
    currentAccount.beneficiary.push("Me");
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    currentAccount.referenceNumber.push(randomNumberRange(10000000, 20000000));
    receiverAcc.referenceNumber.push(randomNumberRange(10000000, 20000000));
    inputTransferAmount.value =
      inputTransferTo.value =
      inputNarration.value =
        "";
    inputTransferAmount.blur();
    inputTransferTo.blur();
    inputNarration.blur();
    clearInterval(timer);
    timer = setLogoutTimer();
    updateUI(currentAccount);
  } else {
    showInvalidMessagePopup();
    displayInvalidMessage("User");
  }
});
////////// loan button //////////////
loanBtnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === loanReceiverName.value.toLowerCase()
  );
  const receiverAccNumber = accounts.find(
    (acc) => acc.accountNumber === Number(loanReceiverNumber.value)
  );
  const accBeneficiary =
    currentAccount.username === receiverAcc.username
      ? "Me"
      : currentAccount.username;

  if (
    amount > 0 &&
    receiverAcc &&
    // receiverAccNumber &&
    // receiverAcc.username === currentAccount.username &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(
      () => (
        receiverAcc.movements.push(amount),
        receiverAcc.movementsDates.push(new Date().toISOString()),
        receiverAcc.referenceNumber.push(randomNumberRange(10000000, 20000000)),
        receiverAcc.beneficiary.push(accBeneficiary),
        (inputLoanAmount.value = ""),
        (loanReceiverName.value = ""),
        updateUI(currentAccount)
      ),
      3000
    );
    clearInterval(timer);
    timer = setLogoutTimer();
  } else {
    showInvalidMessagePopup();
    displayInvalidMessage("User");
  }
});

////////// close account button //////////////
btnCloseAccountSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value.toLowerCase() ===
      currentAccount.username.toLowerCase() &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    dashboardPage.classList.add("disabled");
    showSuccessPopup();
    displaySuccessfulAccountClosed(currentAccount.username);
    removeActivePageExcept(homePage);
    dashboardNav.classList.remove("open");
    headerEl.classList.remove("nav-open");
  } else {
    showInvalidMessagePopup();
    displayInvalidMessage("User");
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

//////////////////////////////////////////////////////////////////////////////////////////////
homeBtn.addEventListener("click", function () {
  removeActiveNavExcept(homeBtn);
  removeActivePageExcept(homeBottom);
  hideBalance(balanceDiv);
  hideMobileNav();
  topTextDescription.textContent = `Get started with Exedus`;
});
accountBtn.addEventListener("click", function () {
  removeActiveNavExcept(accountBtn);
  removeActivePageExcept(accountBottom);
  hideMobileNav();
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
  hideMobileNav();
  topTextDescription.textContent = `Make Transfer`;
});
transferShowDetails.addEventListener("click", function () {
  transferExistingUsers.classList.toggle("disabled");
});
requestLoanBtn.addEventListener("click", function () {
  removeActiveNavExcept(requestLoanBtn);
  removeActivePageExcept(requestLoanBottom);
  hideMobileNav();
  topTextDescription.textContent = "Request Loan";
  showBalance(balanceDiv);
});
overviewBtn.addEventListener("click", function () {
  removeActiveNavExcept(overviewBtn);
  removeActivePageExcept(overviewBottom);
  hideMobileNav();
  showBalance(balanceDiv);
  topTextDescription.textContent = "Transaction Overview";
});
loanOverviewLink.addEventListener("click", function () {
  removeActiveNavExcept(overviewBtn);
  removeActivePageExcept(overviewBottom);
  hideMobileNav();

  showBalance(balanceDiv);
  topTextDescription.textContent = "Transaction Overview";
});
bankDetailsBtn.addEventListener("click", function () {
  removeActiveNavExcept(bankDetailsBtn);
  removeActivePageExcept(bankDetailsBottom);
  hideMobileNav();

  topTextDescription.textContent = `Bank Details`;
  hideBalance(balanceDiv);
});
helpSupportBtn.addEventListener("click", function () {
  removeActiveNavExcept(helpSupportBtn);
  removeActivePageExcept(helpSupportBottom);
  hideMobileNav();

  topTextDescription.textContent = `Help & Support`;
  hideBalance(balanceDiv);
});
updateDetailsBtn.addEventListener("click", function () {
  showSignup();
  removeActiveNavExcept(updateDetailsBtn);
  removeActivePageExcept(updateDetailsBottom);
  hideMobileNav();

  topTextDescription.textContent = `Sign-in to others`;
  hideBalance(balanceDiv);
});
btnCloseAccount.addEventListener("click", function (e) {
  e.preventDefault();
  removeActivePageExcept(closeAccountBottom);
  removeActiveNavExcept(btnCloseAccount);
  hideMobileNav();
  hideBalance(balanceDiv);
  topTextDescription.textContent = "Close Account";
});
let sorted = false; //state variable
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
  [...document.querySelectorAll(".movements-row")].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = "#5a5c5c29";
  });
});

/*ATTENTION
1. make the beneficiary's name show ie who's getting the money.
2. set timmer to display loading animation when user logs in.
3. set delay timmer when user request loan. ✅
4. make timmer's milliseconds a random figure from a certain range.
5. set loading animation when user request's a loan also.
6. display the timer when user clicks on the username displayed at the top.
7. set timmer to hide successful login message popup even if user doesn't close it.✅
8. set the current year in the copyright div.✅
*/
