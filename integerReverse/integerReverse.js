/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/
//i = positive integer
//o = digit reversed
//c = ?
//e = none
function reverseInteger(number){
  // TODO: Implement this function!
  //figure out how many digits are in a number
  const digitNum = Math.floor(Math.log(number) / Math.log(10));
  let reversedInt = 0;
  let reversedDig = 0;
  for (let i = digitNum; i >= 0; i--) {
    let currDigit = Math.pow(10, i);
    reversedInt += Math.floor(number / currDigit) * Math.pow(10, reversedDig);
    reversedDig++;
    number -= Math.floor(number / currDigit) * currDigit;
  }
  return reversedInt;
}

// console.log(reverseInteger(12304000))