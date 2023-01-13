const password = document.querySelector("input");
const strengthBar = document.querySelector(".progress div");
const grade = document.querySelector(".grade");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()+?";

const checkStrength = () => {
  // let comps = 0;
  // // console.log(password.value);
  // grade.classList.remove("weak");
  // grade.classList.remove("medium");
  // grade.classList.remove("good");
  // grade.classList.remove("strong");
  // for (let i = 0; i < password.value.length; i++) {
  //   if (uppercase.includes(password.value[i])) {
  //     comps += 1;
  //   }
  //   if (lowercase.includes(password.value[i])) {
  //     comps += 1;
  //   }
  //   if (numbers.includes(password.value[i])) {
  //     comps += 1;
  //   }
  //   if (symbols.includes(password.value[i])) {
  //     comps += 1;
  //   }
  // }
  // console.log(comps);
  // if (password.value == "") {
  //   grade.classList.add("weak");
  //   strengthBar.style.width = "25%";
  // }
  // if (password.value.length < 8) {
  //   grade.classList.add("weak");
  //   strengthBar.style.width = "25%";
  // }
};

// No work done on this yet

checkStrength();

password.addEventListener("input", checkStrength);
