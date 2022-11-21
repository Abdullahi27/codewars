function search(budget, prices) {
   
    let array = prices.filter(item => item <= budget).sort((a, b) => a-b).join(',')
    
    return array 
   
   }