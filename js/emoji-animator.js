class EmojiAnimator {
  constructor(duration, qty, container) {
    this.duration = duration;
    this.qty = qty;
    this.container = container;
  }

  //Creates a set of passed emoji and animate them
  animate(emoji) {
    for(var i=0; i< this.qty; i++) {
      var elem = document.createElement("div");
      elem.className = "animated-emoji";
      elem.innerHTML = emoji;
      elem.style.left = Math.random()*100+"%";
      elem.style.animation = "wave "+this.duration+"ms ease-in-out"
      var delay = Math.random()*this.duration/2;
      this.showEmoji(elem, delay);
      this.removeEmoji(elem, delay);
    }
  }

  showEmoji(elem, delay) {
    setTimeout(()=>this.container.append(elem), delay);
  }

  removeEmoji(elem, delay) {
    setTimeout(()=>{
      elem.remove();
    }, delay+this.duration);
  }

}

export function createAnimator({duration, qty, container}) {
  return new EmojiAnimator(duration, qty, container);
}
