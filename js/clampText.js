// Clamp text function
function autoClamp(pElement) {
  const container = pElement.parentElement;
  const computedStyle = getComputedStyle(pElement);
  const lineHeight = parseFloat(computedStyle.lineHeight);
  const containerHeight = container.offsetHeight;

  const titleHeight = container.querySelector("h5")?.offsetHeight || 0;
  const dateHeight = container.querySelector(".date-posted")?.offsetHeight || 0;
  const usedSpace = titleHeight + dateHeight + 10;

  const availableHeight = containerHeight - usedSpace;
  const maxLines = Math.floor(availableHeight / lineHeight) - 2;
  pElement.style.display = "-webkit-box";
  pElement.style.webkitBoxOrient = "vertical";
  pElement.style.overflow = "hidden";
  pElement.style.textOverflow = "ellipsis";
  pElement.style.webkitLineClamp = maxLines;
}

// Apply to all
export function applyClampToAll() {
  document
    .querySelectorAll(".desc-container .card-description")
    .forEach(autoClamp);
}

// Event
export function clampText() {
  window.addEventListener("load", applyClampToAll);
  window.addEventListener("resize", applyClampToAll);
}
