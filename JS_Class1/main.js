// Write a program that counts from 0- 1000 and prints(for loop)

// let answer = 0;

// for (let i = 0; i <= 1000; i++) {
//   answer = answer + i;
// }

// console.log(answer);

// Write an program to print all even number in array

// const ages = [21, 22, 23, 24, 25];
// const numberOfPeople = ages.length;

// for (let i = 0; i < numberOfPeople; i++) {
//   if (ages[i] % 2 == 0) {
//     console.log(ages[i]);
//   }
// }

// ... Write a program that prints all the male peoples first name given a complex object...//

// const personArray = ["Abhi", "Ram", "Sita"]; /// Syntax of array
// const personGender = ["male", "male", "Female"];
// const numberOfUsers = personArray.length;
// for (let i = 0; i < numberOfUsers; i++) {
//   if (personGender[i] == "male") {
//     console.log(personArray[i]);
//   }
// }

// Syntax of Object
// const allUser = [
//   {
//     firstName: "Abhi",
//     gender: "male",
//   },
//   {
//     firstName: "Ayush",
//     gender: "male",
//   },
//   {
//     firstName: "jisha",
//     gender: "female",
//   },
// ];

// for (i = 0; i < allUser.length; i++) {
//   if (allUser[i]["gender"] == "male") {
//     console.log(allUser[i]["firstName"]);
//   }
// }

//Calculation Arithmetic

/**  function calculateArithmetic(a, b, type) {
  if (type == "sum") {
    const value = sum(a, b);
    return value;
  }
  if (type == "minus") {
    const value = sub(a, b);
    return value;
  }
}
function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

const value = calculateArithmetic(1, 2, "minus ");
console.log(value);
*/

/** Second method CallBack function */
function calculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}
//setTimeout(sum. 1000)
// function setTimeout(arithmeticFinalFunction, duration) {
//   sleep(duration);
//   arithmeticFinalFunction();
// }
const value = calculateArithmetic(1, 2, sum);
console.log(value);
