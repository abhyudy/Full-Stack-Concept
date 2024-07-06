function abhiAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there");
    }, 1000);
  });
  return p;
}

async function main() {
  let value = abhiAsyncFunction();
  console.log(value);
}

main();
