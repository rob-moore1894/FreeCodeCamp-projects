$(document).ready(function(){
  let userScore = 0;
  let computerScore = 0;

function getComputerChoice() {
  const computerSelect = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  const randomNumber = Math.floor(Math.random() * 5);
  return computerSelect[randomNumber];
}

  function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case 'RockScissors':
      case 'RockLizard':
      case 'PaperRock':
      case 'PaperSpock':
      case 'ScissorsPaper':
      case 'ScissorsLizard':
      case 'LizardSpock':
      case 'LizardPaper':
      case 'SpockScissors':
      case 'SpockRock':
        userWin(userChoice, computerChoice);
        break;
      case 'RockPaper':
      case 'RockSpock':
      case 'PaperScissors':
      case 'PaperLizard':
      case 'ScissorsRock':
      case 'ScissorsSpock':
      case 'LizardScissors':
      case 'LizardRock':
      case 'SpockPaper':
      case 'SpockLizard':
        computerWin(userChoice, computerChoice);
        break;
      case 'RockRock':
      case 'PaperPaper':
      case 'ScissorsScissors':
      case 'LizardLizard':
      case 'SpockSpock':
        draw();
        break;
    }
  }

  function userWin(user, computer){
    userScore++;
    $('#user-score').text(userScore);
    $('.result').html(`User Choice: ${user}<br /> Computer Choice: ${computer} <br /> You win!`);
  }

  function computerWin(user, computer){
    computerScore++;
    $('#computer-score').text(computerScore);
      $('.result').html(`Computer Choice: ${computer}<br />
       User Choice:  ${user}<br />
       Computer wins!`);
  }

  function draw(){
    $('.result').text(`Draw... no points awarded`);
  }

  $('#rock').click(function(){
    game('Rock');
  })

  $('#paper').click(function(){
    game('Paper');
  })

  $('#scissors').click(function(){
    game('Scissors');
  })

  $('#lizard').click(function(){
    game('Lizard');
  })

  $('#spock').click(function(){
    game('Spock');
  })

});
