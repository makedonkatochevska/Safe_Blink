// imports
import { applyClampToAll } from "./clampText.js";
import { currentFilteredCards } from "./filters.js";
import { modalOpen } from "./informModal.js";

// html elements
const cardContainer = document.getElementById("card-container");
let seeMoreBtn = document.getElementById("see-more-btn");

// Display cards function
export function displayCards(cards, count = cards.length) {
  cardContainer.innerHTML = "";

  const cardsToRender = cards.slice(0, count);
  cardsToRender.forEach((card) => {
    renderCards(card);
  });

  const firstCard = cardsToRender[0];
  const firstCardElement = document.getElementById(`${firstCard.id}infoCard`);
  if (firstCardElement) {
    firstCardElement.addEventListener("click", () => {
      //console.log("first card clicked");
      modalOpen(firstCard);
    });
  }
}

// Render cards
export function renderCards(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.id = `${card.id}infoCard`;

  cardDiv.innerHTML = `
    <div class="card-inner">
      <img src="./assets/inform_images/${card.img}.png" alt="card-image" />
      <div class="desc-container">
          <h5>${card.title}</h5>
          <p class="card-description">${card.description}</p>
          <p class="date-posted">${card.date}</p>
      </div>
    </div>
    <div class="play-btn">
        <img src="./assets/svg_icons/play-btn-icon.svg" alt="play-btn" />
    </div>
  `;

  cardDiv.addEventListener("click", () => {
    //console.log("card clicked:", card.title);
    modalOpen(card);
  });

  cardContainer.appendChild(cardDiv);
}

// Handle mobile cards display
export function handleMobileCardsDisplay(cards) {
  if (cards.length === 0) {
    cardContainer.innerHTML =
      "<p class='no-results'>Нема резултати за избраните филтри.</p>";
    seeMoreBtn.classList.add("hidden");
    return;
  }

  displayCards(cards, 8);
  seeMoreBtn.classList.remove("hidden");

  const newBtn = seeMoreBtn.cloneNode(true);
  seeMoreBtn.parentNode.replaceChild(newBtn, seeMoreBtn);
  seeMoreBtn = newBtn;

  seeMoreBtn.addEventListener("click", () => {
    displayCards(cards);
    seeMoreBtn.classList.add("hidden");
    applyClampToAll();
  });
}

// Handle card display
export function handleCardDisplay() {
  if (window.innerWidth <= 768) {
    handleMobileCardsDisplay(currentFilteredCards);
    applyClampToAll();
  } else {
    displayCards(currentFilteredCards);
    applyClampToAll();
  }
}
