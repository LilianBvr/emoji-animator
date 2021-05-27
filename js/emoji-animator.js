class EmojiAnimator {
  constructor(duration, qty, container) {
    this.duration = duration;
    this.qty = qty;
    this.container = container;
    this.collection = [];
  }

  //Creates a set of passed emoji and animate them
  animate(emoji) {
    this.createSet(emoji);
    for(var i=0; i<this.qty; i++) {
      var delay = Math.random()*this.duration/2;
      this.showEmoji(this.collection[i], delay);
      this.removeEmoji(this.collection[i], delay);
    }
  }

  createSet(emoji) {
    for(var i=0; i< this.qty; i++) {
      var elem = document.createElement("div");
      elem.className = "animated-emoji";
      elem.innerHTML = emoji;
      elem.style.left = Math.random()*100+"%";
      elem.style.animation = "wave "+this.duration+"ms ease-in-out"
      this.collection.push(elem);
    }
  }

  showEmoji(elem, delay) {
    setTimeout(()=>this.container.append(elem), delay);
  }

  removeEmoji(elem, delay) {
    setTimeout(()=>{ if(elem) elem.remove(); }, delay+this.duration);
    this.collection.shift();
  }

}

export function createAnimator({duration, qty, container}) {
  return new EmojiAnimator(duration, qty, container);
}
