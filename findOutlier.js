// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

let myIntegers = [160, 3, 1719, 19, 11, 13, -21]

function findOutlier(myIntegers){
  let oddOutlier = [];
  let evenOutlier = [];
  for(let i=0; i<myIntegers.length; i++){
    console.log(myIntegers[i])
    if(myIntegers[i] % 2 === 0){
      oddOutlier.push(myIntegers[i])
    } else if(myIntegers[i] % 2 !== 0){
      evenOutlier.push(myIntegers[i])
    }
  }
  if(oddOutlier.length === 1){
    return oddOutlier[0];
  } else {
    return evenOutlier[0];
  }
  }

  findOutlier(myIntegers)