"use strict";

function calculateChange(coins, amount) {
  let changeArr = [];
  for (let i = 0; i < coins.length; i++) {
    changeArr[i] = 0;
  }

  
  for (let i = 0; amount > 0; i++) {
    changeArr[i] = Math.floor(amount / coins[i]);
    amount -= changeArr[i] * coins[i];
    
  }
  
  return changeArr; 

}


console.log(calculateChange([20, 10, 5, 10], 137));





