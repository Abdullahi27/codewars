// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

function countSheep(num){
    let sheep = ''
      
        for (i=1; i <= num; i++) {
          sheep += i + ' sheep...'
      }
    
      return sheep
  }
  
  // 3 for example, return a string with a murmur: 
  // "1 sheep...2 sheep...3 sheep...".