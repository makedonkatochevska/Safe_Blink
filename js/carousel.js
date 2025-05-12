// imports
import { infoCards } from "./data.js";
import { displayCards } from "./informationCards.js";
import { applyClampToAll } from "./clampText.js";

// html elements
const headingsToSwitch = document.querySelectorAll(".carousel-wrapper h4");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const cardsContainer = document.getElementById("card-container");
const dots = document.querySelectorAll(".carousel-pagination .dot");

// utilities
const isMobile = () => window.innerWidth <= 768;
let currentHeadingIndex = 0;

// Heading text switch
export function headingOpacitySwitch() {
  // Initial state
  headingsToSwitch.forEach((heading, i) => {
    if (i === 0) {
      heading.classList.add("active-heading");
      heading.classList.remove("inactive-heading");
    } else {
      heading.classList.add("inactive-heading");
    }
  });

  // Events
  headingsToSwitch.forEach((heading, index) => {
    heading.addEventListener("click", () => {
      if (heading.classList.contains("active-heading")) return;

      headingsToSwitch.forEach((heading) => {
        heading.classList.remove("active-heading", "inactive-heading");
        heading.classList.add("inactive-heading");
      });

      heading.classList.remove("inactive-heading");
      heading.classList.add("active-heading");

      // Update content
      const seeMoreBtn = document.getElementById("see-more-btn");

      if (index === 0) {
        seeMoreBtn.classList.remove("hidden");
        displayCards(infoCards);
        applyClampToAll();
      } else {
        seeMoreBtn.classList.add("hidden");
        cardsContainer.innerHTML = `<h5>Нема Податоци</h5>`;
      }
    });
  });
}

// Carousel functionality
export function carouselFunctionality() {
  initCarouselBehavior();
  window.addEventListener("resize", initCarouselBehavior);

  handleCarouselNavigation();
}

// Update carousel view
function updateCarouselView(idx) {
  headingsToSwitch.forEach((heading, i) => {
    heading.classList.remove("active");

    if (i === idx) {
      heading.classList.add("carousel-active");
      heading.classList.remove("hidden");
    } else {
      heading.classList.remove("carousel-active");
      heading.classList.add("hidden");
    }
  });

  dots.forEach((dot, i) => {
    if (i === idx) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });

  // Arrow display
  arrowLeft.style.opacity = idx === 0 ? "0.4" : "1";
  arrowRight.style.opacity = idx === headingsToSwitch.length - 1 ? "0.4" : "1";
}

// Initial Carousel Behavior
function initCarouselBehavior() {
  if (isMobile()) {
    updateCarouselView(currentHeadingIndex);
  } else {
    headingsToSwitch.forEach((heading) => {
      heading.classList.remove("hidden");
      heading.classList.add("active");
    });
  }
}

// Carousel functionality — handle arrows and dots
function handleCarouselNavigation() {
  // Arrow events
  arrowLeft.addEventListener("click", () => {
    if (currentHeadingIndex > 0) {
      currentHeadingIndex--;
      updateCarouselView(currentHeadingIndex);
    }
  });

  arrowRight.addEventListener("click", () => {
    if (currentHeadingIndex < headingsToSwitch.length - 1) {
      currentHeadingIndex++;
      updateCarouselView(currentHeadingIndex);
    }
  });

  // Dot events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentHeadingIndex = index;
      updateCarouselView(index);
    });
  });
}
