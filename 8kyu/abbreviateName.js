// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    let newArray = name.toUpperCase().split(' ')
    return newArray[0].charAt(0) + '.' + newArray[1].charAt(0)
}

// Sam Harris => S.H