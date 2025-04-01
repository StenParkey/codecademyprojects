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