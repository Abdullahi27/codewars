function sumOfDifferences(arr) {
  
    let order = arr.sort((a, b) => b - a)
    
    let sum = 0
    
    for (let i=0; i<order.length - 1; i++){
      
     sum += order[i] - order[i+1]
      
    }
    
    return sum

  }