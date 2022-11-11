https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if (array.length > 0) {
        let ave = array.reduce((a, b) => a + b) / array.length
        return ave
    } else {
        return 0;
    }

}

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.