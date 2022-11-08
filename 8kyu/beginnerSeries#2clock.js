// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){

    return s * 1000 + m * 60000 + h * 3600000
     
  }
  
  // ie; Test.assertEquals(past(1,0,1),3601000)