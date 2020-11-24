'use strict';

function calcAverage (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        // total = total + arr[i] same as below
        total += arr[i];
    }
    
    console.log (total/arr.length);
}

calcAverage([1 , 4 , 7]);
calcAverage([10, 5]);
calcAverage([11.5, 3, 2.5, 1]);
