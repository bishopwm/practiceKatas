// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let myNumber = 493193;

function digital_root(myNumber){
  let digits = ("" + myNumber).split("");
  let integerDigits = digits.map(Number);
  let digitsSum = integerDigits.reduce(function(a, b){
      return a + b;
  });
  if(digitsSum.toString().length == 1){
      return digitsSum;
    } else {
      let secondDigits = digitsSum.toString().split("");
      let secondIntegerDigits = secondDigits.map(Number);
      let secondDigitsSum = secondIntegerDigits.reduce(function(a, b){
        return a + b;
      });
      if(digitsSum.toString().length == 1){
        return secondDigitsSum;
      } else {
        let thirdDigits = secondDigitsSum.toString().split("");
        let thirdIntegerDigits = thirdDigits.map(Number);
        let thirdDigitsSum = thirdIntegerDigits.reduce(function(a, b){
          return a + b;
        });
        if(thirdDigitsSum.toString().length == 1){
          return thirdDigitsSum;
        } else {
          return 1
        }
      }
    }
}

digital_root(myNumber);