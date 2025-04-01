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
  console.log('sleepdebtcalc disabled. Please comment out line 4 to enable')
}
