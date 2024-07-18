// Function to calculate factorial of a number using recursion
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Getting user input and displaying the result
const number = parseInt(prompt("Enter a number: "), 10);

if (!isNaN(number)) {
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
} else {
  console.log("Please enter a valid number.");
}
