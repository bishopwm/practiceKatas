// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

let arr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
let k = 4;

function longestConsec(arr, k) {
  // exceptions first
  if(arr.length === 0){
    return "";
  } else if (k > arr.length){
    return "";
  } else if (k <= 0){
    return "";
  }
  // reduce array to get longest string
  let copyArr = [...arr];
  let longestString = copyArr.reduce(function(longest, currentString){
    if(currentString.length > longest.length){
      return currentString;
    } else {
      return longest;
    }
  })
  // add consecutive strings to longest string
  let longestStringIndex = copyArr.indexOf(longestString);
  let consecutiveString = copyArr[longestStringIndex+(k-1)];
  let consecutiveStrings = [];
  for(let i=1; i<k; i++){
    consecutiveStrings.push(copyArr[longestStringIndex+(i)])
  }
  return longestString + consecutiveStrings.join('');
}

longestConsec(arr, k);