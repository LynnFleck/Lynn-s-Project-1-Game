const newGame = new Game();

window.onload = () => {

// candidate hover states
  document.querySelector('#trump-button')
      .addEventListener('mouseout', () => { newGame.buttonUnhoverT(); });
  document.querySelector('#hillz-button')
      .addEventListener('mouseout', () => { newGame.buttonUnhoverH(); });
  document.querySelector('#hillz-button')
      .addEventListener('mouseenter', () => { newGame.buttonHoverH(); });
  document.querySelector('#trump-button')
      .addEventListener('mouseenter', () => { newGame.buttonHoverT(); });
// candidate is selected, set up game board
  document.querySelector('#hillz-button')
      .addEventListener('click', () => { newGame.imWithHer(); });
  document.querySelector('#trump-button')
      .addEventListener('click', () => { newGame.imWithHim(); });
  document.querySelector('#start-button')
      .addEventListener('click', () => { newGame.playGame(); });
};
