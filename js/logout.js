// imports
import { SESSION_KEY } from "./data.js";
import { handleLoggedDisplay } from "./header.js";

// html elements
const logOutButtons = document.querySelectorAll(".logoutButtons");

// Logout user
function logOutUser(button) {
  button.addEventListener("click", () => {
    localStorage.removeItem(SESSION_KEY.AUTHENTICATED_USER);

    handleLoggedDisplay();
    location.hash = "#login";
  });
}

// Logout
export function logOut() {
  logOutButtons.forEach((button) => {
    logOutUser(button);
  });
}
