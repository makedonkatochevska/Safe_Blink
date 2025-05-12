// imports
import { SESSION_KEY } from "./data.js";
import { infoCards, filterCategories } from "./data.js";
import { applyClampToAll } from "./clampText.js";
import { handleMobileCardsDisplay, displayCards } from "./informationCards.js";

// html elements
const filterBtnsContainer = document.querySelector(".filter-btns-container");
const cardContainer = document.getElementById("card-container");

// utilities
export let currentFilteredCards = infoCards;

let activeFilters = JSON.parse(localStorage.getItem("AUTHENTICATED_USER"))
  ?.selectedCategories || {
  mostWatched: true,
  popular: true,
  new: true,
  privacy: true,
  danger: true,
};

// Display filter buttons
export function displayFilterBtns(filters) {
  filters.forEach((filter) => {
    renderFilterBtns(filter);
  });

  filterCards(infoCards);
}

// Render filter buttons
function renderFilterBtns(filter) {
  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));

  const filterBtn = document.createElement("button");
  filterBtn.id = filter.category;
  filterBtn.textContent = filter.title;

  if (activeFilters[filter.category]) {
    filterBtn.classList.add("active-filter-button");
  } else {
    filterBtn.classList.add("inactive-filter-button");
  }

  filterBtnsContainer.appendChild(filterBtn);

  // Event Listener
  filterBtn.addEventListener("click", () => {
    let isActive = filterBtn.classList.toggle("active-filter-button");
    filterBtn.classList.toggle("inactive-filter-button", !isActive);

    filter.isActive = isActive;
    activeFilters[filter.category] = isActive;

    // If the user is logged in - update
    if (user) {
      const updatedUser = {
        ...user,
        selectedCategories: activeFilters,
      };

      localStorage.setItem("AUTHENTICATED_USER", JSON.stringify(updatedUser));

      const usersInfo = JSON.parse(localStorage.getItem("USERS_INFO"));

      if (usersInfo[user.username]) {
        usersInfo[user.username].selectedCategories = activeFilters;
        localStorage.setItem("USERS_INFO", JSON.stringify(usersInfo));
      }
    }

    filterCards(infoCards);
  });
}

//  Filter function
export function filterCards(cards) {
  // List of active categories
  const activeCategories = Object.entries(activeFilters)
    .filter(([_, isActive]) => isActive)
    .map(([category]) => category);

  // Cards that include at least one active category
  const filteredCards = cards.filter((card) =>
    card.category.some((ctg) => activeCategories.includes(ctg))
  );

  currentFilteredCards = filteredCards;

  cardContainer.innerHTML = "";

  if (window.innerWidth <= 768) {
    handleMobileCardsDisplay(filteredCards);
  } else {
    displayCards(filteredCards);
  }

  applyClampToAll();
}

// Function to update the filters
export function updateFilters() {
  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));

  if (user) {
    activeFilters = user.selectedCategories || {
      mostWatched: true,
      popular: true,
      new: true,
      privacy: true,
      danger: true,
    };
  } else {
    // No user logged in - default filters
    activeFilters = {
      mostWatched: true,
      popular: true,
      new: true,
      privacy: true,
      danger: true,
    };
  }

  filterBtnsContainer.innerHTML = "";

  // Re-render the filter buttons with updated active filters
  filterCategories.forEach((filter) => {
    renderFilterBtns(filter);
  });

  filterCards(infoCards);
}
