//reg ex 

// const regExName = new RegExp('pattern')
//pattern : a-z or A-Z or 0-9 or special symbols : $#%etc.
// meta characters
// Metacharacters
//Meta characters are characters that are interpreted in a special way by a special RegExp engine. Here's a list of metacharacters:
// [] . ^ $ * + ? {} \ |




// const regExName = new RegExp(/^((0[1-9])|(1[0-2]))\/(20[0-9]{2})$/);

// console.log(regExName.test("01/1234"));
// console.log(regExName.test("11/2020"));
// console.log(regExName.test("05/2023"));




// const regEx3 = new RegExp(/^\d{3}$/);
// console.log(regEx3.test("123"));


 const regEx3 = new RegExp(/^\d{3}-\d{3}-\d{4}$/);
 console.log(regEx3.test("056-632-2312"));


 
const regEx4 = new RegExp(/^\w{3}$/);
console.log("w result " + regEx3.test("FAS"));

