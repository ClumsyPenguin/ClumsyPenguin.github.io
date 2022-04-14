const toggle = document.querySelector("#toggle");
toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  let root = document.body;
  toggle.innerText = isLight ? "🌞" : "🌚";
  root.classList.toggle("lightMode");
}
