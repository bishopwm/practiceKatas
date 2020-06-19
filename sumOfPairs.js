// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

let ints = [1, 5, 6, 4, 6];
let s = 7;

var sum_pairs = function(ints, s){
    // create an empty set
    let uniqueSet = new Set();
    console.log(uniqueSet)
    // add the first integer to the set
    uniqueSet.add(ints[0]);
    console.log(uniqueSet)
    // loop through the original numbers to identify the other number needed to satisfy the designated sum
    for(let i=1; i<ints.length; i++){
      // the number to satisfy the sum will be the sum minus the current index
      let numberToSatisfySum = s - ints[i]
      // if the unique set already has the number, return the current pair
      if(uniqueSet.has(numberToSatisfySum)){
        return [numberToSatisfySum, ints[i]]
      // if the unique set doesn't yet have the number, continue adding numbers to the unique set until a number that satisfies the sum appears
      } else {
        uniqueSet.add(ints[i])
      }
    }
}

sum_pairs(ints, s);