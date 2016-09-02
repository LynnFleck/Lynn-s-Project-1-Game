class Game {
  constructor() {
    this.hillzLetters = ['h', 'i', 'l', 'l', 'z'].map((str) => new Letter(str));
    this.trumpLetters = ['t', 'r', 'u', 'm', 'p'].map((str) => new Letter(str));
    this.hmove = 0;
    this.tmove = 0;
    this.forHillz = null;
    this.forTrump = null;
    this.questionNumber = 0;
    this.questions = [
      ['question1', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question2', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question3', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question4', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question5', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question6', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question7', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question8', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question9', 'answer', 'wrongAnswer', 'wrongAnswer2'],
      ['question10', 'answer', 'wrongAnswer', 'wrongAnswer2'],
    ];
  }
  // getModal() {
  //   const modal = document.querySelector('#introModal');
  //   modal.style.display = 'block';
  // }
  hideModal() {
    const modal = document.querySelector('#introModal');
    modal.style.display = 'none';
    console.log('ive been clicked');
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
  imWithHer() {
    this.forHillz = true;
    alert('Congrats! You\'re playing for Hillary!');
    this.forTrump = false;
    document.querySelector('#hillz-button').style.display = 'none';
    document.querySelector('#trump-button').style.display = 'none';
  }
  imWithHim() {
    this.forTrump = true;
    alert('Congrats! You\'re playing for Trump!');
    this.forHillz = false;
    document.querySelector('#hillz-button').style.display = 'none';
    document.querySelector('#trump-button').style.display = 'none';
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
  askQuestion() {
    const ques = this.questions[this.questionNumber];
    const question = prompt(`${ques[0]}: ${ques[1]}, ${ques[2]}, ${ques[3]}`);
    if ((this.forHillz === true && question === ques) || (this.forTrump === true && question !== ques)) {
      this.guessCorrectlyHillz();
    } else {
      this.guessCorrectlyTrump();
    }
    this.renderH();
    this.renderT();
    document.querySelector('#question-button').style.display = 'none';
    this.questionNumber++;
    this.isWinner();
  }
  isWinner() {
    if (this.hmove === 5) {
      alert('Hillary is the winner!!!!!!');
    } else if (this.tmove === 5) {
      alert('Trump is the winner!!!!!!');
    } else {
      this.askQuestion();
    }
  }
}
