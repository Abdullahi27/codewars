// https://www.codewars.com/kata/53dc54212259ed3d4f00071c


// Sum Numbers
function sum (array) {
    "use strict";
  let sum = 0
  for (let i=0; i<array.length; i++){
    sum += array[i]
  } 
 return sum
};

// DESCRIPTION:
// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0. 