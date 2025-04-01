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
  console.log('Whale Language Converter disabled. Please comment out line 4 to enable')
}