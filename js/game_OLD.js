console.log('game.js is here')

class Game {
  constructor() {
    // this.hillzLetters = ['h','i','l','l','z'].map((str) => { return new Letter(str)} );
  }
  render() {
    let hillzLetters = ['h','i','l','l','z'];
    for (let h of hillzLetters) {
      let letter = new Letter();
      letter.value = h;
      let letterHolder = document.createElement('li');
      letterHolder.setAttribute('class', 'letter');
      letterHolder.innerHTML = letter.value;
      document.querySelector('#hillz-letters').appendChild(letterHolder);
    }
    const trumpLetters = ['t','r','u','m','p'];
    for (let t of trumpLetters) {
      let letter = new Letter();
      letter.value = t;
      let letterHolder = document.createElement('li');
      letterHolder.setAttribute('class', 'letter');
      letterHolder.innerHTML = letter.value;
      document.querySelector('#trump-letters').appendChild(letterHolder);
    }
    // console.log(letterHolder);
    // console.log(letter);
  }
}

let nG = new Game();
nG.render();


// let letter = new Letter();
// let newLetter = document.createElement('div');
// newLetter.setAttribute('class', 'letter');
// newLetter.value = letter;
// document.querySelector('#hillz-letters').appendChild(newLetter);
// }
// }







