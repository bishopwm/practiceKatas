// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

// Test.assertEquals(alphanumeric("Mazinkaiser"), true)
// Test.assertEquals(alphanumeric("hello world_"), false)
// Test.assertEquals(alphanumeric("PassW0rd"), true)
// Test.assertEquals(alphanumeric("     "), false)

let string = 'Mazinkaiser';

function alphanumeric(string){
  if(string.length < 1){
    return false;
  } else if (string.includes(' ') || string.includes('_')){
    return false;
  } 
  let elements = string.split("");
  console.log(elements);
  let numbers = elements.filter(function(item){
    return !isNaN(item);
  });
  let latinLetters = elements.filter(function(item){
    return item.match(/[a-z]/i); 
  });
  console.log('Valid Letters :', latinLetters);
  let validLetters = false;
  if(latinLetters.length === (elements.length - numbers.length)){
    validLetters = true;
  }

  let validDigits = false;
  if(numbers.length >= 1){
    if(numbers.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 )){
      validDigits = true;
    }
  }
  console.log('Valid Digits :', validDigits)
  if(validLetters === true || validDigits === true){
    return true;
  } 
}

alphanumeric(string);