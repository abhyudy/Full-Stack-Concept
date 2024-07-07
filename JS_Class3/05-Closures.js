function outerFunction() {
  let outerVariable = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outerFunction
