// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digitalRoot(n) {
    let x = n.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b)) 
     return x > 9 ? digitalRoot(+x) : +x
   }
   
   // second attempt // used recurion on line 12 which means calling the function within itself again!
   // function digitalRoot(n) {
   //  let x = n.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b)) 
   //       if (x > 9) {
   //          return digitalRoot(+x)
   //  } else {
   //    return +x
   //  }
   // }
   
   
   // first attempt
   // function digitalRoot(n) {
   //  let x = n.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b))
   //  let y = x.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b))
   //  let z = y.toString().split('').reduce((a,b)=> parseInt(a)+parseInt(b))
    
   //  return +z
   // }
   
   // Given n, take the sum of the digits of n. 
   // If that value has more than one digit, 
   // continue reducing in this way until a single-digit number is produced. 
   // The input will be a non-negative integer.