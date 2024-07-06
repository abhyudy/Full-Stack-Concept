const fs = require("fs");

// asyn function
function abhiReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("./a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

// call back function to call
function onDone(data) {
  console.log(data);
}

abhiReadFile(), then(onDone);
