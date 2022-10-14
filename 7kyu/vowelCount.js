// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str){
    return str.split('').filter(item=> ['a', 'e', 'i', 'o', 'u'].includes(item)).length                                                   
   }
   
   // function getCount(str){
   //   let sum = 0
   //   for(let i=0; i<str.length; i++){
   //     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o'|| str[i] === 'u'){
   //        sum++
   //     }
   //   }
   //   return sum
   // }
   
   // Return the number (count) of vowels in the given string.