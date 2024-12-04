let SignupNameInput = document.querySelector("#SignupName");
let SignupEmailInput = document.querySelector("#SignupEmail");
let SignupPasswordInput = document.querySelector("#SignupPassword");
let signupBtn = document.querySelector(".signupBtn");
let completeSignup = document.querySelector(".complete");
let errorSignup = document.querySelector(".error");
let loginLink = document.querySelector(".loginLink");
let errorInput = document.querySelector(".errorInput");
let loginPassword = document.querySelector("#loginPassword");
let loginEmail = document.querySelector("#loginEmail");
let loginBtn = document.querySelector(".loginBtn");
let welcomeName = document.querySelector(".welcomeName");
let nameIndex;
let accountsList = JSON.parse(localStorage.getItem("accounts")) || [];
let username = localStorage.getItem("Username");
if (username) {
  welcomeName.innerHTML = "Welcome " + username;
}
function isEmpty() {
  if (
    SignupNameInput.value === "" &&
    SignupEmailInput.value === "" &&
    SignupPasswordInput.value === ""
  ) {
    return true;
  }
}
function accountSignup() {
  if (isEmpty()) {
    errorInput.classList.remove("d-none");
    return true;
  } else {
    for (let i = 0; i < accountsList.length; i++) {
      if (accountsList[i].SignupEmail === SignupEmail.value) {
        errorSignup.classList.remove("d-none");
        errorInput.classList.add("d-none");
        completeSignup.classList.add("d-none");
        return false;
      }
    }
  }
  let account = {
    SignupName: SignupNameInput.value,
    SignupEmail: SignupEmailInput.value,
    SignupPassword: SignupPasswordInput.value,
  };
  accountsList.push(account);
  localStorage.setItem("accounts", JSON.stringify(accountsList));
  errorSignup.classList.add("d-none");
  completeSignup.classList.remove("d-none");
}

function loginlink() {
  for (let i = 0; i < accountsList.length; i++) {
    if (
      accountsList[i].SignupEmail === loginEmail.value &&
      accountsList[i].SignupPassword === loginPassword.value
    ) {
      errorSignup.classList.add("d-none");
      loginBtn.innerHTML = `  <a
              class="w-100 d-inline-block text-decoration-none text-white m-0"
              href="welcome.html"
              class="text-decoration-none text-white loginLink"
            >
              Login</a
            >`;

      localStorage.setItem("Username", accountsList[i].SignupName);

      return true;
    }
  }
  loginBtn.innerHTML = `Login`;
}
function isLoginEmpty() {
  if (loginEmail.value === "" && loginPassword.value === "") {
    return true;
  }
}
function login() {
  if (isLoginEmpty()) {
    errorInput.classList.remove("d-none");
    return true;
  }
  errorSignup.classList.remove("d-none");
  errorInput.classList.add("d-none");
}
function logout() {
  localStorage.removeItem("Username");
}
