// Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:

//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0


let money = 10;
let coins = [5, 2, 3];

function countCoins(money, coins) {
  let coinsCopy = [...coins];
  let denominationHolder = [];
  let comboCount = 0;
  for(let i=0; i<coins.length; i++){
    if(money % coins[i] === 0){
      denominationHolder.push(coins[i]);
    }
  }
  
  console.log(denominationHolder)

}

countCoins(money, coins);

// Working solution from anatolych97//https://github.com/Anatolych97/CodeWars/blob/master/4%20kyu/4kyu_Counting_Change_Combinations.js

// const countChange = function (money, coins, i=0) {
//     if (money < 0) return 0;
//     if (money === 0) return 1;

//     if (i === coins.length && money > 0) {
//         return 0;
//     }

//     return countChange(money - coins[i], coins, i) + countChange(money, coins, i + 1);
// }