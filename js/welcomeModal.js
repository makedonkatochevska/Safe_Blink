// imports
import { handleLoggedDisplay } from "./header.js";

// html elements
const welcomeModal = document.getElementById("welcome-modal");
const welcomeModalBtn = document.getElementById("welcomeModalBtn");

// Modal open
export function welcomeModalOpen() {
  welcomeModal.classList.remove("hidden");
  welcomeModal.classList.add("active-flex");
}

// Modal button event
export function welcomeModalBtnAction() {
  welcomeModalBtn.addEventListener("click", () => {
    handleLoggedDisplay();
    welcomeModal.classList.add("hidden");
    welcomeModal.classList.remove("active-flex");
  });
}
