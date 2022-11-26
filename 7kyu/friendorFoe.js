function friend(friends){
  
    return friends.filter(word => !Number.isInteger(+word) && word.length == 4)
    
  }