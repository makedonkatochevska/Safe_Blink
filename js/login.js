// imports
import { USERS_INFO, SESSION_KEY } from "./data.js";
import { welcomeModalOpen } from "./welcomeModal.js";

//html elements
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const eyeHideIcon = document.getElementById("eye-hide-icon");
const eyeShowIcon = document.getElementById("eye-show-icon");
const loginBtn = document.getElementById("loginBtnForm");
const loginForm = document.getElementById("login-form");
const usernameError = document.getElementById("usernameErrorMessage");
const passwordError = document.getElementById("passwordErrorMessage");

// Toggle Password visibility
export function togglePasswordVisibility() {
  eyeHideIcon.addEventListener("click", () => {
    passwordInput.type = "text";
    eyeHideIcon.classList.toggle("hidden");
    eyeShowIcon.classList.toggle("hidden");
  });

  eyeShowIcon.addEventListener("click", () => {
    passwordInput.type = "password";
    eyeHideIcon.classList.toggle("hidden");
    eyeShowIcon.classList.toggle("hidden");
  });
}

// Enable/Disable Login Button
function enableDisableLoginBtn() {
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue.length > 0 && passwordValue.length > 0) {
    loginBtn.classList.remove("disabled");
    console.log("Button enabled");
  } else {
    loginBtn.classList.add("disabled");
    console.log("Button disabled");
  }
}

// Enable/Disable login button event
export function enableDisableLoginBtnEvent() {
  usernameInput.addEventListener("input", enableDisableLoginBtn);
  passwordInput.addEventListener("input", enableDisableLoginBtn);
}

// Set authenticated user
const setAuthenticatedUser = (username) => {
  const userInfo =
    JSON.parse(localStorage.getItem("USERS_INFO"))?.[username] ||
    USERS_INFO[username];

  // If the user is found, update the selectedCategories
  const userToSave = {
    ...userInfo,
    selectedCategories: userInfo.selectedCategories || {
      mostWatched: true,
      popular: true,
      new: true,
      privacy: true,
      danger: true,
    },
  };

  // Save the updated user info into localStorage
  localStorage.setItem(
    SESSION_KEY.AUTHENTICATED_USER,
    JSON.stringify(userToSave)
  );
};

// Login 
export function logIn() {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const credentials = { username, password };
    const JSONcredentials = JSON.stringify(credentials);

    const user = USERS_INFO[username];

    // Login validation
    if (!user) {
      usernameError.textContent = "Корисничкото име не постои.";
      return;
    }

    if (user.password !== password) {
      passwordError.textContent = "Лозинката не е точна.";
      return;
    }

    // Fetch data
    fetch("http://localhost:5000/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONcredentials,
    })
      .then((response) => {
        if (response.ok) {
          console.log("login succesfully");
          setAuthenticatedUser(username);
          clearInputs();
          welcomeModalOpen();
        } else {
          console.log("incorrect credentials");
        }
        console.log(response.status);
      })
      .catch(() => {
        alert("Има проблем со серверот, ве молиме обидете се подоцна");
        clearInputs();
      });
  });
}

// Clear errors
function clearErrors() {
  usernameError.textContent = "";
  passwordError.textContent = "";
}

// Clear Inputs
function clearInputs() {
  usernameInput.value = "";
  passwordInput.value = "";
}
