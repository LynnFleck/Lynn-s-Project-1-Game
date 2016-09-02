const n = new Game();
n.createLetters();
n.renderH();  // only use when an answer is given correctly
n.renderT();


// console.log(nG.hillzLetters[0]);
window.onload = () => {
  document.querySelector('#hillz-button').addEventListener('click', () => { n.imWithHer(); });
  document.querySelector('#trump-button').addEventListener('click', () => { n.imWithHim(); });
  document.querySelector('#question-button').addEventListener('click', () => { n.askQuestion(); });
  document.querySelector('#startBtn').addEventListener('click', () => { n.getModal(); });
  document.querySelector('.close').addEventListener('click', () => { n.hideModal(); });
};
