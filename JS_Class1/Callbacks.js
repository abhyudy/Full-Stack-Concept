function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

//CallBack function

function sumOfSomething(a, b, fn) {
  //fn is a callback function
  let cube1 = fn(a);
  let cube2 = fn(b);
  return cube1 * cube2;
}

//functional argument

let ans = sumOfSomething(1, 2, cube);
console.log(ans);
