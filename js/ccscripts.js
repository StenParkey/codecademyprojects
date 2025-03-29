// magic 8 ball
let magic8ball = true
// on switch down
magic8ball = false
if (magic8ball) {
  console.log('magic8ball enabled')

  let userName = ''
  userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
  userQuestion = '' //Input question here
  console.log(`${userName} asks, ${userQuestion}`);
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = ''

  eightBall = randomNumber

  switch (eightBall) {
    case  7 :
      console.log('It is certain');
      break;
    case 6 :
      console.log('Potentially, within time');
      break;
    case 5:
      console.log('Reply hazy try again later');
      break;
    case 4:
      console.log('Cannot predict');
      break;
    case 3:
      console.log('It is unlikely but not impossible');
      break;
    case 2:
      console.log('Absolutely no');
      break;
    case 1:
      console.log('Outlook is not so good');
      break;
    case 0:
      console.log('Rephrase your question');
      break;
    default:
      console.log('The 8 Ball has no response')
  }
} else {
  console.log('magic8ball disabled. Please comment out line 4 to enable')
}
 

// kelvin to fahrenheit converter 
let ktofconvert = true
// on switch down
ktofconvert = false
if (ktofconvert) {
  console.log('ktofconvert enabled')
  // kelvin variable 
  let kelvin = 100
  kelvin = 120
  // celsius variable
  const celsius = kelvin - 273
  // fahrenheit variable  
  const newton = Math.floor(celsius * (33/100))
  const fahrenheit = Math.floor(celsius * (9/5) + 32)
  // console log
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
} else {
  console.log('ktofconvert disabled. Please comment out line 52 to enable')
}


// Dog Years Calculator
let DYcalc = true
// on switch down
DYcalc = false
if (DYcalc) {
    console.log('Dog Years Calculator enabled')
    // user age variable 
    let DYmyAge = 24
    // early years variable and changer
    let DYearlyYears = 2 
    DYearlyYears *= 10.5
    // later years times 4 //
    let DYlaterYears = DYmyAge - 2
    DYlaterYears *= 4
    // my age in dog years + my name variable
    let DYmyAgeInDogYears = DYearlyYears + DYlaterYears
    let DYmyName = 'dogsalt_'.toLowerCase()
    // console log
    console.log(`My name is ${DYmyName}. I am ${DYmyAge} years old in human years, which is ${DYmyAgeInDogYears} in dog years!`)
} else {
  console.log('DYcalc disabled. Please comment out line 72 to enable')
}


// Foot Race Registry Backend
let FRregistry = true
// on switch down
FRregistry = false
if (FRregistry) {
  console.log('FRregistry enabled')
  let raceNumber = Math.floor(Math.random() * 1000);
  let registeredEarly = true

  let runnerAge = 19
  if (runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000
  } else if (runnerAge < 18) {
    raceNumber += 2000
  }

  if (runnerAge < 18){
      console.log(`Runner number ${raceNumber} will start at 12:30pm`);
    } else if (runnerAge === 18){
    console.log('Since you are exactly 18 years of age, please see the registration desk!') };

  if (runnerAge > 18) {
    if (registeredEarly) {
      console.log(`Runner number ${raceNumber} will start at 9:30am!`);
    } else if (!registeredEarly){
      console.log('Late registry will result in a start time penalty!')
      console.log(`Runner number ${raceNumber} will start at 11:00am`);
    }
  } 
} else {
  console.log('FRregistry disabled, please comment out line 89 to enable')
}


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
  console.log('rockpaperscissorsgame disabled. Please comment out line 128 to enable')
}

// Sleep Debt Calculator
let sleepdebtcalc = true
// on switch down 
sleepdebtcalc = false
if (sleepdebtcalc) {
  console.log('Sleep Debt Calculator enabled')
  function getSleepHours(day) {
    switch (day) {
      case 'sunday':
        return 9;
      case 'monday':
        return 8;
      case 'tuesday':
        return 13;
      case 'wednesday':
        return 5;
      case 'thursday':
        return 7;
      case 'friday':
        return 8;
      case 'saturday':
        return 6;
    }
  };
  
  const getActualSleepHours = () =>
    getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');
  
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  };
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const sleepDebt = idealSleepHours - actualSleepHours;
    const sleepReserves = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
      console.log('Great Job! You hit your ideal sleep goal!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`Wow! You went over your ideal sleep goal! You were ${sleepReserves} hours over your ideal sleep time`);
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`Uh-oh! You didnt get enough sleep this week! Maybe you should get some rest! You were ${sleepDebt} hours under your ideal sleep time`);
    }
  };
  
  console.log(calculateSleepDebt())
} else {
  console.log('sleepdebtcalc disabled. Please comment out line 196 to enable')
}

//Whale Language Converter
let wLC = true;
// on switch down
wLC = false;
if (wLC) {
  console.log('Whale Language Converter enabled')
  let wLCInput = '';
  function whaleLanguageConverter(wLCInput) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];

    for (let i = 0; i < wLCInput.length; i++) {
      // Doubles e vowels
      if (wLCInput[i] === 'e') {
        resultArray.push(wLCInput[i])
      }
      // Doubles u vowels
      if (wLCInput[i] === 'u') {
        resultArray.push(wLCInput[i])
      }

      for (let j = 0; j < vowels.length; j++) {
        if (wLCInput[i] === vowels[j]) {
          resultArray.push(wLCInput[i])
        }
      } 
    }

  const resultString = resultArray.join('')
  console.log(resultString.toUpperCase())
}
} else {
  console.log('Whale Language Converter disabled. Please comment out line 247 to enable')
}
