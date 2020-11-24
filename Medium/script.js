'use strict';


// nums can be any array & target is the number whose index position we are looking to find out

function findIndexPosition(nums, target) {
    for(let i = 0;  i < nums.length; i++) {
        if (nums[i] === target) return nums.indexOf((target));
    }
    return -1;
};


console.log(findIndexPosition([4,5,6,7,0,1,2], 0));
console.log(findIndexPosition([4,5,6,7,0,1,2], 3));
