// var tabs = document.querySelectorAll("header a");
// var contentPara = document.querySelector(".content");

// tabs.forEach((tab) => tab.addEventListener("click", makeActive));

// function makeActive(event) {
//   makeInactive();
//   event.target.classList.add("active");
//   event.preventDefault();
// }

// function makeInactive() {
//   tabs.forEach((tab) => tab.classList.remove("active"));
// }
var tabs = document.querySelectorAll("header a");
var contentPara = document.querySelector(".content");

function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "recipes";
    document.querySelector('[href="#recipes"]').classList.add("active");
  } else {
    document
      .querySelector('[href="' + window.location.hash + '"] ')
      .classList.add("active");
  }
  setContentAccordingToHash();
}

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
