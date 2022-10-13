// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
    let century = Math.ceil(year/100);
    return century; 
}

// The first century spans from the year 1 up to and
// including the year 100, the second century 
// - from the year 101 up to and including the year 200, etc.