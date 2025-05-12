// IMPORTS
import {
  headerScroll,
  handleLoggedDisplay,
  toggleHamburger,
  activeNavLink,
} from "./header.js";
import { homePageVideoPlayer } from "./homePage.js";
import { handleRouting } from "./router.js";
import { inputDisplay, profileInputValueDIsplay } from "./profile.js";
import { headingOpacitySwitch, carouselFunctionality } from "./carousel.js";
import { filterCategories, discussionCardsData } from "./data.js";
import { handleCardDisplay } from "./informationCards.js";
import { clampText, applyClampToAll } from "./clampText.js";
import { displayFilterBtns, updateFilters } from "./filters.js";
import {
  closeModal,
  modalVideoPlayer,
  informModalIsLoggedDisplay,
} from "./informModal.js";
import {
  displayDiscussionCards,
  seeMoreDiscussionCards,
  discussionInputDisplayState,
  addNewDiscussion,
} from "./discussions.js";
import {
  togglePasswordVisibility,
  enableDisableLoginBtnEvent,
  logIn,
} from "./login.js";
import { welcomeModalBtnAction } from "./welcomeModal.js";
import { logOut } from "./logout.js";

//-----LOAD EVENTS
// hash routing
handleRouting();

// home page
homePageVideoPlayer();

// header
toggleHamburger();
headerScroll();
activeNavLink();

// information cards
headingOpacitySwitch();
carouselFunctionality();
handleCardDisplay();
displayFilterBtns(filterCategories);
clampText();

// modal
welcomeModalBtnAction();
closeModal();
modalVideoPlayer();
informModalIsLoggedDisplay();

// discussion cards
displayDiscussionCards(discussionCardsData);
seeMoreDiscussionCards();
discussionInputDisplayState();
addNewDiscussion();

// login/out events
logIn();
logOut();
enableDisableLoginBtnEvent();
handleLoggedDisplay();
togglePasswordVisibility();

// profile
profileInputValueDIsplay();
inputDisplay();

//-----HASH CHANGE EVENTS
window.addEventListener("hashchange", () => {
  handleRouting();
  activeNavLink();
  applyClampToAll();
  discussionInputDisplayState();
  informModalIsLoggedDisplay();
  profileInputValueDIsplay();
  updateFilters();
});

//-----WINDOW RESIZE EVENTS
window.addEventListener("resize", () => {
  handleCardDisplay();
});
