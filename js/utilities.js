// imports
import { SESSION_KEY } from "./data.js";

// Video play
export function videoPlay(videoPicture, videoContainer) {
  videoPicture.classList.add("hidden");
  videoContainer.classList.remove("hidden");
}

// Is user authenticated
export function isUserAuthenticated() {
  return Boolean(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));
}

// Random index
export function randomIndex() {
  return Math.random().toString(36).substring(2, 10);
}
