class EmojiAnimator {
  constructor(duration, qty, container, limit) {
    this.duration = duration;
    this.qty = qty;
    this.container = container;
    this.limit = limit;
    container.classList.add("emoji-animation-container");
  }

  //Creates a set of passed emoji and animate them
  animate(emoji) {
    var running = this.container.querySelectorAll(".animated-emoji").length;
    if(running >= this.limit)
      return;
    
    for(var i=0; i< this.qty; i++) {
      var elem = document.createElement("div");
      var delay = parseInt(Math.random()*this.duration/2);
      elem.className = "animated-emoji";
      elem.innerHTML = emoji;
      elem.style.left = Math.random()*100+"%";
      elem.style.animation = this.duration+"ms ease-in-out "+delay+"ms wave";
      this.container.append(elem);
      this.removeEmoji(elem, delay);
    }
  }

  removeEmoji(elem, delay) {
    setTimeout(()=>{
      elem.remove();
    }, delay+this.duration);
  }

}

export function createAnimator({duration, qty, container, limit}) {
  return new EmojiAnimator(duration, qty, container, limit);
}
