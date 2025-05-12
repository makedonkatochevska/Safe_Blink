// imports
import { isUserAuthenticated } from "./utilities.js";
import { SESSION_KEY } from "./data.js";

// html elements
const profileNavLink = document.getElementById("profileNavLink");
const navProfileImg = document.getElementById("navProfileImg");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtnMobile = document.getElementById("loginBtnMobile");
const logoutBtnMobile = document.getElementById("logoutBtnMobile");

// HAMBURGER TOGGLE
export function toggleHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Header Scroll
export function headerScroll() {
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    header.classList.toggle("header-scrolled", this.window.scrollY > 10);
  });
}

// Active Nav Link
export function activeNavLink() {
  const navLinks = document.querySelectorAll("#navMenu li a");
  const hash = window.location.hash.substring(1);

  navLinks.forEach((link) => {
    link.classList.toggle("active-nav-link", link.id === hash);
  });
}

// Handle display when user is logged
export function handleLoggedDisplay() {
  const isLoggedIn = isUserAuthenticated();

  const user = JSON.parse(localStorage.getItem(SESSION_KEY.AUTHENTICATED_USER));

  if (isLoggedIn) {
    profileNavLink.classList.remove("hidden");
    navProfileImg.classList.remove("hidden");
    loginBtn.classList.add("hidden");
    loginBtnMobile.classList.add("hidden");
    logoutBtn.classList.remove("hidden");
    logoutBtnMobile.classList.remove("hidden");

    navProfileImg.src = `../assets/profile_images/profile_img_${user.img}.png`;
  } else {
    profileNavLink.classList.add("hidden");
    navProfileImg.classList.add("hidden");
    loginBtn.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    loginBtnMobile.classList.remove("hidden");
    logoutBtnMobile.classList.add("hidden");
  }
}
