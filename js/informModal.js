//imports
import { videoPlay } from "./utilities.js";
import { isUserAuthenticated } from "./utilities.js";
import { SESSION_KEY } from "./data.js";

// html elements
const informModal = document.getElementById("information-modal");
const overlay = document.getElementById("overlay");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalInputImg = document.getElementById("modalInputImg");
const modalNameSurname = document.getElementById("modalNameSurname");

// Modal open
export function modalOpen() {
  informModal.classList.remove("hidden");
  informModal.classList.add("active");

  overlay.classList.remove("hidden");
  overlay.classList.add("active");
}

// Modal close
export function closeModal() {
  modalCloseBtn.addEventListener("click", () => {
    informModal.classList.remove("active");
    informModal.classList.add("hidden");

    overlay.classList.remove("active");
    overlay.classList.add("hidden");
  });
}

// Video play event
export function modalVideoPlayer() {
  document
    .getElementById("modal-video-picture")
    .addEventListener("click", () => {
      videoPlay(
        document.querySelector("#modal-video-picture"),
        document.querySelector("#modal-video-container")
      );
    });
}

// Modal display when user is logged
export function informModalIsLoggedDisplay() {
  const isLoggedIn = isUserAuthenticated();
  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));

  if (isLoggedIn) {
    modalInputImg.src = `../assets/profile_images/profile_img_${user.img}.png`;
    modalNameSurname.textContent = `${user.username}`;
  } else {
    modalInputImg.src = "../assets/images/img_placeholder.jpg";
    modalNameSurname.textContent = "Име Презиме";
  }
}
