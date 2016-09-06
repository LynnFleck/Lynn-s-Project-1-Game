class Game {
  constructor() {
    this.hillzLetters = ['h', 'i', 'l', 'l', 'z'].map((str) => new Letter(str));
    this.trumpLetters = ['t', 'r', 'u', 'm', 'p'].map((str) => new Letter(str));
    this.newPres;
    this.hmove = 0;
    this.tmove = 0;
    this.forHillz = null;
    this.forTrump = null;
    this.questionNumber = 0;
    this.questions = [
      ['Which candidate lists Fyodor Dostoyevsky\'s \'The Brothers Karamazov\' as their favorite book?', 'Hillz', 'Trump', 'neither'],
      ['What is Hillary\'s favorite color?', 'yellow', 'blue', 'red'],
      ['Citizen Kane is which candidate\'s favorite movie?', 'Hillz', 'Trump', 'neither'],
      ['Which candidate was born on October 26', 'Hillz', 'Trump', 'neither'],
      ['Hillz announced she was running, via', 'YouTube', 'Tonight Show', 'website'],
      ['Which candidate has a tour bus named Scooby-Doo?', 'Hillz', 'Trump', 'neither'],
      ['Which candidate has a star on the Hollywood Walk of Fame?', 'Trump', 'Hillz', 'neither'],
      ['Hillary was one of Time magazine\'s "100 Most Influential People in 2015. Which of these stars was also honored?', 'Kim Kardashian-West', 'Britney Spears', 'Matthew McConaughey'],
      ['Which agency created Hillary\'s campaign logo?', 'Pentagram', 'Grey', 'Ogilvy &amp; Mather'],
      ['Newsweek ranked which candidate as the 13th most powerful person on the planet?', 'Hillz', 'Trump', 'neither'],
    ];
  }
  buttonHoverH() {
    document.querySelector('#hillz-button .my-button-color').style.backgroundColor = '#2b3e51';
  }
  buttonHoverT() {
    document.querySelector('#trump-button .my-button-color').style.backgroundColor = '#c23824';
  }
  buttonUnhoverH() {
    document.querySelector('#hillz-button .my-button-color').style.backgroundColor = '#fff';
  }
  buttonUnhoverT() {
    document.querySelector('#trump-button .my-button-color').style.backgroundColor = '#fff';
  }
  imWithHer() {
    this.forHillz = true;
    alert('Congrats! You\'re playing for Hillary!');
    this.forTrump = false;
    this.renderBoard();
  }
  imWithHim() {
    this.forTrump = true;
    alert('Congrats! You\'re playing for Trump!');
    this.forHillz = false;
    this.renderBoard();
  }
  setBoard() {
    document.querySelector('#modal-content').style.display = 'none';
    document.querySelector('#game-box').style.display = 'block';
  }
  createLetters() {
    this.hillzLetters.forEach((letter, idx) => {
      const letterHolder = document.createElement('li');
      letterHolder.setAttribute('id', `h-${idx}`);
      letterHolder.setAttribute('class', 'letter');
      document.querySelector('#hillz-letters').appendChild(letterHolder);
    });
    this.trumpLetters.forEach((letter, idx) => {
      const letterHolder = document.createElement('li');
      letterHolder.setAttribute('id', `t-${idx}`);
      letterHolder.setAttribute('class', 'letter');
      document.querySelector('#trump-letters').appendChild(letterHolder);
    });
  }
  showMyPlayer() {
    const cName = this.forHillz ? '<span class=\'hillzRed\'>HILLZ</span>'
                                : '<span class=\'trumpBlue\'>TRUMP</span>';
    const yourPlayer = document.querySelector('#your-player');
    yourPlayer.style.display = 'block';
    yourPlayer.innerHTML = `You are playing for ${cName}`;
  }
  askQuestion() {
    const ques = this.questions[this.questionNumber];
    const quesAsked = prompt(`${ques[0]}: ${ques[1]}, ${ques[2]}, ${ques[3]}`);
    if ((this.forHillz === true && quesAsked === `${ques[1]}`)
      || (this.forTrump === true && quesAsked !== `${ques[1]}`)) {
      this.guessCorrectlyHillz();
    } else {
      this.guessCorrectlyTrump();
    }
    this.questionNumber++;
  }
  guessCorrectlyHillz() {
    this.hillzLetters[this.hmove].show();
    this.renderH();
    this.renderT();
    this.hmove += 1;
  }
  guessCorrectlyTrump() {
    this.trumpLetters[this.tmove].show();
    this.renderH();
    this.renderT();
    this.tmove += 1;
  }
  renderH() {
    this.hillzLetters.forEach((letter, idx) => {
      const letterHolder = document.querySelector(`#h-${idx}`);
      letterHolder.innerHTML = letter.render();
    });
  }
  renderT() {
    this.trumpLetters.forEach((letter, idx) => {
      const letterHolder = document.querySelector(`#t-${idx}`);
      letterHolder.innerHTML = letter.render();
    });
  }
  isWinner() {
    if (this.hmove === 5) {
      alert('Hillary is the winner!!!!!!');
      this.newPres = 'Hillary Clinton';
    } else if (this.tmove === 5) {
      alert('Trump is the winner!!!!!!');
      this.newPres = 'Donald Trump';
    } else this.newPres = null;
  }
  renderBoard() {
    this.setBoard();
    this.showMyPlayer();
    this.createLetters();
  }
  playGame() {
    this.askQuestion();
    this.isWinner();
  }
}
  // console.log('winner, winner, chicken dinner');
