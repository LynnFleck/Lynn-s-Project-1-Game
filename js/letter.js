console.log('letter.js is here')

class Letter {
  constructor(value) {
    this.value = value;
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
  render() {
    if(this.hidden === true) {
      return '';
    } else {
      return this.value;
    }
  }
}
