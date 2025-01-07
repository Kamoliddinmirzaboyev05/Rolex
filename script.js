const body = document.querySelector("body");
const modeBtn = document.querySelector("#mode");
const logo = document.querySelector(".logo");
const boxes = document.querySelectorAll(".box-mode");
const lighters = document.querySelectorAll(".lighter-type");
const grayers = document.querySelectorAll(".grayer-type");
const grayerBtns = document.querySelectorAll(".grayer-btn");
let siteMode = localStorage.getItem("siteMode");
console.log(siteMode);

// autoDeter();
function autoDeter() {
  if (localStorage.getItem("siteMode") == "false") {
    localStorage.setItem("siteMode", "true");
    body.classList.add("bg-dark");
    boxes.forEach((box) => {
      box.classList.add("box-dark");
    });
    modeBtn.setAttribute("src", "img/sun.svg");
    logo.setAttribute("src", "img/white-logo.svg");
    lighters.forEach((lighter) => {
      lighter.classList.add("lightertxt");
      grayers.forEach((grayer) => {
        grayer.classList.add("grayer-text");
      });
      grayerBtns.forEach((grayerBtn) => {
        grayerBtn.classList.add("grayerBtn");
      });
    });
  } else {
    localStorage.setItem("siteMode", "false");
    body.classList.remove("bg-dark");
    boxes.forEach((box) => {
      box.classList.remove("box-dark");
    });
    modeBtn.setAttribute("src", "img/moon.svg");
    logo.setAttribute("src", "img/logo.svg");
    lighters.forEach((lighter) => {
      lighter.classList.remove("lightertxt");
    });
    grayers.forEach((grayer) => {
      grayer.classList.remove("grayer-text");
    });
    grayerBtns.forEach((grayerBtn) => {
      grayerBtn.classList.remove("grayerBtn");
    });
    lighters.forEach((lighter) => {
      lighter.classList.remove("lighter-text");
    });
  }
}
const isMode = () => {};
modeBtn.addEventListener("click", () => {
  autoDeter();
});
