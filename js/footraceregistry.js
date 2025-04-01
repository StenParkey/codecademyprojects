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
  console.log('FRregistry disabled, please comment out line 4 to enable')
}