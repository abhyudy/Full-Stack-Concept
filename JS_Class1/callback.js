function sum(num1, num2, fntoCall) {
  let result = num1 + num2;
  fntoCall(result);
}

function displayReult(data) {
  console.log("Result of the su, is :" + data);
}

function displayReultPassive(data) {
  console.log("Sum's result is :" + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(1, 2, displayReult);
//callback
// displayReult(ans);
