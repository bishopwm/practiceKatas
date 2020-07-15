// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

let arr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
let k = 2;

function longestConsec(arr, k) {
  if(arr.length === 0){
    return "";
  } else if (k > arr.length){
    return "";
  } else if (k <= 0){
    return "";
  }
  let copyArr = [...arr];
  // let longElements = copyArr.filter((eachElement) => {
  //   return eachElement.length > 6;
  // })
  // return longElements;
  let longestString = copyArr.reduce(function(longest, currentString){
    if(currentString.length > longest.length){
      return currentString;
    } else {
      return longest;
    }
  })
  let longestStringIndex = copyArr.indexOf(longestString);
  let consecutiveString = copyArr[longestStringIndex+1];
  return longestString + consecutiveString;
}

longestConsec(arr, k);