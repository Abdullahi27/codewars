function createPhoneNumber(numbers){
    if (numbers.length !== 10) {
     return "Invalid phone number";
   }
 
   let phoneNumber = "(";
   for (let i = 0; i < numbers.length; i++) {
     phoneNumber += numbers[i];
     if (i === 2) {
       phoneNumber += ") ";
     } else if (i === 5) {
       phoneNumber += "-";
     }
   }
   return phoneNumber;
 }