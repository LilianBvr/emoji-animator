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
  for(var i=0; i< params.qty; i++) {
    var elem = document.createElement("div");
    elem.className = "animated-emoji";
    elem.innerHTML = "🥳";
    elem.style.left = Math.random()*100+"%";
    elem.style.animation = "move "+params.duration+"ms"
    showEmoji(elem, params.container, Math.random()*params.duration/2);
  }
  setTimeout(removeEmojis, params.duration*1.5);
}

function showEmoji(elem, container, delay) {
  setTimeout(function(){container.append(elem)}, delay);
}

function removeEmojis() {
  document.querySelectorAll(".animated-emoji").forEach(e=>e.remove())
}