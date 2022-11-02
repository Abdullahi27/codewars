// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let av = 0
    for (let i=0; i<marks.length; i++){
       av += marks[i]
    }
       return Math.floor(av/marks.length)
   }
   
   // Return the average of the given array rounded down to its nearest integer. 