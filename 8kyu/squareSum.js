// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
    return numbers.reduce((a,b) => a+b*b,0)
   }
   
   
   // Complete the square sum function so that it squares each number passed into it and then sums the results together.
   
   // 0+0 = 0
   // 0+3*3 = 9
   // 9+4*4 = 25 
   // 25+5*5 = 50
   // a=previous value