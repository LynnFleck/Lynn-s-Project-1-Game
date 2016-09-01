console.log('game.js is here')

class Game {
  constructor() {
  }
  render() {
    let letter = new Letter();
    letter.value = 'h';
    // console.log(newLetter.value);
    const hillzLetters = ['h','i','l','l','z'];
    for (let h of hillzLetters) {
      // let newLetter = new Letter();
      // let letterHolder = document.createElement('li');
      // letterHolder.setAttribute('class', 'letter');
      // letterHolder.innerHTML = h;
      // document.querySelector('#hillz-letters').appendChild(letterHolder);
    }
    // const trumpLetters = ['t','r','u','m','p'];
    // for (let t of trumpLetters) {
    //   letter.value = t;
    //   let letterHolder = document.createElement('li');
    //   letterHolder.setAttribute('class', 'letter');
    //   letterHolder.innerHTML = letter.value;
    //   document.querySelector('#trump-letters').appendChild(letterHolder);
    // }
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







