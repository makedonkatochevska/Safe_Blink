// imports
import { videoPlay } from "./utilities.js";

// Video play event
export function homePageVideoPlayer() {
  document
    .getElementById("home-page-video-picture")
    .addEventListener("click", () => {
      videoPlay(
        document.querySelector("#home-page-video-picture"),
        document.querySelector("#home-video-container")
      );
    });
}
