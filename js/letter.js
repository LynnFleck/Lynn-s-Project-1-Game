class Letter {
  constructor(value) {
    this.value = value;
    this.hidden = true;
  }
  show() {
    this.hidden = false;
  }
  render() {
    if (this.hidden === true) {
      return '';
    } return this.value;
  }
}
