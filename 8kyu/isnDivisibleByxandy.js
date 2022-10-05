// https://www.codewars.com/kata/5545f109004975ea66000086

function isDivisible(n, x, y) {
  
    if (n % x === 0 && n % y === 0 ) {
       return true
    } else {
      return false
    }
    
  }

  // directions

  // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.