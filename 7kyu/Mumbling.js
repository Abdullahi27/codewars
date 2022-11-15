function accum(s) {
    let arr = s.split('')
        
    for (i=0; i<arr.length; i++){
      arr[i] = arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i)
      
    }
    
    return arr.join('-')
  }


//   function accum(s) {
//     return s.split('').map((item, i) => item.toUpperCase() + item.toLowerCase().repeat(i)).join('-')
//   }