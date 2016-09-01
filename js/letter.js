console.log('letter.js is here')

class Letter {
  constructor(value) {
    this.value = value;
    this.hidden = true;
  }
  // show() {
  //   this.hidden = false;
  // }

  // render() {
  //   if (this.hidden === true) {
  //     this.value = '_';
  //   } return;
  // }
}
// let newLetter = new Letter();



// class Letter {
//   constructor(value) {
//     this.value = value.toString();
//     this.hidden = true;
//   }
//   show() {
//     this.hidden = false;
//   }
//   render() {
//     if (this.hidden === true ) {
//       this.value = '_';
//     } return this.value;
//   }
// }
// class Cell {
//   constructor() {
//     this.value = null;
//   };

//   isEmpty() {
//     return this.value ? false : true;
//   };

//   setValue(value) {
//     this.value = value;
//   };

//   getValue() {
//     return this.value;
//   }
// }
