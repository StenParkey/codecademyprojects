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
  console.log('DYcalc disabled. Please comment out line 4 to enable')
}