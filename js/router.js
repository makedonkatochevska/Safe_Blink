// imports
import { supportedPaths } from "./data.js";

// Handle routing
export function handleRouting() {
  const hash = window.location.hash.substring(1) || "home";
  const allPages = document.querySelectorAll("section");

  const validHash = supportedPaths.includes(`#${hash}`) ? hash : "404";

  allPages.forEach((page) => {
    if (page.id === `${validHash}-page`) {
      page.classList.remove("hidden");
      page.classList.add("active", "fade-in");
    } else {
      page.classList.add("hidden");
      page.classList.remove("active", "fade-in");
    }
  });

  window.scrollTo(0, 0);
}
