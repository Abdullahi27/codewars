function isIsogram(str) {
    str = str.toLowerCase();
    let charSet = new Set();
  
    for (let char of str) {
      charSet.add(char);
    }
  
    return charSet.size === str.length;
  }