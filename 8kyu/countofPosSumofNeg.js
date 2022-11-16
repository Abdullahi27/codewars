// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
    if (input < 1 || null){
     return []
    }
    
    
  let pos = 0
  let neg = 0
    
    for (let i=0; i<input.length; i++){
      if (input[i] > 0) {
         pos++
      } else if (input[i] < 0){
      neg += input[i]
    }
    } 
    return [pos, neg] 
  }
  
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  
  // If the input is an empty array or is null, return an empty array.