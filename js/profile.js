// imports
import { isUserAuthenticated } from "./utilities.js";
import { SESSION_KEY } from "./data.js";
import { USERS_INFO } from "./data.js";

// html elements
const profileEmailInput = document.getElementById("profile-email");
const profileBirthYear = document.getElementById("profile-birth-year");
const profileUsername = document.getElementById("profile-username");
const profileGender = document.getElementById("profile-gender");
const profilePageImg = document.getElementById("profile-page-img");

// Input display on change request
export function inputDisplay() {
  const profileForm = document.getElementById("profile-form");

  profileForm.addEventListener("click", (e) => {
    const clicked = e.target;
    const isTablet = window.innerWidth <= 768;

    let actionType = "";

    if (clicked.closest(".x-icon")) {
      actionType = "x-icon";
    } else if (clicked.closest(".check-icon")) {
      actionType = "check-icon";
    } else if (clicked.id === "main-change-button") {
      actionType = "main-button";
    } else if (clicked.tagName === "BUTTON") {
      actionType = "small-button";
    } else if (isTablet && clicked.closest(".input-box")) {
      actionType = "tablet-input";
    }

    //early return if the action type is not from one above
    if (!actionType) return;

    // Switch statement
    switch (actionType) {
      case "x-icon":
        //console.log("x e target", clicked);
        e.preventDefault();

        const xIcon = clicked.closest(".x-icon");
        const inputBoxX = xIcon.parentElement.parentElement;

        toggleInputState(inputBoxX, "toggle");
        break;

      case "check-icon":
        //console.log("Check icon clicked", clicked);
        e.preventDefault();
        const user = JSON.parse(
          localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER)
        );

        const checkIcon = clicked.closest(".check-icon");
        const inputBoxCheck = checkIcon.parentElement.parentElement;
        const inputField = inputBoxCheck.querySelector("input");

        toggleInputState(inputBoxCheck, "toggle");

        // Save new value logic
        const newValue = inputField.value.trim();

        console.log("NEW VALUE", newValue);
        console.log("users info:", USERS_INFO[user.username][inputField.name]);

        USERS_INFO[user.username][inputField.name] = newValue;
        user[inputField.name] = newValue;

        localStorage.setItem("USERS_INFO", JSON.stringify(USERS_INFO));
        localStorage.setItem("AUTHENTICATED_USER", JSON.stringify(user));

        break;

      case "main-button":
        //console.log(clicked.id);
        break;

      case "small-button":
        e.preventDefault();

        const inputBoxButton = clicked.parentElement;
        toggleInputState(inputBoxButton, "toggle");
        break;

      case "tablet-input":
        const inputBoxTablet = clicked.closest(".input-box");
        if (inputBoxTablet) {
          const inputTablet = inputBoxTablet.querySelector("input");
          if (
            inputTablet &&
            !inputTablet.classList.contains("active-profile-input")
          ) {
            //console.log("Tablet input clicked:", inputTablet);
            toggleInputState(inputBoxTablet, "activate");
          }
        }
        break;

      default:
        break;
    }
  });
}

// Toggle input state
function toggleInputState(inputBox, mode = "toggle") {
  const input = inputBox.querySelector("input");
  const button = inputBox.querySelector("button");
  const iconsContainer = inputBox.querySelector(".icons-container");

  if (!input) return;

  const allowedInputs = ["email", "birthYear"];
  const isEditable = allowedInputs.includes(input.name);

  if (mode === "toggle") {
    input.classList.toggle("active-profile-input");
    input.style.pointerEvents =
      isEditable && input.classList.contains("active-profile-input")
        ? "all"
        : "none";

    if (button) button.classList.toggle("hidden");
    if (iconsContainer) iconsContainer.classList.toggle("hidden");
  } else if (mode === "activate") {
    input.classList.add("active-profile-input");
    input.style.pointerEvents = isEditable ? "all" : "none";

    if (button) button.classList.add("hidden");
    if (iconsContainer) iconsContainer.classList.remove("hidden");
  }
}

// Input value display
export function profileInputValueDIsplay() {
  const isLoggedIn = isUserAuthenticated();
  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));
  if (isLoggedIn) {
    profileEmailInput.value = user.email;
    profileBirthYear.value = user.birthYear;
    profileUsername.value = user.username;
    profileGender.value = user.gender;
    profilePageImg.src = `../assets/profile_images/profile_img_${user.img}.png`;
  }
}
