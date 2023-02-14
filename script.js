const button = document.querySelector("button");
const copy = document.querySelector(".password-container img");
const uppercaseImg = document.querySelector(".upper");
const lowercaseImg = document.querySelector(".lower");
const numbersImg = document.querySelector(".num");
const symbolsImg = document.querySelector(".sym");
const password = document.querySelector(".password");
const copied = document.querySelector(".copied");
const passwordLength = document.querySelector(".length input");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()+?";

let includeUppercase = true;
let includeLowercase = true;
let includeNumbers = true;
let includeSymbols = true;

const updateChecks = () => {
  selected = 0;
  includeUppercase
    ? (uppercaseImg.style.opacity = "1")
    : (uppercaseImg.style.opacity = "0");
  includeLowercase
    ? (lowercaseImg.style.opacity = "1")
    : (lowercaseImg.style.opacity = "0");
  includeNumbers
    ? (numbersImg.style.opacity = "1")
    : (numbersImg.style.opacity = "0");
  includeSymbols
    ? (symbolsImg.style.opacity = "1")
    : (symbolsImg.style.opacity = "0");

  includeUppercase ? (selected += 1) : null;
  includeLowercase ? (selected += 1) : null;
  includeNumbers ? (selected += 1) : null;
  includeSymbols ? (selected += 1) : null;
};

updateChecks();

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const changeBackground = (bool, child) => {
  bool
    ? child.parentElement.classList.add("showing")
    : child.parentElement.classList.remove("showing");
};

changeBackground(includeUppercase, uppercaseImg);
changeBackground(includeLowercase, lowercaseImg);
changeBackground(includeNumbers, numbersImg);
changeBackground(includeSymbols, symbolsImg);

const generatePassword = () => {
  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please check at least one box.");
    return;
  }

  let res = "";
  let finalRes = "";
  const length = parseInt(passwordLength.value);

  for (let i = 0; i < length; i++) {
    includeUppercase
      ? (res += uppercase[randomNumber(0, uppercase.length)])
      : null;
    includeLowercase
      ? (res += lowercase[randomNumber(0, lowercase.length)])
      : null;
    includeNumbers ? (res += numbers[randomNumber(0, numbers.length)]) : null;
    includeSymbols ? (res += symbols[randomNumber(0, symbols.length)]) : null;
  }

  for (let i = 0; i < length; i++) {
    finalRes += res[i];
  }
  password.textContent = finalRes;
};

generatePassword();

uppercaseImg.addEventListener("click", () => {
  includeUppercase = !includeUppercase;
  changeBackground(includeUppercase, uppercaseImg);
  updateChecks();
});
lowercaseImg.addEventListener("click", () => {
  includeLowercase = !includeLowercase;
  changeBackground(includeLowercase, lowercaseImg);
  updateChecks();
});
numbersImg.addEventListener("click", () => {
  includeNumbers = !includeNumbers;
  changeBackground(includeNumbers, numbersImg);
  updateChecks();
});
symbolsImg.addEventListener("click", () => {
  includeSymbols = !includeSymbols;
  changeBackground(includeSymbols, symbolsImg);
  updateChecks();
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.textContent);
  copied.classList.add("slide");
  setTimeout(() => copied.classList.remove("slide"), 1500);
});
button.addEventListener(
  "click",
  parseInt(passwordLength.value) >= 10
    ? generatePassword
    : () => {
        copied.textContent = "Min length of 10 characters";
        copied.classList.add("red");
        setTimeout(() => {
          copied.classList.remove("red");
        }, 1500);
        setTimeout(() => (copied.textContent = "Copied!"), 1700);
      }
);
