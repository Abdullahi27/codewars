function tripleTrouble(one, two, three){
    let tri=[]
    for(let i=0;i<one.length;i++){
      tri.push(one.charAt(i) + two.charAt(i) + three.charAt(i))
    }
    return tri.join('')
   }