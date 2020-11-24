'use strict';

function leastCoins(coins, amount){
    if (amount < 1) {
      return 0;
    }
  
    const coinsSelected = Array(amount + 1); // amount + 1 because the array starts at 0 and it allows for every number in the amount to be crossed checked
    coinsSelected.fill(0); // fills the array with the coins
  
    return coinChange(coins, amount, coinsSelected);
  }
  
    function coinChange(coins, remainder, coinsSelected){
    if (remainder < 0) {
      return -1;
    }
  
    if (remainder === 0) {
      return 0;
    }
  
    if (coinsSelected[remainder] !== 0) {
      return coinsSelected[remainder];
    }
  
    let minimum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const changeResult = coinChange(coins, remainder - coin, coinsSelected);
  
      if (changeResult >= 0 && changeResult < minimum) {
        minimum = 1 + changeResult;
      }
    }
  
    coinsSelected[remainder] = (minimum === Number.MAX_SAFE_INTEGER) ? -1 : minimum;
  
    return coinsSelected[remainder];
}

console.log(leastCoins([1, 2, 5], 11))
console.log(leastCoins([ 2], 3))
