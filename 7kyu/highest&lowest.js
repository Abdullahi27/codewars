// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
  
    let newArray = numbers.split(' ').map(item => +item)
    return `${Math.max(...newArray)} ${Math.min(...newArray)}`
    
  
  //   let newArray = numbers.split(' ').map(item => +item)
  //   let high = newArray[0]
  //   let low = newArray[0]
  //    for (let i=0; i<newArray.length; i++){
  //      if (high < newArray[i]){
  //        high = newArray[i]
  //      }
  //      if (low > newArray[i]){
  //        low = newArray[i]
  //      }
  //    } 
  //   return `${high} ${low}`
    
  }
  
  // In this little assignment you are given a string of 
  // space separated numbers, and have to return the highest and lowest number.