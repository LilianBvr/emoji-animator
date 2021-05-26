window.onload = () => {
  main();
}

function main() {
  var btn = document.querySelector(".trigger-animation");
  const params = {
    container: document.querySelector(".screen-container"),
    duration: 1000,
    qty: 30,
  }
  btn.addEventListener("click", () => triggerAnimation(params));
}

/**
 *  {
 *    container,
 *    duration (ms),
 *    qty
 *  }
 */
function triggerAnimation(params) {
  
}