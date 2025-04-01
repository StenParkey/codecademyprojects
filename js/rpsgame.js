// Rock Paper Scissors Game
let rockpaperscissorsgame = true
// on switch down
rockpaperscissorsgame = false
if (rockpaperscissorsgame) {
  console.log('rockpaperscissorsgame enabled')
  const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, invalid input. Please input either rock, paper, or scissors.');
    }
  };
  
  const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2: 
        return 'scissors';
        break;
      default:
        console.log('wtf jacky?')
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tie';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'computer wins!';
      } else {
        return 'user wins!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'computer wins!'; 
      } else {
        return 'user wins!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'computer wins!';
      } else {
        return 'user wins!';
      }
    } else if (userChoice === 'bomb') {
      return 'user wins! automatically!';
    }
  }
  
  function playGame() {
    const userChoice = getUserChoice('bomb')
    const computerChoice = getComputerChoice()
    console.log(userChoice, computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  //playGame()
} else {
  console.log('rockpaperscissorsgame disabled. Please comment out line 4 to enable')
}