// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
      if (array[i]==true){
       sum += 1
      }
    }
    return sum
  }

//   DESCRIPTION:

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array 
// (true means present).