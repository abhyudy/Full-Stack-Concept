const fs = require("fs");
// filesystem module

fs.readFile("../JS_Class3/a.txt", "utf-8", function (err, data) {
  //utf-8 is used to get the data from a.txt

  console.log(data);
});
