// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }
  
  // "found the needle at position " plus the index it found the needle, so:




  
// My first Attempt

function findNeedle(haystack) {
    for (let i=0; i<haystack.length; i++)
     if (haystack.find(item => item == 'needle')){
       return `found the needle at position ${haystack.indexOf('needle')}`
     }
   }