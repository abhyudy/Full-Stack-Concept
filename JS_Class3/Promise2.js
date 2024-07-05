let myPromise = new Promise((resolve, reject) => {
  let condition = true; // This can be any condition or asynchronous operation

  if (condition) {
    resolve("The operation was successful!"); // Fulfilled
  } else {
    reject("The operation failed."); // Rejected
  }
});

// Using the promise
myPromise
  .then((message) => {
    console.log(message); // If the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // If the promise is rejected
  })
  .finally(() => {
    console.log("Promise is settled."); // Always executed regardless of the outcome
  });
