console.log('game.js is here')

class Game {
  constructor() {
    this.hillzLetters = ['h', 'i', 'l', 'l', 'z'].map((str) => { return new Letter(str) });
    this.trumpLetters = ['t', 'r', 'u', 'm', 'p'].map((str) => { return new Letter(str)} );
    this.hmove = 0;
    this.tmove = 0;
    this.forHillz = null;
    this.forTrump = null;
  }
  createLetters() {
    this.hillzLetters.forEach( function(letter, idx) {
      let letterHolder = document.createElement('li');
      letterHolder.setAttribute('id', `h-${idx}`);
      letterHolder.setAttribute('class', 'letter');
      document.querySelector('#hillz-letters').appendChild(letterHolder);
    });
    this.trumpLetters.forEach( function(letter, idx) {
      let letterHolder = document.createElement('li');
      letterHolder.setAttribute('id', `t-${idx}`);
      letterHolder.setAttribute('class', 'letter');
      document.querySelector('#trump-letters').appendChild(letterHolder);
    });
  }
  imWithHer() {
    this.forHillz = true;
    alert('Congrats! You\'re playing for Hillary!')
    this.forTrump = false;
  }
  imWithHim() {
    this.forTrump = true;
    alert('Congrats! You\'re playing for Trump!')
    this.forHillz = false;
  }
  guessCorrectlyHillz() {
    this.hillzLetters[this.hmove].show();
    this.renderH();
    this.hmove += 1;
  }
  guessCorrectlyTrump() {
    this.trumpLetters[this.tmove].show();
    this.renderT();
    this.tmove += 1;
  }
  renderH() {
    this.hillzLetters.forEach( function(letter, idx) {
      let letterHolder = document.querySelector(`#h-${idx}`);
      letterHolder.innerHTML = letter.render();
      });
  }
  renderT() {
    this.trumpLetters.forEach( function(letter, idx) {
      let letterHolder = document.querySelector(`#t-${idx}`);
      letterHolder.innerHTML = letter.render();
      });
  }
  myVote() {
    if (true) {
      if (true) {
        this.guessCorrectlyHillz();
      } else {
        this.guessCorrectlyTrump();
      }
    }
  }
}

const n = new Game();
n.createLetters();
n.renderH();  // only use when an answer is given correctly
n.renderT();
// console.log(nG.hillzLetters[0]);
window.onload = () => {
  document.querySelector('#hillz-button').addEventListener('click', () => { n.imWithHer(); });
  document.querySelector('#trump-button').addEventListener('click', () => { n.imWithHim(); });
};









