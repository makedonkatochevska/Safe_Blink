// imports
import { isUserAuthenticated } from "./utilities.js";
import { SESSION_KEY } from "./data.js";
import { randomIndex } from "./utilities.js";
import { discussionCardsData } from "./data.js";

// html elements
const cardsContainer = document.querySelector("#dynamicCardsContainer");
const inputProfileImage = document.querySelector("#shareExperienceCard img");
const nameSurnamePlaceholder = document.querySelector(
  ".shareExperienceNameSurname"
);
const seeMoreDiscussionBtn = document.querySelector(
  "#discussion-page .see-more"
);
const discussionPage = document.querySelector("#discussion-page");
const submitNewDiscussionBtn = document.getElementById("submitNewDiscBtn");
const shareNewExperienceInput = document.getElementById("shareExperienceInput");

// Display Cards function
export function displayDiscussionCards(cards) {
  cardsContainer.innerHTML = "";

  cards.forEach((card, index) => {
    renderCards(card, index);
  });
}

// Render Cards function
function renderCards(card, index) {
  const colorClass = `card-color-${(index % 3) + 1}`; // 3 colors changing
  const username = card.username || "Име и Презиме";

  cardsContainer.innerHTML += `
    <div class="card ${colorClass}">
            <p>${card.description}</p>
            <div class="info-box">
              <div class="personal-info">
                <img
                  src="./assets/profile_images/profile_img_${card.img}.png"
                  alt="discussion-img"
                />
                <p>${username}</p>
              </div>
              <div class="date-info">
                <p>${card.date || "00/00/00, 00:00"}</p>
              </div>
            </div>
            <div class="comment-box">
              <input
                type="text"
                class="disscussion-comment"
                placeholder="Пиши коментар..."
              />
            </div>
            <div class="action-box">
              <span class="plus-icon"><i class="fas fa-plus"></i></span>
              <p>5 Коментари</p>
              <p>84 Реакции</p>
            </div>
          </div>
    `;
}

// See more cards overlay
export function seeMoreDiscussionCards() {
  seeMoreDiscussionBtn.addEventListener("click", () => {
    discussionPage.style.maxHeight = "none";
    document.querySelector(".gradient-overlay").style.display = "none";
  });
}

// Is user logged - display
export function discussionInputDisplayState() {
  const isLoggedIn = isUserAuthenticated();
  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));

  if (isLoggedIn) {
    inputProfileImage.src = `../assets/profile_images/profile_img_${user.img}.png`;
    nameSurnamePlaceholder.textContent = `${user.username}`;
  } else {
    inputProfileImage.src = "../assets/images/img_placeholder.jpg";
    nameSurnamePlaceholder.textContent = "Име Презиме";
  }
}

// New discussion button event
export function addNewDiscussion() {
  submitNewDiscussionBtn.addEventListener("click", () => {
    const isLoggedIn = isUserAuthenticated();
    const randomID = randomIndex();
    const user = JSON.parse(
      localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER)
    );
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString()}, ${now
      .toLocaleTimeString()
      .slice(0, 5)}`;

    if (!isLoggedIn) {
      shareNewExperienceInput.value = "";
      window.location.hash = "#login";
      return;
    }

    const newExperienceValue = shareNewExperienceInput.value.trim();

    const newExperience = {
      id: randomID,
      img: user.img,
      username: user.username,
      description: newExperienceValue,
      date: formattedDate,
    };

    discussionCardsData.unshift(newExperience);

    localStorage.setItem(
      "DISCUSSION_CARDS",
      JSON.stringify(discussionCardsData)
    );

    displayDiscussionCards(discussionCardsData);

    shareNewExperienceInput.value = "";
  });
}
