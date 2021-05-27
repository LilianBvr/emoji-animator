import {createAnimator} from "./js/emoji-animator.js";

window.onload = () => {
  main();
}

function main() {
  var btn = document.querySelector(".trigger-animation");

  const params = {
    container: document.querySelector(".screen-container"),
    duration: 3000,
    qty: 20
  }
  var animator = createAnimator(params);

  btn.addEventListener("click", () => animator.animate("🥳"));
}