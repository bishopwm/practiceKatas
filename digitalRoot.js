// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


let myNumber = 942;

function recursiveSumify(myNumber){
  let digits = ("" + myNumber).split("");
  let integerDigits = digits.map(Number);
  // console.log(integerDigits);
  let copyDigits = [...integerDigits];
  let digitsSum = copyDigits.reduce(function(a, b){
      return a + b;
  });
  // console.log(digitsSum);
  if(digitsSum.toString().length <= 1){
    console.log('done!, digital root is: ', digitsSum)
    return digitsSum;
  } else {
    console.log('keep going!', digitsSum);
    let digits = digitsSum.toString().split("");
    console.log(digits)
    integerDigits = digits.map(Number);
    let copyIntegerDigits = [...integerDigits];
    digitsSum = copyIntegerDigits.reduce(function(a, b){
      return a + b;
    });
    return digitsSum;
  }
}

recursiveSumify(myNumber);