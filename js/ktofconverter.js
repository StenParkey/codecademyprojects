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
  console.log('ktofconvert disabled. Please comment out line 4 to enable')
}