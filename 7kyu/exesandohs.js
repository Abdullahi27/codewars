//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let x = 0
    let o = 0
    for (let i=0; i<str.length; i++){
      if (str[i].toLowerCase()=='x'){
        x++
      }
      if (str[i].toLowerCase()=='o'){
        o++
      }
    }
    return x==o
  }
  
  // Check to see if a string has the same amount of 'x's and 'o's. 
  // The method must return a boolean and be case insensitive. 
  // The string can contain any char.