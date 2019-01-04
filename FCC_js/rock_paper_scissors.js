$(document).ready(function(){
  let userScore = 0;
  let computerScore = 0;
  // // const userScore_span = $('#user-score');
  // // const computerScore_span = $('#computer-score');
  // const scoreBoard = $('.score-board');
  // const gameResult = $('.result');
  // const rock = $('#rock');
  // const paper = $('#paper');
  // const scissors = $('#scissors');

function getComputerChoice() {
  const computerSelect = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return computerSelect[randomNumber];
}

  function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        console.log("USER WINS");
        userWin(userChoice, computerChoice);
        break;
      case 'rp':
      case 'ps':
      case 'sr':
        console.log("COMPUTER WINS");
        computerWin(userChoice, computerChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        console.log("DRAW");
        draw();
        break;
    }
  }

  function convertToWord(letter){
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
  }

  function userWin(user, computer){
    userScore++;
    console.log(userScore);
    $('#user-score').text(userScore);
    $('.result').html(`User Choice: ${convertToWord(user)}<br /> Computer Choice: ${convertToWord(computer)} <br /> You win!`);
  }

  function computerWin(user, computer){
    computerScore++;
    console.log(computerScore);
    $('#computer-score').text(computerScore);
      $('.result').html(`Computer Choice: ${convertToWord(computer)}<br />
       User Choice:  ${convertToWord(user)}<br />
       Computer wins!`);
  }

  function draw(){
    $('.result').text(`Draw... no points awarded`);
    console.log("DRAW");
  }

  $('#rock').click(function(){
    game('r');
  })

  $('#paper').click(function(){
    game('p');
  })

  $('#scissors').click(function(){
    game('s');
  })

});
